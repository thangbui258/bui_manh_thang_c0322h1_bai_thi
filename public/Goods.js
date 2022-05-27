var Goods = /** @class */ (function () {
    function Goods(tenHang, loaiHang) {
        this._tenHang = tenHang;
        this._loaiHang = loaiHang;
    }
    Object.defineProperty(Goods.prototype, "tenHang", {
        get: function () {
            return this._tenHang;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Goods.prototype, "loaiHang", {
        get: function () {
            return this._loaiHang;
        },
        enumerable: false,
        configurable: true
    });
    return Goods;
}());
export { Goods };
//# sourceMappingURL=Goods.js.map