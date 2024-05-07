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

// {
//     let name = 'scott'; //지역변수
//     console.log(name);
//     name = 'adam';
//     console.log(name);  
//     console.log(n);     //전역변수 사용 가능
// }

// console.log(name);      // 지역변수 사용 불가

// var 변수 호이스팅
var a;
console.log("a의 값은 " + a);
// console.log("b의 값은 " + b);
// console.log("c의 값은 " + c);
// let c;
let d;
console.log("d의 값은 " + d);

// console.log(x === undefined);
// var x= 3;

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

let name = 'scott';
console.log(name);
name = 1200;
console.log(name);
name = 'kim';
const message = `My name is ${name}`;
console.log(message);

//number, string, boolean, null, undefined, symbol(ES6), obj
console.log(typeof(100));       //typeod() 타입확인
let pi = 3.14;
console.log(typeof(pi));
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof(nothing)}`);
let x;
console.log(`value : ${x}, type : ${typeof(x)}`);

const infinity = 1/0;
console.log(infinity);
console.log(typeof(infinity));
const negative = -1/0;
console.log(negative);
console.log(typeof(negative));
const nan = 'not a number' / 2;
console.log(nan);
console.log(typeof(nan));

//string
const char = 'a';
const smith = 'smith';
const greeting = 'Hello' + smith;
console.log(`value : ${char}, type : ${typeof char}`);
console.log(`value : ${smith}, type : ${typeof smith}`);
console.log(`value : ${greeting}, type : ${typeof greeting}`);

const msg = 18 + ' old';
console.log(msg);
const i = '나는 ';
const age = 30;
console.log(i + age + '살 입니다.');

//boolean
// false -> 0, null, undefined, NaN
// true -> 그외 나머지 값

//symbol은 고유한 식별자가 필요한 경우
const str1 = 'strId';
const str2 = 'strId';
console.log(str1 === str2);
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1);
console.log(symbol2);
console.log(typeof(symbol1));
console.log(typeof(symbol2));
console.log(symbol1 === symbol2);
const symbol3 = Symbol.for('id');   //입력 문자열로 키 생성
const symbol4 = Symbol.for('id');
console.log(symbol3);
console.log(symbol3 === symbol4);

//wrapper 클래스를 통해
let str = 'javascript';
let len = str.length;
console.log(len);
let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);
text =1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '10' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '22'/'2';
console.log(`value : ${text}, type : ${typeof text}`);
