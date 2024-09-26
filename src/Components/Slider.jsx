import React from "react";

const Slider = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://www.shutterstock.com/image-photo/every-step-taken-towards-fitness-600nw-2149264147.jpg"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ marginBottom: "600px" }}
          >
            <h2 style={{ color: "white" }}>WELCOME TO</h2>
            <h1
              style={{
                backgroundColor: "#FF6961",
                color: "white",
                fontFamily: "Hahmlet",
                fontWeight: 700,
                fontSize: "50px",
              }}
            >
              Your personal productivity assistant
            </h1>
            <p style={{ fontWeight: 500 }}>
              Stay organized and boost your productivity with our easy-to-use
              to-do app!
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   id="carouselExampleSlidesOnly"
    //   class="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     <div class="carousel-item active">
    //       <img
    //         src="https://nishatlinen.com/cdn/shop/files/fall-webBanners--nisha.jpg"
    //         class="d-block w-100"
    //         alt="..."
    //       />
    //     </div>
    //     <div class="carousel-item">
    //       <img
    //         src="https://nishatlinen.com/cdn/shop/files/pre-fall-webBanners-ftb.jpg"
    //         class="d-block w-100"
    //         alt="..."
    //       />
    //     </div>
    //     <div class="carousel-item">
    //       <img
    //         src="https://nishatlinen.com/cdn/shop/files/pre-fall-webBanners-new-2.jpg"
    //         class="d-block w-100"
    //         alt="..."
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Slider;
