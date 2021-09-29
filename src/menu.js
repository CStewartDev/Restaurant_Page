import { createHtmlElement } from "./createElHelper";

const render = () => {
    const menu = document.createElement('main');
    const ul = createHtmlElement('ul','menu-ul',null,null)
    const para = createHtmlElement('h2',null,null,"Current flavors of the week:")
    ul.append(para);
    const flavors = [
        { name: "Chroma-Chocolate", img:"", desc:"Chocolate with a touch of color" },
        { name: "Vindictive Vanilla", img:"", desc:"Madagascar Vanilla blended to a rich smooth finish." }, 
        { name: "Strawberry 'Splosion", img:"", desc:"Fresh picked Strawberries with Strawberry ripple." },
        { name: "Galactic Garden", img:"", desc:"Vanilla and chocolate icecream with different types of candies. "},
        { name: "WHAAATTT?", img:"", desc:"Mystery flavor with Flavor Guarantee*"},
        { name: "Twist and Shout", img:"", desc:"Cookies and Cream. 'Nuff Said"},
        { name: "Frankenstein", img:"", desc:"All the leftover flavors from the day before, handmixed into a daily unique mix."},
        { name: "Lavacious Lavender", img:"", desc:"Lavender from local farm, hand mixed into this delightful flavor."}, 
    ]

    flavors.map(flavor=> {
        const li = createHtmlElement('li',null,["flavor"],null);
        const name = createHtmlElement('h3',null,["f-name"],flavor.name);
        const desc = createHtmlElement('p',null,["d-desc"],flavor.desc);
        const img = new Image();
        img.src = flavor.img;
        li.append(name,desc,img);
        ul.append(li);
        }
    )

    const guar = createHtmlElement('para',null,null,"*Flavor Guarantee- If you dont like a flavor, we will replace it no questions asked. Limit once per customer per visit.")
    ul.append(guar);
    menu.append(ul);

    return menu;
};

export {render as renderMenu};