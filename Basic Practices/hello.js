console.log("Hello World");

// JS is loosely typed = we don't have to type the datatype.
// JS is dynamically passed = depending on the value, datatype is assigned, automatically.

var num1 = 16;
var num2 = 4;
var name = "Selva";
var flag = true;
addNumber(4,6)
var output = add3Number(5,10,3);
document.write("Printing result using return value.")
document.write("<h1>Output = "+ output+"</h1>");


for(var i =0; i<=10; i+=2)
{
    document.writeln("<h2>"+i+"</h2>");
    // document.write("<br>");
}

//Using function for adding two numbers
function addNumber(num1, num2)
{
    var result= num1+num2;
    document.write("Printing result without using return value.")
    document.write("<h1>"+"Result = "+ result+"</h1>");
}

function add3Number(num1,num2,num3)
{
    return num1+num2+num3;
}

//arrays
var cars = ["Audi","BMW","RR"];
document.write("Printing values in array<br>");
for(var i =0; i<3; i++)
{
    document.write(cars[i]+"<br>");
}


var fruits = new Array("Apple","Banana");
document.write("Printing values in array by creating object for array<br>");
for(var i = 0; i<fruits.length; i++)
{
    document.writeln(fruits[i]);
}

