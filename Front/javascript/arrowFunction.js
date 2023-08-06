
// 함수 표현식, 화살표 함수

// 함수 선언문 > 어디서든 호출 가능
// 자바스크립트는 실행 전 초기화 단계에서 코드의 모든 함수 선언문을 찾아서 생성(호이스팅)
sayHello();

function sayHello(){
    console.log('hello');
}

// 함수 표현식 > 코드에 도달하면 생성
let sayBye = function(){
    console.log('bye');
}

sayBye();

// 화살표 함수
// 함수 표현식에서 function을 지우고 =>를 삽입
let showError = () => {
    console.log('오류가 발생하였습니다.');
}

showError();

const sayName = (name) =>{
    const result = `hello ${name}`;
    console.log(result);
}

sayName('김세연');

// return 값이 하나라면 return 생략 가능
// return 값이 존재할 시 {}를 ()로 변경할 수 있다
const add =(num1, num2) =>( num1 + num2 )

const sum = add(1, 5);
console.log(sum);


