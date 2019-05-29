// ![GA logo!!!](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

// # JavaScript weekend REPS!

// Class: wdi-cc<br>
// Type: Homework<br>
// Duration: A few hours<br>
// Created by: GA WDI Instructional staff<br>
// Competencies: Data types, loops, arrays, functions, scope, objects 

// ---

// ## Setup

// fork/clone/etc -- u know what to do


// ## I. Variables & Datatypes

// ### A. Q + A

// 1. How do we assign a value to a variable? 
//>const y = 10
// 2. How do we change the value of a variable? 
//>one way would be to use 'let' instead of const when declaring the variable, that way you can assign different values to it.
// 3. How do we assign an existing variable to a new variable?
//>You can use 'let', 
//>let x=y;
// 4. Remind me, what are `declare`, `assign`, and `define`?
//declare is when you first introduce a variable, assign is when you attach it to a value of some kind, define is when you use = to assign the value.
// 5. What is pseudocoding and why should you do it?
//psuedocoding is a slang mix between regular language and coding,; it states line-by-line, what you are trying to accomplish, that way it is easier to write the code and easier to test it when you know exactly what you were trying to accomplish in each line of code.
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//About 3/4 of your time should be spent planning out your solution vs actually typing the code.

// :red_circle: Commit.

// ### B. Strings

// 1. Create a variable called `firstVariable`.
//   - Assign it the value of the string `"Hello World"`
//   - Change the value of this variable to some number.
//   - Store the value of `firstVariable` in a new variable called `secondVariable` 
//   - Change the value of `secondVariable` to any string. 
//   - What is the value of `firstVariable`?

// let firstVariable = 'Hello World';
// firstVariable = 3;
// console.log(firstVariable);
// let secondVariable = firstVariable;
// secondVariable = 'any string';
// console.log(firstVariable);


// 2. Create a variable called `yourName` and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable `yourName` so that it returns a new string with them concatenated. 
//  const yourName = 'Calvin';
//  console.log('Hello, my name is ' + yourName);
// >ex: `Hello, my name is Jean Valjean`
  
// :red_circle: Commit.

// ### C. Booleans
// - Using the provided variable definitions, replace the blanks so that all log statements print `true` in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print `true` to the console.


//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   console.log(true != false);
//   console.log(false == false == false == false == false == false == true);
//   console.log(false == false);
//   console.log(e == 'Kevin');
//   console.log(a <= b <= c);
//   console.log(a == a != d);
//   console.log(48 == '48');


// :red_circle: Commit.

// ### D. The farm

// 1. Declare a variable `animal`.  Set it to be either "cow" or something else.
// 2. Write code that will print out "mooooo" if the it is equal to `cow`.
// 3. Change your code so that if the variable `animal` is anything other than a cow, 
//it will print "Hey! You're not a cow."
// 4. Commit.
// let animal = "pig";
// while(animal = 'pig'){
// 	console.log('mooooo');
// };


// let animal = "cow";
// console.log(animal);
// if(animal === "cow"){
// 	console.log('moooooo');
// } else {
// 	console.log("Hey, your not a cow");
// }
// :red_circle: Commit.


// ### E. Driver's Ed

// 1. Make a variable that will hold a person's age. Be semantic.
const personsAge = 21;

// 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
 

if(personsAge >=16){
	console.log('Here are the keys')
} else {
	console.log("You're too young")
};


// 3. If the age is younger than 16, a message should print "Sorry, you're too young."


// :red_circle: Commit.


// ## II. Loops

// Remember: **USE `let` when you initialize your for loops!**

// This is GOOD: `for(`**`let i = 0;`**` i < 100; i++)`

// This is NO GOOD: `for(i = 0; i < 100; i++)`

// ### A. The basics

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive.

// for(let i=0; i < 11; i++){
// 	console.log(i)
// }

// 2. Write a loop that will print out all the numbers from 10 up to and including 400.
// for(let i=10; i <=400; i++){
// 	console.log(i)
// }

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.
// for(let i=12; i <=4000; i+=3){
// 	console.log(i)
// }
// :red_circle: Commit.

// ### B. Get even

// 1. Print out the even numbers that are within the range of 1 - 100.


