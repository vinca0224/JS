// class 는 template이다. 데이터가 없다.
// object는 class에 데이터를 넣으면 객체가 된다.

class Pearson{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name}: hello`);
    }
}

const aaaa = new Pearson('aaaa', 21);
console.log(aaaa);
console.log(aaaa.name, aaaa.age);
aaaa.speak();

//getter & setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age
    }
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('kim', 'manje', -1);
console.log(user1.age);

// 생성자 없이 필드를 작성하면 public, # 붙이면 private
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment1 = new Experiment();
console.log(experiment1.privateField)
console.log(experiment1.publicField);

//static - static을 붙이면 클래스 멤버가 된다
// 클래스 이름으로 접근
// 각 객체마다 만들어지지 않고 공통으로 사용되는 데이터나 메소드
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.printPublisher);
    }
}
const article1 = new Article(1);
console.log(Article.publisher);

// 상속
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
const rectangle = new Rectangle(20,20, 'blue');
rectangle.draw();

class Triangle extends Shape{
    getArea(){
        return this.width * this.height / 2;
    }
}
const tri = new Triangle(20, 20, "red");
console.log(tri.getArea());

// instanceof : 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 오브젝트인지 확인
// 모든 오브젝트들은 최상위클래스인 Object를 상속한다.
console.log(tri instanceof Rectangle);
console.log(tri instanceof Triangle);
console.log(tri instanceof Shape);
console.log(tri instanceof Object);
