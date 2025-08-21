import React from 'react';

// Import gambar dari src/assets
import banernafi from '../../../assets/img/others/banernafi.png';
import bannerShape01 from '../../../assets/img/banner/banner_shape01.png';
import bgDots from '../../../assets/img/banner/bg_dots.svg';
import bannerShape02 from '../../../assets/img/banner/banner_shape02.png';
import bannerAuthor01 from '../../../assets/img/banner/banner_author01.png';
import bannerAuthor02 from '../../../assets/img/banner/banner_author02.png';
import bannerShape02svg from '../../../assets/img/banner/banner_shape02.svg';
import bannerShape01svg from '../../../assets/img/banner/banner_shape01.svg';

const BannerArea: React.FC = () => {
    return (
        <section className="banner-area banner-bg tg-motion-effects">
            <div className="container">
                <div className="row justify-content-between align-items-start">
                    <div className="col-xl-5 col-lg-6">
                        <div className="banner__content">
                            <h3
                                className="title tg-svg"
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                Selamat
                                <span className="position-relative">
                                    <span className="svg-icon" id="banner-svg">
                                        <svg
                                            width="61"
                                            height="68"
                                            viewBox="0 0 61 68"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.9456 42.4604C12.35 35.8453 15.0985 20.3798 14.8574 11.4385"
                                                stroke="#031333"
                                                strokeWidth="3.07158"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M27.4487 52.5191C33.5478 49.598 47.4807 42.3448 54.4199 36.7009"
                                                stroke="#031333"
                                                strokeWidth="3.07158"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20.1039 44.2553C23.1559 40.986 29.8591 33.2239 32.2559 28.3291"
                                                stroke="#031333"
                                                strokeWidth="3.07158"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <svg
                                        x="0px"
                                        y="0px"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 209 59"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Datang
                                </span>
                                <div id="header-title">
                                    <br />Di Kelas Industri <b>Hummatech</b>
                                </div>
                            </h3>

                            <p
                                data-aos="fade-right"
                                data-aos-delay="600"
                                id="header-description"
                            >
                                Meningkatkan skill guru dan siswa dengan program kelas
                                berbasis Industri.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner__images">
                            <img
                                src={banernafi}
                                alt="img"
                                className="main-img"
                            />
                            <div
                                className="shape big-shape"
                                data-aos="fade-up-right"
                                data-aos-delay="600"
                            >
                                <img
                                    src={bannerShape01}
                                    alt="shape"
                                    className="tg-motion-effects1"
                                />
                            </div>
                            <img
                                src={bgDots}
                                alt="shape"
                                className="shape bg-dots rotateme"
                            />
                            <img
                                src={bannerShape02}
                                alt="shape"
                                className="shape small-shape tg-motion-effects3"
                            />
                            <div className="banner__author">
                                <div className="banner__author-item">
                                    <div className="image">
                                        <img
                                            src={bannerAuthor01}
                                            alt="img"
                                        />
                                    </div>
                                    <h6 className="name">Kenza Aurelia</h6>
                                </div>
                                <div className="banner__author-item">
                                    <div className="image">
                                        <img
                                            src={bannerAuthor02}
                                            alt="img"
                                        />
                                    </div>
                                    <h6 className="name">Michel Jones</h6>
                                </div>
                                <img
                                    src={bannerShape02svg}
                                    alt="shape"
                                    className="arrow-shape tg-motion-effects3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={bannerShape01svg}
                alt="shape"
                className="line-shape"
                data-aos="fade-right"
                data-aos-delay="1600"
            />
        </section>
    );
};

export default BannerArea;
