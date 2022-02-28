import { UI } from './view.js';
import { API_URL } from './network.js';
import cookies from '../node_modules/js-cookie/dist/js.cookie.mjs';
// import { cookies } from './cookies.js';
// import { API_URL } from './network.js';

const mess = UI.CHAT.TEMPLATE.content.querySelector('.inside-text');
const time = UI.CHAT.TEMPLATE.content.querySelector('.time');


UI.CHAT.FORM.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    let message = UI.CHAT.TEXT.value;
    if (message == '') return;
    myMessage(message);
    UI.CHAT.TEXT.value = '';
    UI.CHAT.TEXT.focus();
};


function myMessage (message) {
    mess.textContent = message;
    let timeNow = new Date().toLocaleTimeString().slice(0,-3);
    time.textContent = timeNow;
    let contentText = UI.CHAT.TEMPLATE.content.cloneNode(true);
    UI.CHAT.DIV.append(contentText);
};


function handler() {
    UI.CHAT.DIALOG.classList.toggle ('none-active');
    UI.CHAT.USERNAME.classList.toggle ('none-active');
};

UI.CHAT.ELEM.addEventListener('click', handler);
UI.CHAT.ENDBTN.addEventListener('click', handler);

let token = '';


(async () => {
let user = {
    email: 'mypost@mail.ru',
  };
 
let response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(user)
});

let result = await response.json();

console.log(result);
return result;
});
// ();