// for(let i=1; i <= 100; i++) {
// 	if(i % 2 === 0){
// 		console.log(i)
// 	}
// };
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
// for(let i=1; i <= 100; i++) {
// 	if(i % 2 === 0){
// 		console.log(i + " <-- is an even number")
// 	}
// };



// :red_circle: Commit.


// ### C. Give me Five

// 1. For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.

// >Example Output:
// ```
// I found a 5. High five!
// I found a 10. High five!
// ```
// for(let i=1; i <= 100; i++) {
// 	if(i % 5 === 0){
// 		console.log("I found a 5. High five!");
// 	}if(i % 10 ===0){
// 		console.log("I found a 10. High five!");
// 	}if(i % 3 === 0){
// 		console.log("three is a crowd");
// 	}
// };
// 2. Add to the code from above to print out "I found a `number`. Three is a crowd" if the number is a multiple of three.

// >Example Output:
// ```
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// ```

// :red_circle: Commit.


// ### D. Savings account

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
// let bankAccount = 0;
// for(let i=1; i<=10; i++){
// 	bankAccount+=i;
// }
// console.log(bankAccount);
// >Check your work! Your banck_account should have $55 in it.

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let bankAccount = 0;
// for(let i=1; i<=100; i++){
// 	bankAccount += 2*i;
// };
// console.log(bankAccount);
// >Check your work! Your banck_account should have $10,100 in it.

// :red_circle: Commit.


// ### E. Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.  If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.

// You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1!  

// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment.  You may skip it **if you've already done it**, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.
//I've already done this problem!!!
// :red_circle: Commit.


// ## III. Arrays & Control flow

// ### A. Talk about it:

// 1. What are the things in an array called?
//elements
// 2. Do Arrays guarantee those things will be in order?
//no
// 3. What real-life thing could you model with an array?
//anything that requires a list
// :red_circle: Commit.


// ### B. Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called `quotes`.
// const quotes = ["I went to the woods to live deliberately, to front only the essential facts of life, and see if I could not leatn what it ha to teach, and not, when I came to die, discover I had not lived. -Henry David Thoreau", "the sun will shine on my back door some day... -The Grateful Dead", "I'm gunna give you to the count of ten to get your yella, no good, filthy butt off my property. One, Two, TEN...! -Home Alone"]; 


// :red_circle: Commit.

// ### C. Accessing elements

// Given the following array `const randomThings = [1, 10, "Hello", true]`

// 1. How do you access the 1st element in the array?
// const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0]);
// // 2. Change the value of `"Hello"` to `"World"`.
// randomThings[2] = "World";
// console.log(randomThings);
// 3. Check the value of the array to make sure it updated the array.  How?  Why, yes! `console.log()`;

// :red_circle: Commit.


// ### D. Change values

// // Given the following array `const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]`
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// // 1. What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);
// // 2. Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";
// console.log(ourClass[4]);
// // 3. Add a new element, "Cloud City" to the array.
//  ourClass[5]="Cloud City";
//  console.log(ourClass);

// // :red_circle: Commit.


// ### E. Mix It Up

// Given the following array: `const myArray = [5, 10, 500, 20]`

// 1. Add the string `"Egon"` to the end of the array. Add another string of your choice to the end of the array.
// const myArray = [5, 10, 500, 20];
// myArray[4] = "egon";
// console.log(myArray);
// // 2. Remove the `5` from the beginning of the array.
// myArray.shift();
// console.log(myArray);
// // 3. Add the string `"Bob Marley"` to the beginning of the array.
// myArray.unshift('Bob Marley');
// console.log(myArray);
// // 4. Remove the string of your choise from the end of the array.
// myArray.pop();
// console.log(myArray);
// 5. Reverse this array using `Array.prototype.reverse()`.  Did you mutate the array? What does _mutate_ mean? Did the `.reverse()` method return anything?
// let reversed = myArray.reversed();
// console.log(myArray);
//yes, because we changed the array and mutating is changing.
// :red_circle: Commit.


// ### F. Biggie Smalls

// Create a variable that contains an integer.
const integer = 25;
// Write an `if ... else` statement that:
if(integer < 100){
	console.log('Little number');
}else if(integer > 100){
	console.log('big number');
}
// 1. `console.log()`s "little number" if the number is entered is less than **100**

