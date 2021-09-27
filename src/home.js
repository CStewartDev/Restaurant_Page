import { renderNav } from "./nav";
import { createHtmlElement } from "./createElHelper";

const render = (page)=>{
    const home = document.createElement('main');
    
    let h2One = createHtmlElement('h2',null,["h2One"],"When one scoop is not enough, there's:")
    let h2Two = createHtmlElement('h2',null,["h2Two"],"The Double Scoop");
    let content = [h2One,h2Two]
    home.append(...content);
    return home;
}


export {render as renderHome}