import { navBarDiv } from "./componentes/navBar/navBar.js";
import { proyectos } from "./componentes/projects/projects.js";
import { divPapa } from "./componentes/navBar/lista.js";
import { formDiv } from "./componentes/navBar/form.js";

let DOM = document.querySelector("#root");

let navBar = document.createElement(`section`);
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
navBar.appendChild(divPapa);
navBar.appendChild(formDiv);
DOM.appendChild(navBar);

let proyect = document.createElement(`section`);
proyect.className = "proyect";
proyect.appendChild(proyectos()); 
DOM.appendChild(proyect);

