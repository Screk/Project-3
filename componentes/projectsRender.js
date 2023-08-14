import { proyectosTrabajados } from "./constantes";

export const renderProjects = () => {
    const main = document.querySelector('#main');
    const menu = document.querySelector("#menu");
    const ul = document.createElement('ul')
    ul.classList.add('projectsUl')
    proyectosTrabajados.forEach((proyecto) => {
      let template = `
      <li class ='proyecto'>
        <a href="${proyecto.link}"><strong>Proyecto: </strong>${proyecto.link}</a>
        <div class = 'imagenes-proyecto'>
          <img src="${proyecto.imagen1}" alt="error">
          <img src="${proyecto.imagen2}" alt="error">
        </div>
        <h3><strong>Descripción: </strong></h3>
        <h3>${proyecto.descripcion}</h3>
      </li>
      `
      ul.innerHTML += template
    })
    main.innerHTML = ''
    main.append(ul)
    menu.classList.remove('show')
  }