import { createHtmlElement } from "./createElHelper";

const render = () => {
    const about = document.createElement('main');
    const words = `It all started with a mediocre single scoop, on an otherwise brilliant day. I was ready to indulge on my treat, but it didn't slap my tastebuds. That day the vision for The Double Scoop was born.

    The mission: Deliver the most tantilizing flavors of icecream in a double scoop waffle cone. 
    
    Misson: Complete.`;

    const h2 = createHtmlElement("h2",null,null,words);
    
    about.append(h2);


    return about;
};

export {render as renderAbout} 