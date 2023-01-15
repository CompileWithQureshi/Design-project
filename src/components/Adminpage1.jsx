import React from "react";
import "../App.css";
import Sidenavbar from "./Sidenavbar";

const AdminPage = (props) => {
  const { usernames, selects } = (props.location && props.location.datas) || {};

  return (
    <div className="admin-container">
      <nav className="navbar">
        <p className="nav-hdi">
          Welcome <span className="username"> {usernames}</span>
          <small>Cardiology</small>
        </p>
        <Sidenavbar />
      </nav>
    </div>
  );
};

export default AdminPage;
