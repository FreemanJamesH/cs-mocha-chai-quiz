'use strict';

const assert = require(`chai`).assert;
const areaCalc = require(`../areaCalc`);
const poke = require(`../pokeSort`);

describe(`areaCalc`, () => {
  it(`calculates the area of a triangle`, () => {
    assert(areaCalc(3, 5, 4), 6);
  });
  it(`checks for valid input`, () => {
    const error = `Please enter valid numbers.`;
    assert(areaCalc(), error);
    assert(areaCalc(NaN, `a`, {}), error);
  });
});

describe(`pokeSort`, () => {
  it(`sorts pokemon by name`, () => {
    assert(poke.pokeSort(poke.pokeArray, `name`), [
      { id: 144, name: `articuno`, weight: 60.2 },
      { id: 1, name: `bulbasaur`, weight: 22.4 },
      { id: 4, name: `charmander`, weight: 12.3 },
      { id: 7, name: `squirtle`, weight: 17.9 },
    ]);
  });

  it(`sorts pokemon by id`, () => {
    assert(poke.pokeSort(poke.pokeArray, `id`), [
      { id: 1, name: `bulbasaur`, weight: 22.4 },
      { id: 4, name: `charmander`, weight: 12.3 },
      { id: 7, name: `squirtle`, weight: 17.9 },
      { id: 144, name: `articuno`, weight: 60.2 },
    ]);
  });

  it(`sorts pokemon by weight`, () => {
    assert(poke.pokeSort(poke.pokeArray, `weight`), [
      { id: 4, name: `charmander`, weight: 12.3 },
      { id: 7, name: `squirtle`, weight: 17.9 },
      { id: 1, name: `bulbasaur`, weight: 22.4 },
      { id: 144, name: `articuno`, weight: 60.2 },
    ]);
  });
});
