// 일치 연산자
let num = 10;
let str = '10';
if(num == str){console.log('equal');}   // 값만 비교
if(num === str){                        // 값 + 타입 비교
    console.log('equal');
}
else console.log('not equal');

// == : 동등 연산자, === : 일치 연산자
console.log(0 == false);
console.log(0 === false);
console.log(' ' == false);
console.log(' ' === false);
console.log(null == undefined);
console.log(null === undefined);

//선택제어문
// if
const name = 'scott';
if(name === 'adam'){
    console.log("welcome, adam");
}else if(name != 'adam'){
    console.log("welcome, " + name);
}else{
    console.log('unknown');
}

console.log(name == "smith" ? 'yes':'no');

//switch
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('Microsoft');
        break;
    case 'Firefox':
        console.log('Mozilla');
        break;
    case 'Chrome':
        console.log('Google');
        break;
    default:
        console.log('unknown');
        break;
}

// 입력한 숫자가 3의 배수인지 확인하는 프로그램 작성
// let numA = prompt('숫자를 입력하세요');
// if(numA == null){
//     alert('취소되었습니다.');
// }else if(Number(numA) % 3 == 0 && numA != 0){
//         alert('3의 배수입니다.');
// }else {
//         alert('3의 배수가 아닙니다.');
// }

// let session = prompt("관심 세션을 선택해 주세요. |  1. 마케팅  |  2. 개발  |  3. 디자인  |");
// switch(session){
//     case "1":
//         document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
//         break;
//     case "2":
//         document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다.</p>");
//         break;
//     case "3":
//         document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>");
//         break;
//     default:
//         alert('잘못 입력하셨습니다.');
// }

//반복문
// for
for (let i= 5; i>0; i--){
    console.log(`for : ${i}`);
}

// let sum= 0;
// for (let i=1; i<=1000; i++){
//     sum += i;
// }
// document.write("<h1>1부터 1000까지 더한 값 : " + sum + "</h1>");

let array = [1,2,3,4,5];
for(let i=0; i<5; i++){
    console.log(array[i]);
}

for(let i of array){
    console.log(i);
}

//while
let i=5;
while(i>0){
    console.log(`while : ${i}`);
    i--;
}

// 1. 입력된 구구단 출력
let inNum = prompt('몇단을 입력하시겠습니까');
for(let i=1; i<=10; i++){
    console.log(`${inNum * i}`);
}

// 2. 1단부터 9단까지 출력
for(let i=1; i<=9; i++){
    for(let j=1; j<=9; j++){
        console.log(`${i * j}`);
    }
}

// 3. 0부터 20까지 4의 배수가 아닌 숫자 출력(continue)
for(let inNum3 = 0; inNum3<=20; inNum3++){
    if(inNum3 % 4 == 0){
        continue;
    }
    console.log(inNum3);
}

// 4. 입력된 숫자만큼 카운트
let inNum2 = prompt('숫자를 입력');
let cnt=0;
while(cnt<=inNum2){
    console.log(cnt);
    cnt++;
}