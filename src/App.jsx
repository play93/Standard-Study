// import { useState } from "react";
// import "./App.css";

// function App() {
//   //App => 함수. 따라서 함수형 컴포넌트라고 함

//   const [count, setCount] = useState(0);
//   //count 라는 변수와 이 변수를 핸들링 할 수 있는 유일한 방법인 setCount

//   return (
//     <>
//       <h1>현재 count</h1>
//       <h2 style={{ fontSize: 50 }}>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>+1</button> {""}
//       <button onClick={() => setCount(count - 1)}>-1</button>
//     </>
//     //빈 태그의 역할: 부모컴포넌트가 필요할 때 형식적으로 넣어놓는 방법.
//   );
// }

// export default App;
//======================================================================

import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "홍길동", age: 25 });
  const [items, setItems] = useState([
    "사과",
    "바나나",
    "오렌지",
    "포도",
    "감귤",
    "망고",
    "수박",
    "딸기",
  ]);
  const [inputFruit, setInputFruit] = useState("");

  // TODO: 구조분해할당(Destructuring) 코드를 여기 아래에 작성하세요.
  const { name, age } = user;

  // input을 관리하기 위해서는 2가지를 꼭 기억하자!
  //value, onChange

  const addNewItem = function (e) {
    e.preventDefault();
    alert("새로운 아이템 추가하는 함수가 호출됐어요!");

    // 원래 있던 items 배열에서 inputFruit의 값을 끼워 넣어서
    // setItems를 해주면 되는 구나..!

    //(1) 새로운 배열
    const newArr = [...items, inputFruit];
    setItems(newArr);
  };

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <h2>사용자의 아이템 목록</h2>

      <form onSubmit={addNewItem}>
        <input
          value={inputFruit}
          onChange={(e) => {
            const newText = e.target.value;
            setInputFruit(newText);
          }}
        />
        {/*<button>테스트버튼</button>*/}
        <button>제출</button>
      </form>
      <ul>
        {/*
        <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li>
        //이렇게 하면 하드코딩으로 2352142개 까지 만들어야 하므로 map함수를 사용.
        */}
        {/*items.map(function (item) {
          return <li key={item}>{item}</li>;
        })*/}
        {/* li태그를 만들기 전에 사과는 없애줘! */}
        {items
          .filter((i) => i !== "사과")
          .map((item) => (
            <li key={item}>
              {item}
              <button
                onClick={() => {
                  alert(item);
                  //1. 삭제된 리스트 생성
                  //원래 리스트에서 item을 빼주면 됨!
                  const filteredItems = items.filter(function (아이템) {
                    if (아이템 === item) {
                      return false;
                    } else {
                      return true;
                    }
                  });
                  //2. setItems
                  setItems(filteredItems);
                }}
              >
                X
              </button>
            </li>
          ))}
      </ul>
      <button
        onClick={() => {
          //하나하나 순회해야 하므로 forEach.
          items.forEach(function (item) {
            console.log(item);
          });
        }}
      >
        콘솔로그 출력 버튼!!!
      </button>
      <button
        onClick={() => {
          setUser({ name: "김철수", age: 30 });
        }}
      >
        변경하기 함수
      </button>
    </div>
  );
}

export default App;
