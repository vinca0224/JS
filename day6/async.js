// synchronous
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

// async
console.clear;
console.log('1');
setTimeout(()=>{
    console.log('2');
}, 2000);
console.log('3');

function printImmediate(print){
    print();
}
printImmediate(() => console.log("hello"));

function printDelay(print, timeout){
    setTimeout(print, timeout);
}
printDelay(()=> console.log('async callback'),4000);