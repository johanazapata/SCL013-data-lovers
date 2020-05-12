//FOR DOM MANIPULATION

import charactersData from "./data/potter/potter.js";
import { filterByHouse } from "./data.js";
import { filterByPatronus } from "./data.js";
import { filterByWand } from "./data.js";
import { filterByCore } from "./data.js";
import { patronusNameOnly } from "./data.js";
import { wandCore } from "./data.js";
import { wandWood } from "./data.js";  

//PANTALLA DE INICIO
const root = document.getElementById("root");
const homepageFragment = new DocumentFragment(); //aquí se agregan todos los elementos, luego este fragmento se agrega al root, así solo se actualiza una vez y podemos agregar imagen, h1 y botón al mismo tiempo

const logoBox = document.createElement("div");
const logo = document.createElement("img");

logoBox.classList = "img-box";
logo.classList = "img-box-image";

logo.src = "./Imagenes/wizards-unite-logo.png";

logoBox.appendChild(logo);
//root.appendChild(logoBox); //esto fue reemplazado por root.appendChild(homepageFragment)

const titulo = document.createElement("h1");
titulo.textContent = "BASE DE DATOS PARA JUGADORES";
titulo.classList = "titulo-inicio";
//root.appendChild(titulo); //esto fue reemplazado por root.appendChild(homepageFragment)

