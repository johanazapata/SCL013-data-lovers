//FOR DOM MANIPULATION

import charactersData from "./data/potter/potter.js";
import { filterByHouse } from "./data.js";
import { filterByPatronus } from "./data.js";
import { filterByWand } from "./data.js";
import { filterByCore } from "./data.js";
import { patronusNameOnly } from "./data.js";
import { coreNameOnly } from "./data.js";
import { wandNameOnly } from "./data.js";

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
alohomoraBtn.addEventListener("click", () => {
  clearContent(); //1. limpia pantalla de inicio que está en div#root
  return Casas();
});

//agregando logo, h1 y botón al fragment
homepageFragment.appendChild(logoBox);
homepageFragment.appendChild(titulo);
homepageFragment.appendChild(alohomoraBtn);
//agregando fragment al root
root.appendChild(homepageFragment);

///////////////////////////////////////////////////////////////////////////////////////
/////////////////* HELPERS (FUNC. PARA COSAS PEQUEÑAS REPETITIVAS) *//////////////////
//////////////////////////////////////////////////////////////////////////////////////

//1.a. Borrar contenido del DOM (div#root es página de inicio)
function clearContent() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}

//1.b. Variable donde posteriormente se guarda la función para borrar el contenido de .inner-content
let clearInnerContent;

//2. Generar "marco" o estructura básica que se repite en todas las páginas (título entre líneas, contenedor para ingresar el contenido dinámico, como personajes, varitas, patronus)
function createBasicStructure() {
  document.body.innerHTML = `
    <nav id="navbar"></nav>
    <header>
        
  <div class="small-logo-box">
          <img src="./Imagenes/wizards-unite-logo.png" alt="logo-small">
        </div>     
        
      </header>

    <section id="general-section" class="dynamic-content">
    
    
      <h1 class="section-title"></h1>
        <section class="inner-content">

        </section>
      
    </section>
  
  `;

  //función que permite borrar el contenido dinámico que se coloca en .inner-content
  clearInnerContent = function () {
    const innerContent = document.querySelector(".inner-content");
    while (innerContent.firstChild) {
      innerContent.removeChild(innerContent.firstChild);
    }
  };
}

//3. Función para crear el menú con sus respectivas opciones

function MenuPrincipal() {
  document.getElementById("navbar").insertAdjacentHTML(
    "afterbegin",

    `   
<input type="checkbox" class="checkbox__hack" id="checkbox__hack">
<label for="checkbox__hack" class="checkbox-hack__label"></label>
<nav class="nav--top">
<ul class="menu-lateral nav--top__list">
<ul>
    <ul>
  <div class="item">
      <input type="checkbox" id="check2"/>
      <label for="check2" id="casas">CASAS</label>
       <ul>
      <li id="Gryffindor"><a href="">Gryffindor</a></li>
      <li id="Slytherin"><a href="">Slytherin</a></li>
      <li id="Hufflepuff"><a href="">Hufflepuff</a></li>
      <li id="Ravenclaw"><a href="">Ravenclaw</a></li>
      </ul>
 </div>
     <div class="item">
      <input type="checkbox" id="check3"/>
      <label for="check3">MADERA</label>
 </div>
 <div class="item">
      <input type="checkbox" id="check4"/>
      <label for="check4">NUCLEO</label>    
 </div>
<div class="item">
    <input type="checkbox" id="check5"/>
    <label for="check5">PATRONUS</label>
     </div> 
 
`
  );

  const Gryffindor = document.getElementById("Gryffindor");
  Gryffindor.addEventListener("click", (event) => {
    let gryffindorMembers = filterByHouse(charactersData, "Gryffindor");
    event.preventDefault();
    return showHouseMembers(gryffindorMembers);
  });

  const Slytherin = document.getElementById("Slytherin");
  Slytherin.addEventListener("click", () => {
    let slytherinMembers = filterByHouse(charactersData, "Slytherin");
    event.preventDefault();
    return showHouseMembers(slytherinMembers);
  });
  const Hufflepuff = document.getElementById("Hufflepuff");
  Hufflepuff.addEventListener("click", () => {
    let hufflepuffMembers = filterByHouse(charactersData, "Hufflepuff");
    event.preventDefault();
    return showHouseMembers(hufflepuffMembers);
  });

  const Ravenclaw = document.getElementById("Ravenclaw");
  Ravenclaw.addEventListener("click", () => {
    let ravenclawMembers = filterByHouse(charactersData, "Ravenclaw");
    event.preventDefault();
    return showHouseMembers(ravenclawMembers);
  });

  //lleva a VARITAS, pero no despliega las opciones en el menú :P
  const wand = document.getElementById("check3");
  wand.addEventListener("click", (event) => {
    event.preventDefault();
    showWand();
  });
  const core = document.getElementById("check4");
  core.addEventListener("click", (event) => {
    event.preventDefault();
    showWandsCore();
  });

  const patronus = document.querySelector("#check5");
  patronus.addEventListener("click", () => {
    showPatronus();
  });
}

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////* PANTALLAS */////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//0. FUNCIÓN PARA MOSTRAR LA PANTALLA DE LOS ESCUDOS
function Casas() {
  createBasicStructure(); //2. crea una sola vez la estructura básica que se repite en cada pantalla (esta estructura se mantiene en el resto de las pantallas)
  MenuPrincipal(); //3. crea una sola vez la estructura del menú

  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList += " titulo-dorado";
  sectionTitle.textContent = "CASAS";
  /* document.createElement("HOLA COMO ESTAS HOY"); */

  document.querySelector(".inner-content").innerHTML = `
  
  <div class="grilla">
    <img src = "./Imagenes/House Gry.jpg" class="grid-item" id="EscudoGry">
    <img src = "./Imagenes/House Raven.jpg" class="grid-item" id="EscudoRaven">
    <img src = "./Imagenes/House Huff.jpg" class="grid-item" id="EscudoHuffle">
    <img src = "./Imagenes/House Sly.jpg" class="grid-item"id="EscudoSly">
  </div>
`;
  const EscudoGry = document.getElementById("EscudoGry");
  EscudoGry.addEventListener("click", (event) => {
    let gryffindorMembers = filterByHouse(charactersData, "Gryffindor");
    event.preventDefault();
    return showHouseMembers(gryffindorMembers);
  });

  const EscudoRaven = document.getElementById("EscudoRaven");
  EscudoRaven.addEventListener("click", (event) => {
    event.preventDefault();
    let ravenclawMembers = filterByHouse(charactersData, "Ravenclaw");
    return showHouseMembers(ravenclawMembers);
  });

  const EscudoHuffle = document.getElementById("EscudoHuffle");
  EscudoHuffle.addEventListener("click", (event) => {
    event.preventDefault();
    let hufflepuffwMembers = filterByHouse(charactersData, "Hufflepuff");
    return showHouseMembers(hufflepuffwMembers);
  });

  const EscudoSly = document.getElementById("EscudoSly");
  EscudoSly.addEventListener("click", (event) => {
    event.preventDefault();
    let slytherinMembers = filterByHouse(charactersData, "Slytherin");
    return showHouseMembers(slytherinMembers);
  });
}

