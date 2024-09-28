"use client";
import "./HomePage.css"; // Create a CSS file for HomePage layout
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import { ReactComponent as BtnIcnBlue } from "../../Assets/icons/button-icn-blue.svg";
import { ReactComponent as BtnIcnGreen } from "../../Assets/icons/button-icn-green.svg";

import himg1 from "../../Assets/images/header-img1.png";
import himg2 from "../../Assets/images/header-img2.png";
import himg3 from "../../Assets/images/header-img3.png";

import CheckInc from "../../Assets/icons/check-icn.svg";

import s1 from "../../Assets/images/s1.png";
import s2 from "../../Assets/images/s2.png";
import s3 from "../../Assets/images/s3.png";
import s4 from "../../Assets/images/s4.png";
import s5 from "../../Assets/images/s5.png";
import s6 from "../../Assets/images/s6.png";

import drimage from "../../Assets/images/drimage.png";
import drimageplaceholder from "../../Assets/images/placeholderdrimage.png";

import drctaimage from "../../Assets/images/drctaiamge.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons (You can use Chakra UI icons or react-icons)
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import type { Swiper as SwiperCore } from "swiper";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const DrCard = ({
  imagePath,
  name,
  major,
}: {
  imagePath?: string;
  name?: string;
  major?: string;
}) => {
  return (
    <div className="dr-card">
      <div>
        <img src={imagePath ? imagePath : drimageplaceholder} alt="dr"></img>
      </div>
      <div className="dr-card-name">{name || "Doctor Name"}</div>
      <div className="dr-card-major">{major || "Specialty/Major"}</div>
    </div>
  );
};

const ServicesCard = ({
  imagepath,
  title,
  subTitle,
}: {
  imagepath: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="services-card">
      <div className="services-card-image">
        <img src={imagepath} alt="servicecard" />
      </div>
      <div className="services-card-content">
        <div className="services-card-title">{title}</div>
        <div className="services-card-subtitle">{subTitle}</div>
      </div>
    </div>
  );
};

