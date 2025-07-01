import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{ backgroundColor: "#415a77" }}
      className="navbar navbar-expand-lg py-3 "
    >
      <div className="container text-white">
        <a href="#" className="navbar-brand text-white ">
          Code_Art
        </a>
        <button
          type="button"
          className=" btn text-white"
          data-bs-target="#navnavv"
          data-bs-toggle="collapse"
          style={{ color: "red" }}
        >
          <i class="fa-solid fa-bars fs-3"></i>{" "}
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