//1. FUNCIÓN PARA MOSTRAR LA PANTALLA DE CADA CASA (la única con createElement XD)
function showHouseMembers(houseMembers) {
  clearInnerContent(); //se borra el contenido anterior que está en .inner-content
  //MenuPrincipal(); //3. crea estructura del menú (provisorio)
  const innerContentSection = document.querySelector(".inner-content");
  const sectionTitle = document.querySelector(".section-title");

  //4. modifica el color del título según la casa
  if (houseMembers[0].house === "Gryffindor") {
    sectionTitle.classList = "section-title gryffindor-color";
    sectionTitle.textContent = "GRYFFINDOR";
  } else if (houseMembers[0].house === "Hufflepuff") {
    sectionTitle.classList = "section-title hufflepuff-color";
    sectionTitle.textContent = "HUFFLEPUFF";
  } else if (houseMembers[0].house === "Slytherin") {
    sectionTitle.classList = "section-title slytherin-color";
    sectionTitle.textContent = "SLYTHERIN";
  } else {
    sectionTitle.classList = "section-title ravenclaw-color";
    sectionTitle.textContent = "RAVENCLAW";
  }

  //5. crea una tarjeta con información de cada personaje
  const fragment = new DocumentFragment();
  houseMembers.forEach((character) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList = "card-box";
    const cardImg = document.createElement("img");
    cardImg.src = `${character.image}`;
    const cardInfo = document.createElement("ul");
    cardInfo.classList = "card-info";

    const card = document.createElement("div");
    card.classList = "card";
    const cardFront = document.createElement("div");
    cardFront.classList = "card-front";
    const cardBack = document.createElement("div");
    cardBack.classList = "card-back";
    const cardTitle = document.createElement("h1");
    cardTitle.classList = "card-title";
    cardInfo.appendChild(cardTitle);

    //6. se crean 4 elementos de lista para la información de cada personaje
    for (let i = 0; i < 4; i++) {
      let cardInfoLi = document.createElement("li");
      cardInfo.appendChild(cardInfoLi);
    }

    //cardTitle es el título donde va el nombre del personaje
    cardInfo.childNodes[0].textContent = `${character.name}`;
    //cardInfo equivale a la lista, childNodes[x] a cada elemento
    cardInfo.childNodes[1].textContent = `Género: ${character.gender}`;

    //por si el personaje no tiene año de nacimiento
    if (character.yearOfBirth === "") {
      cardInfo.childNodes[2].textContent = `Año de nacimiento: Información no disponible`;
    } else {
      cardInfo.childNodes[2].textContent = `Año de nacimiento: ${character.yearOfBirth}`;
    }

    //por si el personaje no tiene patronus
    if (character.patronus === "") {
      cardInfo.childNodes[3].textContent = `Patronus: Información no disponible`;
    } else {
      cardInfo.childNodes[3].textContent = `Patronus: ${patronusNameOnly(
        character
      )}`;
    }

    /* //por si el personaje 1) no tiene varita, 2) solo tiene madera 3) tiene madera y núcleo
    if (wandWood(character) === "" && wandCore(character) === "") {
      cardInfo.childNodes[4].textContent = `Varita: Información no disponible`;
    } else if (wandWood(character) && wandCore(character) === "") {
      cardInfo.childNodes[4].textContent = `Varita: ${wandWood(character)}`;
    } else {
      cardInfo.childNodes[4].textContent = `Varita: ${wandWood(
        character
      )} con núcleo de ${wandCore(character)}`;
    } */

    cardFront.appendChild(cardImg);
    cardBack.appendChild(cardInfo);
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardContainer.appendChild(card);

    //Resultado: tarjeta de cada personaje (cardContainer)
    fragment.appendChild(cardContainer); //7. se pega cada tarjeta al fragmento vacío
  });
  innerContentSection.appendChild(fragment); //8. el fragmento se pega a la pantalla (el DOM se actualiza una sola vez)
}

