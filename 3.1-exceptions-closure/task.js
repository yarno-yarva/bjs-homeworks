function parseCount(string) {
  let num = Number.parseInt(string);
  if (isNaN(num) === true) {
   throw new Error("Невалидное значение");}
  return (num);
}


function validateCount(string) {
  try{
    return parseCount(string);
  } catch(error) {
   return error;
  }
}


class Triangle {
  constructor (a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ( a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");}
   }
  getPerimeter() {
   	return this.a + this.b + this.c;
   }
  getArea() {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +s.toFixed(3);
  }
}


 function  getTriangle (a, b, c) {
       
   try {
     const x = new Triangle(a ,b ,c).getPerimeter();
     const y = new Triangle(a ,b ,c).getArea();
     return new Triangle(a ,b ,c);
 } catch(Error) {
   class Triangle {
   constructor (a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
   }
  getPerimeter() {
   	return `Ошибка! Треугольник не существует`;
   }
  getArea() {
    return `Ошибка! Треугольник не существует`;
  }
 }
  return  new Triangle(a,b,c);
 } 
} 