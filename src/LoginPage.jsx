import Frame from "./Frame.png";
import "./App.css";
import { useState } from "react";

export const LoginPage = () => {
  const [datas, setDatas] = useState({
    usernames: "",
    passwords: "",
    selects: "",
  });
  const { usernames, passwords, selects } = datas;
  const onChangeHandler = (e) => {
    setDatas({ ...datas, [e.target.name]: [e.target.value] });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(datas);
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
            <button className="submit-btn">Sing In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
