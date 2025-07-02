import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#415a77",
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
      }}
      className="navbar navbar-expand-lg pb-3 "
    >
      <div className="container text-white">
        <a href="#" className="navbar-brand text-white ">
          Code_Art
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-target="#navnavv"
          data-bs-toggle="collapse"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navnavv"
        >
          <ul className="navbar-nav text-white ">
            <li className="nav-item">
              <Link className="nav-link text-white mx-3 fs-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white mx-3 fs-5" to="/Courses">
                {" "}
                Course
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white mx-3 fs-5"
                to="/CoursesDetails"
              >
                {" "}
                Coure Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white mx-3 fs-5" to="/Login">
                {" "}
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
