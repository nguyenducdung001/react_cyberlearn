import React, { useEffect, useState } from "react";

export default function ChildUseEffect() {
  let [number, setNumber] = useState(1);
  console.log("render ChildUseEffect");

  useEffect(() => {
    console.log("didupdate childuseEffect");
    return () => {
      console.log("willUnmount");
    };
  }, [number]);

  return (
    <div>
      <textarea></textarea>
      <br />
      <button className="btn btn-outline-secondary">Send</button>
    </div>
  );
}
