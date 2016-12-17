'use strict';

const areaCalc = (x, y, z) => {
  if (typeof x !== Number || typeof y !== Number || typeof z !== Number) {
    return `Please enter valid numbers.`;
  }

  const p = ((x + y + z) / 2);

  return (Math.sqrt(p * (p - x) * (p - y) * (p - z)));
};

 // console.log(areaCalc(3, 4, 5));

module.exports = areaCalc;
