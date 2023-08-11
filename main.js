
const proyectosTrabajados = [
  {
    imagen1: './public/Proyecto-apple1.png',
    imagen2: './public/Proyecto-apple2.png',
    link: 'https://mi-proyecto-2023.netlify.app/',
    descripcion:'Landing de la página de Apple.',
  },
  {
    imagen1: './public/Proyecto-pcc1.png',
    imagen2: './public/Proyecto-pcc2.png',
    link: 'https://preeminent-kheer-06d4c4.netlify.app/',
    descripcion: 'Landing de la página de PcComponentes.'
  },
  {
    imagen1: './public/Proyecto-pcc3.png',
    imagen2: './public/Proyecto-pcc4.png',
    link: 'https://delightful-scone-0d2b9c.netlify.app/',
    descripcion: 'Buscador para la página de PcComponentes.'
  },
  {
    imagen1: './public/Proyecto-blur1.png',
    imagen2: './public/Proyecto-blur2.png',
    link: 'https://magnificent-quokka-22ff34.netlify.app',
    descripcion: 'Página con difuminado en el fondo al introducir la contraseña.'
  },
  {
    imagen1: './public/Proyecto-microsoft1.png',
    imagen2: './public/Proyecto-microsoft2.png',
    link: 'https://www.xbox.com/es-ES/',
    descripcion: 'Landing de la página de Xbox.'
  }
]

const empresasEnLasQueHeTrabajado = [
  {
    logo: './public/logo-pccomponentes (1).svg',
    nombre:'PcComponentes',
    descripcion:'Una tienda online de informática, electrónica y tecnología, en la que encontraras móviles, ordenadores, tablets y mucho más..',
    fechas:'Desde Enero de 2014 hasta mayo de 2015',
    responsabilidades:'Encargado de frontend',
    link:'https://www.pccomponentes.com/'
  },
  {
    logo: './public/logoOpenai.png',
    nombre:'OpenAi',
    descripcion:'OpenAi no sólo trabajan en el desarrollo de programas con IA beneficiosos; sino que también se ocupan de detectar amenazas y usos indebidos de modelos lingüísticos para la desinformación.',
    fechas:'Desde julio 2015 hasta septiembre 2018',
    responsabilidades:'técnico de sistemas',
    link: 'https://openai.com/'
  },
  {
    logo: './public/logo-apple.jpg',
    nombre:'Apple',
    descripcion:'Apple, Inc. es una empresa tecnológica estadounidense que diseña y produce equipos electrónicos, software y servicios en línea.',
    fechas:'Desde enero 2019 hasta junio 2019',
    responsabilidades:'Desarrollador frontend',
    link: 'https://www.apple.com/es/'
  },
  {
    logo: './public/microsoft.png',
    nombre:'Microsoft',
    descripcion:'Microsoft es una compañía multinacional, que diseña y comercializa programas informáticos y dispositivos electrónicos.',
    fechas:'Desde julio 2019 hasta febrero 2022',
    responsabilidades:'Fullstack developer',
    link: 'https://www.microsoft.com/es-es'
  },
  {
    logo: './public/game-logo.png',
    nombre:'Game',
    descripcion:'Game es una cadena de tiendas de videojuegos, accesorios, consolas... y demas productoas gaming.',
    fechas:'Desde marzo 2022 hasta actual',
    responsabilidades:'Desarrollador frontend',
    link:'https://www.game.es/'
  }
]

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


const renderHome = () => {
  const main = document.querySelector('#main');
  const menu = document.querySelector("#menu");

  let template = `
  <section id='home-section'>
    <img id='imagen-perfil' src="./public/hasbullah.jpg" alt="Error">
    <h2>Jorge Pérez Requena</h2>
    <article id='home-section-article1'>
      <h3><strong>Puesto de trabajo:</strong>Cortador de tela en maquina de control numérico</h3>
      <h3>Actualmente estoy trabajando en una empresa de llenado de almohadas, pero mi intencion es buscar un trabajo mas acorde conmigo. Al hacer este curso aspiro a un puesto de trabajo mejor que en el que estoy ahora, mejor pagado, mejor ambiente de trabajo y mejor horario... entreotras cosas. </h3>
      <h3></h3>
    </article>
    <article id='home-section-article2'>
      <h3>Links de contacto:</h3>
      <ul id='article2-ul'>
        <li><a href="https://www.reddit.com/">Reddit</a></li>  
        <li><a href="https://www.instagram.com/">Instagram</a></li>  
        <li><a href="https://es-es.facebook.com/">Facebook</a></li> 
      </ul> 
    </article>
    <article id='home-section-article3'>
      <h3>Otras formas de ponerse en contacto:</h3>
      <ul id='article3-ul'>
        <li><a href="https://www.google.com/intl/es/gmail/about/"><strong>Correo: </strong>Hoorex_@hotmail.com</a></li>
        <li><a href="https://web.telegram.org/k/"><strong>Telegram: </strong>+34 666 66 66 66</a></li> 
      </ul>
    </article>
  </section>
  `;
  main.innerHTML = ''
  main.innerHTML += template
  menu.classList.remove('show')

  
};
renderHome();
const homeLink = document.querySelector('#pagina-principal');
homeLink.addEventListener('click', renderHome)


const renderProjects = () => {
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
const proyectosLink = document.querySelector('#proyectos');
proyectosLink.addEventListener('click', renderProjects)


const renderExperience = () => {
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

const experienciaLink = document.querySelector('#experiencia');
experienciaLink.addEventListener('click', renderExperience)