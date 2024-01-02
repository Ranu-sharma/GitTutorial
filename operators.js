//let a = 5;
//let b = 2;//
/*let c = 3;
console.log ("a+b=", a+b);
console.log ("a-b=", a-b);
console.log ("a*b=", a*b);
console.log ("a%b", a%b);*/

//console.log("a =", a, "& b =", b);

//console.log(++a);//

/*let a= 5;
let b= 4;

a += b;
console.log(a);*/

/*let age = 15;
let mode = "light";
let color;

if (mode === "dark"){
    color = "black";
}

else {
    color = "white";
}
console.log(color);

if (age > 18){
    console.log ("you can vote");
}
    if (age < 18 ){
        console.log("you can not vote");
    }

let num = 10;

if (num%2===0){
    console.log(num, "is even");
}

else {
    console.log(num, "is odd");
}


let mode ="blue";
let color;

if(mode === "dark") {
    color= "black";
}
else if (mode === "blue"){
    color = "blue";
}
else  {
    color = "white";
}

console.log (color);

if condition

let num = prompt("enter a number");

if (num % 3 === 0){
    console.log(num, "is multiple of 3");}
    else {
    console.log(num, "is not multiple of 3");
    }


let score = prompt ("enter yuor score");
let grade ;
if (score >= 90 && score <= 100){
    grade = "A";
}
else if  (score >= 70 && score <= 89) {
    grade = "C";
}
    else if (score >= 60 && score <= 69) {
      grade = "D";  
    }
    else if (score >= 49 && score >= 0) {grade = "F";
}
console.log("your score is", grade);


For Loop


for(let count = 1; count <= 10; count ++)
{
    console.log("Salt");
}
console.log("loop has ended");
 

Calculate sum of 1 to 5


let sum = 0;
let n = 10;
for(let i= 1; i <= n; i++){
sum = sum +i;
}
console.log("sum =", sum);
console.log("loop has ended");

While Loop


let i = 1;
while(i >= 5);{
    console.log ("Salt")
}
i++;


For of loop used for strings and arrays 

let str = "Salt";

for (let i of str){
    console.log("i=", i);
}

let i = 0;


for (i=0; i<=100; i=i+2){
    console.log(i);
}
create a word guessing game

let guess = prompt("enter your number");
let correctNum = 57;


while (guess != correctNum){
    guess = prompt("enter again");
}
console.log("you have guessed the right number");

Strings

Template Literals

let obj = {
    item : "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
/*
let specialString = `This is a tempate literal`;
console.log(tyoeof specialString); 

String Methods 

let str = "salt is salty";
let newStr = str.toUpperCase();
console.log(newStr); 

let str = "    salt is salty    ";

console.log(str.trim()); 

let str = "hello";

console.log(str.replace("lo", "lp"));


let name = prompt("Enter Your Name");
let userName = "@" + name.toUpperCase() + name.length;
console.log (userName);


let marks=[97,95,55,67];
for(let i =0; i<marks.length;i++)
console.log(marks[i]);

for of loop



let cities = ["gurgaon", "pune", "delhi", "mumbai", "jodhpur"];

for (let city of cities){
    console.log(city.toUpperCase());
}


avergae marks of students Array

let marks = [85,90,55,75,85];
let sum = 0;


for(let val of marks){
    sum += val;
}
let avg = sum/marks.loegth;
console.log("avg marks of the class =", avg);


practice price of items


let items= [250, 645, 300, 900, 50];

let i = 0;
for (let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);

Array Methods  

push methods = to add at the end.
pop methods = to delete from the end.

let marks = ["thor", "spiderMan", "ironman"];
let foodItems=["potato", "lichi", "strawberry", "grapes", "tomato"];

let all = marks.concat(foodItems);
console.log(all);
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);

foodItems.pop();
console.log(foodItems);
console.log(foodItems.toString());

unshift method used to add at the beggining of the ArrayBuffer
slice method used to retrun value

splice method
splice method


let arr = [1,2,3,4,5,6];

arr.splice(2,2,101,102);
console.log(arr);



let storeCompanies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(storeCompanies.shift(1);*/


/*console.log(storeCompanies.splice( 2, 1,"ola"));

console.log(storeCompanies.push("Amazon"));

let fullName = prompt("Enter Your Full Name");
let userName = fullName.concat("@abc.com");
userName= userName.replaceAll(" ",".");
let length= userName.length;
let finalString=""
for(i=length-1; i>=0; i--){
    finalString=finalString+userName[i];
}
console.log(finalString);

Functions 


function myFunction(msg){
    console.log(msg);
}
myFunction("I love JS");

Function to sum two number


function deduct(x,y){
    s = x-y;
    return s;

}
let val = deduct(8, 4);
console.log(val);

sum function 

function sum (a,b){
    return a+b;
}

(a, b) => {
    console.log(a+b);
};

const arrowMul = (a, b) => {
    console.log(a * b);
}; 

const arrowMul = (a, b) => {
    return a * b;


countVovel Function 

function countVovel(str){
    let count = 0;
    for(const char of str){
     if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" 

            )  {
                count ++;
            } 
        }

    return count; 
    function using array 
    

    const countVow =(str) => 
    let count = 0;
    for(const char of str){
     if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" 

            )  {
                count ++;
            } 
        }
    return count;
    
    For each loop
    

    let arr = ["London", "Paris", "Sweden", "Norway"];

    arr.forEach((val, idx, arr) => {

        console.log(val.toUpperCase(), idx, arr);

    });

    Practice Test to print square of each value

    

    let nums = [1, 2, 3, 4];

    nums.map((val) => {
        console.log (val * val);
    })
    nums.forEach((num) => {
        console.log(num*num)
    }
    )
    filter Arrar
     

    let nums = [4, 5, 8, 10, 12, 15];

    let evenNum = nums.filter((val) => {
        return val%2 === 0;
    })

console.log(evenNum);

reduce array 

let nums = [4, 5, 8, 10,];

const output = nums.reduce((res, cur) =>{
    return res + cur;
});
 console.log(output);

 practice test
 

 let marks = [95,94,99,45,67,74];

 let topperArr= marks.filter((val) => {
    return val > 90;
 })
console.log(topperArr);


*/
let n = prompt("enter a number");

let arr = [];

for (let i = 0; i<=n; i++){
    arr[i] = i;
}
console.log(arr);

let sum = arr.reduce((res, cur) =>{
    return res + cur;
});
console.log(sum);



   let factorial = arr.reduce((res, curr) => {
    return res * curr;
   });
   console.log(factorial);


