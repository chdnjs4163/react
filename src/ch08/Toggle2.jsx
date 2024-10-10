import {useState} from "react";

function Toggle2() {
    const [isToggleOn, setIsToggleOn] = useState(true);

//  첫번쨰 방법: 함수 컴퍼넌트 내에 함수로 정의하는 방법
 //   function handleClick() {
  //      setIsToggleOn((isToggleOn)=> !isToggleOn);
  //  }

    const handleClick = () => {
        setIsToggleOn((isToggleOn)=> !isToggleOn);

    }

    return(
        <button onClick={handleClick}>
            함수형 컴포넌트2 {isToggleOn? "켜짐" : "꺼짐"}
        </button>
    );

}
export default Toggle2;