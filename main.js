import { renderExperience } from "./componentes/experienceRender.js";
import { renderHome } from "./componentes/homeRender.js";
import { renderProjects } from "./componentes/projectsRender.js";

const añadeEventListenerAlBotonHamburguesa = () => {
  const menu = document.querySelector("#menu");
  const botonHamburguesa = document.querySelector(".boton-hamburguesa");

  botonHamburguesa.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
};
añadeEventListenerAlBotonHamburguesa();

const añadeEventListenerALosLinks = () => {
  const links = document.querySelectorAll("#menu");
  links.forEach((link) => {
    link.addEventListener("click", (ev) => {
      ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
      const linkHref = ev.target.href; // Almacenamos la URL en una constante
      console.log("El link apunta a:", linkHref); // La mostramos en consola
      // Añade aquí tu lógica! �
    });
  });
};
añadeEventListenerALosLinks();

renderHome();

const homeLink = document.querySelector("#pagina-principal");
homeLink.addEventListener("click", renderHome);

const proyectosLink = document.querySelector("#proyectos");
proyectosLink.addEventListener("click", renderProjects);

const experienciaLink = document.querySelector("#experiencia");
experienciaLink.addEventListener("click", renderExperience);
