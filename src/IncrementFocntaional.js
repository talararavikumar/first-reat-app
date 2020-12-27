import React, { useState } from "react";

export default function IncrementFocntaional() {
  const [countState, setCountState] = useState({
    count: 0,
    initialName: "ravikumar"
  });

  const [secondNameState, setSecondNameState] = useState({
    name: "saketh"
  });

  function Increment() {
    setCountState({ count: countState.count + 1 });
  }

  function decrement() {
    setCountState({ count: countState.count - 1 });
  }

  function resetStateVal() {
    setCountState({ count: 0, initialName: "pranay", insertedName: "bhavani" });
  }

  return (
    <div>
      <div>initial name: {countState.initialName}</div>
      <div>inserted name: {countState.insertedName}</div>
      <div>second name state: {secondNameState.name}</div>
      <div>{countState.secondname}</div>
      <button onClick={() => Increment()}>+</button>
      <span>{countState.count}</span>
      <button onClick={() => decrement()}>-</button>
      <div onClick={() => resetStateVal()}>InsertName</div>
      <div onClick={() => setSecondNameState({ name: "sai" })}>
        update second state
      </div>
    </div>
  );
}
