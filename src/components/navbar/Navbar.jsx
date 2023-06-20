import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo.svg";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navRight">
        <Link href="/">
          <Image priority src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navRight">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="https://zetapp.in/partner-with-us" target="_blank">
          Partner With Us
        </Link>
        <Link href="https://zetapp.in/blog" target="_blank">
          Blog
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=in.onecode.app&pli=1"
          target="_blank"
        >
          <button className="download">Download ZET</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
