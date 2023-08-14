export const renderHome = () => {
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