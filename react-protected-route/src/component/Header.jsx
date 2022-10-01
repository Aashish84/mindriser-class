import { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../App";

function Header() {
  const headerContext = useContext(HeaderContext);
  return (
    // <header className="header">
    //   <h1>hello {props?.username}</h1>
    //   <ul>
    //     <Link to="/counter">counter</Link>
    //     <Link to="/colorchanger">colorchanger</Link>
    //     <Link to="/users">users</Link>
    //     <Link to="/users/1">user/1</Link>
    //     <button onClick={props.logOut}>logout</button>
    //   </ul>
    // </header>

    <header className="header">
      <h1>hello {headerContext.username || "..."}</h1>
      <ul>
        <Link to="/counter">counter</Link>
        <Link to="/colorchanger">colorchanger</Link>
        <Link to="/users">users</Link>
        <Link to="/users/1">user/1</Link>
        <button onClick={headerContext.logOut}>logout</button>
      </ul>
    </header>
  );
}
export default Header;
