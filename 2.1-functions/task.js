function getSolutions( a, b, c ) {

let d = b**2 - 4 * a * c;

if (d < 0) {
	return { D: d, roots: [] }
} else if (d == 0) {
   let x1 =  (-b + Math.sqrt(d)) / 2 * a ;
    return { D: d, roots: [x1] }
} else {
	let x1 =  (-b + Math.sqrt(d)) / 2 * a ;
	let x2 =  (-b - Math.sqrt(d)) / 2 * a ;
	return { D: d, roots: [x1, x2] }
}
}

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions( a, b, c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
  console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]} X₂ = ${result.roots[1]}`);
  }
}


function getAverageScore(data) {
  
   function getAverageMark(marks){
     return averageMark = marks.reduce((a, b) => (a + b)) / marks.length;;
   }
   
   let temp = [];

   for (let prop in data) {
   let value = getAverageMark (data [ prop ]);
   temp.push(value);
   console.log(`${prop}: ${value}`);
  
}
console.log(`average : ${getAverageMark(temp)}`);

 }


// console.log(getAverageScore ( {
//   algebra: [2,4,5,2,3,4],
//   geometry: [2,3,4],
//   russian: [3, 3, 4, 5],
//   frances: [2,3,4], 
// }));

function getPersonData(secretData) {

  let data = new Object();

    data.firstName = secretData.aaa,  
    data.lastName = secretData.bbb; 
     
   for (let prop in data) {
   let secret = (data [ prop ]);
   console.log(`${prop}: ${getDecodedValue(secret)}`);
   }

function getDecodedValue(secret) {
  if (secret == 0 ) {
    return "Родриго"
  } else {
    return 'Эмилио'
  }
}
}

//console.log(getPersonData({
// aaa: 1,
// bbb: 1, 
//}));

//console.log(getPersonData({
// aaa: 0,
// bbb: 1, 
//}));
