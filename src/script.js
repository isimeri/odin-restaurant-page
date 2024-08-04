import homePage from "./homePage.js";
import menuPage from "./menuPage.js";
import contactPage from "./contactPage.js";
import "./general.css";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

document.body.id = "home";
homePage(contentDiv);

homeBtn.addEventListener("click", () => {
    contentDiv.innerHTML = '';
    document.body.id = "home";
    homePage(contentDiv);
});

menuBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    document.body.id = "menu";
    menuPage(contentDiv);
});

contactBtn.addEventListener("click", () => {
    contentDiv.innerHTML = ""
    document.body.id = "contact";
    contactPage(contentDiv);
});