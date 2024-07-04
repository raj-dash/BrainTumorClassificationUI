import { useState } from "react";

function Label() {
  const [text, setText] = useState("Please enter your Image");
  return (
    <>
      <div>
        <label className="label">{text}</label>
      </div>
    </>
  );
}

export default Label;
