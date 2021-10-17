import React, { useState } from "react";
import { getApp } from "../../tcb";

export default function Hello() {
  const app = getApp();
  const [callFunctionResult, setCallFunctionResult] = useState("");

  const callFunction = async () => {
    try {
      const res = await app.callFunction({
        name: "helloworld",
        data: {
          foo: "bar",
        },
      });
      setCallFunctionResult(JSON.stringify(res));
    } catch (e) {
      setCallFunctionResult(e.message);
    }
  };

  return (
    <>
      <h3>callFunction test</h3>
      <p>
        <button onClick={callFunction}>callFunction</button>
        <p>{callFunctionResult}</p>
      </p>
    </>
  );
}
