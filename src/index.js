import { homepage } from "./components/home";
import { Contact } from "./components/contact";
import { menu } from "./components/menu";
import {about} from "./components/about"

homepage();
const home = document.getElementById("home");
const contactpage = document.getElementById("contact");
const menupage = document.getElementById("menu");
const aboutpage = document.getElementById("about");
home.addEventListener("click",homepage);
contactpage.addEventListener("click", Contact);
menupage.addEventListener("click", menu);
aboutpage.addEventListener("click", about);