import {Liker} from "./lib.js";

//TODO: make it possible to add memes


class Widget {
    constructor(parentEl, manager) {
        this.parentEl = parentEl;
        this.manager = manager;
        this.scoreLimit = -10;
        this.init()
    }

    init() {
        this.parentEl.innerHTML = `<div><h1>Liker App</h1></div>
                                    <div id="list"></div>`;

        this.listEl = document.getElementById('list');
        this.onLoadAll();
    }

    onLoadAll() {
        this.manager.getData(mems => {
                this.showMems(mems)
            }, () => console.error("can not get data")
        )
    }

    showMems(mems) {
        this.listEl.textContent = '';
        mems.sort((a, b) => b.score - a.score);
        for (const mem of mems) {
            if (mem.score < this.scoreLimit) continue;
            const newMemEl = document.createElement('div');
            newMemEl.innerHTML = `<div class="border">
     <img src="${mem.imgUrl}" alt=""></div>
    `;
            this.listEl.appendChild(newMemEl);

            const btnPlus = document.createElement("button");
            btnPlus.textContent = '👍';
            const btnMinus = document.createElement("button");
            btnMinus.textContent = '👎';


            newMemEl.appendChild(btnPlus);
            newMemEl.append(mem.score);
            newMemEl.appendChild(btnMinus);

            btnPlus.addEventListener('click', () => {
                this.manager.likeMem(mem, () => this.onLoadAll());
            });
            btnMinus.addEventListener('click', () => {
                this.manager.dislikeMem(mem, () => this.onLoadAll());
            });

        }

    }
}

const liker = new Liker();
const widget = new Widget(document.getElementById('root'), liker);
console.log(widget);