import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Professional = () => {
  const courses = [
    {
      title: "Paediatric Dentistry",
      image: "http://std1364779.aptech-students.com/eproject/image/child.jpg",
      duration: "2 Years Diploma",
      aim: "This course aims to provide you with the practical advice and guidance you need to treat children’s dental issues and emergencies, achieving excellent results.",
      pdfLink:
        "https://books-library.net/files/download-pdf-ebooks.org-1519330145Iz3C6.pdf",
    },
    {
      title: "Dental Hygiene",
      image: "http://std1364779.aptech-students.com/eproject/image/hygine.jpg",
      duration: "2-Year Degree Programme",
      aim: "This field of study is well-established in developed countries and is gaining much momentum in developing countries, particularly considering the high rates of oral diseases.",
      pdfLink:
        "https://www.cartercenter.org/resources/pdfs/health/ephti/library/lecture_notes/health_officers/OralHealth.pdf",
    },
    {
      title: "Laser Dentistry",
      image:
        "http://std1364779.aptech-students.com/eproject/image/laser-dentistry.jpg",
      duration: "2 Years Diploma",
      aim: "Medical professionals use lasers, which are extremely focused light beams, to alter or remove tissue in small amounts. Laser dentistry is ideal for children when having dental work.",
      pdfLink:
        "https://www.elexxion.com/wp-content/uploads/2019/04/Clinical_Reference_EN.pdf",
    },
    {
      title: "Removable Prosthodontics",
      image:
        "http://std1364779.aptech-students.com/eproject/image/removable1.jpg",
      duration: "2.5 Years Diploma",
      aim: "Removable prosthodontics is concerned with replacing the teeth and soft tissues with a non-permanent prosthesis that can be removed. These are often known as dentures.",
      pdfLink:
        "https://books-library.net/files/download-pdf-ebooks.org-1519394376Bw5X0.pdf",
    },
    {
      title: "Rotary Endodontics",
      image: "http://std1364779.aptech-students.com/eproject/image/rotary.jpg",
      duration: "1-Year Diploma Programme",
      aim: "A rotary instrument is used to remove or reduce tooth matter and to shape teeth during endodontic procedures. Rotary instruments include burs and endodontic files.",
      pdfLink:
        "https://www.johsr.com/doi/JOHSR/pdf/10.5005/jp-journals-10042-1035",
    },
    {
      title: "Dental Implants",
      image:
        "http://std1364779.aptech-students.com/eproject/image/laser-dentistry.jpg",
      duration: "3 Years Degree",
      aim: "Made of a titanium alloy, dental implants are able to stimulate jawbone growth and prevent further jaw decay. Implant placement is a process known as osseointegration.",
      pdfLink: "https://odha.net/docs/Implant%20Dentistry.pdf",
    },
  ];

  // Split courses into two groups
  const col8Courses = courses.slice(0, 4);
  const col4Courses = courses.slice(4, 8);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: "1 0 auto" }}>
        <div className="container-fluid">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            <div
              className="input-group"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                style={{ borderRadius: "10px 0 0 10px" }} // Rounded corners for input
              />
              <button
                className="btn btn-primary"
                type="button"
                style={{ borderRadius: "0 10px 10px 0" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="container-fluid" style={{ flex: "1 0 auto" }}>
  

          <br />
          <br />

          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6">
                  <div
                    class="card"
                    style={{ width: "18rem", backgroundColor: "#C4D7FF" }}
                  >
                    <center>
                      <span className="mx-2" style={{ fontSize: "24px" }}>
                        {" "}
                        {/* Adjust icon size here */}
                        <i className="fas fa-clock"></i>
                      </span>
                      <div className="card-body text-center">
                        {" "}
                        {/* Centered text */}
                        <p className="card-text" style={{ fontSize: "16px" }}>
                          Time
                        </p>{" "}
                        {/* Adjust text size here */}
                        <h3 style={{ fontSize: "28px", margin: "0" }}>
                          56 m
                        </h3>{" "}
                        {/* Adjust text size here */}
                      </div>
                    </center>
                  </div>{" "}
                  <br />{" "}
                  <div
                    class="card"
                    style={{ width: "18rem", backgroundColor: "#FFD7C4" }}
                  >
                    <center>
                      <span className="mx-2" style={{ fontSize: "24px" }}>
                        {" "}
                        {/* Adjust icon size here */}
                        <i className="fas fa-bed"></i>
                      </span>
                      <div className="card-body text-center">
                        {" "}
                        {/* Centered text */}
                        <p className="card-text" style={{ fontSize: "16px" }}>
                          Sleep
                        </p>{" "}
                        {/* Adjust text size here */}
                        <h3 style={{ fontSize: "28px", margin: "0" }}>
                          56 m
                        </h3>{" "}
                        {/* Adjust text size here */}
                      </div>
                    </center>
                  </div>{" "}
                </div>
                <div className="col-md-6">
                  <div
                    class="card"
                    style={{ width: "18rem", backgroundColor: "#FFF4B5" }}
                  >
                    <center>
                      <span className="mx-2" style={{ fontSize: "24px" }}>
                        {" "}
                        {/* Adjust icon size here */}
                        <i className="fas fa-bolt"></i>
                      </span>
                      <div className="card-body text-center">
                        {" "}
                        {/* Centered text */}
                        <p className="card-text" style={{ fontSize: "16px" }}>
                          Enerygy
                        </p>{" "}
                        {/* Adjust text size here */}
                        <h3 style={{ fontSize: "28px", margin: "0" }}>
                          56 m
                        </h3>{" "}
                        {/* Adjust text size here */}
                      </div>
                    </center>
                  </div>{" "}
                  <br />{" "}
                  <div
                    class="card"
                    style={{ width: "18rem", backgroundColor: "#87A2FF" }}
                  >
                    <center>
                      <span className="mx-2" style={{ fontSize: "24px" }}>
                        {" "}
                        {/* Adjust icon size here */}
                        <i className="fas fa-road"></i>
                      </span>
                      <div className="card-body text-center">
                        {" "}
                        {/* Centered text */}
                        <p className="card-text" style={{ fontSize: "16px" }}>
                          Total Distance
                        </p>{" "}
                        {/* Adjust text size here */}
                        <h3 style={{ fontSize: "28px", margin: "0" }}>
                          56 m
                        </h3>{" "}
                        {/* Adjust text size here */}
                      </div>
                    </center>
                  </div>{" "}
                </div>
              </div>
              ------------------
              <div className="row">
                <div className="col-md-4">
                  <div
                    class="card"
                    style={{
                      width: "10rem",
                      backgroundColor: "#FFF4B5",
                      height: "200px",
                    }}
                  >
                    <center>
                     <img src="https://i.pinimg.com/236x/24/1b/89/241b8902a7cd507d96540e5ed3110158.jpg" alt="" />
                      <div className="card-body text-center">
                        {" "}
                        {/* Centered text */}
                        <p className="card-text" style={{ fontSize: "16px" }}>
                          Enerygy
                        </p>{" "}
                        {/* Adjust text size here */}
                        <h3 style={{ fontSize: "28px", margin: "0" }}>
                          56 m
                        </h3>{" "}
                        {/* Adjust text size here */}
                      </div>
                    </center>
                  </div>{" "}
                  <br />{" "}
                </div>
                <div className="col-md-4">
                  <div
                    class="card"
                    style={{ width: "10rem", backgroundColor: "#FFF4B5" }}
                  >
                    <center>
                      <span className="mx-2" style={{ fontSize: "24px" }}>
                        {" "}
                        {/* Adjust icon size here */}
                        <i className="fas fa-bolt"></i>
                      </span>
                      <div className="card-body text-center">
                        {" "}
                        {/* Centered text */}
                        <p className="card-text" style={{ fontSize: "16px" }}>
                          Enerygy
                        </p>{" "}
                        {/* Adjust text size here */}
                        <h3 style={{ fontSize: "28px", margin: "0" }}>
                          56 m
                        </h3>{" "}
                        {/* Adjust text size here */}
                      </div>
                    </center>
                  </div>{" "}
                  <br />{" "}
                </div>
                <div className="col-md-4">
                  <div
                    class="card"
                    style={{ width: "10rem", backgroundColor: "#FFF4B5" }}
                  >
                    <center>
                      <span className="mx-2" style={{ fontSize: "24px" }}>
                        {" "}
                        {/* Adjust icon size here */}
                        <i className="fas fa-bolt"></i>
                      </span>
                      <div className="card-body text-center">
                        {" "}
                        {/* Centered text */}
                        <p className="card-text" style={{ fontSize: "16px" }}>
                          Enerygy
                        </p>{" "}
                        {/* Adjust text size here */}
                        <h3 style={{ fontSize: "28px", margin: "0" }}>
                          56 m
                        </h3>{" "}
                        {/* Adjust text size here */}
                      </div>
                    </center>
                  </div>{" "}
                  <br />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="row">
                <div class="card mb-3">
                  <img
                    src="https://i0.wp.com/www.fitsw.com/blog/wp-content/uploads/2017/11/Fitness-Progress-Graph.png?fit=959%2C748&ssl=1"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//end
export default Professional;
