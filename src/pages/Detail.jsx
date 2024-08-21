import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const 변수이름아무거나 = useParams();

  console.log(변수이름아무거나);

  const 이름 = 변수이름아무거나.userName;
  console.log("이름 =>", 이름);

  return <div>{이름}님 안녕하세요</div>;
};

export default Detail;
