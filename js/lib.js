export class Liker {
    constructor() {

        this.apiURL = 'https://nodejs-azat.herokuapp.com/mems';
        this.mems = [];
    }


    getData(success) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.apiURL}`);
        xhr.addEventListener('load', () => {
            this.mems = JSON.parse(xhr.responseText);
            success(this.mems);
        });
        xhr.send();
    }

    likeMem(mem, success) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${this.apiURL}/${mem.id}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.addEventListener('load', () => {
            success(mem);
        });
        xhr.send(JSON.stringify(mem));
    }

    dislikeMem(mem, success) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${this.apiURL}/${mem.id}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.addEventListener('load', () => {
            success(mem);
        });
        xhr.send(JSON.stringify(mem));
    }

}



