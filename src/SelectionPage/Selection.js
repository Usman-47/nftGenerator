import React from "react";
import { NavComponent } from "../EditingPage/Navbar";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import "./style.css";
import { ImageDimension } from "../Webpages";
import { MyDropzone } from "./Dropzone";
import axios from "axios";

export const Selection = () => {
  const handleClick = () => {
    window.location.href = "/editing";
  };

  return (
    <div>
      <NavComponent style={{ zIndex: 2 }} />
      <div className="area" >
        <h1
          style={{
            fontFamily: "Muller-ExtraBold",
            color: "#fff",
            fontWeight: 800, fontSize: '40px'

          }}
        >
          Upload Files
        </h1>
        <div style={{display:"flex", justifyContent:"center", color:"white", gap:"10px", marginBottom:"20px"}}>
          <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <div style={{background:"#C615A9", width: '20px', height: '20px', display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div style={{borderRadius:"50%", background:"white", width: '10px', height: '10px'}}>

              </div>
            </div>
            <p style={{fontfamily:"Poppins", fontSize:"17px"}}>In-Order</p>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{border:"1px solid white", width: '20px', height: '20px', display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div style={{borderRadius:"50%", background:"white", width: '10px', height: '10px'}}>

              </div>
            </div>
            <p style={{fontfamily:"Poppins", fontSize:"17px"}}>Shuffled</p>
          </div>
        </div>
        <p style={{display:"flex", justifyContent:"center", color:"white", fontWeight: 800, fontSize: '18px', fontFamily:"Muller-Light", fontWeight: 800, textTransform:"uppercase"}}>Click below to upload files </p>

        <div
        className="upload-file-main-div"
          style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            // width: "40vw",
            // marginLeft: "30vw",
            // height: "50vh",
            // backgroundColor: "#1313133b",
            // marginTop: "10px",
            zIndex: 2,
            borderRadius: "5px",
            // padding: "30px",
          }}
        >
          <div style={{ position:"absolute", top:'50%', transform:"translateY(-40%)"}}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "17px",
              // display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
           Drag ‘n’ drop files here.
          </div>
          <MyDropzone />
          </div>
        </div>

        <div
          style={{
            // position:'absolute',
            // left:"50%",
            // transform:"translateX(-50%)" 
            justifyContent: "center",
            display: "flex",
            // marginTop: "50px",
            // paddingBottom: "10px",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
           
            size="large"
            onClick={handleClick}
            style={{ zIndex: 2,  background:"rgba(39, 36, 52, 0.7)", }}
          >
            Continue
          </Button>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
