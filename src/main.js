//FOR DOM MANIPULATION


//IMPORTS
  // CÓDIGO CON EL QUE ESTUVE JUGANDO DURANTE EL FINDE, SOLO PRÁCTICA, LO DEJÉ POR SI ALGO DE AHÍ NOS SIRVE DESPUÉS :D

  import data from './data/potter/potter.js';
  /* import {characters} from './data.js'; */
  import {names} from './data.js';
  import {patronus} from './data.js';
  import {gryfinddorMembers} from './data.js';
  import {slytherinMembers} from './data.js';
  import {hufflepuffMembers} from './data.js';
  import {ravenclawMembers} from './data.js';


  /* console.log(data); //data is an array of objects, each object is a character
  console.log(data[0].patronus); */
  /* console.log(characters);
  console.log(names);
  console.log(`The ${patronus[0][1]} belongs to ${patronus[0][0]}`);*/


const root = document.getElementById('root');
const homepageFragment = new DocumentFragment; //aquí se agregan todos los elementos, luego este fragmento se agrega al root, así solo se actualiza una vez y podemos agregar imagen, h1 y botón al mismo tiempo

const logoBox = document.createElement('div');
const logo = document.createElement('img');

logoBox.classList.add = "img-box";
logo.classList.add = "img-box-image";

logo.src = './Imagenes/wizards-unite-logo.png';

logoBox.appendChild(logo);
//root.appendChild(logoBox);  //esto fue reemplazado por root.appendChild(homepageFragment)

const titulo = document.createElement("h1")
titulo.textContent = "BASE DE DATOS PARA JUGADORES"
titulo.classList.add = "tituloinicio"
//root.appendChild(titulo);  //esto fue reemplazado por root.appendChild(homepageFragment)


const alohomoraBtn = document.createElement("button");
alohomoraBtn.classList = "alohomora-button";
alohomoraBtn.textContent = "Alohomora";
alohomoraBtn.addEventListener("click", showGryffindor); //showHouses es la función en la que tienes que crear todos los elementos del DOM de la página de las Casas

//agregando logo, h1 y botón al fragment
homepageFragment.appendChild(logoBox);
homepageFragment.appendChild(titulo);
homepageFragment.appendChild(alohomoraBtn);
//agregando fragment al root
root.appendChild(homepageFragment);

//BORRAR CONTENIDO DEL DOM (div#root)
function clearContent() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}

//FUNCIÓN PARA MOSTRAR LOS MIEMBROS DE CADA CASA
function showGryffindor() {
  clearContent();
  document.body.insertAdjacentHTML('afterbegin', `
    <section class="dynamic-content">
      <header>
        <h1 class="section-title">GRYFFINDOR</h1>
        <div class="small-logo-box">
          <!-- <img src="./Imagenes/wizards-unite-logo.png" alt="logo-small">-->
        </div>
      </header>
      
    </section>
  
  `);

  const dynamicContentSection = document.querySelector('.dynamic-content');


   
      dynamicContentSection.insertAdjacentHTML('beforeend', `
      
          <section class="inner-content">
          </section>
      
      `)
    



  const innerContentSection = document.querySelector('.inner-content');

  gryfinddorMembers.forEach(character => {
    innerContentSection.insertAdjacentHTML('beforeend',
    `
    <div class="card-box">
        <img src = "${character.image}" alt="character-img">
        <ul class="card-info">
          <li>Nombre: ${character.name}</li>
          <li>Género: ${character.gender}</li>
          <li>Fecha de nacimiento: ${character.yearOfBirth}</li>
          <li>Patronus: ${character.patronus}</li>
        </ul>
      </div>

    `);

  });


}








