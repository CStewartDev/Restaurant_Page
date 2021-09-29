import {createHtmlElement} from './createElHelper';
import './style.css';
import { renderNav } from './nav';
import { renderFooter } from './footer';
import {renderHome} from './home'
import { renderMenu } from './menu'
import { renderAbout } from './about'

const pageContent = document.getElementById('content');


function pageRender(target) {
    if(target === "home") {
        pageContent.innerText = "";
        pageContent.append(renderNav(),renderHome(),renderFooter());
    }
    if(target === "menu") {
        pageContent.innerText = "";
        pageContent.append(renderNav(),renderFooter())
    }
    if(target === "about") {
        pageContent.innerText = "";
        pageContent.append(renderNav(),renderFooter())
    }
}

pageContent.addEventListener("click", e=>{
    if(e.target.textContent === "home" || "about" || "menu") pageRender(e.target.textContent)
})

pageRender("home")