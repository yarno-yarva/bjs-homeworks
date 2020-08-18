String.prototype.isPalindrome = function () {
  let str = this;
  let string = str.toLowerCase();
  const cleanStr = string.replace(/\s+/g, '');  
  const reverseStr = cleanStr.split('').reverse().join('');
  return cleanStr === reverseStr;
}

function getAverageMark(marks) {
      if (marks.length === 0) {
        return 0 
      } else {
    {
    let averageMark = marks.reduce((a, b) => (a + b)) / marks.length;;
    return Math.round(averageMark);
}
   }
   
}

function checkBirthday(birthday) {

  const date = Number(new Date(birthday));
  const now = Number(new Date());
  const diff = now - date;
  const msPerDay = 24 * 60 * 60 * 1000;
  const msYearF = (msPerDay  * 365.242 );
  const age = Math.floor((diff / msYearF));
    
    if (age >= 18) {
    return verdict = "Да";
}
}