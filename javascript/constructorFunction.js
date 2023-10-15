
// 생성자 함수

// 생성자 함수의 첫 글자는 대문자로
function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name)
    }
}

let user1 = new User('seyeon', 21);
let user2 = new User('me', 24);

console.log(user1);
console.log(user2);  
user1.sayName();
