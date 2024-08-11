import logo from "./logo.svg";
import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";
function App() {
  //Global User Info -- Context API
  const userInfo = { userName: "Abhishek Ahlawat", isAdmin: true };
  return (
    //Wrapping the BlogPage component with UserInfoContext Provider
    <UserInfoContext.Provider value={userInfo}>
      <BlogPage />
    </UserInfoContext.Provider>
  );
}
export default App;
