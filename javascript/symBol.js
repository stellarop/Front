
// 심볼

// 심볼은 유일한 식별자를 만들때 사용한다
// 원본 객체 건드리지 않고 새 프로퍼티/메소드 추가해야하는 경우에 사용할 수 있다.
const a = Symbol(); // new를 붙히지 않음

// 유일성 보장
// 생긴건 같지만 유일성이 보장되기 때문에 ===로 비교하면 false
// const id = Symbol('id');
// const id2 = Symbol('id2');

const userId = Symbol('roson');
const user = {
     name : 'leeyeonjae'
    ,age : 24
    ,[userId] : 'id'
}

console.log('user : ', user);

// key가 심볼형인 프로퍼티는 건너뛰고 반환
// valse, entries도 마찬가지
// 심볼은 유일한 식별자이기 때문에 Object.assign 으로 복제할 수 없음
console.log('Object.keys : ' + Object.keys(user));

// Symbol.for() : 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만
// Symbol.for 메서드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유


// id === id2 > true
// 키를 통해 같은 Symbol을 공유하기 때문에 같다
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

if(id1 === id2){
    console.log('타입과 값이 같음');
}else{
    console.log('타입과 값이 다음');
}

// keyFor() 를 사용하면 해당 심볼의 key를 가져올 수 있음
console.log('keyFor() : ' + Symbol.keyFor(id1));

// 전역 심볼이 아닌 심볼은 keyFor() 를 사용할 수 없다
// 대신 description 사용
const userName = Symbol('name 입니다.');
console.log('description : ' + userName.description);


const getUser = {
     name : 'seyeon'
    ,age : 22
    ,[userName] : 'name'
}
// 숨겨진 Symbol key 보는 법
console.log('getOwnPropertySymbols : ', Object.getOwnPropertySymbols(getUser));

// 숨겨진  Symbol key와 객체의 모든 key를 출력
console.log('ownKeys : ', Reflect.ownKeys(getUser));



// 다른 개발자가 만들어 놓은 객체
const order = {
         orderSeq : 1
        ,orderName : 'book'
    };

// 심볼 활용
// 원본 객체 건드리지 않고 새 프로퍼티/메소드 추가해야하는 경우에 사용할 수 있다.
const price = Symbol('12000');
// 내가 작업 >
order.price = price;

console.log(order)
console.log(Reflect.ownKeys(order))



