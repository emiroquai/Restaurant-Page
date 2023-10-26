export default function contactTab() {
    const main = document.querySelector("#main");
    main.innerHTML = ""; //clear content

    // Address and phone number
    const address = document.createElement('h2');
    address.textContent = 'What a Street St. No: 8, Citylicous, Turkey';
    const phone = document.createElement('h2');
    phone.textContent = '+90 999 88 77';

    // // Append children
    main.appendChild(address);
    main.appendChild(phone);

}
