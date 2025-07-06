import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        background: "linear-gradient(45deg , #30496b , #30b8d2)",
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
              <Link className="nav-link text-white mx-3 fs-5" to="/Login">
                {" "}
                Login
              </Link>
            </li>
          </ul>

          <Link to="/Chekout">
            <i class="fa-solid fa-basket-shopping text-white mx-3 mt-3 fs-5"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
