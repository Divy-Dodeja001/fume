"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../css/header.css";
import logo from "../../../public/logo.png";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Show always if not home
    if (window.location.pathname !== "/") {
      setShowNav(true);
      return;
    }

    const hero = document.querySelector("#hero-section");
    if (!hero) {
      setShowNav(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowNav(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu.pdf", label: "Browse Menu", external: false },
    {
      href: "https://forms.gle/X8DavAcb3csH7LTu5",
      label: "Make a Reservation",
      external: true,
    },
  ];

  return (
    <header
      className={`header-wrapper fixed-top ${
        showNav ? "nav-visible" : "nav-hidden"
      }`}
    >
      <nav className="navbar navbar-expand-lg glass-header">
        <div className="px-lg-5 px-3 d-flex justify-content-between w-100">
          {/* Logo */}
          <Link href="/" className="navbar-brand py-2">
            <Image src={logo} alt="Logo" width={71} height={28} priority />
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
            <ul className="navbar-nav gap-4">
              {navLinks.map(({ href, label, external }) => (
                <li className="nav-item" key={label}>
                  {external ? (
                    <a href={href} target="_blank" className="nav-link">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="nav-link">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Drawer */}
      <div
        className="offcanvas offcanvas-end glass-header"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header px-lg-5 px-3">
          <Link href="/" className="navbar-brand py-2">
            <Image src={logo} alt="Logo" width={71} height={28} priority />
          </Link>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3">
            {navLinks.map(({ href, label, external }) => (
              <li className="nav-item" key={label}>
                {external ? (
                  <a href={href} target="_blank" className="nav-link">
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="nav-link"
                    data-bs-dismiss="offcanvas"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
