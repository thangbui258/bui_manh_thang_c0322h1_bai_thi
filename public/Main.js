import { ManagerGoods } from "./ManagerGoods.js";
var managerGoods = new ManagerGoods();
function add() {
    var tenHang = document.getElementById('tenHang');
    var loaiHang = document.getElementById('loaiHang');
    var btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        managerGoods.addGoods(tenHang.value, loaiHang.value);
    });
    managerGoods.showList();
    delete1();
}
add();
function delete1() {
    var del = document.getElementsByClassName('delete');
    var _loop_1 = function (i) {
        del[i].addEventListener('click', function () {
            managerGoods.deleteGoods(del[i].value);
            delete1();
        });
    };
    for (var i = 0; i < del.length; i++) {
        _loop_1(i);
    }
}
delete1();
function edit1() {
    var edit = document.getElementsByClassName('edit');
    var _loop_2 = function (i) {
        edit[i].addEventListener('click', function () {
            managerGoods.editGoods(edit[i].value);
            edit1();
        });
    };
    for (var i = 0; i < edit.length; i++) {
        _loop_2(i);
    }
}
edit1();
//# sourceMappingURL=Main.js.map