import React from "react";
import error from '../assets/images/error.png'
import { NavHomePage } from "../ThreeDIntro.js/navigationBar";
export const Error = () => {
  return (

    <div
    className="area" 
      // style={{
      //   backgroundColor: "black",
      //   display: "flex",
      //   justifyContent: "center",
      //   padding:"150px"
      // }}
    >
    <NavHomePage/>
      <img width="500px" height="300px" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}} src={error} alt="Error 404" />
    </div>
  );
};
