
//1. Declare 2 variables  a and b, such that a>b, an define values for them 
// 1.1 Output their sum
var a = 5; 
    b = 2;
    x = a + b;
    console.log (x);
//----------------------------------------

// 1.2 difference between a and b

var a = 5; 
    b = 2;
    x = a - b;
    console.log (x);
//-----------------------------------------

//1.3 quotient between a and b
var a = 5; 
    b = 2;
    x = a / b;
    console.log (x);
 //--------------------------------------------

 //1.4 remiander between a and b
 var a = 5; 
    b = 2;
    x = a % b;
    console.log (x);
//---------------------------------------------
 var a = 5
 var b = 2

 if (a > b){
     console.log(a + b);
     console.log(a - b);
     console.log (a / b);
     console.log ( a % b);
 } else {

 }
//2. Given a number. Gets its absolute value

var absl = -9;

    x = Math.abs(absl);

    console.log(x);

//---

var absl = -9;
console.log(-absl)

//---

var g = -9;
var abs = g > 0 ? +g : -g; 

console.log(abs);

//-------------------------------------------------------------

//3. Declare a variable with defined value. 
//Print the last digit of the number

var length = "58967";
    l = length % 10000;
    console.log(l);

//-----------------------------------------------------

 //4. Declare variable. Initialize it with the value, 
 //1which shows temperature in degrees Celsius.Print its equivalent
 // in degrees Fahrenheit. To convert temperatures in   degrees    
 //Celsius toFahrenheit use the following formula: °C * 1.8 +32 = °F

 var tempInCel = 46; 
    F = tempInCel * 1.8 + 32;
    
    console.log(F);
//-----------------
var a = 10;

var celsius = a + "°C";
console.log(celsius);

var farenheit = a * 1.8 + 32 + "°F"; 
console.log(farenheit);

var result = farenheit + "=" + celsius;
console.log(result);

//---------------------------------------------------------

//5. Given four numbers. Find the minimum and maximum of four numbers
var x = Math.max(1,5,10,8);
    console.log(x);

var k = Math.min(45,26,15,89);
    console.log(k);

//-------------
var a = 4;
    b = 120;
    c = 105;
    d = 90;
    max = b;
    min = a;
    if (max > c && max > a && max > d && a < b && a < c && a < d ){
        console.log(max); 
        console.log(min);
    } else {
    }

//-----------------------

var a = 1;
var b = 7;
var c = 3;
var d = 12;
var max = Math.max(a, b, c, d);
var min = Math.min (a, b, c, d);

var max = null 
if ( a > b && a > c && a > d){
    max = a;
} else if (b > a && b > c && b > d) {
    max = b;
} else if (c > a && c > b && c > d) {
    max = c;
} else if (d > a && d > b && d > c) {
    max = d;
}else {

}
console.log(max);
//-----------------

var a = 7;
var b = 4;
var c = 3;
var d = 1;

console.log(a > b && a > c && a > d && a);

// 6. Given a number. 
//Print “odd” if the number is odd and “even” if it’s even

var num = prompt("Please enter a number");
    if (num % 2){
        console.log("Odd")
    } else {
        console.log("Even")
    };

//7.Given three sides of a triangle.
// Check whether the triangle is valid or not. Print “yes” if itis valid and “no” otherwise

var tngaside = 7;
    tngbside = 10;
    tngcside = 5;
    if (tngaside + tngbside > tngcside || tngaside + tngcside > tngbside || tngbside + tngcside > tngaside){
     console.log("Yes,The triangle is valide")
    } else{
     console.log("Oops, the triangle is not valid")
    };

    
//8. Given a number (n). Calculate sum of all numbers between 1 

let lastdigit = 1;
for (i = 1; i <= 10; i++) {
    console.log(lastdigit+=i)
}

//-------------------------------------------------------------