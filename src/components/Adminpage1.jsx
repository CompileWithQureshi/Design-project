import React from "react";
import "../App.css";
import CardContainer from "./cardfolder/cardContainer";
import Sidenavbar from "./Sidenavbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product/Product";
import Consultation from "./consultation/consultation";
import Calendars from "./calender";

const AdminPage = (props) => {
  const { usernames } = (props.location && props.location.datas) || {};
  const [info, setInfo] = useState({});

  useEffect(() => {
    const url = "https://randomuser.me/api/";
    const fectData = async () => {
      try {
        const getData = await axios.get(url);
        // console.log(getData);
        console.log(getData.data);
        setInfo(getData.data.results[0].picture.large);
        // console.log(getData.results[0].picture);
      } catch (error) {
        console.error(error);
      }
    };
    fectData();
  }, []);

  return (
    <div className="admin-container">
      <nav className="navbar">
        <div className="nav-hdi">
          Welcome
          <div className="username-date">
            <span className="username"> {usernames} </span>
            <Calendars />
          </div>
        </div>
        <Sidenavbar />
      </nav>
      <main>
        <CardContainer info={info ? info : "Loading"} />
        <br />
        <div className="product-align">
          <Product />
          <Consultation info={info} />
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
