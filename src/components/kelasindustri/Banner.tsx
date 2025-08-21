import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import assets
import backgroundClass from "../../assets/img/others/backgroundclassindustri.png";
import peopleBanner from "../../assets/img/others/peoplebanner.png";
import shape from "../../assets/img/others/shape.png";
import bannerShape01 from "../../assets/img/banner/banner_shape01.svg";
import bannerShape02 from "../../assets/img/banner/banner_shape02.png";

const Banner: React.FC = () => {
  return (
    <section
      className="banner-area banner-bg-nine tg-motion-effects"
      style={{ backgroundImage: `url(${backgroundClass})` }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-start">
          {/* Text Content */}
          <div className="col-lg-7">    
            <div>
              <h3 className="title center">
                Selamat Datang Di Kelas
                <div>
                  Industri <b>Hummatech</b>
                </div>
              </h3>
              <p id="header-description">
                Meningkatkan skill guru dan siswa dengan program kelas berbasis
                Industri.
              </p>
            </div>
          </div>

          {/* Banner Images */}
          <div className="col-lg-5">
            <div className="banner__images position-relative">
              <img src={peopleBanner} alt="people" className="main-img-two" />
              <div className="shape big-shape" data-aos="fade-up-right" data-aos-delay="600"></div>
              <img src={shape} alt="shape" className="shape bg-dots-two" />
              <img
                src={bannerShape02}
                alt="shape"
                className="shape small-shape tg-motion-effects3"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={bannerShape01}
        alt="shape"
        className="line-shape"
        data-aos="fade-right"
        data-aos-delay="1600"
      />
    </section>
  );
};

export default Banner;
