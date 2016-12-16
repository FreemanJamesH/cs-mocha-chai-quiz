var expect = require('chai').expect
var program = require('../areaCalc.js').areaCalc

describe("Area Calc", function() {
  it('Calculates area of 3, 4, 5 to equal 6', function() {
    expect(program(3, 4, 5)).to.be.equal(6)
  })
  it('Calculates area of 7, 5, 10 to equal 16.24807680927192', function() {
    expect(program(7, 5, 10)).to.be.equal(16.24807680927192)
  })
})
