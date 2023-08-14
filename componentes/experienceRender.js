import { empresasEnLasQueHeTrabajado } from "./constantes.js";

export const renderExperience = () => {
    const main = document.querySelector('#main');
    const menu = document.querySelector("#menu");
    const ul = document.createElement('ul');
    ul.classList.add('experienceUl')
    empresasEnLasQueHeTrabajado.forEach((empresa) => {
      let template = `
      <li class='empresa'>
        <a href='${empresa.link}' class='empresaLink'>
          <img src="${empresa.logo}" alt="error">
          <h3 class='titulo'><strong>Nombre de la Empresa: </strong></h3>
          <h3 class='contenido'>${empresa.nombre}</h3>
          <h3 class='titulo'><strong>Descripción: </strong></h3>
          <h3 class='contenido'>${empresa.descripcion}</h3>
          <h3 class='titulo'><strong>Fechas de Trabajo:</strong></h3>
          <h3 class='contenido'>${empresa.fechas}</h3>
          <h3 class='titulo'><strong>Responsabilidades: </strong></h3>
          <h3 class='contenido'>${empresa.responsabilidades}</h3>
        </a>
      </li>
      `
  
      ul.innerHTML += template
    })
    main.innerHTML = ''
    main.append(ul)
    menu.classList.remove('show')
  }