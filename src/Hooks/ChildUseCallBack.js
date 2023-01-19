import React, { memo } from "react";

function ChildUseCallBack(props) {
  let title = "cyberlearn";
  let object = { id: 1, name: "Khải" };
  console.log("title: ", title);
  console.log("object: ", object);
  console.log("re-render");

  return (
    <div>
      <small>{props.renderNotify()}</small>
      <br />
      <textarea></textarea>
      <br />
      <button className="btn btn-outline-secondary">Send</button>
    </div>
  );
}

export default memo(ChildUseCallBack);
