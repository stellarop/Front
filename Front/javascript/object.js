
// 객체
const seyeon = {
    name : '김세연'
   ,age : 22
}

// 객체 접근
seyeon.name;
// 대괄호로 접근도 가능
seyeon['name'];

// 객체 추가
seyeon.home = '강남 논현동'
seyeon['sex'] = 'woman';

// 객체 삭제
delete seyeon.sex;

console.log('seyeon 객체 : ', seyeon);

// object 단축 프로퍼티
const manName = 'Tom';
const manAge = 33;

const man = {
    manName // manName : manName
   ,manAge // manAge : manAge 과 같음
   ,manHome : '강남 논현동'
}

console.log(man);

// object 프로퍼티 존재 여부 확인
// 객체에 값이 없다면 undefined
console.log('seyeon.boyFriend : ' + seyeon.boyFriend);

// object 프로퍼티 확인법
// 객체 key in 객체 이름 => 존재하지 않으면 false
console.log('boyFriend' in seyeon);
// 값이 존재하면 true
console.log('name' in seyeon);  

// 객체의 key만큼 for문 시작
// 객체[key] 호출 시 해당 key에 맞는 value 값이 출력
for(let key in seyeon){
    console.log('key : ' + key);
    console.log(seyeon[key]);
}

function mekeObject(name, age){
    // 입력 받은 파라미터 2개의 값을 객체에 담아 리턴
    return {
        'name' : name
        ,'age' : age
    }
}

const returnObject = mekeObject('김세연', 21);
console.log('returnObject : ', returnObject);

// 파라미터로 객체를 입력받아 성인인지 아닌지 구별
function isAdult(uses){
    if(user.age > 20){
        return '성인'
    }else{
        return '미성년자'
    }
}

const user = {
    'name' : '김세연'
    ,'age' : 21
}

const returnIsAdult = isAdult(user);
console.log(returnIsAdult);


// javascript 객체에는 함수도 사용 가능
const fruit = {
    'name' : '복숭아'
   ,'count' : 10
   //, plantation : function(){
   ,plantation(){ // 줄여서 사용할 수 있다. function 키워드 생략
       console.log('수원');
   }
}

// fruit 객체의 메서드(객체 프로퍼티로 할당 된 함수) = plantation
fruit.plantation();

const userParam = {
    'name' : '김세연'
    ,hello : function(){
        // console.log(`hello ${userParam.name}`);
        // this가 호출한 객체가 됨 
        console.log(`hello ${this.name}`);
    }
}

userParam.hello();

let boy = {
    name : 'Mike'
   ,hello2
}

let girl = {
    name : 'seyeon'
   ,hello2
}

// 화살표 함수로 변경 시 Cannot access 'hello2' before initialization 오류 생성
// 화살표 함수는 자신만의 this를 가지고 있지 않고 외부에서 불러온다.(함수 앞 객체의 this를 가르기치 않음)
// 화살표 함수는 this를 가지고 있지 않기 때문에 this를 쓰면 전역객체를 바라본다
function hello2 (){
    // 호출한 객체 name에 따라서 name의 값이 변함
    console.log(`hello ${this.name}`);
}

boy.hello2();
girl.hello2();

let person = {
    name : 'rosan'
   ,showName : function(){
        console.log(this.name);
    } 
}

// person안 name 객체 출력
person.showName();

// person 객체 aa 변수에 대입
let aa = person;

console.log('aa : ', aa);

// 대입받은 객체(person)의 값을 변경 => person 객체 변경과 동일하다.
aa.name = 'Tom'
console.log(person.name);

person = null;
// person 객체가 null이여서 오류 발생 대입한 aa 변수도 null 처리됨
// this를 사용 안하면 부모(person)가 null 처리 => 대입 받은 aa 변수도 null로 변경
// this 사용 시 부모(person)는 null 이지만 null 처리 이전에 대입 받은 값으로 this 활용 가능
aa.showName();

