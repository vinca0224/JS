// join()
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(',');
console.log(result);

//split()
const emoji = "🚗,🚄,🚆,🚀,🛸";
const result2 = emoji.split(',');
console.log(result2);

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

// find() 제일 처음의 요소를 리턴
const students = [
    new Student('A', 29, true, 90),
    new Student('B', 29, false, 67),
    new Student('C', 29, true, 89),
    new Student('D', 29, false , 90),
    new Student('E', 29, true, 56)
];
const result3 = students.find(function (student, index){
    console.log(student, index);
    return student.score === 90;
});
console.log(result3);

// filter - 조건 해당되는 값은 전부 리턴
console.clear();
const result4 = students.filter((student) => student.enrolled);
console.log(result4);

//
// const result5 = students.map((stdent) => stdent);
// const result5 = students.map((stdent) => stdent.score);
const result5 = students.map((stdent) => stdent.score * 2);
console.log(result5);