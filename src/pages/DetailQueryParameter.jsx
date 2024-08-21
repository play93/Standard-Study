import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const DetailQueryParameter = () => {
  const location = useLocation();

  const [쿼리파람, set쿼리파람] = useSearchParams();
  const 나이 = 쿼리파람.get("age");

  const 변수이름아무거나 = useParams();
  const 이름 = 변수이름아무거나.userName;

  console.log(location);

  return (
    <div>
      <h3>{이름}님 안녕하세요</h3>
      <button
        onClick={function () {
          set쿼리파람("age=50");
        }}
      >
        파람바꾸기
      </button>
    </div>
  );
};

export default DetailQueryParameter;