// 2. `console.log()`s `big number` if the number is greater than or equal to 100.

// :red_circle: Commit.


// ### G. Monkey in the Middle
 const integerA = 7;
// // Write an `if ... else if ... else` statement:
if(integer < 5){
	console.log('Little number');
}else if(integer > 10){
	console.log('big number');
}else{
	console.log("monkey");
};
// 1. `console.log()` `little number` if the number entered is less than **5**.<br>

// 2. If the number entered is more than 10, log `big number`.

// 3. Otherwise, log "monkey". <br>

// :red_circle: Commit.


// ### H. What's in Your Closet?

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// ```javascript
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// ```

// 1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.
// const kristynsCloset = [
// 	  "left shoe",
// 	  "cowboy boots",
// 	  "right sock",
// 	  "GA hoodie",
// 	  "green pants",
// 	  "yellow knit hat",
// 	  "marshmallow peeps"
// 	];
// 	console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 2. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**
// const kristynsCloset = [
// 	"left shoe",
// 	"cowboy boots",
// 	"right sock",
// 	"GA hoodie",
// 	"green pants",
// 	"yellow knit hat",
// 	"marshmallow peeps"
//   ];
//   kristynsCloset.splice(6,0, 'raybans');
//   console.log(kristynsCloset);
// 3. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.
// const kristynsCloset = [
// 	"left shoe",
// 	"cowboy boots",
// 	"right sock",
// 	"GA hoodie",
// 	"green pants",
// 	"yellow knit hat",
// 	"marshmallow peeps"
//   ];
//   kristynsCloset[5] = "stained knit hat";
//   console.log(kristynsCloset);

// 4. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.
// const thomsCloset = [
// 	  [
// 	    // These are Thom's shirts
// 	    "grey button-up",
// 	    "dark grey button-up",
// 	    "light blue button-up",
// 	    "blue button-up",
// 	  ],[
// 	    // These are Thom's pants
// 	    "grey jeans",
// 	    "jeans",
// 	    "PJs"
// 	  ],[
// 	    // Thom's accessories
// 	    "wool mittens",
// 	    "wool scarf",
// 	    "raybans"
// 	  ]
// 	];
// 	const shirt = thomsCloset[0][0];
// 	console.log(thomsCloset[0][0]);

// 5. In the same way, access one item from Thom's pants array.
// const thomsCloset = [
// 	[
// 	  // These are Thom's shirts
// 	  "grey button-up",
// 	  "dark grey button-up",
// 	  "light blue button-up",
// 	  "blue button-up",
// 	],[
// 	  // These are Thom's pants
// 	  "grey jeans",
// 	  "jeans",
// 	  "PJs"
// 	],[
// 	  // Thom's accessories
// 	  "wool mittens",
// 	  "wool scarf",
// 	  "raybans"
// 	]
//   ];
//   const pants = thomsCloset[1][0];
//   console.log(thomsCloset[1][0]);
// 6. Access one item from Thom's accessories array.
// const thomsCloset = [
// 	[
// 	  // These are Thom's shirts
// 	  "grey button-up",
// 	  "dark grey button-up",
// 	  "light blue button-up",
// 	  "blue button-up",
// 	],[
// 	  // These are Thom's pants
// 	  "grey jeans",
// 	  "jeans",
// 	  "PJs"
// 	],[
// 	  // Thom's accessories
// 	  "wool mittens",
// 	  "wool scarf",
// 	  "raybans"
// 	]
//   ];
//   const accessories = thomsCloset[2][1];
//   console.log(thomsCloset[2][1]);
// 7. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`
// const thomsCloset = [
// 	[
// 	  // These are Thom's shirts
// 	  "grey button-up",
// 	  "dark grey button-up",
// 	  "light blue button-up",
// 	  "blue button-up",
// 	],[
// 	  // These are Thom's pants
// 	  "grey jeans",
// 	  "jeans",
// 	  "PJs"
// 	],[
// 	  // Thom's accessories
// 	  "wool mittens",
// 	  "wool scarf",
// 	  "raybans"
// 	]
//   ];
//   console.log("Thom is looking fierce in a " + thomsCloset[0][0] + thomsCloset[1][1] + " and " + thomsCloset[2][1])

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.
// const thomsCloset = [
// 	[
// 	  // These are Thom's shirts
// 	  "grey button-up",
// 	  "dark grey button-up",
// 	  "light blue button-up",
// 	  "blue button-up",
// 	],[
// 	  // These are Thom's pants
// 	  "grey jeans",
// 	  "jeans",
// 	  "PJs"
// 	],[
// 	  // Thom's accessories
// 	  "wool mittens",
// 	  "wool scarf",
// 	  "raybans"
// 	]
//   ];
//   thomsCloset[1][2]= "Footie Pajamas"
//   console.log(thomsCloset[1][2]);
// // :red_circle: Commit.


