import React from "react";
import "../App.css";
import Sidenavbar from "./Sidenavbar";

const AdminPage = (props) => {
  const { usernames, selects } = (props.location && props.location.datas) || {};

  return (
    <nav className="navbar">
      <div>
        <p className="nav-hdi">
          Welcome <span className="username"> {usernames}</span>
          <p>Cardiology</p>
        </p>
        <Sidenavbar />
      </div>
    </nav>
  );
};

export default AdminPage;
