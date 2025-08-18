import Image from "next/image";
import "../css/footer.css";
import logo from "../../../public/logo.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="footer-background px-3 px-lg-5 py-4 py-lg-4">
        <div className="row my-3">
          <div className="col-12 col-md-4">
            <div>
              <div>
                <Link href={"/"}>
                  <Image src={logo} width="91" height="40" alt="fume-logo" />
                </Link>
              </div>
              <div className="mt-3 mb-5 mb-lg-3">
                <p className="text-light">
                  Fume is one of Lisbon’s highest-rated lounges for premium
                  shisha and cocktails.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 d-md-block d-none"></div>
          <div className="col-12 col-md-3 footer-link-menu">
            <div
              className="d-flex align-items-center text-light mb-4"
              style={{ gap: "0.5em" }}
            >
              <div>
                <Icon
                  icon="hugeicons:location-04"
                  width="18"
                  height="18"
                  style={{ color: "#D7392F" }}
                />
              </div>
              <a
                href="https://maps.app.goo.gl/aHyvpzQ5sqXfZW2P6"
                target="_blank"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                Tv. Conceição da Glória 7A, 1250-092 Lisboa
              </a>
            </div>
            <div
              className="d-flex align-items-center text-light mb-4"
              style={{ gap: "0.5em" }}
            >
              <div>
                <Icon
                  icon="material-symbols:call-outline"
                  width="18"
                  height="18"
                  style={{ color: "#D7392F" }}
                />
              </div>
              <a
                href="tel:+351920366185"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                +351 920 366 185
              </a>
            </div>
            <div
              className="d-flex align-items-center text-light mb-4"
              style={{ gap: "0.5em" }}
            >
              <div>
                <Icon
                  icon="lets-icons:e-mail"
                  width="18"
                  height="18"
                  style={{ color: "#D7392F" }}
                />
              </div>
              <a
                href="mailto:fumeshishalounge@gmail.com"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                fumeshishalounge@gmail.com
              </a>
            </div>
            <div
              className="d-flex align-items-center text-light"
              style={{ gap: "0.5em" }}
            >
              <div>
                <Icon
                  icon="material-symbols:alarm-outline"
                  width="18"
                  height="18"
                  style={{ color: "#D7392F" }}
                />
              </div>
              <p className="mb-0">
                Open daily<br></br>Monday – Thursday & Sunday: 2:00 PM – 2:00 AM
                <br></br>
                Friday – Saturday: 2:00 PM – 3:00 AM
              </p>
            </div>
          </div>
          <div className="col-12 col-md-2 d-md-block d-none"></div>
        </div>
      </div>
      <div className="py-1 px-3 px-lg-5">
        <small className="py-0 my-0">
          © 2025 Fume Lounge & Bar. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
