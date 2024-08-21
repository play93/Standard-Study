import React from "react";
import { useParams } from "react-router-dom";

const Test = () => {
  const params = useParams();

  console.log("params=>", params);

  return <div>Test</div>;
};

export default Test;
