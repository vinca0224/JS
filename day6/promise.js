const promise = new Promise((resolve, reject) => {
console.log('doing somthing...');
});

let promise2 = new Promise((resolve, reject) => {
    console.log('do something...')
    setTimeout(()=>{
        resolve('alpha');
    }, 2000);
});
// resolve()가 전달한 값 'alpha'을 then()을 통해서 받아온다.
promise.then((value)=>{
    console.log(value);
});

let promise3 = new Promise((resolve, reject)=>{
    console.log('do something...');
    setTimeout(()=>{
        reject(new Error('no network'));
    }, 2000);
});

promise3.then((reqData) => {
    console.log(reqData);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('run unconditionally');
})

let fetchNum = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(1),1000});
});
fetchNum.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num-1);
        },1000);
    })
})
.then(num => console.log(num));

//error
let getHen = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           resolve('🐔') 
        }, 1000);
    });
}
let getEgg = (hen) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('🥚')
        }, 1000);
    });
}
getHen().then(hen => getEgg(hen)).then(egg => console.log(egg));