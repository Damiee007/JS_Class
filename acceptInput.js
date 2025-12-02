// prompt ('Please enter something');

// let userName = prompt('Please enter your name');
// console.log(`User Name: ${userName}`);

// document.getElementById('ni').innerHTML = `Hello! Welcome, ${userName}`;

let userName;

document.getElementById('sbtn').onclick = function () {
    userName = document.getElementById('ni').value;
    console.log(userName);
}