//DATA MINPULATION (OBJECTS, ARRAYS, ETC.) - TESTs ARE RUN ON THIS FILE

//Filtrar por casa (membersByHouse: arreglo de personajes de una casa en particular)
export function filterByHouse(dataToFilter, condition) {
  let membersByHouse = dataToFilter.filter(
    (character) => character.house === condition
  );
  console.log("filter funciona bien");
  return membersByHouse;
}

//Filtrar por el material/madera de la varita
export function filterWandByWood(dataToFilter) {
  const wandsAndOwner = dataToFilter.map(character => {
    const wand = Object.entries(character.wand)[0][1];
    const owner = character.name;
    const allWands = [owner, wand];
    return allWands;
  }
  );

  return wandsAndOwner;
  
}

//Filtrar por el núcleo de la varita
export function filterWandByCore(dataToFilter) {
  return Object.entries(dataToFilter.wand)[1][1];
}

//Filtrar por el patronus. El resultado es un array con muchos array [nombre, patronus, descripción]
export function filterByPatronus(dataToFilter) {
    const hasPatronus = dataToFilter.filter(character => character.patronus);
    const patronus = hasPatronus.map(character => {
      return [character.name, character.patronus];
    })

    return patronus; // patronus = [ ['harry', 'ciervo', 'descripción'], ['hermione', 'nutria', 'descripción'] ];
}





