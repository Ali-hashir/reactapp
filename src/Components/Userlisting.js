import React from "react";
import { users } from "./users";

const UserProfile = ({ user }) => {
  const { username, firstName, lastName, school, email, profilePicture, classLevel } =
    user;
  return (
    <div className="user-profile">
      <div className="user-image">
        <img src={profilePicture} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="user-info">
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>{username}</p>
        <p>{school}</p>
        <p>{email}</p>
        <p style={{color: user.classLevel === "Freshmen" ? "green" : "black"}}>
          {classLevel}
        </p>
      </div>
    </div>
  );
};

const UserList = () => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserProfile key={user.username} user={user} />
      ))}
    </div>
  );
};

export default UserList;
