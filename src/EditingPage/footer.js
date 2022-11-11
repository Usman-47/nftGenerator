import React from "react";
import logo from "../assets/images/logo2.png";
import me from "../assets/images/me.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div
      className='footer_div'
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
      }}
    >
      <div>
        <img className='footer_logo' width='200px' src={logo} alt='' />
      </div>
      <div
        className='icons_div'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          fontSize: "28px",
        }}
      >
        <TwitterIcon style={{ fontSize: "28px", cursor: "pointer" }} />
        <Icon icon='mingcute:discord-line' style={{ cursor: "pointer" }} />
        <img width='32px' src={me} alt='' style={{ cursor: "pointer" }} />
      </div>
      <div style={{ fontSize: "14px" }}>2022, WHATSFORLAUNCH.</div>
    </div>
  );
};

export default Footer;
