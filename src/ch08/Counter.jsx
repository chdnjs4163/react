// 상태 변경을 포함한 이벤트 처리
import {useState} from "react";

function Counter() {
    const [count, setCount] =useState(0)


    function handleCount() {
        setCount( prevCount => prevCount + 1 );
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleCount}>1씩 증가됨</button>

        </div>
    );
}
export default Counter;