const Homepage = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Left Text Section */}
          <div className="hero-left-text">
            <div className="hero-title">
              Trusted Family Medical Care at Stonebrook Medical Center
            </div>
            <div className="hero-subtitle">
              Family care and walk-in services. Convenient, compassionate, and
              reliable.
            </div>
            <Link to={"/BookAppointment"}>
              <Button className="hero-button" cursor={"pointer"}>
                Book Appointment
              </Button>
            </Link>
          </div>
          <div style={{ display: "flex" }} className="buttons-container">
            <div className="hero-feature-card-container hero-feature-card-1">
              <div className="hero-feature-card hero-feature-card-blue">
                <div className="hero-feature-card-content">
                  <div className="hero-feature-card-title">Family Practice</div>
                  <div className="hero-feature-card-description">
                    Comprehensive care for all ages, from kids to seniors.
                  </div>
                </div>
                <div className="hero-feature-card-icon">
                  <BtnIcnBlue />
                </div>
              </div>
            </div>
            <div className="hero-feature-card-container hero-feature-card-2">
              <div className="hero-feature-card hero-feature-card-green">
                <div className="hero-feature-card-content">
                  <div className="hero-feature-card-title">Walk-in Clinic</div>
                  <div className="hero-feature-card-description">
                    No appointment needed. Immediate care for urgent needs.
                  </div>
                </div>
                <div className="hero-feature-card-icon">
                  <BtnIcnGreen />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="image-grid-section-container">
          <div className="image-section-container">
            <div className="image-grid">
              <div className="column">
                <img src={himg1} alt="Ime 1" className="image" />
                <img src={himg2} alt="Ime 2" className="image" />
              </div>
              <div className="column center-image">
                <img src={himg3} alt="Ime 3" className="image" />
              </div>
            </div>
            <div className="image-section-text">
              <div className="about-us-heading">ABOUT US</div>
              <div className="welcome-to-center-text">
                Welcome To Stonebrook Medical Center
              </div>
              <div className="about-us-description">
                Stonebrook Medical Center is dedicated to delivering exceptional
                healthcare for families and individuals. Our experienced team
                provides personalized family care and convenient walk-in
                services, ensuring quality medical support when you need it most
              </div>
              <div className="features-list">
                <div className="feature-item">
                  <img
                    src={CheckInc}
                    alt="Checkmark Icn"
                    className="checkmark-icon"
                  />
                  <span>Caring Medical Team</span>
                </div>
                <div className="feature-item">
                  <img
                    src={CheckInc}
                    alt="Checkmark Icn"
                    className="checkmark-icon"
                  />
                  <span>Comprehensive Family Care</span>
                </div>
                <div className="feature-item">
                  <img
                    src={CheckInc}
                    alt="Checkmark Icn"
                    className="checkmark-icon"
                  />
                  <span>Walk-In Clinic Convenience</span>
                </div>
                <div className="feature-item">
                  <img
                    src={CheckInc}
                    alt="Checkmark Icn"
                    className="checkmark-icon"
                  />
                  <span>Advanced Medical Facilities</span>
                </div>
                <div className="feature-item">
                  <img
                    src={CheckInc}
                    alt="Checkmark Icn"
                    className="checkmark-icon"
                  />
                  <span>Personalized Treatment Plans</span>
                </div>
                <div className="feature-item">
                  <img
                    src={CheckInc}
                    alt="Checkmark Icn"
                    className="checkmark-icon"
                  />
                  <span>Accessible Location</span>
                </div>
                <div className="feature-item">
                  <img
                    src={CheckInc}
                    alt="Checkmark Icn"
                    className="checkmark-icon"
                  />
                  <span>Patient-Centered Approach</span>
                </div>
                <div className="feature-item">
                  <img
                    src={CheckInc}
                    alt="Checkmark Icn"
                    className="checkmark-icon"
                  />
                  <span>Flexible Appointment Scheduling</span>
                </div>
              </div>
              <Link to={"/BookAppointment"}>
                <Button cursor={"pointer"} className="about-us-button">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="services-section">
          <div className="services-heading">
            <div className="services-subtitle">What we provide</div>
            <div className="services-title">
              Comprehensive Healthcare for Every Need
            </div>
          </div>
          <div className="services-list">
            <ServicesCard
              imagepath={s1}
              title="Family Medicine"
              subTitle="Comprehensive care for all ages, from newborns to seniors."
            />
            <ServicesCard
              imagepath={s2}
              title="Chronic Disease Management"
              subTitle="Expert support for managing conditions like diabetes, hypertension, and asthma."
            />
            <ServicesCard
              imagepath={s3}
              title="Pediatric Care"
              subTitle="Specialized care for infants, children, and adolescents."
            />
            <ServicesCard
              imagepath={s4}
              title="Women’s Health"
              subTitle="Routine exams, prenatal care, and other women’s health services."
            />
            <ServicesCard
              imagepath={s5}
              title="Walk-In Clinic"
              subTitle="Immediate care for minor injuries, illnesses, and urgent health needs."
            />
            <ServicesCard
              imagepath={s6}
              title="Minor Procedures"
              subTitle="In-house procedures like stitches, wound care, and more."
            />
          </div>
        </section>
        <section className="team-section">
          <div className="team-heading">
            <div className="team-subtitle">our team</div>
            <div className="team-title">Meet Our Expert Medical Team</div>
          </div>
          <div className="team-list">
            <DrCard imagePath={drimage} /> <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-content">
            <div className="cta-image">
              <img src={drctaimage} alt="Doctor" className="cta-image-img" />
            </div>
            <div className="cta-text">
              <p className="cta-subheading" style={{ color: "white" }}>
                GET IN TOUCH
              </p>
              <h2 className="cta-heading">
                Ready to Take the Next Step in Your Health Journey?
              </h2>
              <div className="cta-buttons">
                <Link to={"/BookAppointment"}>
                  <button className="cta-button">Book Appointment</button>
                </Link>
                <Link to={"/PatientRegistration"}>
                  <button className="cta-button">New Patient Form</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
