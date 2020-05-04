//FOR DOM MANIPULATION

import charactersData from "./data/potter/potter.js";
import { filterByHouse } from "./data.js";

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
  let houseMembers = filterByHouse(charactersData, "Gryffindor");
  return showHouseMembers(houseMembers);
});

//agregando logo, h1 y botón al fragment
homepageFragment.appendChild(logoBox);
homepageFragment.appendChild(titulo);
homepageFragment.appendChild(alohomoraBtn);
//agregando fragment al root
root.appendChild(homepageFragment);


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
    <section id="general-section" class="dynamic-content">
      <header>
        <h1 class="section-title"></h1>
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

///////////////////////////////////////////////////////////////////////////////////////
/* PANTALLAS */
///////////////////////////////////////////////////////////////////////////////////////

//1. FUNCIÓN PARA MOSTRAR LA PANTALLA DE CADA CASA
function showHouseMembers(houseMembers) {
  clearContent(); //1. limpia pantalla anterior
  createBasicStructure(); //2. crea estructura básica que se repite en cada pantalla
  MenuPrincipal(); //3. crea estructura del menú (provisorio)

  const innerContentSection = document.querySelector(".inner-content");
  const sectionTitle = document.querySelector(".section-title");

  //4. modifica el color del título según la casa
  if (houseMembers[0].house === "Gryffindor") {
    sectionTitle.classList += " gryffindor-color";
    sectionTitle.textContent = "GRYFFINDOR";
  } else if (houseMembers[0].house === "Hufflepuff") {
    sectionTitle.classList += " hufflepuff-color";
    sectionTitle.textContent = "HUFFLEPUFF";
  } else if (houseMembers[0].house === "Slytherin") {
    sectionTitle.classList += " slytherin-color";
    sectionTitle.textContent = "SLYTHERIN";
  } else {
    sectionTitle.classList += " ravenclaw-color";
    sectionTitle.textContent = "RAVENCLAW";
  }

  //5. crea una tarjeta con información de cada personaje
  const fragment = new DocumentFragment();
  houseMembers.forEach((character) => {
    const cardBox = document.createElement("div");
    cardBox.classList = "card-box";
    const cardBoxImg = document.createElement("img");
    cardBoxImg.src = `${character.image}`;
    const cardInfo = document.createElement("ul");
    cardInfo.classList = "card-info";

    //6. se crean 4 elementos de lista para la información de cada personaje
    for (let i = 0; i < 5; i++) {
      let cardInfoLi = document.createElement("li");
      cardInfo.appendChild(cardInfoLi);
    }
    //cardInfo equivale a la lista, childNodes[x] a cada elemento
    cardInfo.childNodes[0].textContent = `Nombre: ${character.name}`;
    cardInfo.childNodes[1].textContent = `Género: ${character.gender}`;
    cardInfo.childNodes[2].textContent = `Fecha de nacimiento: ${character.yearOfBirth}`;
    cardInfo.childNodes[3].textContent = `Patronus: ${character.patronus}`;

    cardBox.appendChild(cardBoxImg);
    cardBox.appendChild(cardInfo);
    //RESULTADO: TARJETA DE CADA PERSONAJE (cardBox)
    fragment.appendChild(cardBox); //7. se pega cada tarjeta al fragmento vacío
  });
  innerContentSection.appendChild(fragment); //8. el fragmento se pega a la pantalla (el DOM se actualiza una sola vez)
}

