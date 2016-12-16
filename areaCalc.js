 function areaCalc(x, y, z) {
   let p = ((x + y + z) / 2)
   return (Math.sqrt(p * (p - x) * (p - y) * (p - z)))
 }

 // console.log(areaCalc(7, 5, 10));

 module.exports = {
   areaCalc: areaCalc
 }
