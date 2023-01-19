import React, { useState } from "react";

export default function DemoHookUseState(props) {
  // state={}

  let [state, setState] = useState({ like: 0 });

  const handleLike = () => {
    setState({
      like: state.like + 1,
    });
  };
  return (
    <div className="m-5" style={{ width: 200, height: 200 }}>
      <div className="card text-left">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="picture"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: "red" }}> {state.like} ♥</p>
        </div>
      </div>
      <button className="btn btn-danger" onClick={handleLike}>
        Like
      </button>
    </div>
  );
}
