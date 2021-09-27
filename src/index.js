import {createHtmlElement} from './createElHelper';
import './style.css';
import {renderHome} from './home'

const pageContent = document.getElementById('content');


function pageRender(target) {
    if(target === "home") {
        pageContent.innerText = "";
        pageContent.appendChild(renderHome());
    }
    if(target === "menu") pageContent.innerText = "Menu"
}

pageRender("home")


export {pageContent}