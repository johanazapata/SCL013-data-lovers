//FOR DOM MANIPULATION

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

//agregando logo, h1 y botón al fragment
homepageFragment.appendChild(logoBox);
homepageFragment.appendChild(titulo);
homepageFragment.appendChild(alohomoraBtn);
//agregando fragment al root
root.appendChild(homepageFragment);



// CÓDIGO CON EL QUE ESTUVE JUGANDO DURANTE EL FINDE, SOLO PRÁCTICA, LO DEJÉ POR SI ALGO DE AHÍ NOS SIRVE DESPUÉS :D

/* import { example } from './data.js';
 */
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
/* import data from './data/potter/potter.js';
import { characters } from './data.js';
import { names } from './data.js';
import { patronus } from './data.js';
 */
/* console.log(data); //data is an array of objects, each object is a character
console.log(data[0].patronus); */
/* console.log(characters);
console.log(names);
console.log(`The ${patronus[0][1]} belongs to ${patronus[0][0]}`);
 */
/* 
let rootDiv = document.getElementById("root");
let fragment = new DocumentFragment;

let paragraph = document.createElement('p');
paragraph.textContent = "Hi, I'm a paragraph appended to a document fragment";
let paragraph2 = document.createElement('p');
paragraph2.textContent = "And I'm another paragraph appended to the same document fragment!";
let paragraph3 = document.createElement('p');
paragraph3.textContent = "... yep, I'm a new one!";

fragment.appendChild(paragraph);
fragment.appendChild(paragraph2);
fragment.appendChild(paragraph3);

rootDiv.appendChild(fragment); */



