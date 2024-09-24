function proyectos() {

    let section = document.createElement('section');
    section.className = 'section-proyectos'
    section.appendChild(header());  
    section.appendChild(Lista());


    return section;
}

function header() {
    let div = document.createElement('div');
    div.className = 'header';
    
    let h2 = document.createElement('h2');
    h2.innerHTML = "Proyectos";
    div.appendChild(h2);

    let btn = document.createElement('div');
    btn.innerHTML = "GitHub";
    div.appendChild(btn);

    return div;
}

function Lista() {
    let lista = document.createElement('div');
    lista.className = 'lista-proyectos';
    lista.innerText = "Item de Lista";

    return lista;
}


export { proyectos }