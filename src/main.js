//FOR DOM MANIPULATION

  import data from './data/potter/potter.js';
  import {filterByHouse} from './data.js';

  const characters = data.map(character => character); //arreglo con todos los personajes
  
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
alohomoraBtn.addEventListener("click", () => {
  let houseMembers = filterByHouse(characters, "Gryffindor");
  return showHouseMembers(houseMembers);
});

//agregando logo, h1 y botón al fragment
homepageFragment.appendChild(logoBox);
homepageFragment.appendChild(titulo);
homepageFragment.appendChild(alohomoraBtn);
//agregando fragment al root
root.appendChild(homepageFragment);




//MENÚ PROVISORIO
//1. Casas, 2. Gryffindor, 3. Hufflepuff, 4. Slytherin
//5. Ravenclaw 6. Varitas 7. Material, 8.  Núcleo, 9. Patronus
function createMenu() {
  const menuBox = document.createElement('nav');

  //se crea cada uno de las opciones del menú
  for(let i = 0; i < 9; i++) {
    const menuItem = document.createElement('button');
    menuBox.appendChild(menuItem);
  }
  
  menuBox.childNodes[0].textContent = "Casas";

  menuBox.childNodes[1].textContent = "Gryffindor";
  menuBox.childNodes[1].addEventListener("click", () => {
    let gryffindorMembers = filterByHouse(characters, "Gryffindor");
    return showHouseMembers(gryffindorMembers);
  });

  menuBox.childNodes[2].textContent = "Hufflepuff";
  menuBox.childNodes[2].addEventListener("click", () => {
    let hufflepuffMembers = filterByHouse(characters, "Hufflepuff");
    return showHouseMembers(hufflepuffMembers);
  });

  menuBox.childNodes[3].textContent = "Slytherin";
  menuBox.childNodes[3].addEventListener("click", () => {
    let slytherinMembers = filterByHouse(characters, "Slytherin");
    return showHouseMembers(slytherinMembers);
  });

  menuBox.childNodes[4].textContent = "Ravenclaw";
  menuBox.childNodes[4].addEventListener("click", () => {
    let ravenclawMembers = filterByHouse(characters, "Ravenclaw");
    return showHouseMembers(ravenclawMembers);
  });

  menuBox.childNodes[5].textContent = "Material";
  menuBox.childNodes[6].textContent = "Núcleo";
  menuBox.childNodes[7].textContent = "Patronus";
  //RESULTADO: Menú creado y linkeado a cada pantalla
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
  document.body.insertAdjacentHTML('afterbegin', `
    <section class="dynamic-content">
      <header>
        <h1 class="section-title"></h1>
        <div class="small-logo-box">
          <!-- <img src="./Imagenes/wizards-unite-logo.png" alt="logo-small">-->
        </div>
      </header>
        <section class="inner-content">

        </section>
      
    </section>
  
  `);
}


///////////////////////////////////////////////////////////////////////////////////////
                                /* PANTALLAS */
///////////////////////////////////////////////////////////////////////////////////////

//1. FUNCIÓN PARA MOSTRAR LA PANTALLA DE CADA CASA
function showHouseMembers(houseMembers) {
  clearContent();  //1. limpia pantalla anterior
  createBasicStructure(); //2. crea estructura básica que se repite en cada pantalla
  createMenu(); //3. crea estructura del menú (provisorio)
  

  const innerContentSection = document.querySelector('.inner-content');
  const sectionTitle = document.querySelector('.section-title');
 
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
  const fragment = new DocumentFragment;
  houseMembers.forEach(character => {
      const cardBox = document.createElement('div');
      cardBox.classList = "card-box";
      const cardBoxImg = document.createElement('img');
      cardBoxImg.src = `${character.image}`;
      const cardInfo = document.createElement('ul');
      cardInfo.classList = "card-info";
      
      //6. se crean 4 elementos de lista para la información de cada personaje
      for (let i = 0; i < 5; i++) {
        let cardInfoLi = document.createElement('li');
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
