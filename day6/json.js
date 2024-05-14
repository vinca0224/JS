// 1. object to JSON
let json = JSON.stringify(true);
console.log(json);
// 2. array to JSON
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// 객체는 ({})로 묶어서 표현, 배열은 ([])로 묶어서 표현
[1, true, 'str', {inkey: 'value'}, null]
// 숫자
{key:1}
// 문자열
{key: 'str'}
// null
{key : null}

// 3. 오브젝트 to JSON
const rabbit = {
    name : 'tokki',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : ()=>{
        console.log(`${this.name} can jump`)
    }
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,['name', 'color']);
console.log(json);

// 콜백
json = JSON.stringify(rabbit, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return value;
})

//json -> object
const obj = JSON.parse(json);
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

const obj1 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.clear();
console.log(obj1.birthDate);
console.log(obj1.birthDate.getDate());