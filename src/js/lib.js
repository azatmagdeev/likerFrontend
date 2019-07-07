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
    sendData(mems,success) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${this.apiURL}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.addEventListener('load',()=>{
            success(this.mems);
        });
        xhr.send(JSON.stringify(this.mems));

    }

}



