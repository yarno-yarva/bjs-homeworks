function getResult(a,b,c){

let d;
let x = [];

    
d = b**2 - 4 * a * c;


if (d > 0) {
	x[0] = (-b + Math.sqrt(d)) / 2 * a ;
	x[1] = (-b - Math.sqrt(d)) / 2 * a ;
} else if (d == 0) { 
	x[0] = (-b + Math.sqrt(d)) / 2 * a ;
} else { x = []; }

return x;

} 


function getAverageMark(marks){

let marks5;

if (marks.length == 0) {
 marks5 = [0];
} else if (marks.length <= 5) { marks5 = marks;
} else if (marks.length > 5) {
  marks5 = marks.slice(0,5);
} 

let averageMark = marks5.reduce((a, b) => (a + b)) / marks5.length;
    

     return averageMark;
}

function askDrink(name,dateOfBirthday){
    
let date = new Date();
let year = date.getFullYear();
let yearsOfBirthday = dateOfBirthday.getFullYear();

if  ( year - yearsOfBirthday > 18) {
  result = `Не желаете ли олд-фэшн, ${name}?`;
} else { 
  result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
}
    
     return result;
}