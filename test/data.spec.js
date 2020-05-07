import { filterByHouse } from '../src/data.js';
import { filterByPatronus } from '../src/data.js';
import { charactersData } from '../src/data/potter/potter.js';


describe('filterByHouse', () => {
  test('is a function', () => {
    expect(typeof filterByHouse).toBe('function');
  })
})

test('Returns patronus name, owner and description', () => {
  expect(filterByPatronus(dataToFilter)).toContain('stag');
})





