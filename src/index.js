import './style.css';
import homeTab from './homeTab';
import menuTab from './menuTab';
import contactTab from './contactTab';
import initPage from './initPage.js';

// Screen Controller
initPage();
homeTab();

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.onclick = homeTab;
menuBtn.onclick = menuTab;
contactBtn.onclick = contactTab;

