import React from "react";
import { Head, LogoWrap } from "../assets/main";
import { Logo } from "../assets/styles";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Head>
      <LogoWrap>
        <img src={logo} alt="logo" height={"50px"} width={55} />
        <Logo>My Videos</Logo>
      </LogoWrap>
    </Head>
  );
}

export default Header;
