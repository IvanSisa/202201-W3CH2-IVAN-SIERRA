import { Component } from "./component.js";


export class Header extends Component {
    template;

    constructor(title = 'Tour of Heroes',secondTitle = 'TOP HEROES'){
        super();
  
        this.template = `
        <h1 class="center">${title}</h1>
        <div class="flex">
            <button>Dashboard</button>
            <button>Heroes</button>
        </div>
        <h2 class="center">${secondTitle}</h2>
        <div class="flex">
            <button>Narco</button>
            <button>Bombasto</button>
            <button>Celeritas</button>
            <button>Magneta</button>
        </div>`;
    }


}