import { createHtmlElement } from "./createElHelper";
import icecream from './images/icecream.png';

const render = () =>{
    const navItems = ["home", "menu", "about"];
    const ul = document.createElement('ul');
    navItems.map(li=>ul.append(createHtmlElement("li",null,["navSel"],li)))

    const nav = document.createElement('nav');
    nav.appendChild(ul);

    const navName = createHtmlElement("h1",null,["navName"],"The Double Scoop");

    // nav.appendChild(navName);

    const myIcon = new Image();
    myIcon.src = icecream;
    myIcon.className = "navIcon"
    nav.appendChild(myIcon)

    return nav
}
    export {render as renderNav}