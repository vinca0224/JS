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

function showError(){
    alert('error!');
}
showError();

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