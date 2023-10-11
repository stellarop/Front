    
    // 변수, 호이스팅

    // 호이스팅
    // 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
    
    // var는 한번 선언한 변수를 다시 선언할 수 있다.
    // var name = 'Mike';
    // console.log(name);

    // var name = 'Jane';
    // console.log(name);

    // var는 선언하기 전에 사용할 수 있다.
    
    var name; // 호이스팅
    console.log(name); // 값을 넣기전 undefined
    // name 선언은 호이스팅이 되지만 할당은 호이스팅이 안됨
    // 콘솔엔 name이라는 변수만 얹어졌을뿐 실제 할당은
    name = 'testName'; // 여기에서 진행

    // Temporal Dead Zone 영역에 있는 변수는 사용 불가
    // let, const는 TDZ의 영향을 받는다.(변수에 값을 할당을 하기전엔 사용 불가)
    // console.log(name1); ReferenceError

    let name1 = 'seyeon'; // 함수 선언 및 할당
    console.log(name1); // 사용가능

    let age = 30;

    function showAge(){
        // 초기화된 let age = 30; 변수 호이스팅
        console.log(age);

        // let age = 20; 초기화 시 console.log(age); TDZ의 영향을 받아서 에러 발생
    }
    showAge();

    // 변수의 생성과정
    // 1. 선언 단계
    // 2. 초기화 단계 
    // 3. 할당 단계

    // var
    // 1. 선언 및 초기화 단계
    // 2. 할당 단계
    // 할당 전 호출 시 에러를 내지 않고 undefined

    // let
    // 1. 선언 단계 > 호이스팅 되면서 선언 단계가 이루어지지만 
    // 2. 초기화 단계 > 초기화 단계는 실제 코드에 도달해야 이루어지기 때문에 에러을 발생
    // 3. 할당 단계

    // const
    // 1. 선언 + 초기화 + 할당
    // var, let은 선언하고 나중에 할당하는 것을 허용
    // const는 선언 + 초기화 + 할당을 동시에 진행해야함

    // var > 함수 스코프
    // let, const > 블록 스코프
    
    // 함수 스코프
    // var은 함수 내에서만 지역 변수로 유지된다.
    // 함수 내에서 선언

    // 블록 스코프
    // 모든 코드 블록에서 선언된 변수는 코드 블록내에서만 유효하며 외부에서 접근 불가
    // let, const의 경우 함수가 아닌 블록 단위에서 지역변수로 선언됨을 알 수 있다.
    // 코드 블럭 > 함수 if for while try/catch

    const num = 10;

    if(num > 5){
        var txt = '실행' // var는 블록 스코프 내에서 사용 가능, let, const는 사용 불가
    }
    
    console.log(txt);

    function fct(){
        // var는 함수 스코프이므로 함수 내부에 있는 변수 외부에서 접근 불가
        var use = 'seyeon'; 
    }
    // use 변수 타입이 let, const 이여도 불가능하다. TDZ 영역에 걸리기 때문
    // let은 호출 전 할당 시 가능
    console.log(use);