import {createHtmlElement} from './createElHelper';
import './style.css';
import { renderNav } from './nav';
import { renderFooter } from './footer';
import {renderHome} from './home'
import { renderMenu } from './menu'
import { renderAbout } from './about'

const pageContent = createHtmlElement("div","content",null,null)

document.body.append(pageContent)

function pageRender(target) {
    if(target === "home") {
        pageContent.innerText = "";
        pageContent.append(renderNav(),renderHome(),renderFooter());
    }
    if(target === "menu") {
        pageContent.innerText = "";
        pageContent.append(renderNav(),renderMenu(),renderFooter())
    }
    if(target === "about") {
        pageContent.innerText = "";
        pageContent.append(renderNav(),renderAbout(),renderFooter())
    }
}

pageContent.addEventListener("click", e=>{
    if(e.target.textContent === "home" || "about" || "menu") pageRender(e.target.textContent)
})
pageRender("home")