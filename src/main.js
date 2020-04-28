//FOR DOM MANIPULATION

import data from "./data/potter/potter.js";
/* import {characters} from './data.js'; */
import { names } from "./data.js";
import { patronus } from "./data.js";
import { gryfinddorMembers } from "./data.js";
import { slytherinMembers } from "./data.js";
import { hufflepuffMembers } from "./data.js";
import { ravenclawMembers } from "./data.js";

/* console.log(data); //data is an array of objects, each object is a character
  console.log(data[0].patronus); */
/* console.log(characters);
  console.log(names);
  console.log(`The ${patronus[0][1]} belongs to ${patronus[0][0]}`);*/

const root = document.getElementById("root");
const homepageFragment = new DocumentFragment(); //aquí se agregan todos los elementos, luego este fragmento se agrega al root, así solo se actualiza una vez y podemos agregar imagen, h1 y botón al mismo tiempo

const logoBox = document.createElement("div");
const logo = document.createElement("img");

logoBox.classList.add = "img-box";
logo.classList.add = "img-box-image";

logo.src = "./Imagenes/wizards-unite-logo.png";

logoBox.appendChild(logo);
//root.appendChild(logoBox);  //esto fue reemplazado por root.appendChild(homepageFragment)

const titulo = document.createElement("h1");
titulo.textContent = "BASE DE DATOS PARA JUGADORES";
titulo.classList.add = "tituloinicio";
//root.appendChild(titulo);  //esto fue reemplazado por root.appendChild(homepageFragment)

const alohomoraBtn = document.createElement("button");
alohomoraBtn.classList = "alohomora-button";
alohomoraBtn.textContent = "Alohomora";
alohomoraBtn.addEventListener("click", HogwartsHouses);

//agregando logo, h1 y botón al fragment
homepageFragment.appendChild(logoBox);
homepageFragment.appendChild(titulo);
homepageFragment.appendChild(alohomoraBtn);
//agregando fragment al root
root.appendChild(homepageFragment);

//MENÚ PROVISORIO
function createMenu() {
  const menuBox = document.createElement("nav");

  for (let i = 0; i < 9; i++) {
    const menuItem = document.createElement("button");
    menuBox.appendChild(menuItem);
  }
  //1. Casas, 2. Gryffindor, 3. Hufflepuff, 4. Slytherin, 5. Ravenclaw, 6. Material, 7. Núcleo, 8. Patronus
  menuBox.childNodes[0].textContent = "Casas";
  menuBox.childNodes[0].value = "houses";

  menuBox.childNodes[1].textContent = "Gryffindor";
  menuBox.childNodes[1].value = "Gryffindor";
  menuBox.childNodes[1].addEventListener("click", showGryffindor);

  menuBox.childNodes[2].textContent = "Hufflepuff";
  menuBox.childNodes[2].value = "Hufflepuff";

  menuBox.childNodes[3].textContent = "Slytherin";
  menuBox.childNodes[3].value = "Slytherin";

  menuBox.childNodes[4].textContent = "Ravenclaw";
  menuBox.childNodes[4].value = "Ravenclaw";

  menuBox.childNodes[5].textContent = "Material";
  menuBox.childNodes[6].textContent = "Núcleo";
  menuBox.childNodes[7].textContent = "Patronus";

  return document.body.appendChild(menuBox);
}

///////////////////////////////////////////////////////////////////////////////////////
/* HELPERS (FUNC. PARA COSAS PEQUEÑAS REPETITIVAS) */
//////////////////////////////////////////////////////////////////////////////////////

//1. Borrar contenido del DOM (div#root y body)
function clearContent() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}