//2. FUNCIÓN PARA MOSTRAR LA PANTALLA DE VARITAS (opciones: Material - Núcleo)
/* function showWands() {
  clearInnerContent(); //se borra el contenido anterior que está en .inner-content

  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList = "section-title titulo-dorado";
  sectionTitle.textContent = "VARITAS";

  document.querySelector(".inner-content").innerHTML = `
  <div class="card-box">
    
    <div class="card">    
       <h5 class="material-card-title">MATERIAL</h5>
    </div>
  </div>

  <div class="card-box">
    
    <div class="card">
       <h5 class="core-card-title">NÚCLEO</h5>
    </div>
  </div>

  
  `;
}
 */
//3. FUNCIÓN PARA MOSTRAR LA PANTALLA DE VARITAS > MATERIAL
function showWand() {
  clearInnerContent(); //se borra el contenido anterior que está en .inner-content
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList = "section-title titulo-dorado";
  sectionTitle.textContent = "MADERA";
  console.log(filterByWand(charactersData));
  const wandData = filterByWand(charactersData);
  //filterByPatronus(charactersData)); = cada uno de los patronus patronus[0] = name y patronus[1] = patronus
  const innerContent = document.querySelector(".inner-content");

  wandData.forEach((character) => {
    const wandOwner = character[0];
    const wandName = character[1];
    const wandDescription = character[2];
    const wandImg = character[3];
    innerContent.innerHTML += `
    <div class="card-box">
      <div class="card">
      <div class="card-front">
        <img src="${wandImg}">
      </div>
      <div class="card-back">
        <ul class="card-info">
          <h1 class="card-title">${wandName}</h1>
          <br>
          <li>Pertenece a: ${wandOwner}</li>
          <br>
          <p>${wandDescription}</p>
        </ul>
      </div>
    </div>
  
  `;
  });
}
//4. FUNCIÓN PARA MOSTRAR LA PANTALLA DE VARITAS > NÚCLEO
function showWandsCore() {
  clearInnerContent(); //se borra el contenido anterior que está en .inner-content
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList = "section-title titulo-dorado";
  sectionTitle.textContent = "NÚCLEO";
  console.log(filterByCore(charactersData));
  const coreData = filterByCore(charactersData);
  //filterByPatronus(charactersData)); = cada uno de los patronus patronus[0] = name y patronus[1] = patronus
  const innerContent = document.querySelector(".inner-content");

  coreData.forEach((character) => {
    const coreOwner = character[0];
    const coreName = character[1];
    const coreDescription = character[2];
    const coreImg = character[3];
    innerContent.innerHTML += `
    <div class="card-box">
      <div class="card">
      <div class="card-front">
        <img src="${coreImg}">
      </div>
      <div class="card-back">
        <ul class="card-info">
          <h1 class="card-title">${coreName}</h1>
          <br>
          <li>Pertenece a: ${coreOwner}</li>
          <br>
          <p>${coreDescription}</p>
        </ul>
      </div>
    </div>
  
  `;
  });
}

//5. FUNCIÓN PARA MOSTRAR LA PANTALLA DE PATRONUS
function showPatronus() {
  clearInnerContent(); //se borra el contenido anterior que está en .inner-content
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList = "section-title titulo-dorado";
  sectionTitle.textContent = "PATRONUS";
  console.log(filterByPatronus(charactersData));
  const patronusData = filterByPatronus(charactersData);
  //filterByPatronus(charactersData)); = cada uno de los patronus patronus[0] = name y patronus[1] = patronus
  const innerContent = document.querySelector(".inner-content");

  patronusData.forEach((character) => {
    const patronusOwner = character[0];
    const patronusName = character[1];
    const patronusDescription = character[2];
    const patronusImg = character[3];
    innerContent.innerHTML += `
    <div class="card-box">
      <div class="card">
      <div class="card-front">
        <img src="${patronusImg}">
      </div>
      <div class="card-back">
        <ul class="card-info">
          <h1 class="card-title">${patronusName}</h1>
          <br>
          <li>Pertenece a: ${patronusOwner}</li>
          <br>
          <p>${patronusDescription}</p>
        </ul>
      </div>
    </div>
  
  `;
  });
}
