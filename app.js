// function are thease nos even?

function areBothEven (n1,n2){
    return !(n1 %2) && !(n2 %2)
} 
num1 = 8;
num2 = 2;
console.log("Title: Are Both Nos Even");
console.log(`Are both these numbers ${num1}, ${num2} Even? ${areBothEven(num1,num2)}`)


// function vs Arrow function
function computeArea(width, height) {
    return (width*height) 
}

const computerAreaArrow =(width, height) => (width*height) 

num1 = 8;
num2 = 2;
console.log("Inclass: function vs Arrow function");
console.log(`ComputerArea Function: ${num1}, ${num2} Even? ${computeArea(num1,num2)}`);
console.log(`ComputerArea ArrowFuction: ${num1}, ${num2} Even? ${computerAreaArrow(num1,num2)} sq units`);

// Using Array loop vs spread oeprator to pupulate a object

let devName = 'Maria';
let jobSkills = ['HTML', 'CSS', 'JavaScript', 'jQuery'];

function getDevObject(name) {
    let skills = [];
    for (let i = 1; i < arguments.length; i++) {
        skills.push(arguments[i]);
    }
    return {
      devName: name,
      jobSkills: skills
    };
  }
  console.log("In Class: Using Array loop vs spread oeprator to pupulate a object");
  console.log(`from loop: name" ${devName}, ${jobSkills}`);  
  
  const getDevObject1 = (name, ...skills) => {
    return {
        devName: name,
        jobSkills: skills  
    }
  }
  console.log(`In Class: from rest parameter: name ${devName}, ${jobSkills}`);  
  const getDevObject2 = (name, ...skills) => {
      let ourreturn = {
        devName: name,
        jobSkills: skills  
    }
    return {
        ourreturn
    };
  }
  console.log(`In Class: from rest parameter with our return: name ${devName}, ${jobSkills}`);
  

/// ASSIGNMENTS  ALAB 308.5.1 /////  
/// take an arry of numbers and return the sum
let sumOfAry = 0;
let aArayOfNum = [1, 2, 3, 4, 5];
aArayOfNum.forEach(num => (
    sumOfAry += num)
) 
console.log(sumOfAry);
console.log(`Assignment ALAB 308.5.1: Part1: Title: take an arry of numbers and return the sum ${sumOfAry}`);  

//Take an arry and return the average
let aAryLength = aArayOfNum.length 
console.log(`Assignment ALAB 308.5.1: Part1: Title: Take an arry and return the average ${(sumOfAry / aAryLength)}`);  

//Take an array of strings and return the longest string.
let aAryOfStrings = ['abc', 'bcde', 'cdeasdfasdfasdfasdfasdfasdffg', 'dsd2323sddefgh', 'efgasdfasdfasdhikl'];
let longestStrIndex = 0;
let longestStrlength = 0;
aAryOfStrings.forEach((item, index) => {
    if (item.length > longestStrlength) {
        longestStrlength = item.length;
        longestStrIndex = index;
    }
})
console.log(`Assignment ALAB 308.5.1: Part1: Title: Take an array of strings and return the longest string: ${aAryOfStrings[longestStrIndex]} with a length of ${longestStrlength}`);  

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
let aAryOfStrings1 = ['abc', 'bcde', 'ce', 'd', 'efgas'];
let StringShouldBeLongerThanNumber = 3;
let longestString = '';
let stringofLongerStrings = [];
aAryOfStrings1.forEach((item, index) => {
    //console.log(item)
    if ((item.length > StringShouldBeLongerThanNumber) && (item.length > longestString.length)) {
        longestString = item;
        stringofLongerStrings.push(longestString)
        //console.log(stringofLongerStrings)
    }
})
console.log(`Assignment ALAB 308.5.1: Part1: Title: Take an array of strings, and a number and return an array of the strings that are longer than the given number: ${StringShouldBeLongerThanNumber} are: ${stringofLongerStrings}`);  


//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let GivenNumbersToPrint =29;
function PrintEveryNumRecursively(value){
    if (value>2){
        value = value - 1;  
        PrintEveryNumRecursively(value);
        console.log(`Assignment ALAB 308.5.1: Part1: Title: Take a number, n, and print every number between 1 and n without using loops. Use recursion: ${value}`);  
    }
    else {
        return;
    }
}
PrintEveryNumRecursively(GivenNumbersToPrint);

//
