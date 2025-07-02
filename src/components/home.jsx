import { Link } from "react-router-dom";
import homeimg from "../assets/home2.png";
function Home() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-6   mt-5">
            <div className="row ms-5 mt-5">
              <div className="  col-md-9">
                <h2 style={{ lineHeight: "45px" }} className="text-capitalize">
                  welcome to <span style={{ color: "#00ADB5" }}>code_art</span>{" "}
                  <br />
                  platform for learn website development
                </h2>
              </div>
            </div>
            <div className="row ms-5 mt-3">
              <div className="col-md-9">
                <p className="mt fs-5" style={{ fontFamily: "sans-serif" }}>
                  Start your journey with us and bring your web development
                  ideas to life
                </p>
                <button
                  className="btn mt-2"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  <Link
                    to="/courses"
                    className="text-white text-decoration-none"
                  >
                    subscribe
                  </Link>
                </button>
              </div>
            </div>

            <p></p>
          </div>
          <div className="col-md-6 ">
            <img src={homeimg} className="img-fluid mt-3" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <span
              className="arkaabout fs-1 text-uppercase "
              style={{
                fontWeight: "bold",
                color: "rgba(65, 90, 119 , 0.3)",
                letterSpacing: "10px",
              }}
            >
              about
            </span>
            <h3
              className="arkaabout fs-3 text-uppercase"
              style={{
                fontWeight: "bold",
                color: "rgba(65, 90, 119 , 1)",
                letterSpacing: "10px",
              }}
            >
              about
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <h3> Learn, Build, Innovate with Code_Art</h3>
            <p className="mt-5">
              At Code_Art, we believe everyone has the potential to create
              something extraordinary. Our platform is designed to teach web
              development from scratch, empowering you to turn your ideas into
              functional websites. With expert-guided tutorials and a supportive
              community, your learning journey is in the best hands.
            </p>
          </div>
          <div className="col-md-4 ms-3 mt-5">
            <div class="accordion my-3">
              <div class="accordion-item">
                <div class="accordion-header">
                  <button
                    class="accordion-button text-white"
                    data-bs-target="#collapse1"
                    data-bs-toggle="collapse"
                    style={{ backgroundColor: "rgb(0, 173, 181) " }}
                  >
                    What is Code_Art?
                  </button>
                </div>
                <div class="accordion-collapse show collapse" id="collapse1">
                  <div class="accordion-body">
                    Code_Art is a comprehensive learning platform designed for
                    anyone interested in web development. It offers step-by-step
                    courses, starting from the basics and progressing to
                    advanced techniques. Our goal is to empower users to
                    confidently build their own projects.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion my-3">
              <div class="accordion-item">
                <div class="accordion-header">
                  <button
                    class="accordion-button text-white"
                    data-bs-target="#collapse2"
                    data-bs-toggle="collapse"
                    style={{ backgroundColor: "rgb(0, 173, 181) " }}
                  >
                    Which technologies are taught at Code_Art?
                  </button>
                </div>
                <div class="accordion-collapse show collapse" id="collapse2">
                  <div class="accordion-body">
                    Our platform covers foundational technologies such as HTML,
                    CSS, and JavaScript, essential for web development
                    beginners. Additionally, we offer courses on modern and
                    popular frameworks like React. The content is regularly
                    updated to keep learners current with industry standards.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion my-3">
              <div class="accordion-item">
                <div class="accordion-header">
                  <button
                    class="accordion-button text-white"
                    data-bs-target="#collapse3"
                    data-bs-toggle="collapse"
                    style={{ backgroundColor: "rgb(0, 173, 181) " }}
                  >
                    Who can benefit from Code_Art?
                  </button>
                </div>
                <div class="accordion-collapse show collapse" id="collapse3">
                  <div class="accordion-body">
                    Code_Art caters to a wide audience, from complete beginners
                    to experienced developers. It provides clear and practical
                    lessons for those just starting out, as well as
                    opportunities for professionals to enhance their skills.
                    Anyone eager to learn or improve their web development
                    abilities will find value here.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion my-3">
              <div class="accordion-item">
                <div class="accordion-header">
                  <button
                    class="accordion-button text-white"
                    data-bs-target="#collapse4"
                    data-bs-toggle="collapse"
                    style={{ backgroundColor: "rgb(0, 173, 181) " }}
                  >
                    How are the courses delivered?
                  </button>
                </div>
                <div class="accordion-collapse show collapse" id="collapse4">
                  <div class="accordion-body">
                    Our courses include video lessons, interactive exercises,
                    and written materials to provide a rich learning experience.
                    This approach helps users to combine theoretical knowledge
                    with hands-on practice. Additionally, community support
                    enables learners to ask questions and collaborate
                    effectively.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion my-3">
              <div class="accordion-item">
                <div class="accordion-header">
                  <button
                    class="accordion-button text-white"
                    data-bs-target="#collapse6"
                    data-bs-toggle="collapse"
                    style={{ backgroundColor: "rgb(0, 173, 181) " }}
                  >
                    What is the mission of Code_Art?{" "}
                  </button>
                </div>
                <div class="accordion-collapse show collapse" id="collapse6">
                  <div class="accordion-body">
                    The mission of Code_Art is to make web development education
                    accessible and easy to understand for everyone. We aim to
                    equip users with the skills and confidence needed to turn
                    their ideas into real projects. Building a strong,
                    supportive community is also a key part of our vision to
                    enhance the learning journey.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-12">
            <span
              className="arkaabout fs-1 text-uppercase "
              style={{
                fontWeight: "bold",
                color: "rgba(65, 90, 119 , 0.3)",
                letterSpacing: "10px",
              }}
            >
              services
            </span>
            <h3
              className="arkaabout fs-3 text-uppercase"
              style={{
                fontWeight: "bold",
                color: "rgba(65, 90, 119 , 1)",
                letterSpacing: "10px",
              }}
            >
              services
            </h3>
          </div>
        </div>
        <div className="row  gap-5 justify-content-between mb-5">
          <div className="col-md-3 mt-5">
            <div
              class="card text-center "
              style={{ borderColor: "#00adb5", borderRadius: "0px" }}
            >
              <div className="mt-3">
                <i
                  class="fa-brands fa-html5  p-3 fs-1 rounded-pill d-inline"
                  style={{ color: "#415a77" }}
                ></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">HTML: Crafting the Web’s Core</h5>
                <p class="card-text">
                  Build the foundation of your web projects with HTML!{" "}
                </p>
              </div>
              <div
                class="card-footer"
                style={{
                  background: "none",
                  borderColor: "#00adb5",
                  borderRadius: "0px",
                  borderTop: "none",
                }}
              >
                <a
                  href="#"
                  class="btn text-white my-2"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div
              class="card text-center "
              style={{ borderColor: "#00adb5", borderRadius: "0px" }}
            >
              <div className="mt-3">
                <i
                  class="fa-brands fa-css3-alt  p-3 fs-1 rounded-pill d-inline"
                  style={{ color: "#415a77" }}
                ></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">CSS : Styling the Web’s Beauty</h5>
                <p class="card-text">
                  Bring your web pages to life with elegant CSS design!{" "}
                </p>
              </div>
              <div
                class="card-footer"
                style={{
                  background: "none",
                  borderColor: "#00adb5",
                  borderTop: "none",
                }}
              >
                <a
                  href="#"
                  class="btn text-white my-2"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div
              class="card text-center "
              style={{ borderColor: "#00adb5", borderRadius: "0px" }}
            >
              <div className="mt-3">
                <i
                  class="fa-brands fa-js  p-3 fs-1 rounded-pill d-inline"
                  style={{ color: "#415a77" }}
                ></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">JavaScript: Energizing the Web</h5>
                <p class="card-text">
                  Add dynamic behavior to your websites with JavaScript!{" "}
                </p>
              </div>
              <div
                class="card-footer"
                style={{
                  background: "none",
                  borderColor: "#00adb5",
                  borderTop: "none",
                }}
              >
                <a
                  href="#"
                  class="btn text-white my-2"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-around mb-5">
          <div className="col-md-lg-3 mt-5">
            <div
              class="card text-center "
              style={{ borderColor: "#00adb5", borderRadius: "0px" }}
            >
              <div className="mt-3">
                <i
                  class="fa-brands fa-figma  p-3 fs-1 rounded-pill d-inline"
                  style={{ color: "#415a77" }}
                ></i>
              </div>
              <div class="card-body">
                <h5 class="card-title"> Figma: Designing the Web’s Vision</h5>
                <p class="card-text">
                  Craft sleek, modern UI/UX designs quickly and easily with
                  Figma!{" "}
                </p>
              </div>
              <div
                class="card-footer"
                style={{
                  background: "none",
                  borderColor: "#00adb5",
                  borderTop: "none",
                }}
              >
                <a
                  href="#"
                  class="btn text-white my-2"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div
              class="card text-center "
              style={{ borderColor: "#00adb5", borderRadius: "0px" }}
            >
              <div className="mt-3">
                <i
                  class="fa-brands fa-php  p-3 fs-1 rounded-pill d-inline"
                  style={{ color: "#415a77" }}
                ></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">PHP: Powering the Web’s Logic</h5>
                <p class="card-text">
                  Build fast and secure backend systems easily using PHP!
                </p>
              </div>
              <div
                class="card-footer"
                style={{
                  background: "none",
                  borderColor: "#00adb5",
                  borderTop: "none",
                }}
              >
                <a
                  href="#"
                  class="btn text-white my-2"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div
              class="card text-center "
              style={{ borderColor: "#00adb5", borderRadius: "0px" }}
            >
              <div className="mt-3">
                <i
                  class="fa-brands fa-laravel  p-3 fs-1 rounded-pill d-inline"
                  style={{ color: "#415a77" }}
                ></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Laravel: Powering Web Applications</h5>
                <p class="card-text">
                  Build secure, scalable apps fast with Laravel’s smart tools!
                </p>
              </div>
              <div
                class="card-footer"
                style={{
                  background: "none",
                  borderColor: "#00adb5",
                  borderTop: "none",
                }}
              >
                <a
                  href="#"
                  class="btn text-white my-2"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div
              class="card text-center "
              style={{ borderColor: "#00adb5", borderRadius: "0px" }}
            >
              <div className="mt-3">
                <i
                  class="fa-brands fa-database  p-3 fs-1 rounded-pill d-inline"
                  style={{ color: "#415a77" }}
                ></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">SQL: Managing the Web’s Data</h5>
                <p class="card-text">
                  Store, retrieve, and organize your data efficiently with SQL!
                </p>
              </div>
              <div
                class="card-footer"
                style={{
                  background: "none",
                  borderColor: "#00adb5",
                  borderTop: "none",
                }}
              >
                <a
                  href="#"
                  class="btn text-white my-2"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <span
              className="arkaabout fs-1 text-uppercase "
              style={{
                fontWeight: "bold",
                color: "rgba(65, 90, 119 , 0.3)",
                letterSpacing: "10px",
              }}
            >
              CONTACT US
            </span>
            <h3
              className="arkaabout fs-3 text-uppercase"
              style={{
                fontWeight: "bold",
                color: "rgba(65, 90, 119 , 1)",
                letterSpacing: "10px",
              }}
            >
              CONTACT US
            </h3>
          </div>
        </div>
        <div className="row mt-5 gap-5">
          <div className="col-md-5 justify-content-center">
            <form action="">
              <div className="row ">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="email"
                    name=""
                    id=""
                  />
                </div>
                <textarea
                  placeholder="message"
                  className="form-control my-4"
                  rows={7}
                  name=""
                  id=""
                ></textarea>
                <button
                  className="btn  fs-4 text-white"
                  style={{ backgroundColor: "#00adb5" }}
                >
                  send
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6437.577005352523!2d37.19438550324852!3d36.22033529518798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff91f43ec9555%3A0xfff0fa8cf33c2727!2z2KfZhNi12KfYrtmI2LHYjCDYrdmE2KjYjCDYs9mI2LHZitin!5e0!3m2!1sar!2str!4v1751481715083!5m2!1sar!2str"
              className="rounded "
              width={900}
              height={300}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#415a77" }}
      >
        <div className="row text-white">
          <div className="col-md-12">
            <div className="container py-5">
              <div className="row justify-content-around">
                <div className="col-md-4">
                  <h2>Code_Art</h2>
                  <p>Learn to build. Build to inspire</p>
                </div>
                <div className="col-md-4">
                  <h2>courses</h2>
                  <ul className="list-unstyled">
                    <li className="mt-4">html</li>
                    <li className="mt-2">css</li>
                    <li className="mt-2">javascript</li>
                    <li className="mt-2">php</li>
                    <li className="mt-2">laravel</li>
                    <li className="mt-2">sql</li>
                    <li className="mt-2">figma</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h2 className="mt-3">send message</h2>
                  <div class="input-group mt-3">
                    <input class="form-control" type="text" name="" id="" />
                    <button class="btn text-white " style={{ backgroundColor: "#00adb5" }}>
                      button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
