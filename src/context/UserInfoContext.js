import { createContext } from "react";
//Create a context object using createContext hook
const UserInfoContext = createContext({
  userName: "Guest",
  isAdmin: "false",
});

export default UserInfoContext;