function MenuPrincipal() {
  document.getElementById("general-section").insertAdjacentHTML(
    "afterbegin",
    `
<nav>
 <div class="item">
    <input type="checkbox" id="check1" />
    <label for="check1"class="bar1"></label>
    <label for="check1"class="bar2"></label>
    <label for="check1"class="bar3"></label>
    <ul>
    <div>
      <input type="checkbox" id="check2"/>
      <label for="check2" id="casas">CASAS</label>
      <li></li>
       <ul>
      <li id="Gryffindor"><a href="">Gryffindor</a></li>
      <li></li>
      <li id="Slytherin"><a href="">Slytherin</a></li>
      <li></li>
      <li id="Hufflepuff"><a href="">Hufflepuff</a></li>
      <li></li>
      <li id="Ravenclaw"><a href="">Ravenclaw</a></li>
      <li></li>
      </ul>
 </div>
     <div>
      <input type="checkbox" id="check3"/>
      <label for="check3">VARITAS</label>
      <li></li>
       <ul>
      <li id="Madera"><a href="">Madera</a></li>
      <li></li>
      <li id="Nucleo"><a href="">Núcleo</a></li>
      <li></li>
      </ul>
 </div>
 <div>
    <input type="checkbox" id="check4"/>
    <label for="check4">PATRONUS</label>
    <li></li> 
     </div> 
</nav>  
`
  );

  const Gryffindor = document.getElementById("Gryffindor");
  Gryffindor.addEventListener("click", (event) => {
    let gryffindorMembers = filterByHouse(charactersData, "Gryffindor");
    event.preventDefault();
    return showHouseMembers(gryffindorMembers);
  });

  const Slytherin = document.getElementById("Slytherin");
  Slytherin.addEventListener("click", (event) => {
    event.preventDefault();
    let slytherinMembers = filterByHouse(charactersData, "Slytherin");
    return showHouseMembers(slytherinMembers);
  });

  const Hufflepuff = document.getElementById("Hufflepuff");
  Hufflepuff.addEventListener("click", (event) => {
    event.preventDefault();
    let hufflepuffMembers = filterByHouse(charactersData, "Hufflepuff");
    return showHouseMembers(hufflepuffMembers);
  });

  const Ravenclaw = document.getElementById("Ravenclaw");
  Ravenclaw.addEventListener("click", (event) => {
    event.preventDefault();
    let ravenclawMembers = filterByHouse(charactersData, "Ravenclaw");
    return showHouseMembers(ravenclawMembers);
  });
}

function Escudos(Casas) {
  clearContent(); //1. limpia pantalla anterior
  createBasicStructure(); //2. crea estructura básica que se repite en cada pantalla
  MenuPrincipal(); //3. crea estructura del menú

  const innerContentSection = document.querySelector(".inner-content");
  const sectionTitle = document.querySelector(".section-title");
  `
  <div class="grilla">
    <img src = "./Imagenes/Casa Gryffindor.jpg" class="grid-item" id="Escudo1">
    <img src = "./Imagenes/Casa Ravenclaw.jpg" class="grid-item" id="Escudo2">
    <img src = "./Imagenes/Casa Hufflepuff.jpg" class="grid-item" id="Escudo3">
    <img src = "./Imagenes/Casa Slytherin.jpg" class="grid-item"id="Escudo4">
  </div>
`;

  const Escudo1 = document.getElementById("Gryffindor");
  Escudo1.addEventListener("click", (event) => {
    let gryffindorMembers = filterByHouse(charactersData, "Gryffindor");
    event.preventDefault();
    return showHouseMembers(gryffindorMembers);
  });
  const Escudo4 = document.getElementById("Slytherin");
  Escudo4.addEventListener("click", (event) => {
    event.preventDefault();
    let slytherinMembers = filterByHouse(charactersData, "Slytherin");
    return showHouseMembers(slytherinMembers);
  });

  const Escudo3 = document.getElementById("Hufflepuff");
  Escudo3.addEventListener("click", (event) => {
    event.preventDefault();
    let hufflepuffMembers = filterByHouse(charactersData, "Hufflepuff");
    return showHouseMembers(hufflepuffMembers);
  });

  const Escudo2 = document.getElementById("Ravenclaw");
  Escudo2.addEventListener("click", (event) => {
    event.preventDefault();
    let ravenclawMembers = filterByHouse(charactersData, "Ravenclaw");
    return showHouseMembers(ravenclawMembers);
  });
}
