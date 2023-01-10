import React from "react";
import "../App.css";

const AdminPage = (props) => {
  const { usernames, selects } = (props.location && props.location.datas) || {};

  return (
    <nav className="navbar">
      <div>
        <p className="nav-hdi">
          Welcome <span className="username"> {usernames}</span>
          <p>Cardiology</p>
        </p>
      </div>
    </nav>
  );
};

export default AdminPage;
