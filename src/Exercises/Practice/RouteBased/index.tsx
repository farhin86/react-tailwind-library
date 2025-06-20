import {
  HashRouter,
  Routes,
  Route,
  Link,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import UserPage from "./UserPage";

export default function RouteBasedUser() {
  return (
    <BrowserRouter>
      <div className="text-blue-500 p-5 m-5 border-gray-400 border w-1/3 flex justify-around">
        <NavLink activeClassName="active" to="/home" exact>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </div>
      <Routes>
        <Route
          path="/home"
          Component={() => <div className="ml-10">Home</div>}
        />
        <Route
          path="/about"
          Component={() => <div className="ml-10">About</div>}
        />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
