// function
// 함수 선언(정의), 호출
// func();     //함수 호출
// func(){     //함수 정의

// }
// function 함수명 (입력){};

function printHello(){
    console.log('hello');
}
printHello();

function log(message){
    console.log(message);
}
log('안녕하세요');

// function showError(){
//     alert('error!');
// }
// showError();

// 자바스크립트는 함수가 객체로 취급된다.

//입력 파라미터를 객체로 받는 함수
function changeName(obj){
    obj.name = 'coder'
}
const ellie = {name : 'ellie'};
console.log(ellie.name);
changeName(ellie);
console.log(ellie.name);

function showMessage(message, from= 'unknown'){     //default parameter unknown
    console.log(`${message} by ${from}`);
}
showMessage('hi');  //default parameter 적용
showMessage('hi','kim');

function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach(arg => {
        console.log(arg);
    });
}
printAll('dream', 'coding', 'javis', 'adam');

//함수 출력
function add(num1, num2){
    return num1 + num2;
}
const res = add(10,20);
console.log(res);

//함수 표현식 : 이름없는 함수를 만든다(대입형 함수)
// let func = function(){}     //함수를 변수에 할당
let showHello = function(){
    console.log('hello');
}
showHello();
let hi = showHello;
hi();

//즉시 실행 함수 : 즉시 실행되며 단 한 번만 호출되어 다시는 호출할 수 없다.
let res2 = (function(){
    let a= 10;
    let b= 20;
    return a+b;
}());
console.log(res2);
// 입력 파라미터가 있는 즉시 실행 함수
let res3 = (function(a,b){
    return a*b
}(10, 20));
console.log(res3);

//화살표 함수
// let func = () => {};
const simplePrint = function(){
    console.log('simplePrint');
}
console.log(simplePrint);
console.log(simplePrint());
const simplePrint1 = () => {console.log('simplePrint');}

const add2 = (a,b) => {return a + b;}
console.log(add2(10, 20));

const hi2= () => {alert('good');}
hi();

let hi3 = (user) => {document.write("hi " +user);}
hi3('aaaa');

//콜백함수
function randomQuiz(answer, printYes, printNo){
    if(answer == 'iloveYou'){
        printYes();
    }else printNo();
}

const printYes = function(){
    console,log('yes');
}
const printNo = function(){
    console.log("no")
}
randomQuiz('iloveyou', printYes, printNo);

// function quiz
// function calculate(command, a, b)
// command : add, sub, divide, mul
function calculate(command, a, b){
    switch(command){
        case 'add' :
            return a+b;
        case 'sub' :
            return a-b;
        case 'mul' :
            return a*b;
        case 'divide' :
            return a/b;
    }
}
console.log(calculate('divide', 12, 34));

// // 함수를 입력파라미터로 받을 때는 함수 이름을 전달
// function doSomething(add){
//     console.log(add);
//     const res4 = add(2,3);
//     console.log(res4);
// }
// function add(a,b){
//     const sum = a + b;
//     return sum;
// }

// doSomething(add);

function add(num1, num2){
    return num1 + num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function surprise(callback){
    const result = callback(2,3);
    console.log(result);
}
surprise(mul);