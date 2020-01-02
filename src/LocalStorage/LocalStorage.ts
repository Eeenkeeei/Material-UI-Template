export class LocalStorage {
    public data:any;
    constructor() {
        this.data = JSON.parse(localStorage.getItem('data') as string);
    }

    addData(data:any) {
        this.data = data;
        this.save();
    }

    getData() {
        return(localStorage.getItem('data'))
    }

    save() {
        localStorage.setItem('data', JSON.stringify(this.data));
    }
}
