import { Link } from "react-router-dom";
import html from "../assets/jackson-sophat-wUbNvDTsOIc-unsplash.jpg";
import css from "../assets/pankaj-patel-6JVlSdgMacE-unsplash.jpg";
import javascript from "../assets/growtika-qaedPly-Uro-unsplash.jpg";
import figma from "../assets/alexander-shatov-mr4JG4SYOF8-unsplash.jpg";
import php from "../assets/ben-griffiths-gAe1pHGc6ms-unsplash.jpg";
import laravel from "../assets/mohammad-rahmani-cY1SvvEfRwk-unsplash.jpg";
import sql from "../assets/rubaitul-azad-Y9kOsyoWyaU-unsplash.jpg";
import { useContext, useState } from "react";
import { CartContext } from "./context/cardContext";

const Courses = () => {
  const { addToCart } = useContext(CartContext);

  const urunler = [
    {
      id: 1,
      name: "html",
      img: html,
      description: "Build the foundation of your web projects with HTML",
      price: 30,
      discount: 50,
      readMoreTitle: "about html course",
      readMoreAbout1: "250+ video lessons ",
      readMoreAbout2: "200+ tasks & mini projects  ",
      readMoreAbout3: "3 expert instructors  ",
      readMoreAbout4: "Covers forms, images, links, semantic tags ",
      readMoreAbout5: "Projects: portfolio, blog, product page ",
      readMoreAbout6: "Certificate + lifetime access ",
      readMoredesc:
        "Learn HTML from scratch with hands-on lessons and real projects. This course takes you from basics to advanced structure with expert guidance.",
    },
    {
      id: 2,
      name: "css",
      img: css,
      description: "Bring your web pages to life with elegant CSS design!",
      price: 100,
      discount: 120,
      readMoreTitle: "about css course",
      readMoreAbout1: "220+ lessons",
      readMoreAbout2: "200+ tasks & mini projects  ",
      readMoreAbout3: "3 expert instructors  ",
      readMoreAbout4: "Covers forms, images, links, semantic tags ",
      readMoreAbout5: "Projects: portfolio, blog, product page ",
      readMoreAbout6: "Certificate + lifetime access ",
      readMoredesc:
        "Learn HTML from scratch with hands-on lessons and real projects. This course takes you from basics to advanced structure with expert guidance.",
    },
    {
      id: 3,
      name: "javascript",
      img: javascript,

      description: "Add dynamic behavior to your websites with JavaScript!",
      price: 100,
      discount: 120,
      readMoreTitle: "about javascript course",
      readMoreAbout1: "250+ video lessons ",
      readMoreAbout2: "200+ tasks & mini projects  ",
      readMoreAbout3: "3 expert instructors  ",
      readMoreAbout4: "Covers forms, images, links, semantic tags ",
      readMoreAbout5: "Projects: portfolio, blog, product page ",
      readMoreAbout6: "Certificate + lifetime access ",
      readMoredesc:
        "Learn HTML from scratch with hands-on lessons and real projects. This course takes you from basics to advanced structure with expert guidance.",
    },
    {
      id: 4,
      name: "figma",
      img: figma,
      description:
        "Craft sleek, modern UI/UX designs quickly and easily with Figma!",
      price: 100,
      discount: 120,
      readMoreTitle: "about figma course",
      readMoreAbout1: "250+ video lessons ",
      readMoreAbout2: "200+ tasks & mini projects  ",
      readMoreAbout3: "3 expert instructors  ",
      readMoreAbout4: "Covers forms, images, links, semantic tags ",
      readMoreAbout5: "Projects: portfolio, blog, product page ",
      readMoreAbout6: "Certificate + lifetime access ",
      readMoredesc:
        "Learn HTML from scratch with hands-on lessons and real projects. This course takes you from basics to advanced structure with expert guidance.",
    },
    {
      id: 5,
      name: "php",
      img: php,

      description: "Build fast and secure backend systems easily using PHP!",
      price: 100,
      discount: 120,
      readMoreTitle: "about php course",
      readMoreAbout1: "250+ video lessons ",
      readMoreAbout2: "200+ tasks & mini projects  ",
      readMoreAbout3: "3 expert instructors  ",
      readMoreAbout4: "Covers forms, images, links, semantic tags ",
      readMoreAbout5: "Projects: portfolio, blog, product page ",
      readMoreAbout6: "Certificate + lifetime access ",
      readMoredesc:
        "Learn HTML from scratch with hands-on lessons and real projects. This course takes you from basics to advanced structure with expert guidance.",
    },
    {
      id: 6,
      name: "laravel",
      img: laravel,
      description:
        "Build secure, scalable apps fast with Laravel’s smart tools!",
      price: 100,
      discount: 120,
      readMoreTitle: "about laravel course",
      readMoreAbout1: "250+ video lessons ",
      readMoreAbout2: "200+ tasks & mini projects  ",
      readMoreAbout3: "3 expert instructors  ",
      readMoreAbout4: "Covers forms, images, links, semantic tags ",
      readMoreAbout5: "Projects: portfolio, blog, product page ",
      readMoreAbout6: "Certificate + lifetime access ",
      readMoredesc:
        "Learn HTML from scratch with hands-on lessons and real projects. This course takes you from basics to advanced structure with expert guidance.",
    },
    {
      id: 7,
      name: "sql",
      img: sql,
      description:
        "Store, retrieve, and organize your data efficiently with SQL!",
      price: 100,
      discount: 120,
     readMoreTitle: "about sql course",
      readMoreAbout1: "250+ video lessons ",
      readMoreAbout2: "200+ tasks & mini projects  ",
      readMoreAbout3: "3 expert instructors  ",
      readMoreAbout4: "Covers forms, images, links, semantic tags ",
      readMoreAbout5: "Projects: portfolio, blog, product page ",
      readMoreAbout6: "Certificate + lifetime access ",
      readMoredesc:
        "Learn HTML from scratch with hands-on lessons and real projects. This course takes you from basics to advanced structure with expert guidance.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const filterdCourse = urunler.filter((urun) =>
    urun.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-md-12">
            <span
              className="arkaabout fs-1 text-uppercase "
              style={{
                fontWeight: "bold",
                color: "rgba(65, 90, 119 , 0.3)",
                letterSpacing: "10px",
              }}
            >
              our courses
            </span>
            <h3
              className="arkaabout fs-3 text-uppercase"
              style={{
                fontWeight: "bold",
                color: "rgba(65, 90, 119 , 1)",
                letterSpacing: "10px",
              }}
            >
              our courses
            </h3>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              name=""
              id=""
            />
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          {filterdCourse.map((course) => (
            <div
              key={course.id}
              className="col-md-4 mb-4 d-flex justify-content-center"
            >
              <div
                className="card w-75 text-center"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src={course.img}
                  alt={course.name}
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">{course.description}</h4>
                  <p className="card-text">
                    <s>{course.discount}$</s>
                  </p>
                  <h5 className="card-text mb-3">{course.price}$</h5>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#my-modal"
                  >
                    read more
                  </button>
                  <div
                    id="my-modal"
                    class="modal fade"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="my-modal-lable">
                            {course.readMoreTitle}
                          </h5>
                          <button
                            class="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p>{course.readMoredesc}</p>
                          <ul style={{ textAlign: "left" }}>
                            <li>{course.readMoreAbout1}</li>
                            <li>{course.readMoreAbout2}</li>
                            <li>{course.readMoreAbout3}</li>
                            <li>{course.readMoreAbout4}</li>
                            <li>{course.readMoreAbout5}</li>
                            <li>{course.readMoreAbout6}</li>
                          </ul>
                        </div>
                        <div class="modal-footer">
                          <button
                            class="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                          >
                            close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="btn btn-success m-2"
                    onClick={() => addToCart(course)}
                    to=""
                  >
                    add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
                  <div className="input-group mt-4">
                    <input className="form-control" type="text" name="" id="" />
                    <button
                      className="btn text-white "
                      style={{ backgroundColor: "#00adb5" }}
                    >
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
};
export default Courses;
