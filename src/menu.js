import { createHtmlElement } from "./createElHelper";
const imgCache = {}

function importAll(r) {
    return r.keys().forEach((key) => (imgCache[key] = r(key)));
  }
  
importAll(require.context('./images/flavors', false, /\.(png|jpe?g|svg)$/));

const render = () => {
    const menu = document.createElement('main');
    const ul = createHtmlElement('ul','menu-ul',null,null)
    const para = createHtmlElement('h2',null,null,"Current flavors of the week:")
    menu.append(para);
    const flavors = [
        { name: "Death by Chocolate", img: imgCache['./DbyChoc.jpeg'], desc:"Chocolate base with a fudge ripple and chocolate chips" },
        { name: "Vindictive Vanilla", img: imgCache['./vanilla.jpeg'], desc:"Madagascar Vanilla churned to a rich smooth finish." }, 
        { name: "Strawberry 'Splosion", img: imgCache["./straw.jpg"], desc:"Fresh picked Strawberries with Strawberry ripple." },
        { name: "Galactic Garden", img: imgCache["./garden.jpeg"], desc:"Vanilla with fudge ripple "},
        { name: "Twist and Shout", img: imgCache["./c&c.jpg"], desc:"Cookies and Cream. 'Nuff Said"},
        { name: "Lavacious Lavender", img: imgCache["./lavender.jpg"], desc:"Lavender from a local farm partner, hand mixed into this delightful flavor."}, 
        { name: "I don't know!!!", img: imgCache["./idk.jpeg"], desc:"Let us choose for you! Flavor Guarantee*"},
        { name: "Frankenstein's Monster", img: imgCache["./frank.jpeg"], desc:"All the leftover flavors from the day before, handmixed into a daily unique mix."},
    ];

    flavors.map(flavor=> {
        const li = createHtmlElement('li',null,["flavor"],null);
        const name = createHtmlElement('h3',null,["f-name"],flavor.name);
        const desc = createHtmlElement('p',null,["f-desc"],flavor.desc);
        const img = new Image();
        img.src = flavor.img;
        li.append(name,desc,img);
        ul.append(li);
        }
    )
    const guar = createHtmlElement('p',"guar",null,"*Flavor Guarantee- If you dont like a flavor, we will replace it no questions asked. Limit once per customer per visit.")
    menu.append(ul);
    menu.append(guar);

    return menu;
};

export {render as renderMenu};