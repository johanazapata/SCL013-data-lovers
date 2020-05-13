//FOR DOM MANIPULATION
import charactersData from "./data/potter/potter.js";
import { filterByHouse, filterByWand, filterByCore, filterByPatronus, showPatronusNameOnly, sortByName, whoHasWandInfo} from "./data.js";
/* import { wandCore } from "./data.js";
import { wandWood } from "./data.js";   */

///////////////////////////////////////////////////////////////////////////////////////
/////////////////* HELPERS (FUNC. PARA COSAS PEQUEÑAS REPETITIVAS) *//////////////////
//////////////////////////////////////////////////////////////////////////////////////

//1.a. Borrar contenido de div#root (página de inicio)
function clearContent() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}

//1.b. Variable global que se utiliza muchas veces en todo el código para indicar la sección que se va actualizando con la data filtrada
let innerContentSection;

//1.c. Variable donde posteriormente se guarda la función para borrar el contenido de .inner-content
let clearInnerContentSection;

//2. Función para generar estructura básica que se repite en todas las páginas (header, título entre líneas, section.inner-content para ingresar el contenido dinámico)
function createBasicStructure() {
  document.body.innerHTML = `
  <section class="header">
    <nav id="navbar"></nav>
    <header>
        <div class="small-logo-box">
         <img src="./Imagenes/wizards-unite-logo.png" alt="logo-small">
        </div>     
      </header>
  </section>
    <section id="general-section" class="dynamic-content">
      <h1 class="section-title"></h1>
        <section class="inner-content">
        </section>
    </section>
  `;

  innerContentSection = document.querySelector(".inner-content");

  //función que nos devuelve a la pantalla de los escudos al hacer click en el logo
  const logoBox = document.querySelector(".small-logo-box");
  logoBox.addEventListener("click", (event) => {
    event.preventDefault();
    houses();
  });
  //función que permite borrar el contenido dinámico que se coloca en .inner-content
  clearInnerContentSection = function () {
    while (innerContentSection.firstChild) {
      innerContentSection.removeChild(innerContentSection.firstChild);
    }
  };
}


///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////* PANTALLA DE INICIO *///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
const root = document.getElementById("root");
root.innerHTML = `
  <div class="img-box">
    <img class="img-box-image" src="./Imagenes/wizards-unite-logo.png">
  </div>
  <h1 class="titulo-inicio">BASE DE DATOS PARA JUGADORES</h1>
  <button class="alohomora-button">Alohomora</button>

`;

const alohomoraBtn = document.querySelector(".alohomora-button");
alohomoraBtn.addEventListener("click", () => {
  clearContent(); //1. limpia pantalla de inicio que está en div#root
  return houses();
});


///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////* MENÚ  *////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
function mainMenu() {
  document.getElementById("navbar").innerHTML = `   
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
    </ul>
 
`;

  //EVENT LISTENER PARA LAS OPCIONES DEL MENÚ

  //Casas > Gryffindor, Slytherin, Hufflepuff, Ravenclaw
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

  //Lleva a Varitas-Madera
  const wand = document.getElementById("check3");
  wand.addEventListener("click", (event) => {
    event.preventDefault();
    showWood();
  });
  //Lleva a Varitas-Núcleo
  const core = document.getElementById("check4");
  core.addEventListener("click", (event) => {
    event.preventDefault();
    showCore();
  });
  //Lleva a Patronus
  const patronus = document.querySelector("#check5");
  patronus.addEventListener("click", () => {
    showPatronus();
  });
  //Lleva a Noticias
  const noticias = document.querySelector("#check6");
  noticias.addEventListener("click", () => {
    event.preventDefault();
    noticiasHarry();
  });
}

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////* BIENVENIDA SEGÚN PANTALLA */////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
const welcomeMessages = [
  "El Colegio Hogwarts de Magia y Hechiceria utiliza el sistema de Casas. Los estudiantes de Hogwarts se divide en cuatro Casas, las cuales son: Gryffindor, Hufflepuff, Ravenclaw y Slytherin. El que elige a que casa van a ir cada estudiante es el Sombrero Seleccionador.",

  "Bienvenidos a Gryfindor , casa fundada por Godric Gryffindor. Nuestros alummnos se caracterizan por su Valentia, Caballerosidad y Atrevimiento. El elemento de la casa es Fuego, los colores Rojo y Oro  y la reliquia es la Espada.",

  "Bienvenidos a  Haufflepuff, casa fundada por Helga Hufflepuff. Nuestros alummnos son Leales, Justos y Trabajadores. El elemento de la casa es la Tierra, los colores Amarillo y Negro y el Tejón es el animal que nos representa.",

  "Bienvenidos a Slyterin, fundada por Salazar Slytherin. La Ambición, Astucia y Determinación son las principales caracteriasticas de nuestro alumnos. El elemento de la casa es Agua, sus colores Verde y Palteado y el animal es una Serpiente.",

  "Bienvenidos a  Ravenclaw, fundada por Rowena Ravenclaw. Las caracteriasticas fundamentales de nuestros alumnos son: Inteligencia, Erudición y Creatividad. Nuestro elemento es el aire, Azul y Bronces los colores y el Águila el animal de la casa.",

  "Una varita es un instrumento mágico casi sensible a través del cual una bruja o mago canaliza su poder mágico para centralizar los efectos para obtener resultados más complejos.",

  "El núcleo de una varita es una sustancia mágica colocada dentro de la longitud de la madera, generalmente extraída de una criatura mágica.",

  "Patronus, es un encantamiento utilizado para repeler a los Dementores. Debe ser conjurado mediante la pronunciación del encantamiento Expecto Patronum (del latín Expecto/Esperar y Patronum/Protector), el cual creará una barrera entre el mago y el Dementor."

];

