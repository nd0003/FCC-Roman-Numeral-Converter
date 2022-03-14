/* 
In the JS console, write the following to convert a decimal number of your choice to its Roman numeral form: 
convertToRoman() 
You put the number you wish to convert in the brackets.
*/

//variables
function convertToRoman(number) {
var rom = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];
var blank = [];
//converter
rom.forEach(function(p) {
  while (number >= p[1]) {
      blank.push(p[0]);
      number -= p[1];
      }
    });
  return blank.join('');
}