// ## IV. Functions


// ### A. `printGreeting`

// Do you think you could write a function called `printGreeting` with a parameter `name` that returns a greeting with the argument **interpolated** into the greeting?

// Like so?

// ```javascript
// console.log(printGreeting("Slimer"));
// ```
// > `=> Hello there, Slimer!`
// printCool("str")  "str" + " is cool";
//     }
// console.log(printCool("Bob"));
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, **read entire problems carefully before doing them from now on**.  

// :red_circle: Commit.


// ### B. `printCool`

// Write a function `printCool` that accepts one parameter, `name` as an argument. The function should print the name and a message saying that that person is cool.

// ```javascript
// console.log(printCool("Captain Reynolds"));
// ```

// > `=> "Captain Reynolds is cool";`

// :red_circle: Commit.


// ### C. `calculateCube`

// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

// ```javascript
// console.log(calculateCube(5));
// ```
// function calculateCube(num){
//     return Math.pow(num, 3);
// }
// console.log(calculateCube(5));
// > => 125

// :red_circle: Commit.


// ### D. `isVowel`

// Write a function `isVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// ```javascript
// console.log(isVowel("a"));
// ```
// function isVowel(c){
//     return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
// }
// console.log(isVowel("A"));
// > `=> true`

// :red_circle: Commit.


// ### E. `getTwoLengths`

// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

// ```javascript
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// ```
// > `=> [4, 13]`
// function getTwoLengths(str1, str2){
//     strlen = [];
//     strlen.push(str1.length);
//     strlen.push(str2.length);
//     return strlen;
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// :red_circle: Commit.


// ### F. `getMultipleLengths`

// Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array** of **strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.

// ```javascript
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// ```
function getMultipleLengths(arr){ 
    sentlen = [];
    for(let i = 0; i< arr.length; i++){
        sentlen.push(arr[i].length);
    }
    return sentlen;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//> `=> [5, 4, 2, 2, 4]`

// :red_circle: Commit.


// ### G. `maxOfThree`

// Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// ```javascript
// console.log(maxOfThree(6, 9, 1));
// ```
function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else if(num3 > num1 && num3 > num2){
        return num3;
    }
}
console.log(maxOfThree(6, 9, 1));


// :red_circle: Commit.


// ### H. `printLongestWord`

