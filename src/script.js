console.log("Hellooowwww");
const content = document.getElementById("content");

// Create header
const header = document.createElement('div');
const title = document.createElement('h1');
header.classList.add('header');
title.classList.add('title');
title.textContent = "Best Restaurant Ever"

// Create main

// Append children
header.appendChild(title);
content.appendChild(header);

