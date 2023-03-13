const currentDay = document.querySelector('$currentDay');
//day for current day display
currentDay.innerHTML = moment().format('dddd MMM Do YYYY');

//buttons to save
const saveButton1 = document.querySelector('#save-button-1');
const saveButton2 = document.querySelector('#save-button-2');
const saveButton3 = document.querySelector('#save-button-3');
const saveButton4 = document.querySelector('#save-button-4');
const saveButton5 = document.querySelector('#save-button-5');
const saveButton6 = document.querySelector('#save-button-6');
const saveButton7 = document.querySelector('#save-button-7');
const saveButton8 = document.querySelector('#save-button-8');
const saveButton9 = document.querySelector('#save-button-9');
//what the user is typing in
const userInput1 = document.querySelector('#user-form-1');
const userInput2 = document.querySelector('#user-form-2');
const userInput3 = document.querySelector('#user-form-3');
const userInput4 = document.querySelector('#user-form-4');
const userInput5 = document.querySelector('#user-form-5');
const userInput6 = document.querySelector('#user-form-6');
const userInput7 = document.querySelector('#user-form-7');
const userInput8 = document.querySelector('#user-form-8');
const userInput9 = document.querySelector('#user-form-9');

let userStoredData1 = localStorage.getItem('userInput1');
userInput1.textContent = userStoredData1;

let userStoredData2 = localStorage.getItem('userInput2');
userInput2.textContent = userStoredData1;

let userStoredData3 = localStorage.getItem('userInput3');
userInput3.textContent = userStoredData1;

let userStoredData4 = localStorage.getItem('userInput4');
userInput4.textContent = userStoredData1;

let userStoredData5 = localStorage.getItem('userInput5');
userInput5.textContent = userStoredData1;

let userStoredData6 = localStorage.getItem('userInput6');
userInput6.textContent = userStoredData1;

let userStoredData7 = localStorage.getItem('userInput7');
userInput7.textContent = userStoredData1;

let userStoredData8 = localStorage.getItem('userInput8');
userInput8.textContent = userStoredData1;

let userStoredData9 = localStorage.getItem('userInput9');
userInput9.textContent = userStoredData1;

//event listens to save items

saveButton1.addEventListener('click', function () {
    let userInput1 = document.querySelector('#user-form-1').value;
    localStorage.setItem('userInput1', userInput1);
})
saveButton2.addEventListener('click', function () {
    let userInput2 = document.querySelector('#user-form-2').value;
    localStorage.setItem('userInput2', userInput2);
})
saveButton3.addEventListener('click', function () {
    let userInput3 = document.querySelector('#user-form-3').value;
    localStorage.setItem('userInput3', userInput3);
})
saveButton4.addEventListener('click', function () {
    let userInput4 = document.querySelector('#user-form-4').value;
    localStorage.setItem('userInput4', userInput4);
})
saveButton5.addEventListener('click', function () {
    let userInput5 = document.querySelector('#user-form-5').value;
    localStorage.setItem('userInput5', userInput5);
})
saveButton6.addEventListener('click', function () {
    let userInput6 = document.querySelector('#user-form-6').value;
    localStorage.setItem('userInput6', userInput6);
})
saveButton7.addEventListener('click', function () {
    let userInput7 = document.querySelector('#user-form-7').value;
    localStorage.setItem('userInput7', userInput7);
})
saveButton8.addEventListener('click', function () {
    let userInput8 = document.querySelector('#user-form-8').value;
    localStorage.setItem('userInput8', userInput8);
})
saveButton9.addEventListener('click', function () {
    let userInput9 = document.querySelector('#user-form-9').value;
    localStorage.setItem('userInput9', userInput9);
})
