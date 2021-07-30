import { Dialog } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SigninForm from "./SigninForm";
import { useRouter } from "next/router";
import axios from "axios";

export default function Header() {
  const mobileMenu = useRef(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const showMenu = () => {
    mobileMenu.current.classList.toggle("visible");
  };

  const closeMenu = () => {
    mobileMenu.current.classList.remove("visible");
  };

  const handleClickOpen = () => {
    setOpen(true);
    closeMenu();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    axios
      .post("/api/admin/logout")
      .then(() => {
        closeMenu();
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <header>
      <Dialog open={open} onClose={handleClose} aria-labelledby="sign-in form">
        <SigninForm setOpen={setOpen} />
      </Dialog>

      <div className="menu-top">
        <div
          className="container row"
          style={{ justifyContent: "space-between" }}
        >
          <p>
            <a href="tel:+91-9984-183-277">
              Have any questions ? +91-9984-183-277
            </a>
          </p>
          {router.pathname == "/admin-panel" ? (
            <div className="sign-in">
              <Link href="#">
                <a onClick={logout}>Log out</a>
              </Link>
            </div>
          ) : (
            <div className="sign-in" onClick={handleClickOpen}>
              <Link href="#">
                <a>Sign in</a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="menu-main row">
          <div className="logo">
            <Link href="/" alt="Frontline security logo">
              <a onClick={closeMenu}>
                <Image
                  src="/logo2.png"
                  alt="security"
                  width={250}
                  height={50}
                  layout="intrinsic"
                />
              </a>
            </Link>
          </div>
          <div className="links row">
            <ul className="row">
              <Link href="#contact">
                <a>
                  <li>Contact</li>
                </a>
              </Link>

              <Link href="#service">
                <a>
                  <li>Services</li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li>About us</li>
                </a>
              </Link>
              <Link href="/gallery">
                <a>
                  <li>Gallery</li>
                </a>
              </Link>
              <Link href="/work-with-us">
                <a className="btn-primary">Apply now</a>
              </Link>
            </ul>

            <div className="hamburger" onClick={showMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-mobile" ref={mobileMenu}>
        <div className="container">
          <div className="links">
            <ul>
              <Link href="#contact">
                <a>
                  <li onClick={closeMenu}>Contact</li>
                </a>
              </Link>

              <Link href="#service">
                <a>
                  <li onClick={closeMenu}>Services</li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li onClick={closeMenu}>About us</li>
                </a>
              </Link>
              <Link href="/gallery">
                <a>
                  <li onClick={closeMenu}>Gallery</li>
                </a>
              </Link>
              <Link href="/work-with-us">
                <a className="btn-primary" onClick={closeMenu}>
                  Apply now
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
