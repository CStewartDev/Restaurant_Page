import {createHtmlElement} from './createElHelper';
import './style.css';
import { renderNav } from './nav';
import { renderFooter } from './footer';
import {renderHome} from './home'

const pageContent = document.getElementById('content');


function pageRender(target) {
    if(target === "home") {
        pageContent.innerText = "";
        pageContent.append(renderNav(),renderHome(),renderFooter());
    }
    if(target === "menu") pageContent.innerText = "Menu"
}

pageRender("home")