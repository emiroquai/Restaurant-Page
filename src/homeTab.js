export default function homeTab() {
const main = document.querySelector("#main");
main.innerHTML = ""; //clear content

const info = document.createElement('h2');
info.classList.add('info');
info.textContent = "Join us for the best burgers in the universe and the 3rd best fries in the milkyway!"

main.appendChild(info);
}