import React, { useState, useRef } from "react";

export default function DemoHookUseRef(props) {
  let inputUserName = useRef(null);
  let inputPassword = useRef(null);

  let userName = useRef("");

  let [userLogin, setUserLogin] = useState({ userName: "" });

  const handleLogin = () => {
    console.log("userName", userName);
    console.log("userLogin", userLogin.userName);
    userName.current = "abc";
    setUserLogin({
      userName: userName.current,
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Login</h1>
      <div className="form-group">
        <h3>Username</h3>
        <input ref={inputUserName} name="userName" className="form-control" />
      </div>
      <div className="form-group">
        <h3>Password</h3>
        <input ref={inputPassword} name="password" className="form-control" />
      </div>
      <div className="form-group">
        <button onClick={handleLogin} className="btn btn-outline-secondary">
          Login
        </button>
      </div>
    </div>
  );
}
