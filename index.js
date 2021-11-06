//Write first program in javascript

// console.log("Hello world");
// alert("this is alert");
// document.write("This document write");

//this is single comment
/*
this is 
multiline comment
*/

//variables
// let a = 5;
// let b = 6;

// console.log(a+b);


//Data types in javascript

/*
Primitive datatype :numbers,string,boolian, symbol,undifined,null
Reference datatype : array, objects
*/

//numbers

// let x = 55.5;
// let y = 70.6;

//string

let  string1 = "This string";
let strig2 = "This string2";
// console.log(string1);

//boolian

let a = true;
let b = false;
// console.log(a,b);

//undefined

// let und = undefined;
// let und;
// console.log(und);

let p = null;
// console.log(p);

//Reference datatype

//array

let ary = [23,45,"sumon",7.5,8]
// console.log(ary);

//objects
let Personalinfo = {
    name: "sumon",
    age:22,
    Roll : 3021


}
// console.log(Personalinfo);

//console api

// console.error("This is error");

// console.warn("This is error");

//console.clear() clear the all console

// Operators in javascript

//Arithmatic Operators
let e = 100;
let f = 25;

// console.log("The value of e + f is",e+f);
// console.log("The value of e - f is",e-f);
// console.log("The value of e * f is",e*f);
// console.log("The value of e / f is",e/f);


// Assignment Operator

let g = e;
g += 4;
g -= 4;
g *=4;
g /= 4;

// Comparison operator
let x = 45;
let y = 55;

// console.log(x == y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x > y);


//Logical Operator

//Logical And
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical or
// console.log(true ||  true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical not
// console.log(!false);
// console.log(!true);


//Functions

function add(p,q){
    r = p +q;
    return r;
}

q1 = add(5,3);
q2 = add(10,5);
// console.log(q1,q2);

//conditional statement

let age = 10;

// if (age>17){
//     console.log("You are eligible for vote");
// }

// else if (age>15 && age<18){
//     console.log("Please wait few more years");
// }
// else{
//     console.log("You are not eligible");
// }


//loop in javascript

let ary1 = [1,2,3,4,5,6,7];

// for(let i=0; i<=ary1.length; i++){
//     if (i==4){
//         break;
//     }
//     console.log(i);
// }

// ary1.forEach(function(element){
//     console.log(element);
// })


var  d = 0;
// while(d <= ary1.length){
//     console.log(ary1[d]);
//     d ++;
// }

// do {
//     console.log(ary1[d])
//     d++;
// } while(d<= ary1.length)

//Array methods
let ary2 = ["sumon","galib","nerob","kamrul",12,32];

// console.log(ary2.length);

ary2.pop()
// console.log(ary2);
ary2.push("junaed");
// console.log(ary2);
ary2.shift()
// console.log(ary2);

let u = ary2.unshift(3)
// console.log(ary2);
// console.log(u);


//String methods


let mystr = "My name is sumon";
// console.log(mystr.length);

// let mystr2 = mystr.slice(4,10);
// console.log(mystr2);

// let mystr2 = mystr.substring(4,10);
// console.log(mystr2);

// let mystr2 = mystr.substr(4,10);
// console.log(mystr2);\

// let mystr2 = mystr.replace("sumon","galib");
// console.log(mystr2);

// let mystr2 = mystr.toUpperCase()
// console.log(mystr2);

// let mystr2 = mystr.toLowerCase()
// console.log(mystr2);


let todaydate = new Date();
// console.log(todaydate);
// console.log(todaydate.getHours());
// console.log(todaydate.getMinutes());
// console.log(todaydate.getDay());
// console.log(todaydate.getFullYear());

//Dom Manipulation

a1 = document.getElementById("content");
// console.log(a1);

a2 = document.getElementsByClassName("firstcontainer");
// console.log(a2[0]);
// a2[0].style.background = "red";
// a2[0].style.color = "red";

// a2[0].classList.add("bg-green");

// a2[0].classList.add("bg-red");

// console.log(a1.innerHTML);
// console.log(a1.innerText);

// console.log(a2[0].innerHTML);
// console.log(a2[0].innerText);

a3 =  document.getElementsByTagName("div");
// console.log(a3);

// createelement = document.createElement("h1");
// createelement.innerText  = "This is new text";
// a2[0].appendChild(createelement);

// createelement1 = document.createElement("h1");
// createelement1.innerText  = "This is new text after replace";

// a2[0].replaceChild(createelement1,createelement );

// a2[0].removeChild(createelement1)


//selecting usig query

// myqur = document.querySelector(".firstcontainer")
// console.log(myqur);

// myqur = document.querySelectorAll(".firstcontainer")
// console.log(myqur);

function clicked(){
    // console.log("the button has beEn clicked");
    alert("this button has been clicked");
}

// window.onload = function clicked(){
//         // console.log("the button has beEn clicked");
//         alert("this window loaded");
//     }

//Events 

// content.addEventListener('click',function(){
//     console.log("this section has been clicked");
// })

// content.addEventListener('mouseover',function(){
//     console.log("this section has been clicked");
// })

// content.addEventListener('mouseout',function(){
//     console.log("this section has been clicked");
// })

a5 = document.querySelectorAll('.firstcontainer')[0].innerHTML;

// content.addEventListener('mouseup',function(){
//     document.querySelectorAll('.firstcontainer')[0].innerHTML = a5;
// })

// content.addEventListener('mousedown',function(){
//     document.querySelectorAll('.firstcontainer')[0].innerHTML = "This is last text";
// })

//arrow function

add  = (x,y) =>{
    return x+y;
}

// console.log(add(2,3));

//SetInterval and SetTimeout
func1  = () =>{
    console.log("hi hello")
}


// settime = setTimeout(func1,3000);

// setint = setInterval(func1,3000);

//LocalStorage

// localStorage.setItem("name","sumon");
// localStorage.getItem("name");
// localStorage.removeItem('name');
// localStorage.clear();

//Json

obj2 = {name: "sumon",age:22}

a6 = JSON.stringify(obj2);
console.log(a6);

parsed = JSON.parse(`{"name":"sumon","age":22}`)
console.log(parsed);