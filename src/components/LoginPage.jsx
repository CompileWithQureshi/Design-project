import Frame from "../Frame.png";
import "../App.css";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
const LoginPage = (props) => {
  const [datas, setDatas] = useState({
    usernames: "",
    passwords: "",
    selects: "",
  });
  const { usernames, passwords, selects } = datas;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  };
  const handelSubmit = (e) => {
    console.log(datas);
    e.preventDefault("");
    props.history.push({
      pathname: "/admin",
      datas,
    });
  };

  return (
    <div className="login-page">
      <div className="Images">
        <h1 className="login-page-header">Welcome to my App</h1>
        <p className="login-para">
          Get ahead of the curve. Join the next generation of health heroes.
        </p>
        <img src={Frame} alt="side-imge" className="login-image" />
      </div>
      <div className="form">
        <h2 className="sign-in">Sign-in to your account</h2>
        <div className="form-container">
          <form onSubmit={(e) => handelSubmit(e)}>
            <input
              type="text"
              placeholder="Username"
              onChange={onChangeHandler}
              name="usernames"
              value={usernames}
            />
            <br />
            <input
              type="password"
              name="passwords"
              placeholder="Password"
              value={passwords}
              onChange={onChangeHandler}
              autoComplete="false"
            />
            <br />
            <select
              value={selects}
              // onChange={}
              name="selects"
              onChange={onChangeHandler}
              placeholder="Select unit name"
            >
              <option>Select unit name</option>
              <option>Test1 unit</option>
              <option>Test2 unit</option>
              <option>Test3 unit</option>
            </select>
            <br />
            <button className="submit-btn " type="submit">
              Sing In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
