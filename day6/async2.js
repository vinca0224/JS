// // async & await

// function fetchUser(){
//     //10sec
//     return 'ellie';
// }
function fetchUser(){
    return new Promise((resolve, reject) => {
        resolve('ellie');
    })
}

const user = fetchUser();
user.then(console.log);
// ---------------------------------
// async
async function fetchUser(){
    return 'ellie';
}
const user1 = fetchUser();
user1.then(console.log);

async function func1(){
    return Promise.resolve(100);
}
func1().then(alert);

// await - async 키워드가 있는 함수에서만 사용 가능
// 비동기의 작업의 완료를 기다린다.
async function func2(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('complete');
        }, 2000);
    });
    let result = await promise;
    alert(result);
}
func2();

// 동기적 처리
// function pickFruits(){
//     return getApple().then(apple =>{
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple(){
    await delay(2000);
    return '🍎';
}
async function getBanana(){
    await delay(2000);
    return '🍌';
}
// pickFruits().then(console.log);

// async function pickFruits(){
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log); 

// async function pickFruits(){
//     const applePromise = getApple();
//     const bananaPromise = getBanana();
//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log);

// 배열로 전달된 promise 들이 모두 병렬로 처리
function pickFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}
pickFruits().then(console.log);

function pickOnly(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnly().then(console.log);