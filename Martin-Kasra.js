"use strict";


let usernames = ["Yazeen", "Martin", "Javascript"];
let form = document.createElement("form");
let input = document.createElement("input");

function init() {
    initLoginForm();
    initLabel();
    initInput();
    initButton();
}

function initLoginForm() {
    document.body.appendChild(form);
}

function initLabel() {
    let label = document.createElement("Label");
    label.textContent = "Username: ";
    form.appendChild(label);
}

function initInput() {
    input.required = true;
    form.appendChild(input);
}

function initButton() {
    let button = document.createElement("button");
    button.textContent = "Login";
    form.appendChild(button);

    button.addEventListener("click", () => {
        if (validateLoginInfo() === true) {
            alert("Welcome!");
        } else(validateLoginInfo() == false); {
            input.style.border = "3px solid red";
        }
    });
}

function validateLoginInfo() {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === input.value) {
            return true;
        }
    }
    return false;
}

window.addEventListener("DOMContentLoaded", (event) => {
    init();
});