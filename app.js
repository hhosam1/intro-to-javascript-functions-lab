// Exercise 1:
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise 2:
const isAdult = (x) => {
    if (x >= 18) {
        const adult = 'Adult';
        return adult;
    } else {
        const minor = 'Minor';
        return minor;
    }

}
console.log('Ahmed is', isAdult(21));

// Exercise 3:
function isCharAVowel(char) {
 
  char = char.toLowerCase();
  

  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}

// Example usage
console.log(isCharAVowel('a')); // true
console.log(isCharAVowel('b')); // false

// Exercise 4:

const generateEmail=(x,y)=>{

let email= x+'@'+y;
return email;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"))


//exercise 5 :

function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

// Example usage
console.log(greetUser('Sam', 'morning')); // "Good morning, Sam!"
console.log(greetUser('Alex', 'evening')); // "Good evening, Alex!"

//exersise 6:

const maxOfThree=(x,y,z)=>{

   return Math.max(x,y,z);

}
console.log('Exercise 6 Result:', maxOfThree(17, 4, 9)); // Output: 10

//exersise 7:

const calculateTip=(bill,tipPercentage )=>{

const tip = bill*tipPercentage / 100;
return tip;
}
console.log(calculateTip(50, 20)); 


//exersise 8:

function convertTemperature(temperature, scale) {
  if (scale === 'C') {
    // Convert Celsius to Fahrenheit
    return (temperature * 9/5) + 32;
  } else if (scale === 'F') {
    // Convert Fahrenheit to Celsius
    return (temperature - 32) * 5/9;
  } else {
    return 'Invalid scale. Use "C" for Celsius or "F" for Fahrenheit.';
  }
}

// Example usage
console.log(convertTemperature(32, 'C')); // 89.6
console.log(convertTemperature(32, 'F')); // 0

//exersise 9:

const basicCalculator=(num1,num2,op)=>{
let sum;
if(op == 'add'){

    sum = num1+num2;
}else if(op == 'divide'){

     sum = num1/num2;
}else if(op=='multiply'){
 sum = num1*num2;

}else if(op=='subtract'){
 sum = num1-num2;

}
return sum;

}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));



//exersise 10:


function calculateGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log('Exercise 10 Result:', calculateGrade(85)); // Output: B

//exersise 11:

function createUsername(firstName, lastName) {
  // Get the first 3 letters of each name (or fewer if name is shorter)
  const firstPart = firstName.slice(0, 3);
  const lastPart = lastName.slice(0, 3);
  
  // Calculate the total length of both names
  const totalLength = firstName.length + lastName.length;

  // Combine parts into a username
  return firstPart + lastPart + totalLength;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green")); // Output: SamGre13
