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
const info = document.createElement('h2');
info.classList.add('info');
info.textContent = "Join us for the best burgers in the universe and the 3rd best fries in the milkyway!"

// Append children
header.appendChild(title);

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

main.appendChild(info);

content.appendChild(header);
content.appendChild(nav);
content.appendChild(main);

