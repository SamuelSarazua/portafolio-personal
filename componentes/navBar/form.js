let formDiv = document.createElement('div');
formDiv.className = "form-div";

let formTitulo = document.createElement('h2');
formTitulo.innerText = "Contactar";
formDiv.appendChild(formTitulo);

let input1 = document.createElement('input');
input1.type = "text";
input1.className = "input-texto";
formDiv.appendChild(input1);

let input2 = document.createElement('input');
input2.type = "text";
input2.className = "input-texto";
formDiv.appendChild(input2);

let texTarea = document.createElement('texTarea');
texTarea.className = "input-textarea";
formDiv.appendChild(texTarea);

let boton = document.createElement('button');
boton.className = "boton";
boton.innerText = "Enviar";
formDiv.appendChild(boton);

export { formDiv }