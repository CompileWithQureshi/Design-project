import Fade from "react-reveal/Fade";
import Frame from "../Frame.png";
import "../App.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="Images"
        animate={{
          x: 0,
          y: 0,
          scale: [0.2, 1],
          transition: { delay: 1, duration: 3 },
        }}
      >
        <h1 className="login-page-header">Welcome to my App</h1>
        <p className="login-para">
          Get ahead of the curve. Join the next generation of health heroes.
        </p>
        <img src={Frame} alt="side-imge" className="login-image" />
      </motion.div>
      <div className="form">
        <Fade top>
          <h2 className="sign-in">Sign-in to your account</h2>
        </Fade>
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
