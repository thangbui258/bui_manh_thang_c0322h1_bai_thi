export class Goods {
    private _tenHang: string;
    private _loaiHang: string;

    constructor(tenHang: string, loaiHang: string) {
        this._tenHang = tenHang;
        this._loaiHang = loaiHang;
    }

    get tenHang(): string {
        return this._tenHang;
    }

    get loaiHang(): string {
        return this._loaiHang;
    }

}