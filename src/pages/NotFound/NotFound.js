import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>{"Oops... Seems like something went wrong."}</h1>
      <p>Here are some helpful links:</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
