
// 함수

function showError(){
    console.log('에러가 발생했습니다. 다시 시도해주세요.');
    // return 문이 없는 함수도 항상 undefined를 반환
    return; // 만 있어도 undefined를 반환, return 문은 함수를 종료하는 목적으로 쓰이기도 함

    
}

showError();

// 매개변수가 있는 함수
function sayHello(name){

    // 바뀌지 않을 값은 counst
    // 여러가지 값이 변수에 대입될 경우 let
    let msg = `hello`;
    if(name){
        msg += ` , ${name}`;
    } 
    console.log(msg);
    
}

sayHello('mait');

const result = showError();
console.log(result);
