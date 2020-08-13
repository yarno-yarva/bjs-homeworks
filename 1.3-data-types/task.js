function calculateTotalMortgage(percent, contribution, amount, date) {
"use strict";

   let dateNow = new Date();
   let month = date.getMonth() - dateNow.getMonth() + (12 * (date.getFullYear() - dateNow.getFullYear()));

   if (isNaN(percent + contribution + amount + month) == true) {
     console.error('Ошибка ввода данных - введите числовые значения');
     return;
   } 
   let p = percent /100 /12;
   let payment = (amount - contribution) * (p + p/(((1 + p)** month) - 1)); 
   let totalAmount = (payment * month).toFixed(2);
   return totalAmount;
}

function getGreeting(name) {

if (name == null || name == "" || name == undefined) {
  name = "Аноним";
} 

let str = `Привет, мир! Меня зовут ${name}`;

return str;

}