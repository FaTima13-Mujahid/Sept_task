import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider"

const Professional = () => {
  const currentDate = new Date().toLocaleDateString(); //

  return (
    <>
      <Navbar />

      <Slider />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div style={{ flex: "1 0 auto" }}>
          <div className="container-fluid">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100px" }}
            >
              {/* <div
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
              </div> */}
            </div>
          </div>

          <br />
          <br />

          <div className="container-fluid" style={{ flex: "1 0 auto" }}>
            <br />
            <br />

            <div className="row">
              <div className="col-md-5">
                <div className="row" style={{ marginLeft: "50px" }}>
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
                <br />
                <br />
                <div className="row" style={{ marginLeft: "50px" }}>
                  <div className="col-11">
                    <div class="card mb-3">
                      <img
                        src="https://conceptboard.com/wp-content/uploads/feature-pic-todo-list-blog.png"
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
                      <h5 class="card-title">Todo List</h5>
                      <p class="card-text">
                        <span>
                          <strong>Daily Journaling:</strong> Write about today’s
                          achievements and lessons learned.
                        </span>
                        <br />
                        <span>
                          <strong>Exercise:</strong> 30-minute workout session
                          (Running, Yoga, etc.).
                        </span>
                        <br />
                        <span>
                          <strong>Learn a New Skill:</strong> Spend 1 hour
                          learning BooK on ppt.
                        </span>
                        <br />
                        <span>
                          <strong>Meditation:</strong> Practice mindfulness for
                          15 minutes.
                        </span>
                      </p>
                      <p class="card-text">
                        <small className="text-muted">
                          Last updated on {currentDate}
                        </small>
                      </p>
                    </div>
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

export default Professional;
