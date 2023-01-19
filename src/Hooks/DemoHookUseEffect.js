import React, { useState, useEffect } from "react";
import ChildComponent from "./../LifeCycleReact/ChildComponent";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoHookUseEffect(props) {
  let [number, setNumber] = useState(1);
  let [like, setLike] = useState(1);

  // useEffect là hàm chạy sau khi render thay cho didMount va didUpdate trong mọi trường hợp
  // useEffect(() => {
  //   console.log("did mount");
  //   console.log("did update");
  // });

  // Cách viết thay thế cho component didmount
  useEffect(() => {
    console.log("didmount");
  }, []);

  // Cách viết thay thế cho component didupdate
  useEffect(() => {
    console.log("didupate khi number thay đổi");
    return () => {
      console.log("willUnmount");
    };
  }, [number, like]);

  console.log("render");

  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
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
          <p style={{ color: "red" }}> {number} ♥</p>
          <p tyle={{ color: "blue" }}>{like}</p>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
        className="btn btn-warning"
      >
        like
      </button>

      {like == 1 ? <ChildUseEffect /> : ""}
    </div>
  );
}
