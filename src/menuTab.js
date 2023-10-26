export default function menuTab() {
    const main = document.querySelector("#main");
    main.innerHTML = ""; //clear content

    // Menu list
    const menuList = document.createElement('ul');
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');
    const item4 = document.createElement('li');

    item1.textContent = 'Big Boi Burger';
    item2.textContent = 'Wow Girl Burger';
    item3.textContent = 'Oh Wow Fries';
    item4.textContent = 'Yes Sir Beer';

    // // Append children
    menuList.appendChild(item1);
    menuList.appendChild(item2);
    menuList.appendChild(item3);
    menuList.appendChild(item4);
    main.appendChild(menuList);
}



    

    


