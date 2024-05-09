// object - key : 'value'
const name = 'adam';
const age = 4;

//func
function print(name, age){
    console.log(name);
    console.log(age);
}
print(name, age);

//obj
const obj1 = {};                // object literal syntax
const obj2 = new Object();      // object constructor syntax

const scott = {name : 'scott', age : 20};       //class가 없어도 객체 생성가능
console.log(scott);
scott.gender = true;                            //외부에서 속성 추가 가능
console.log(scott);
delete scott.gender;                            //속성 삭제
console.log(scott);

console.log(scott.name);        //일반적인 형태
console.log(scott['name']);     //동적인 경우

function printValue(obj, key){
    console.log(obj.key);
    console.log(obj[key]);
}
printValue(scott, 'name');

//in
console.log('name' in scott);
console.log('age' in scott);
console.log('random' in scott);
for (key in scott){
    console.log(key);
}
// for(key of scott){
//     console.log(key);
// }
const array = [1,2,3,4,5];
for(value of array){console.log(value)};
for(value in array){console.log(value)};

// 복사
const user = {name: 'john', age: '34'}
const user2 = user;
console.log(user);
console.log(user2);
user2.name = 'alice';
console.log(user);
console.log(user2);

const user3 = {};
Object.assign(user3, user);
console.log(user3);
user2.name = 'jack';
console.log(user);
console.log(user2);
console.log(user3);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'mid'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
