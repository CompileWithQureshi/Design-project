import React from "react";

const AdminPage = (props) => {
  const { usernames, selects } = (props.location && props.location.datas) || {};
  return (
    <div>
      <div>
        <div>
          <strong>Username:</strong>
          {usernames}
        </div>

        <div>
          <strong>Unit select:</strong>
          {selects}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
