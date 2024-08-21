import { useState } from "react";

function App() {
  //App => 함수. 따라서 함수형 컴포넌트라고 함

  const [count, setCount] = useState(0);
  //count 라는 변수와 이 변수를 핸들링 할 수 있는 유일한 방법인 setCount

  return (
    <>
      <h1>현재 count</h1>
      <h2 style={{ fontSize: 50 }}>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button> {""}
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
    //빈 태그의 역할: 부모컴포넌트가 필요할 때 형식적으로 넣어놓는 방법.
  );
}

export default App;
