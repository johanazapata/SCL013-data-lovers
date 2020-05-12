import { filterByHouse } from "../src/data.js";
import { filterByPatronus } from "../src/data.js";
import { filterByWand } from '../src/data.js';
import { filterByCore } from '../src/data.js';

/* 
test("función que muestre los personajes de cada casa", () => {
  const data = [
    { name: "Harry Potter" },
    { name: "Hermione Granger" },
    { name: "Ron Weasly" },
  ];

  const showHouseMembers = ["Harry Potter", "Hermione Granger", "Ron Weasly"];
  expect(houseMembers(data, "Gryffindor")).toEqual(showHouseMembers);

});

import { filterByHouse } from "../src/data.js";
import { filterByPatronus } from "../src/data.js";
=======
}); */


describe('filterByHouse', () => {
  test('is a function', () => {
    expect(typeof filterByHouse).toBe('function');
  })
})


describe("filterByHouse", () => {
  test("is a function", () => {
    expect(typeof filterByHouse).toBe("function");
  });
});


describe("Patronus filter-function", () => {
  test("Should return patronus name, owner, description and image by data given", () => {
    const dataToFilter = [
      {
        name: "Harry Potter",

        patronus: {
          name: "Ciervo",
          descripcion:
            "El Patronus de Harry tiene la forma de Animagus al igual que el Patronus de su padre. Aprendió a conjurarlo a una edad excepcionalmente temprana.",
          image: "./Imagenes/ciervo.jpg",
        },
      },
    ];

    const output = [
      [
        "Harry Potter",
        "Ciervo",
        "El Patronus de Harry tiene la forma de Animagus al igual que el Patronus de su padre. Aprendió a conjurarlo a una edad excepcionalmente temprana.",
        "./Imagenes/ciervo.jpg",
      ],
    ];

    expect(filterByPatronus(dataToFilter)).toEqual(output);
  });
});

describe('Wand filter function', () => {
  test('Should return wand owner, wood, description and image by data given', () => {
    const dataToFilter = [{
      name: "Harry Potter",
      wand: {
        wood: "Acebo",
        descripcion: "Las varitas de acebo trabajan muy feliz para aquellos que pueden necesitar ayuda para superar una tendencia a la ira y la impetuosidad.",
        image: "./Imagenes/varita.jpg",
      }
    }];

    const output = [
      ["Harry Potter", "Acebo", "Las varitas de acebo trabajan muy feliz para aquellos que pueden necesitar ayuda para superar una tendencia a la ira y la impetuosidad.", "./Imagenes/varita.jpg"]
    ];
    expect(filterByWand(dataToFilter)).toEqual(output);

  });
});

describe('Core filter function', () => {
  test('Should return wand owner, core, description and image by data given', () => {
    const dataToFilter = [{
      name: "Harry Potter",
      core: {
        name: "Pluma de fénix",
        descripcion: "La pluma de fénix es el tipo de núcleo para varitas más raro. Las plumas de fénix pueden producir una amplia gama de efectos mágicos, aunque pueden tomarse más tiempo que las varitas de unicornio o de dragón para mostrarlo.",
        image: "./Imagenes/Fenix2.jpg",
      }
    }];

    const output = [
      ["Harry Potter", "Pluma de fénix", "La pluma de fénix es el tipo de núcleo para varitas más raro. Las plumas de fénix pueden producir una amplia gama de efectos mágicos, aunque pueden tomarse más tiempo que las varitas de unicornio o de dragón para mostrarlo.", "./Imagenes/Fenix2.jpg"]
    ];
    expect(filterByCore(dataToFilter)).toEqual(output);

  });
});



