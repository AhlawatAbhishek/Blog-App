import React from "react";
export default function Comment({ userInfo }) {
  const { userName, isAdmin } = userInfo;
  console.log(userName + " " + isAdmin);
  return (
    <div>
      <p>Logged in as {userName}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}
