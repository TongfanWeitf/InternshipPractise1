import React, { useState } from "react";

function MainPhone() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1 style={{ fontSize:20, textAlign: 'left'}}>Enter your Phone:</h1>
      <input
        style={{ width: '350px', height: '40px', fontSize: 40 }}   // adjust the size of input box
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <h1> </h1>
    </div>
  );
}

export default MainPhone;