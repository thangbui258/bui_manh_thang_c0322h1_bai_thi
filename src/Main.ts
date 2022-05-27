import {ManagerGoods} from "./ManagerGoods.js";

let managerGoods = new ManagerGoods();

function add() {
    let tenHang = document.getElementById('tenHang') as HTMLInputElement
    let loaiHang = document.getElementById('loaiHang') as HTMLInputElement
    let btn = document.getElementById('add') as HTMLButtonElement;
    btn.addEventListener('click', function () {

        managerGoods.addGoods(tenHang.value, loaiHang.value);
    })
    managerGoods.showList()
    delete1()

}

add()

function delete1() {
    let del = document.getElementsByClassName('delete');
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function () {
            managerGoods.deleteGoods(del[i].value);
            delete1()
        })
    }
}

delete1()

function edit1() {
    let edit = document.getElementsByClassName('edit');
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener('click', function () {
            managerGoods.editGoods(edit[i].value);
            edit1()
        })
    }
}
edit1()