const alohomoraBtn = document.createElement("button");
alohomoraBtn.classList = "alohomora-button";
alohomoraBtn.textContent = "Alohomora";
alohomoraBtn.addEventListener("click", () => {
  clearContent(); //1. limpia pantalla de inicio que está en div#root
  return Houses();
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
  //función que nos devuelve a la pantalla de los escudos al hacer click en el logo
  const logoBox = document.querySelector(".small-logo-box");
  logoBox.addEventListener("click", (event) => {
    event.preventDefault();
    Houses();
  });
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
      <input type="checkbox" id="check7"/>
      <label for="check7">VARITAS</label>
      <ul>
      <li id="check3"><a href="">Madera</a></li>
      <li id="check4"><a href="">Núcleo</a></li>
       </ul>
 </div>
<div class="item">
    <input type="checkbox" id="check5"/>
    <label for="check5">PATRONUS</label>
     </div> 

  <div class="item">
    <input type="checkbox" id="check6"/>
    <label for="check6">NOTICIAS</label>
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

  //lleva a Varitas-Madera
  const wand = document.getElementById("check3");
  wand.addEventListener("click", (event) => {
    event.preventDefault();
    showWand();
  });
  //lleva a Varitas-Núcleo
  const core = document.getElementById("check4");
  core.addEventListener("click", (event) => {
    event.preventDefault();
    showWandsCore();
  });
  //lleva a Patronus
  const patronus = document.querySelector("#check5");
  patronus.addEventListener("click", () => {
    showPatronus();
  });
  //lleva a Datos Curiosos
  const noticias = document.querySelector("#check6");
  noticias.addEventListener("click", () => {
    event.preventDefault();
    noticiasHarry();
  });
}

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////* PANTALLAS */////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//0. FUNCIÓN PARA MOSTRAR LA PANTALLA DE LOS ESCUDOS
function Houses() {
  createBasicStructure(); //2. crea una sola vez la estructura básica que se repite en cada pantalla (esta estructura se mantiene en el resto de las pantallas)
  MenuPrincipal(); //3. crea una sola vez la estructura del menú

  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList += " titulo-dorado";
  sectionTitle.textContent = "CASAS";
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
  //Bienvenida a cada Casa
  const welcomeMembers = document.createElement("parrafo");
  welcomeMembers.classList = "parrafo";
  welcomeMembers.textContent = "";
  innerContentSection.appendChild(welcomeMembers);

  //Frase de Costado
  const fraseMembers = document.createElement("p");
  fraseMembers.classList = "p";
  fraseMembers.textContent = "HOLA";
  sectionTitle.appendChild(fraseMembers);

  //4. modifica el color del título según la casa del primer miembro del grupo
  const firstHouseMember = houseMembers[0];
  if (firstHouseMember.house === "Gryffindor") {
    sectionTitle.classList = "section-title gryffindor-color";
    sectionTitle.textContent = "GRYFFINDOR";
    welcomeMembers.textContent =
      "Bienvenidos a Gryfindor , casa fundada por Grodic Gryffindor. Nuestros alummnos se caracterizan por su Valentia, Caballerosidad y Atrevimiento. El elemento de la casa es Fuego, los colores Rojo y Oro  y la reliquia es la Espada.";
  } else if (firstHouseMember.house === "Hufflepuff") {
    sectionTitle.classList = "section-title hufflepuff-color";
    sectionTitle.textContent = "HUFFLEPUFF";
    welcomeMembers.textContent =
      "Bienvenidos a  Haufflepuff, casa fundada por Helga Hufflepuff. Nuestros alummnos son Leales, Justos y Trabajadores. El elemento de la casa es la Tierra, los colores Amarillo y Negro y el Tejón es el animal que nos representa.";
  } else if (firstHouseMember.house === "Slytherin") {
    sectionTitle.classList = "section-title slytherin-color";
    sectionTitle.textContent = "SLYTHERIN";
    welcomeMembers.textContent =
      "Bienvenidos a Slyterin, fundada por Salazar Slytherin. La Ambición, Astucia y Determinación son las principales caracteriasticas de nuestro alumnos. El elemento de la casa es Agua, sus colores Verde y Palteado y el animal es una Serpiente.";
  } else {
    sectionTitle.classList = "section-title ravenclaw-color";
    sectionTitle.textContent = "RAVENCLAW";
    welcomeMembers.textContent =
      "Bienvenidos a  Ravenclaw, fundada por Rowena Ravenclaw. Las caracteriasticas fundamentales de nuestros alumnos son: Inteligencia, Erudición y Creatividad. Nuestro elemento es el aire, Azul y Bronces los colores y el Águila el animal de la casa.";
  }

  //5. crea una tarjeta con información de cada personaje
  const fragment = new DocumentFragment();
  houseMembers.forEach((character) => {
    //General card structure
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
    const transparentCardTitle = document.createElement("p");
    transparentCardTitle.classList = "transparent-card-title";
    const cardBack = document.createElement("div");
    cardBack.classList = "card-back";
    const cardTitle = document.createElement("h1");
    cardTitle.classList = "card-title";
    cardInfo.appendChild(cardTitle);

    //Front
    transparentCardTitle.textContent = `${character.name}`;

    //Back
    for (let i = 0; i < 4; i++) {
      let cardInfoLi = document.createElement("li");
      cardInfo.appendChild(cardInfoLi);
    }

    const nameTitle = cardInfo.childNodes[0];
    const genderLi = cardInfo.childNodes[1];
    const yearOfBirthLi = cardInfo.childNodes[2];
    const patronusLi = cardInfo.childNodes[3];

    //cardTitle es el título donde va el nombre del personaje
    nameTitle.textContent = `${character.name}`;
    //cardInfo equivale a la lista, childNodes[x] a cada elemento
    genderLi.textContent = `Género: ${character.gender}`;

    //por si el personaje no tiene año de nacimiento
    if (character.yearOfBirth === "") {
      yearOfBirthLi.textContent = `Año de nacimiento: Información no disponible`;
    } else {
      yearOfBirthLi.textContent = `Año de nacimiento: ${character.yearOfBirth}`;
    }

    //por si el personaje no tiene patronus
    if (character.patronus === "") {
      patronusLi.textContent = `Patronus: Información no disponible`;
    } else {
      patronusLi.textContent = `Patronus: ${patronusNameOnly(character)}`;
    }


    console.log(wandWood(character)[0][1]);
    //por si el personaje 1) no tiene varita, 2) solo tiene madera 3) tiene madera y núcleo
    /* if (wandWood(character) === "" && wandCore(character) === "") {
      cardInfo.childNodes[4].textContent = `Varita: Información no disponible`;
    } else if (wandWood(character) && wandCore(character) === "") {
      cardInfo.childNodes[4].textContent = `Varita: ${wandWood(character)}`;
    } else {
      cardInfo.childNodes[4].textContent = `Varita: ${wandWood(
        character
      )} con núcleo de ${wandCore(character)}`;
    }   */ 


    //Card elements are attached accordingly
    cardFront.appendChild(transparentCardTitle);
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

//3. FUNCIÓN PARA MOSTRAR LA PANTALLA DE VARITAS > MATERIAL
function showWand() {
  clearInnerContent(); //se borra el contenido anterior que está en .inner-content
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList = "section-title titulo-dorado";
  sectionTitle.textContent = "MADERA";
  console.log(filterByWand(charactersData));
  const wandData = filterByWand(charactersData);
  //Bienvenida Pantalla Núcleo
  const innerContent = document.querySelector(".inner-content");
  const welcomeWand = document.createElement("parrafo");
  welcomeWand.classList = "parrafo";
  welcomeWand.textContent =
    "Una varita es un instrumento mágico casi sensible a través del cual una bruja o mago canaliza su poder mágico para centralizar los efectos para obtener resultados más complejos.";
  innerContent.appendChild(welcomeWand);

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
  //filterByCore(charactersData));
  const innerContent = document.querySelector(".inner-content");
  //Bienvenida Pantalla Núcleo
  const welcomeCore = document.createElement("parrafo");
  welcomeCore.classList = "parrafo";
  welcomeCore.textContent =
    "El núcleo de una varita es una sustancia mágica colocada dentro de la longitud de la madera, generalmente extraída de una criatura mágica.";
  innerContent.appendChild(welcomeCore);

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
  //Bienvenida a la sección de Patronus
  const welcomePatronus = document.createElement("parrafo");
  welcomePatronus.classList = "parrafo";
  welcomePatronus.textContent =
    "Patronus, es un encantamiento utilizado para repeler a los Dementores. Debe ser conjurado mediante la pronunciación del encantamiento Expecto Patronum (del latín Expecto/Esperar y Patronum/Protector), el cual creará una barrera entre el mago y el Dementor.";
  innerContent.appendChild(welcomePatronus);

  patronusData.forEach((character) => {
    const patronusOwner = character[0];
    const patronusName = character[1];
    const patronusDescription = character[2];
    const patronusImg = character[3];
    innerContent.innerHTML += `
    <div class="card-box">
      <div class="card">
      <div class="card-front">
        <p class="transparent-card-title">${patronusName}</p>
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

function noticiasHarry() {
  createBasicStructure(); //2. crea una sola vez la estructura básica que se repite en cada pantalla (esta estructura se mantiene en el resto de las pantallas)
  MenuPrincipal(); //3. crea una sola vez la estructura del menú

  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList += " titulo-dorado";
  sectionTitle.textContent = "NOTICIAS";

  document.querySelector(".inner-content").innerHTML = `
  
  <div class="contenedor">
  <h1>"Daniel Radcliffe se reencuentra con Harry Potter públicamente tras casi una década"</h1>
    <video src = "./Imagenes/noticiasHarry.mp4">
   
  </div>
`;
}
