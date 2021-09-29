import icecream from "./images/two-scoop.png"
import { createHtmlElement } from "./createElHelper";

const render = (page)=>{
    const home = document.createElement('main');
    
    let h2One = createHtmlElement('h2',null,["h2One"],"When one scoop is not enough, there's:")
    let h2Two = createHtmlElement('h2',null,["h2Two"],"The Double Scoop");
    const myIcon = new Image();
    myIcon.src = icecream;
    let content = [h2One,h2Two,myIcon]
    myIcon.className = "icon"
    home.append(...content);
    return home;
}


export {render as renderHome}