//2. Generar "marco" o estructura básica que se repite en todas las páginas (título entre línea, contenedor para ingresar el contenido dinámico, como personajes, varitas, patronus)
function createBasicStructure() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <section class="dynamic-content">
      <header>
        <h1 class="section-title">GRYFFINDOR</h1>
        <div class="small-logo-box">
          <!-- <img src="./Imagenes/wizards-unite-logo.png" alt="logo-small">-->
        </div>
      </header>
        <section class="inner-content">
          </section>
      
    </section>
  
  `
  );
}

const dynamicContentSection = document.querySelector(".dynamic-content");

///////////////////////////////////////////////////////////////////////////////////////
/* PANTALLAS */
///////////////////////////////////////////////////////////////////////////////////////
function HogwartsHouses() {
  clearContent(); //limpia pantalla anterior
  createBasicStructure(); //crea estructura básica que se repite en cada pantalla
  createMenu(); //crea estructura del menú (provisorio)

  const innerContentSection = document.querySelector(".inner-content");
  const innerContentSection = document.querySelector(".inner-content");

  const fragment = new DocumentFragment();
  gryfinddorMembers.forEach((character) => {
    const cardBox = document.createElement("div");
    cardBox.classList = "card-box";
    const cardBoxImg = document.createElement("img");
    cardBoxImg.src = `${character.image}`;
    const cardInfo = document.createElement("ul");
    cardInfo.classList = "card-info";

    const cardInfoLi1 = document.createElement("li");
    const cardInfoLi2 = document.createElement("li");
    const cardInfoLi3 = document.createElement("li");
    const cardInfoLi4 = document.createElement("li");
    cardInfoLi1.textContent = `Nombre: ${character.name}`;
    cardInfoLi2.textContent = `Género: ${character.gender}`;
    cardInfoLi3.textContent = `Fecha de nacimiento: ${character.yearOfBirth}`;
    cardInfoLi4.textContent = `Patronus: ${character.patronus}`;
    cardInfo.appendChild(cardInfoLi1);
    cardInfo.appendChild(cardInfoLi2);
    cardInfo.appendChild(cardInfoLi3);
    cardInfo.appendChild(cardInfoLi4);
    cardBox.appendChild(cardBoxImg);
    cardBox.appendChild(cardInfo);
    /////////////RESULTADO: TARJETA DE CADA PERSONAJE /////////////
    fragment.appendChild(cardBox); //se pega cada tarjeta al fragmento vacío
    innerContentSection.appendChild(fragment); //el fragmento se pega a la pantalla
  });
}

//1. FUNCIÓN PARA MOSTRAR LA PANTALLA DE CADA CASA
function showGryffindor() {
  clearContent(); //limpia pantalla anterior
  createBasicStructure(); //crea estructura básica que se repite en cada pantalla
  createMenu(); //crea estructura del menú (provisorio)

  const innerContentSection = document.querySelector(".inner-content");

  const fragment = new DocumentFragment();
  gryfinddorMembers.forEach((character) => {
    const cardBox = document.createElement("div");
    cardBox.classList = "card-box";
    const cardBoxImg = document.createElement("img");
    cardBoxImg.src = `${character.image}`;
    const cardInfo = document.createElement("ul");
    cardInfo.classList = "card-info";

    const cardInfoLi1 = document.createElement("li");
    const cardInfoLi2 = document.createElement("li");
    const cardInfoLi3 = document.createElement("li");
    const cardInfoLi4 = document.createElement("li");
    cardInfoLi1.textContent = `Nombre: ${character.name}`;
    cardInfoLi2.textContent = `Género: ${character.gender}`;
    cardInfoLi3.textContent = `Fecha de nacimiento: ${character.yearOfBirth}`;
    cardInfoLi4.textContent = `Patronus: ${character.patronus}`;
    cardInfo.appendChild(cardInfoLi1);
    cardInfo.appendChild(cardInfoLi2);
    cardInfo.appendChild(cardInfoLi3);
    cardInfo.appendChild(cardInfoLi4);
    cardBox.appendChild(cardBoxImg);
    cardBox.appendChild(cardInfo);
    /////////////RESULTADO: TARJETA DE CADA PERSONAJE /////////////
    fragment.appendChild(cardBox); //se pega cada tarjeta al fragmento vacío
    innerContentSection.appendChild(fragment); //el fragmento se pega a la pantalla
  });
}
