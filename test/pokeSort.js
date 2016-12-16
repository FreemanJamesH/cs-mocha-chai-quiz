var expect = require('chai').expect
var program = require('../pokeSort.js').pokeSort

let pokeArray = [{
  id: 4,
  name: 'charmander',
  weight: 12.3
}, {
  id: 1,
  name: 'bulbasaur',
  weight: 22.4
}, {
  id: 7,
  name: 'squirtle',
  weight: 17.9
}, {
  id: 144,
  name: 'articuno',
  weight: 60.2
}];

let nameSort = [{
  id: 144,
  name: 'articuno',
  weight: 60.2
}, {
  id: 1,
  name: 'bulbasaur',
  weight: 22.4
}, {
  id: 4,
  name: 'charmander',
  weight: 12.3
}, {
  id: 7,
  name: 'squirtle',
  weight: 17.9
}];

let idSort = [{
  id: 1,
  name: 'bulbasaur',
  weight: 22.4
}, {
  id: 4,
  name: 'charmander',
  weight: 12.3
}, {
  id: 7,
  name: 'squirtle',
  weight: 17.9
}, {
  id: 144,
  name: 'articuno',
  weight: 60.2
}];

let weightSort = [{
  id: 4,
  name: 'charmander',
  weight: 12.3
}, {
  id: 7,
  name: 'squirtle',
  weight: 17.9
}, {
  id: 1,
  name: 'bulbasaur',
  weight: 22.4
}, {
  id: 144,
  name: 'articuno',
  weight: 60.2
}];

describe("Poke Sort", function() {
  it("Sorts by Name", function() {
    expect(program(pokeArray, 'name')).to.be.equal(nameSort);
  });

  it("Sorts by ID", function() {
    expect(program(pokeArray, 'id')).to.be.equal(idSort);
  });

  it("Sorts by Weight", function() {
    expect(program(pokeArray, 'weight')).to.be.equal(weightSort);
  });
});