// Write a function `printLongestWord` that accepts a single argument, an **array** of **strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// ```javascript
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// ```
function printLongestWord(arr){
	let longestWord = "";
	for(let i=0; i<arr.length; i++){
		if(arr[i].length > longestWord.length){
			longestWord = arr[i];
		};
	};
	return longestWord;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// > `=> "Peanutbutter"`

// :red_circle: Commit.


// ### I. `transmogrify`

// Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.
// function transmogrify(num1, num2, num3){
//     return (Math.pow((num1*num2), num3));
// }
// console.log(transmogrify(5, 3, 2));
// ```javascript
// console.log(transmogrify(5, 3, 2));
// ```
// > `=> 225`

// :red_circle: Commit.


// ### J. `reverseWordOrder` v2

// **Without using `.split()`, `.reverse()`, or `.join()`,** write a function `reverseWordOrder` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation. 

// See if you can do it without googling.

// Remember: Jim showed you today that you can index directly into a string: 
// ```js
// "hello world"[6]
// ```
// > `=> "w"`
 function reverseWordOrder(str){
 	let wordArray = [];
 	let reverseWord = "";
 	let currWord = "";
 	for(let i=0; i<str.length; i++){
 		if(str[i] === ""){
 			wordArray.unshift(currWord);
 			currWord = "";
 		} else { currWord = currWord + str[i];
 		};
 	};
 	wordArray.unshift(currWord);
 	reverseWord = wordArray.join();
 	return reverseWord;
 };
 
// That and basic loops and variables and arrays are all you need to solve this without the Array methods.

// ```javascript
 console.log(reverseWordOrder("Ishmael me Call"));
// ```
// > `=> "Call me Ishmael"`

// ```js
 console.log(reverseWordOrder("I use Lâncome on my comb"));
// ```
// > `=> "comb my on Lâncome use I"`

// :red_circle: Commit.

// ### K. Get down and dirty with `Math.random()`

// 1.  Write a function that will return a random integer between 1 and 10. Test it.
// function randomNum(){
// 	let randNum = Math.floor((Math.random()*10) + 1);
// 	return randNum;
//
// };
// console.log(randomNum());
//2.  Write a function that will return a random integer between 10 and 100. Test it.
// function randomNum(){
// 	let randNum = Math.floor((Math.random()*100) + 10);
// 	return randNum;

// };
// console.log(randomNum());

// 3.  Write a function that will return a random number between 532 and 13267. Test it.
// function randomNum(){
// 	let randNum = Math.floor((Math.random()*13267) + 532);
// 	return randNum;

// };
// console.log(randomNum());

// 4.  Write a function that will return a random number between 1 and 10. Test it.
// function randomNum(){
// 	let randNum = Math.floor((Math.random()*10) + 1);
// 	return randNum;

// };
// console.log(randomNum());
// 5.  Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array.  Call your function a few times, passing in the quotes array.  Give it a nice semantic name like `getRandomElement`.
const quotes = ["I went to the woods to live deliberately, to front only the essential facts of life, and see if I could not leatn what it ha to teach, and not, when I came to die, discover I had not lived. -Henry David Thoreau", "the sun will shine on my back door some day... -The Grateful Dead", "I'm gunna give you to the count of ten to get your yella, no good, filthy butt off my property. One, Two, TEN...! -Home Alone"]; 
	quotes.push("The trouble with you is the trouble with me, we've got two good eyes but we still don't see");
	function getRandomElement(){
		let i = [Math.floor(Math.random()* quotes.length)];
		return quotes[i];
	};
console.log(getRandomElement());
// :red_circle: Commit.


// ## Objects

// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// ### A. Make a user object

// 1. Create an object called `user`.
// 2. Write in to the object the key-value pairs for `name`, `email`, `age`, and `purchased`. Set the value of `purchased` to an empty array `[]`. Set the other values to whatever you would like.
const user= {
    name: "duderino",
    email: "ElDuderino@gmail.com",
    age: 50,
    purchased: []
};
// :red_circle: Commit.

// ### B. Update the user
user.email = "TheDude@gmail.com";
user.age++;
// 1. Our user has changed his or her email address. Without changing the original `user` object, update the `email` value to a new email address.
// 2. Our user has had a birthday! Without changing the original `user` object, increment the `age` value using the postfix operator. Hint: `age++`

// :red_circle: Commit.


// ### C. Adding keys and values
user.location= "Denver";
// You have decided to add your user's location to the data that you want to collect.

// 1. Without changing the original `user` object, add a new key `location` to the object, and give it a value or some-or-other location (a string).

// :red_circle: Commit.


// ### D. Shopaholic!
user['purchased'].push('carbohydrates');
user['purchased'].push('peace of mind');
user['purchased'].push('Merino jodhpurs');
//(user.purchased[]).push('Merino jodhpurs');

// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchased` array.
// 2. Our user has purchased an item! They have purchased some "peace of mind". Using `.push()`, add the string "peace of mind" to the `purchased` array.
// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchased` array.
// 4. Console.log just the "Merino jodhpurs" from the `purchased` array.

// :red_circle: Commit.


// ### E. Object-within-object

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a `friend` with a `name` and `age`, we could write:

// ```javascript
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// ```
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// };
// When we console.log `user`, we would see the `friend` object added to our user object.

// 1. Write a `friend` object into your `user` object and give the friend a name, age, location, and purchased array (empty for now)
// 2. Console.log just the friend's name
// 3. Console.log just the friend's location
// 4. CHANGE the friend's age to 55
// 5. The `friend` has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchased` array.
// 6. The `friend` has purchased "A latte". Use `.push()` to add "A latte" to the friend's `purchased` array.
// 7. Console.log just "A latte" from the friend's `purchased` array.

// :red_circle: Commit.
user.friend={
    name: "Johnny",
    age: 30,
    location: "Littleton",
    purchased: []
};
// console.log(user.friend.name);
// console.log(user.friend.location);
//user.friend.age =55;
//console.log(user.friend.age);
//user.friend['purchased'].push("The One Ring");
//console.log(user.friend.purchased, "<--- purhcased");
//user.friend['purchased'].push("A Latte");
//console.log(user.friend.purchased[1]);


// ### F. Loops
// for(i=0; i<user.purchased.length; i++){
//     console.log(user.purchased[i]);
// }

  

// 1. Write a _for loop_ that iterates over the User's `purchased` array (NOT the friend's purchased array), and prints each element to the console.
// 2. Write a _for loop_ that iterates over the Friend's `purchased` array, and prints each element to the console.
// for(i=0; i<user.friend.purchased.length; i++){
//     console.log(user.friend.purchased[i]);
// }
// :red_circle: Commit.


// ### G. Functions can operate on objects

// 1. Write a single function `updateUser` that takes no parameters. When the function is run, it should:
function updateUser(){
    user.age++;
    user.name.toUpperCase();
};
console.log(user.age);
console.log(user.name);
updateUser();
console.log(user.age);
console.log(user.name);
//   - it should increment the user's age by 1
//   - make the user's name uppercase

//   The function does not need a `return` statement, it will merely modify the user object.

// 2. Write a function `oldAndLoud` that performs the exact same tasks as `updateUser`, but instead of hard-coding it to only work on our `user` object, make it take a parameter `person`, and have it modify the object that is passed in as an argument when the function is called. Call your `oldAndLoud` function with `user` as the argument. 
// let person = new user:
// {

// }

// :red_circle: Commit.











































// <br>
// <hr>

// # Hungry for More?

// ## Cat Combinator

// ### 1. Mama cat
// * Define an object called `cat1` that contains the following properties:
//     * name
//     * breed
//     * age (a number)

// * console.log the cat's age
// * console.log the cat's breed


// ### 2. Papa cat
// * Define an object called `cat2` that also contains the properties:
//     * name
//     * breed
//     * age (a number)


// ### 3. Combine Cats!

// The cats are multiplying!

// Write a function `combineCats` that has two parameters `mama`, and `papa`. The function will take two arguments -- each a cat object.

// * Pass `cat1` and `cat2` as arguments to the `combineCats` function. The function should console.log them.

// Example:

// ```javascript
// combineCats(cat1, cat2)
// ```

// > { name: "Joe", age: 19, breed: "Mog" }

// > { name: "Jam", age: 45, breed: "Siamese" }


// **This is to demonstrate that functions can take objects as arguments**

// You could also invoke the `combineCats` function by writing the objects straight into the parentheses:

// ```javascript
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// ```
// <br>

// * Make it so the `combineCats` function will return a combination of the two incoming cats
//     * The result should be an object wherein the
//         * name is a concatenation of the parents' names
//         * the age is 1
//         * the breed is each of the parents' breeds with a hyphen in between

// Example:

// ```javascript
// console.log(combineCats(cat1, cat2));
// ```

// Result:

// ![](https://i.imgur.com/CEB2ire.png)

// **This is to demonstrate that a function can return an object**

// <br>
// <hr>

// ## 4. Cat brain bender

// If `combineCats` returns an **object**, and if `combineCats` takes **objects** as **arguments**, then it stands to reason that:

// `catCombinator` can use **itself** as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// ```javascript
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// ```

// Whoa . . .

// The above console.log is **two levels** deep of combineCats.

// * Write a console.log that is **three levels** deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

// Your output should look something like:

// ![](https://i.imgur.com/zuTzm5X.png)

