console.log("Good morning, Javascript")
console.log("Good afternoon, Javascript")

// 변수
//1. 변수선언
//  var, let, const
//  let - 지역변수, 재선언과 호이스팅 시 초기화 안됨 <-> var
//  const - 상수

// let name = "adam";
// console.log(name);

// console.log(age);
// var age=5;

// name =4;
// let name;

//전역변수 : 키워드 없이 사용하면 전역변수
n = 10;
console.log(n);

let n1=100;
console.log(n1);

{
    let name = 'scott'; //지역변수
    console.log(name);
    name = 'adam';
    console.log(name);  
    console.log(n);     //전역변수 사용 가능
}

console.log(name);      // 지역변수 사용 불가

// var 변수 호이스팅
var a;
console.log("a의 값은 " + a);
// console.log("b의 값은 " + b);
// console.log("c의 값은 " + c);
// let c;
let d;
console.log("d의 값은 " + d);

console.log(x === undefined);
var x= 3;

var myvar = "my value";
console.log(myvar);
(
    function(){
        console.log(myvar); //undefined
        console.log(100);
        var myvar = "local value";
    }
)
();
console.log(myvar);

// 함수 호이스팅
sayHello();
function sayHello(){
    console.log('Hello');
}
// sayHello();