const hogwartsWelcome = welcomeMessages[0]
const gryffindorWelcome = welcomeMessages[1];
const hufflepuffWelcome = welcomeMessages[2];
const slytherinWelcome = welcomeMessages[3];
const ravenclawWelcome = welcomeMessages[4];
const woodsWelcome = welcomeMessages[5];
const coresWelcome = welcomeMessages[6];
const patronusWelcome = welcomeMessages[7];
const newsWelcome = welcomeMessages[8];


///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////* PANTALLAS */////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//0. PANTALLA DE ESCUDOS
function houses() {
  createBasicStructure(); //se crea una sola vez la estructura básica (se mantiene)
  mainMenu(); //se crea una sola vez la estructura del menú (se mantiene)

  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList += " titulo-dorado";
  sectionTitle.textContent = "CASAS";
  //Bienvenida de Hogwarts
  innerContentSection.innerHTML = `
      <p class="parrafo"></p>
  
  `;
  const welcomeParagraph = document.querySelector(".parrafo");
  welcomeParagraph.textContent = hogwartsWelcome;
  innerContentSection.appendChild(welcomeParagraph);
  innerContentSection.innerHTML += `

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
    let hufflepuffMembers = filterByHouse(charactersData, "Hufflepuff");
    return showHouseMembers(hufflepuffMembers);
  });

  const EscudoSly = document.getElementById("EscudoSly");
  EscudoSly.addEventListener("click", (event) => {
    event.preventDefault();
    let slytherinMembers = filterByHouse(charactersData, "Slytherin");
    return showHouseMembers(slytherinMembers);
  });
}


//1. PANTALLA DE CADA CASA
function showHouseMembers(houseMembers) {
  clearInnerContentSection(); //se borra el contenido anterior
  sortByName(houseMembers); //se ordenan los personajes de A > Z
  const sectionTitle = document.querySelector(".section-title");
  
  //Bienvenida a cada Casa
   innerContentSection.innerHTML = `
      <p class="parrafo"></p>
  
  `;
  const welcomeParagraph = document.querySelector(".parrafo");

  //Modificación del color del título y de la presentación según casa (obtenida del primer objeto de cada grupo en houseMembers)
  const firstHouseMember = houseMembers[0];
  if (firstHouseMember.house === "Gryffindor") {
    sectionTitle.classList = "section-title gryffindor-color";
    sectionTitle.textContent = "GRYFFINDOR";
    welcomeParagraph.textContent = gryffindorWelcome;
  } else if (firstHouseMember.house === "Hufflepuff") {
    sectionTitle.classList = "section-title hufflepuff-color";
    sectionTitle.textContent = "HUFFLEPUFF";
    welcomeParagraph.textContent = hufflepuffWelcome;
  } else if (firstHouseMember.house === "Slytherin") {
    sectionTitle.classList = "section-title slytherin-color";
    sectionTitle.textContent = "SLYTHERIN";
    welcomeParagraph.textContent = slytherinWelcome;
  } else {
    sectionTitle.classList = "section-title ravenclaw-color";
    sectionTitle.textContent = "RAVENCLAW";
    welcomeParagraph.textContent = ravenclawWelcome;
  }
   
  
  houseMembers.forEach((character) => {
    let patronusName = showPatronusNameOnly(character);
    let wandInfo = whoHasWandInfo(character);
    innerContentSection.insertAdjacentHTML('beforeend', `
        <div class="card-box">
        <div class="card">
          <div class="card-front">
            <p class="transparent-card-title">${character.name}</p><img
              src="${character.image}">
          </div>
          <div class="card-back">
            <ul class="card-info">
              <h1 class="card-title">${character.name}</h1>
              <li>Género: ${character.gender}</li>
              <li>Año de nacimiento: ${character.yearOfBirth}</li>
              <li>Patronus: ${patronusName}</li>
              <li> Varita: ${wandInfo}</li>
            </ul>
          </div>
        </div>
      </div>
    `);
  });
}

//2. PANTALLA DE VARITAS > MATERIAL
function showWood() {
  clearInnerContentSection(); //se borra el contenido anterior
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList = "section-title titulo-dorado";
  sectionTitle.textContent = "MADERA";

  //Bienvenida Pantalla Madera
  innerContentSection.innerHTML = `
      <p class="parrafo"></p>
  
  `;
  const welcomeParagraph = document.querySelector(".parrafo");
  welcomeParagraph.textContent = woodsWelcome;
  innerContentSection.appendChild(welcomeParagraph);

  const wandData = filterByWand(charactersData);
  wandData.forEach((character) => {
    const wandOwner = character[0];
    const wandName = character[1];
    const wandDescription = character[2];
    const wandImg = character[3];
    innerContentSection.innerHTML += `
    <div class="card-box">
      <div class="card">
      <div class="card-front">
        <p class="transparent-card-title wand-card-title">${wandName}</p>
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
//3. PANTALLA DE VARITAS > NÚCLEO
function showCore() {
  clearInnerContentSection(); //se borra el contenido anterior
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList = "section-title titulo-dorado";
  sectionTitle.textContent = "NÚCLEO";

  ///Bienvenida Pantalla Núcleo
  innerContentSection.innerHTML = `
      <p class="parrafo"></p>
  
  `;
  const welcomeParagraph = document.querySelector(".parrafo");
  welcomeParagraph.textContent = coresWelcome;
  innerContentSection.appendChild(welcomeParagraph);

  const coreData = filterByCore(charactersData);
  coreData.forEach((character) => {
    const coreOwner = character[0];
    const coreName = character[1];
    const coreDescription = character[2];
    const coreImg = character[3];
    innerContentSection.innerHTML += `
    <div class="card-box">
      <div class="card">
      <div class="card-front">
        <p class="transparent-card-title">${coreName}</p>
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

//4. PANTALLA DE PATRONUS
function showPatronus() {
  clearInnerContentSection(); //se borra el contenido anterior
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList = "section-title titulo-dorado";
  sectionTitle.textContent = "PATRONUS";
  
  ///Bienvenida Pantalla Patronus
  innerContentSection.innerHTML = `
      <p class="parrafo"></p>
  
  `;
  const welcomeParagraph = document.querySelector(".parrafo");
  welcomeParagraph.textContent = patronusWelcome;
  innerContentSection.appendChild(welcomeParagraph);

  const patronusData = filterByPatronus(charactersData);
  patronusData.forEach((character) => {
    const patronusOwner = character[0];
    const patronusName = character[1];
    const patronusDescription = character[2];
    const patronusImg = character[3];
    innerContentSection.innerHTML += `
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

//5. PANTALLA DE PATRONUS
function noticiasHarry() {
  clearInnerContentSection(); //borra el contenido anterior
  const sectionTitle = document.querySelector(".section-title");
  sectionTitle.classList += " titulo-dorado";
  sectionTitle.textContent = "NOTICIAS";

  ///Bienvenida Pantalla Noticias
  innerContentSection.innerHTML = `
      <p class="parrafo"></p>
  
  `;
  const welcomeParagraph = document.querySelector(".parrafo");
  welcomeParagraph.textContent = newsWelcome;
  innerContentSection.appendChild(welcomeParagraph);
  innerContentSection.innerHTML += `
  
<div class="grid">
<img style="-webkit-user-select: none;margin: auto;cursor: zoom-in;" src="https://i.gifer.com/Bmem.gif" width="394" height="625"></img>
<img style="-webkit-user-select: none;margin: auto;cursor: zoom-in;" src="https://i.pinimg.com/originals/7e/7e/64/7e7e64774dfa76fa78c7ff9ec0e8c2be.gif" width="394" height="625">
<img style="-webkit-user-select: none;margin: auto;cursor: zoom-in;" src="https://3.bp.blogspot.com/-6_b7S5eI9E8/W-2cfOWfrQI/AAAAAAAANsQ/MiNO-7GaJzUVzI570PNJ7cjl7AKd_QkFACK4BGAYYCw/s1600/tumblr_mwbw366JFJ1rrrafbo1_r1_500.gif" <img style="-webkit-user-select: none;margin: auto;cursor: zoom-in;" src="https://66.media.tumblr.com/ab5ac61ded6b74ac87096281783f3ba8/tumblr_oaycdg1N6c1v4x4oqo1_1280.gifv" width="394" height="625"></img>
<img style="-webkit-user-select: none;margin: auto;cursor: zoom-in;" src="https://1.bp.blogspot.com/-vdV5enNSVc4/Vz20kYrJa0I/AAAAAAAAAgw/V8scCw7xMZQKJXnDdbFOijpD-Alf97RewCLcB/s1600/Daily-Prophet-Sports.gif" width="394" height="625">
</div>
`;
}
