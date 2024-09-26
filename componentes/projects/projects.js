import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";

function proyectos() {

    let section = document.createElement('section');
    section.className = 'section-proyectos'
    section.appendChild(header());  
    section.appendChild(listaProyectos());


    return section;
}

function listaProyectos() {
    let div = document.createElement('div');
    div.className = "Lista-proyectos";

    dataProyectos.forEach((proyecto)=>{
        div.appendChild(item(proyecto.nombre,proyecto.github,proyecto.githubPage,proyecto.stacks));
    });

    return div;
}

function item(texto,github,githubPage,stacks) {
    let lista = document.createElement('div');
    lista.className = "div-item"

    let a = document.createElement('a');
    a.className = "link-github-page"
    a.href = githubPage;
    a.innerText = "Formulario";
    lista.appendChild(a);

    let stack = document.createElement('div');
    stack.innerText = "[js, css, HTML]";
    lista.appendChild(stack);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = github;
    btnGithub.innerHTML = "Github";
    lista.appendChild(btnGithub);

    return lista;
}


export { proyectos }