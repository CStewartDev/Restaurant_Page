import { renderNav } from "./nav";

const render = ()=>{
    const home = document.createElement('main');
    home.appendChild(renderNav());
    return home;
}


export {render as renderHome}