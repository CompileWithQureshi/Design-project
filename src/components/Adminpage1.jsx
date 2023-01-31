import React from "react";
import "../App.css";
import CardContainer from "./cardfolder/cardContainer";
import Sidenavbar from "./Sidenavbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product/Product";
import Consultation from "./consultation/consultation";

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
        setInfo(getData.data.results[0].picture.thumbnail);
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
        <p className="nav-hdi">
          Welcome <span className="username"> {usernames}</span>
          <small>Cardiology</small>
        </p>
        <Sidenavbar />
      </nav>
      <main>
        <CardContainer info={info} />
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
