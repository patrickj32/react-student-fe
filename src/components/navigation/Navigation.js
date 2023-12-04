import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/students">Manage Students</Link>
        </li>
        <li>
          <Link to="/guitars">Manage Guitars</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
