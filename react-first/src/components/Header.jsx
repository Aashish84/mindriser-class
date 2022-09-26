import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>header</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/fakeapicall">fakeapicall</Link>
        </li>
        <li>
          <Link to="/try_404">404</Link>
        </li>
        <li>
          <Link to="/user">user</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
