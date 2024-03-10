var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Product = /** @class */ (function () {
    function Product() {
        this.data = [];
        this.fetchProducts();
    }
    Product.prototype.fetchProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:3000/product")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        products = _a.sent();
                        this.data = products;
                        this.showDataTable();
                        return [2 /*return*/];
                }
            });
        });
    };
    Product.prototype.showDataTable = function () {
        var tr = '';
        var tbody = document.querySelector('tbody');
        tbody.innerHTML = '';
        // let id=document.querySelector('input[name="id"]');
        for (var key in this.data) {
            var product_1 = this.data[key];
            tr += /*html*/ "<tr>\n            <td>".concat(product_1.id, "</td>\n            <td>").concat(product_1.name, "</td>\n            <td>").concat(product_1.price, "</td>\n            <td>\n                <a href=\"edit_product.html?id=").concat(product_1.id, "\"><button class=\"btn btn-warning\">S\u1EEDa</button></a>\n                <button onclick=\"deleteProduct(").concat(product_1.id, ",event)\" class=\"btn btn-danger\">X\u00F3a</button>\n            </td>\n            </tr>");
        }
        tbody.innerHTML = tr;
    };
    return Product;
}());
var product = new Product();
product.showDataTable();
//thêm sản phẩm
var addProduct = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var id, name, price, errorId, errorName, errorPrice, errors, ProductNew;
    return __generator(this, function (_a) {
        event.preventDefault();
        id = document.querySelector('input[name="id"]');
        name = document.querySelector('input[name="name"]');
        price = document.querySelector('input[name="price"]');
        errorId = document.getElementById('errorId');
        errorName = document.getElementById('errorName');
        errorPrice = document.getElementById('errorPrice');
        errors = [];
        if (id.value == "") {
            errors.push("Vui lòng nhập id sản phẩm");
            id.style.border = "1px solid red";
            errorId.textContent = "Vui l\u00F2ng nh\u1EADp id s\u1EA3n ph\u1EA9m";
        }
        else {
            id.style.border = "1px solid #ffffff";
            errorId.textContent = "";
        }
        if (name.value == "") {
            errors.push("Vui lòng nhập tên sản phẩm");
            name.style.border = "1px solid red";
            errorName.textContent = "Vui lòng nhập tên sản phẩm";
        }
        else {
            name.style.border = "1px solid #ffffff";
            errorName.textContent = "";
        }
        if (price.value == "") {
            errors.push("Vui lòng nhập giá sản phẩm");
            price.style.border = "1px solid red";
            errorPrice.textContent = "Vui lòng nhập giá sản phẩm";
        }
        else {
            price.style.border = "1px solid #ffffff";
            errorPrice.textContent = "";
        }
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return [2 /*return*/, false];
        }
        ;
        ProductNew = ({
            id: id.value,
            name: name.value,
            price: price.value
        });
        fetch("http://localhost:3000/product", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ProductNew)
        });
        product.showDataTable();
        return [2 /*return*/];
    });
}); };
//xóa sản phẩm
var deleteProduct = function (id, event) {
    event.preventDefault();
    if (confirm("Bạn có muốn xóa sản phẩm này không")) {
        fetch("http://localhost:3000/product/".concat(id), {
            method: "DELETE"
        });
    }
};
