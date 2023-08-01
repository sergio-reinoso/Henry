'use strict';

function BinarioADecimal(num) {

   //Solucion del instructor
   let sum = 0;
   let array = num.split('').reverse();

   for (let i = 0; i < array.length; i++) {

      sum += array[i] * 2 **i;

   }

   return sum;

   // let decimal = 0;

   // for ( let i = 0; i < num.length; i++ ){
   //    const nummeroBinario = num[num.length - 1 - i];
   //    decimal += nummeroBinario * Math.pow(2, i);
   // }
   // return decimal;
}
console.log(BinarioADecimal('1520465'));


function DecimalABinario(num) {

   let stringBinario = '';

   while ( num > 0 ) {
      const residuo = num % 2;
      stringBinario = residuo.toString() + stringBinario;
      num = Math.floor(num / 2);
   }

   return stringBinario;

}
console.log(DecimalABinario(1202));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
