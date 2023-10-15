
// 객체 메서드, 계산된 프로퍼티

let a = 'age';

const user = {
     name : 'seyeon'
//  ,age : 21 이 아닌
    ,[a] : 21 // 대괄호로 묶어주면 변수 a에 할당된 값이 들어간다.
    // 이것을 computed property(계산된 프로퍼티) 라고 함
}

console.log(user);

// 연산을 넣는것도 가능하다
const user1 = {
     [1 + 4] : 5
    ,["Str" + "ing"] : "String"
}

console.log(user1);

// 객체 복제
const user2 = {
     name : 'yeonjae'
    ,age : 24
}

// user2 변수에는 객체가 저장되있는게 아닌 객체가 저장되어있는 메모리 주소
// 객체의 의한 참조값이 저장됨(하나의 객체, 두개의 참조 변수)
const cloneUser2 = user2;   // 객체가 복사되는게 아닌 객체의 메모리 참조값이 복사됨

// 객체를 복제하려면 Object.assign을 사용
// 빈 객체는 초깃값
// 두번째 객체가 첫번째 초깃값 객체에 들어간다

// 초깂값의 key가 같다면 복제할 객체로 덮어씌워진다
const newUser = Object.assign({name : 'name'}, user2);
console.log(newUser);

const test1 = {
    name : 'Mk'
}
const test2 = {
    age : 25
}
const test3 = {
    job : 'webDeveloper'
}

// 여러 개의 객체를 복제하는것도 가능
// 초깃값 객체(test1)에 test2, test3 객체 복제
const sumObject = Object.assign(test1, test2, test3);
console.log('sumObject : ', sumObject);


// 키 배열 반환
const user3 = {
     name : 'CR'
    ,age : 26
    ,job : 'appDeveloper'
}

// Object.keys user3 객체의 key를 배열로 반환
console.log('keys : ', Object.keys(user3));

// Object.values user3 객체의 value를 배열로 반환
console.log('values : ', Object.values(user3));

// Object.entries 키와 값 모두 배열로 반환받고 싶다면
console.log('all : ', Object.entries(user3));

const arr = [
     ["name", "testName"]
    ,["age", 25]
];

// Object.fromEntries 키/값 배열을 객체로 변환
console.log('arr : ', Object.fromEntries(arr))

