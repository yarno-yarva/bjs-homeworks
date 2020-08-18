function getSolutions( a, b, c ) {

let d = b**2 - 4 * a * c;

if (d < 0) {
	return { D: d, roots: [] }
} else if (d == 0) {
   let x1 =  (-b + Math.sqrt(d)) / (2 * a) ;
    return { D: d, roots: [x1] }
} else {
	let x1 =  (-b + Math.sqrt(d)) / (2 * a) ;
	let x2 =  (-b - Math.sqrt(d)) / (2 * a) ;
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
  if (data === undefined) {
    return 0;
  } else {
  console.log(data);
   let avMark = {};
   let temp = [];
   for (let prop in data) {
   let value = getAverageMark (data [prop]);
   temp.push(value);
  avMark[prop] = value;
}
  avMark.average = getAverageMark(temp) ;
  return avMark;
  }
}
 
function getAverageMark(marks){
     if (marks.length == 0) {
       return 0
     } else {
     return  marks.reduce((a, b) => (a + b)) / marks.length;
     }
 }


function getPersonData(secretData) {

  let data = {};
  data.firstName = secretData.aaa,  
  data.lastName = secretData.bbb; 
   console.log(data);
   let decode = {}
   for (let prop in data) {
   let secret = (data [ prop ]);
   decode[prop] = getDecodedValue(secret);
   }
   return decode;
}

function getDecodedValue(secret) {
  console.log(secret);

  if (secret == 0 ) {
    return "Родриго";
  } else {
    return  "Эмильо";
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
