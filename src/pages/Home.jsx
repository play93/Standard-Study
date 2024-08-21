import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [무쓸모, set무쓸모] = useState(true);
  const [count, setCount] = useState(0);
  const [외부데이터, set외부데이터] = useState(null);

  // useEffect는 2개의 인자를 가짐
  // 첫 번째 인자 : 콜백함수
  // 두 번째 인자 : DA(의존성 배열)
  //의존성 배열 => 어떤 state가 변경되면 호출할지 명시해주는 것. 그 state에 의존하고 있다 해서 의존성 배열
  //만약 두번째 인자 [] 에 아무것도 없다면? => 처음에만 실행하겠다는 뜻

  useEffect(function () {
    console.log("컴포넌트가 렌더링 되었어요!!!");

    //count의 숫자가 변경됨에 따라 외부에서 데이터를 다시 가져오기!

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        set외부데이터(json);
      });
  }, []);

  console.log("외부데이터 =>", 외부데이터);
  //맨 처음에 콘솔에 부데이터 => null이 먼저 찍히고 코드를 읽으면서 나중에 컴포넌트가 렌더링 되고 나서 useEffect가 노출되어 이후에 외부데이터가 찍힘

  return (
    <div>
      {외부데이터 === null ? (
        <div>로딩중입니다..!!!</div>
      ) : (
        <>
          <h3>여기는 홈 입니다.</h3>
          <button
            onClick={function () {
              navigate("/gt");
            }}
          >
            갓탠다드 페이지로 갈게요!!
          </button>
          <h4>현재 숫자 : {count}</h4>
          <button
            onClick={function () {
              setCount(function (count) {
                return count + 1;
              });
            }}
          >
            +
          </button>
          <button
            onClick={function () {
              //set무쓸모(!무쓸모)
              set무쓸모(function (직전값) {
                return !직전값;
              });
            }}
          >
            무쓸모!!!
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
