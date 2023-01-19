import React from "react";
import "../App.css";
import CardContainer from "./cardfolder/cardContainer";
import Sidenavbar from "./Sidenavbar";

const AdminPage = (props) => {
  const { usernames } = (props.location && props.location.datas) || {};

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
        <CardContainer />
      </main>
    </div>
  );
};

export default AdminPage;
