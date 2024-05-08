// 배열
const arr1 = new Array();
const arr2 = [1,2,3,4,5];
console.log(arr2);

const fruits = ["🍉","🍍","🍓",'🍏',"🍑","🍌"];
console.log(fruits);
for(let i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
//forEach
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
});

fruits.forEach((fruit) =>{
    console.log(fruit);
});

let arr3 = [1,2,3,4,5];
console.log(arr3.length);
arr3.push(10);      //배열의 원소를 마지막 원소로 추가
console.log(arr3);
arr3.unshift(0);    //배열의 원소를 첫번째 원소로 추가
console.log(arr3);
arr3.pop()          //배열의 마지막 원소를 삭제
console.log(arr3);  
arr3.shift();       //배열의 첫번째 원소를 삭제
console.log(arr3);

fruits.splice(1,1);
console.log(fruits);
fruits.splice(3,2);
console.log(fruits);
fruits.splice(1,1,'🥝','🍇');
console.log(fruits);

// concat
const menu = ['🍕','🍔','🍟','🌭'];
const newMenu = menu.concat(fruits);
console.log(newMenu);

//search
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥝'));      //인덱스 리턴
console.log(fruits.includes('🥝'));
console.log(fruits.includes('🍖'));