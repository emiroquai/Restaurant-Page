export default function pageInit() {

const content = document.getElementById("content");

// Create header
const header = document.createElement('div');
const title = document.createElement('h1');
header.classList.add('header');
title.classList.add('title');
title.textContent = "Best Restaurant Ever"

// Create Nav
const nav = document.createElement('div');
nav.classList.add('nav');
const home = document.createElement('button');
home.setAttribute("id", "home");
home.textContent = "Home";
const menu = document.createElement('button');
menu.setAttribute("id", "menu");
menu.textContent = "Menu";
const contact = document.createElement('button');
contact.setAttribute("id", "contact");
contact.textContent = "Contact";

// Create main
const main = document.createElement('div');
main.setAttribute("id", "main");

// Append children
header.appendChild(title);

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);


content.appendChild(header);
content.appendChild(nav);
content.appendChild(main);
}

