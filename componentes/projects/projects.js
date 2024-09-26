import { header } from "../header/header.js";

function proyectos() {

    let section = document.createElement('section');
    section.className = 'section-proyectos'
    section.appendChild(header());  
    section.appendChild(Lista());


    return section;
}


function Lista() {
    let lista = document.createElement('div');
    lista.className = 'lista-proyectos';
    lista.innerText = "Item de Lista";

    return lista;
}


export { proyectos }