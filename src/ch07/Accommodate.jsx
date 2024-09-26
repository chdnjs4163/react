import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    // Mount (컴포넌트가 생성) 되었을 떄, Update 되었을 때
    useEffect(()=>{
        console.log("====================");
        console.log("useEffect 실행됨");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
      <div style={{padding: 16}}>
          <p>{`총 ${count}명 수용했습니다.`}</p>
          <button onClick={increaseCount} datafld={isFull}>수용시설에 입장.</button>
          <button onClick={decreaseCount}>수용시설에서 퇴장.</button>
          {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
      </div>
    );
}

export default Accommodate;