import React from "react";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";
export default function Comment() {
  //Using the useContext hook to consume the UserInfoContext
  const { userName, isAdmin } = useContext(UserInfoContext);

  console.log(userName + " " + isAdmin);
  return (
    <div>
      <p>Logged in as {userName}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}
