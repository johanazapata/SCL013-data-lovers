//DATA MINPULATION (OBJECTS, ARRAYS, ETC.) - TESTs ARE RUN ON THIS FILE

//Filtrar por casa (membersByHouse: arreglo de personajes de una casa en particular)
export function filterByHouse(dataToFilter, condition) {
  let membersByHouse = dataToFilter.filter(
    (character) => character.house === condition
  );
  console.log("filter funciona bien");
  return membersByHouse;
}

export function filterWandByWood(dataToFilter) {
  return Object.entries(dataToFilter.wand)[0][1];
  
}

export function filterWandByCore(dataToFilter) {
  return Object.entries(dataToFilter.wand)[1][1];
}

/* export const names = characters.map(character => character.name);

const hasPatronus = characters.filter(character => character.patronus);

export const patronus = hasPatronus.map(character => {
  const owner = character.name;
  const patronus = character.patronus;
  const ownerAndPatronus = [owner, patronus];
  return ownerAndPatronus;
});
 */



/* CREANDO FLIP-CARD, CÓDIGO DE RESPALDO*/
  //5. crea una tarjeta con información de cada personaje
  /* const fragment = new DocumentFragment();
  houseMembers.forEach((character) => {
    const cardBox = document.createElement("div");
    cardBox.classList = "card-box";
    const cardBoxInner = document.createElement("div");
    cardBoxInner.classList = "card-inner"
    const cardBoxFront = document.createElement("div");
    cardBoxFront.classList = "card-front";
    cardBoxInner.appendChild(cardBoxFront);
    const cardBoxBack = document.createElement("div");
    cardBoxBack.classList = "card-back";
    cardBoxInner.appendChild(cardBoxBack);


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

    cardBoxFront.appendChild(cardBoxImg);
    cardBoxBack.appendChild(cardInfo);
    cardBox.appendChild(cardBoxInner);
    //RESULTADO: TARJETA DE CADA PERSONAJE (cardBox)
    fragment.appendChild(cardBox); //7. se pega cada tarjeta al fragmento vacío
  });
  innerContentSection.appendChild(fragment); //8. el fragmento se pega a la pantalla (el DOM se actualiza una sola vez)
  } */