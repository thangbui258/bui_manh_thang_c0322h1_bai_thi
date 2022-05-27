import { Goods } from "./Goods.js";
var ManagerGoods = /** @class */ (function () {
    function ManagerGoods() {
        this.list = [];
        this.list = [];
        this.currentIndex = -1;
    }
    ManagerGoods.prototype.addGoods = function (tenHang, loaiHang) {
        var goods = new Goods(tenHang, loaiHang);
        if (this.currentIndex == -1) {
            this.list.push(goods);
        }
        else {
            this.list[this.currentIndex] = goods;
        }
        this.showList();
        console.log(this.list);
    };
    ManagerGoods.prototype.showList = function () {
        var table = "";
        for (var i = 0; i < this.list.length; i++) {
            table += "<tr>";
            table += "<td>".concat(i + 1, "</td>");
            table += "<td>".concat(this.list[i].tenHang, "</td>");
            table += "<td>".concat(this.list[i].loaiHang, "</td>");
            table += "<td><button value=\"".concat(i, "\" class=\"delete\">Delete</button></td>");
            table += "<td><button value=\"".concat(i, "\" class=\"edit\">Edit</button></td>");
            table += "</tr>";
        }
        document.getElementById('list').innerHTML = table;
    };
    ManagerGoods.prototype.deleteGoods = function (index) {
        this.list.splice(index, 1);
        this.showList();
    };
    ManagerGoods.prototype.editGoods = function (index) {
        this.currentIndex = index;
        document.getElementById('tenHang').value = this.list[index].tenHang;
        document.getElementById('loaiHang').value = this.list[index].loaiHang;
    };
    return ManagerGoods;
}());
export { ManagerGoods };
//# sourceMappingURL=ManagerGoods.js.map