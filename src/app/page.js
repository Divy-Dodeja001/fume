"use client";
import "./page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import LineHeading from "./components/LineHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import gallery1 from "../../public/gallery1.jpg";
import gallery2 from "../../public/gallery2.jpg";
import gallery3 from "../../public/gallery3.jpg";
import gallery4 from "../../public/gallery4.jpg";
import gallery6 from "../../public/gallery6.jpg";
import review from "../../public/review.jpg";
import { Icon } from "@iconify/react";
import desktopRestaurant from "../../public/desktopRestaurant.jpg";
import mobileRestaurant from "../../public/mobileRestaurant.jpg";
import Link from "next/link";
import logo from "../../public/logo.png";
import Header from "./components/Header";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* hero banner */}
      <Header />
      <div id="hero-section" className="position-relative">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/mobileHeroBackground.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/desktopHeroBackground.jpg"
          />
          <img
            src="/desktopHeroBackground.jpg"
            alt="hero-image"
            className="w-100"
          />
        </picture>
        <div
          className="d-none d-lg-block position-absolute w-100"
          style={{ top: "5%" }}
        >
          <div
            className="px-lg-5 px-3 d-flex text-light align-items-center"
            style={{ gap: "4em", fontSize: "1.2em" }}
          >
            <Link
              href={"/"}
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Home
            </Link>
            <a
              href={"/menu.pdf"}
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Browse Menu
            </a>
            <a
              target="_blank"
              href="https://forms.gle/X8DavAcb3csH7LTu5"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Make a Reservation
            </a>
          </div>
        </div>
        <div className="position-absolute hero-description px-lg-5 px-3">
          <div className="mb-3">
            <Link href={"/"} className="">
              <Image src={logo} width="137" height="60" alt="fume-logo" />
            </Link>
          </div>
          <br></br>
          <h1 className="text-light mb-4">Savour the Night</h1>
          <p className="text-light mb-5">
            Premium shisha, curated cocktails, and unforgettable nights,
            <br className="d-md-block d-none"></br>
            surrounded by deep beats, moody lights, and moments that linger
          </p>
          <div
            className="d-flex flex-column flex-lg-row"
            style={{ gap: "1.5em" }}
          >
            <a
              href={"/menu.pdf"}
              // type="button"
              style={{
                backgroundColor: "#D7392F",
                border: "none",
                width: "fit-content",
              }}
              className="btn btn-light rounded-5 px-4 pb-2"
            >
              Browse our Menu
            </a>{" "}
            <a
              href="https://forms.gle/X8DavAcb3csH7LTu5"
              style={{ width: "fit-content" }}
              target="_blank"
              // type="button"
              className="btn btn-light rounded-5 px-4 pb-2"
            >
              Make a Reservation
            </a>{" "}
          </div>
        </div>
      </div>
      {/* intro section */}
      <div className="px-lg-5 px-3 py-5 my-lg-5 mt-4 first-section">
        <LineHeading title="this is fume"></LineHeading>
        <div className="my-lg-5 my-4 px-lg-5">
          <p className="heading-font text-center px-lg-5 mx-lg-5 main-description">
            Right off a cobbled street in Lisbon, Fume brings you late-night
            stories, smooth pulls, curated cocktails and a mood that lingers
            long after the last puff. Come alone or bring your crew, there’s
            always a spot for you
          </p>
        </div>
        <div className="pt-lg-5 pt-4 my-lg-5">
          <div
            className="d-flex flex-md-row flex-column justify-content-center mb-4"
            style={{ gap: "1.5em" }}
          >
            <div className="position-relative">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/mobileSection1a.png"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/desktopSection1a.jpg"
                />
                <img
                  src="/desktopSection1a.jpg"
                  alt="Responsive Image"
                  className="w-100 rounded-4"
                />
              </picture>
              <div
                className="d-none d-lg-block position-absolute text-light"
                style={{ bottom: "3%", left: "4%" }}
              >
                <p className="heading-font mb-1" style={{ fontSize: "32px" }}>
                  Signature Shisha Blends
                </p>
                <p>Custom-crafted flavors you won’t find anywhere else</p>
              </div>
            </div>
            <div>
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/mobileSection1b.jpg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/desktopSection1b.jpg"
                />
                <img
                  src="/desktopSection1b.jpg"
                  alt="Responsive Image"
                  className="w-100 rounded-4"
                />
              </picture>
            </div>
          </div>
          <div
            className="d-flex flex-md-row flex-column justify-content-center"
            style={{ gap: "1.5em" }}
          >
            <div>
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/mobileSection1c.jpg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/desktopSection1c.jpg"
                />
                <img
                  src="/desktopSection1c"
                  alt="Responsive Image"
                  className="w-100 rounded-4"
                />
              </picture>
            </div>
            <div>
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/mobileSection1d.jpg"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/desktopSection1d.jpg"
                />
                <img
                  src="/desktopSection1d.jpg"
                  alt="Responsive Image"
                  className="w-100 rounded-4"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      {/* gallery section */}
      <div className="py-5 my-lg-5 gallery-section">
        <div className="px-lg-5 px-3">
          <LineHeading title="gallery"></LineHeading>
        </div>
        <div className="text-center my-lg-5 my-4 px-lg-5 px-3">
          <h3 className="heading-font mb-3">Inside the Night</h3>
          <div className="px-lg-5 mx-lg-5">
            <p className="px-lg-5">
              This is Fume in its element. A bar that moves with the music, a
              lounge that lives for
              <br className="d-none d-lg-block" /> the after-hours. What you see
              here is what the night feels like
            </p>
          </div>
        </div>
        <div className="pt-lg-5 pt-4 my-lg-5 px-lg-5">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0, // continuous (no stepping)
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 12 },
              768: {
                slidesPerView: 4.2,
                spaceBetween: 12,
              },
            }}
          >
            <SwiperSlide>
              <Image
                src={gallery1}
                alt="gallery"
                className="rounded-4 img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={gallery2}
                alt="gallery"
                className="rounded-4 img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={gallery3}
                alt="gallery"
                className="rounded-4 img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={gallery4}
                alt="gallery"
                className="rounded-4 img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={gallery6}
                alt="gallery"
                className="rounded-4 img-fluid"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* testimonial section */}
      <div className="py-5 my-lg-5 testimonial-section">
        <div className="px-lg-5 px-3">
          <LineHeading title="You said it best"></LineHeading>
        </div>
        <div className="pt-lg-4 pt-4 my-lg-5 px-lg-5">
          <Swiper
            loop={true}
            allowTouchMove={true}
            speed={1000}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 12 },
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            <SwiperSlide>
              <div className="p-2">
                <div>
                  <Image
                    src={review}
                    className="w-100 rounded-top-4"
                    alt="review"
                  ></Image>
                </div>
                <div
                  className="p-lg-4 p-3 rounded-bottom-4"
                  style={{ backgroundColor: "#F4F4F4" }}
                >
                  <div
                    className="d-flex align-ityem-center mb-3"
                    style={{ gap: "0.1em" }}
                  >
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                  </div>
                  <p className="mb-3">
                    “The service was great... I will be a regular... they
                    deserve 5 stars.”
                  </p>
                  <br className="d-lg-none"></br>
                  <p className="fw-bold">Lucas Meyer</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-2">
                <div>
                  <Image
                    src={review}
                    className="w-100 rounded-top-4"
                    alt="review"
                  ></Image>
                </div>
                <div
                  className="p-lg-4 p-3 rounded-bottom-4"
                  style={{ backgroundColor: "#F4F4F4" }}
                >
                  <div
                    className="d-flex align-ityem-center mb-3"
                    style={{ gap: "0.1em" }}
                  >
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                  </div>
                  <p className="mb-3">
                    “Cozy ambiance...mint and watermelon was smooth and
                    refreshing.”
                  </p>
                  <p className="fw-bold">Aaliyah Khalid</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-2">
                <div>
                  <Image
                    src={review}
                    className="w-100 rounded-top-4"
                    alt="review"
                  ></Image>
                </div>
                <div
                  className="p-lg-4 p-3 rounded-bottom-4"
                  style={{ backgroundColor: "#F4F4F4" }}
                >
                  <div
                    className="d-flex align-ityem-center mb-3"
                    style={{ gap: "0.1em" }}
                  >
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                  </div>
                  <p className="mb-3">
                    “Hidden gem... Shisha and cocktails were absolutely
                    delicious.”
                  </p>
                  <p className="fw-bold">Camille Laurent</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-2">
                <div>
                  <Image
                    src={review}
                    className="w-100 rounded-top-4"
                    alt="review"
                  ></Image>
                </div>
                <div
                  className="p-lg-4 p-3 rounded-bottom-4"
                  style={{ backgroundColor: "#F4F4F4" }}
                >
                  <div
                    className="d-flex align-ityem-center mb-3"
                    style={{ gap: "0.1em" }}
                  >
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                    <Icon icon="fluent-color:star-20" width="22" height="22s" />
                  </div>
                  <p className="mb-3">
                    “Beautiful spot for shisha in Port Forum, right on the
                    dock.”
                  </p>
                  <br className="d-lg-none"></br>
                  <p className="fw-bold">Ala Al-Mubarak</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* book seats */}
      <div className="px-lg-5 px-3 res-section py-lg-5 my-lg-5 my-4 py-4">
        <div className="d-flex align-items-center flex-column flex-lg-row">
          <div className="col-12 col-md-5 mb-5 mb-lg-0 text-center text-md-start">
            <h3 className="heading-font mb-4">
              We’ve saved<br></br>you a seat!
            </h3>
            <a
              href="https://forms.gle/X8DavAcb3csH7LTu5"
              target="_blank"
              // type="button"
              className="btn btn-dark rounded-5 px-4 pb-2"
            >
              Join us tonight
            </a>
          </div>
          <div className="col-12 col-md-7">
            <picture>
              <source media="(max-width: 767px)" srcSet={mobileRestaurant} />
              <source
                media="(min-width: 768px)"
                srcSet="/desktopRestaurant.jpg"
              />
              <img
                src="/desktopRestaurant.jpg"
                alt="Responsive Image"
                className="w-100 rounded-4"
              />
            </picture>
          </div>
        </div>
      </div>{" "}
      {/* find us on maps */}
      <div className="px-lg-5 px-3 maps-section py-lg-5 my-lg-5 my-4 py-4">
        <div className="d-flex align-items-center flex-column flex-lg-row">
          <div className="col-12 col-md-6 mb-5 mb-lg-0 text-center text-md-start">
            <h3 className="heading-font mb-4">Find us on Google Maps</h3>
            <p className="mb-3">
              Your next favorite hangout is just around the corner.
            </p>
            <a
              href="https://maps.app.goo.gl/t39tsQgYiB3nZUah7"
              target="_blank"
              type="button"
              className="btn btn-dark rounded-5 px-4 pb-2"
            >
              Directions
            </a>
          </div>
          <div className="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.1641989568966!2d2.2237456763033956!3d41.41395417129652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a5f3e346330b%3A0xa5dcf969a7b3ce6e!2sFum%C3%A9e%20Shisha%20Lounge%20%26%20Cocktail%20bar%20Barcelona!5e0!3m2!1sen!2sin!4v1755388058637!5m2!1sen!2sin"
              height="340"
              style={{ border: 0 }}
              className="rounded-4 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
