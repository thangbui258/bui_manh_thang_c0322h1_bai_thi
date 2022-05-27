import {Goods} from "./Goods.js";

export class ManagerGoods {
    list = []
    currentIndex: number

    constructor() {
        this.list = []
        this.currentIndex = -1;
    }

    addGoods(tenHang: string, loaiHang: string) {
        let goods = new Goods(tenHang, loaiHang)
        if (this.currentIndex==-1) {
            this.list.push(goods);
        } else {
            this.list[this.currentIndex] = goods;
        }
        this.showList()
        console.log(this.list)

    }

    showList() {
        let table = "";
        for (let i = 0; i < this.list.length; i++) {
            table += `<tr>`;
            table += `<td>${i + 1}</td>`
            table += `<td>${this.list[i].tenHang}</td>`
            table += `<td>${this.list[i].loaiHang}</td>`
            table += `<td><button value="${i}" class="delete">Delete</button></td>`
            table += `<td><button value="${i}" class="edit">Edit</button></td>`
            table += `</tr>`
        }

        document.getElementById('list').innerHTML = table;
    }

    deleteGoods(index) {
        this.list.splice(index, 1);
        this.showList()
    }

    editGoods(index) {
        this.currentIndex = index;
        (document.getElementById('tenHang') as HTMLInputElement).value = this.list[index].tenHang;
        (document.getElementById('loaiHang') as HTMLInputElement).value = this.list[index].loaiHang;
    }


}

