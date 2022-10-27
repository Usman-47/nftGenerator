import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom"
import logo from '../assets/images/logo.png'








// Using Inline Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

// Exporting Default Navbar to the App.js File
export const NavHomePage = (props) => {
 
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        variant="dense"
        style={{
        

          borderRadius: "10px",
          display:"flex",
          justifyContent:"space-between"
        }}
      >
     
       <div>
        <img width="300px" src={logo} alt="" />
       </div>
       <div style={{ display:"flex"}}>
       <div className="eachOne">
          <Typography
            variant="h6"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "poppins-light", fontWeight: 600, fontSize:"14px" }}
            onClick={() => {
              props.setInstructionsOpen(true);
            }}
          >
            MINTING NOW
          </Typography>
        </div>

        <div className="eachOne">
          <Typography
            variant="h6"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "poppins-light", fontWeight: 600, fontSize:"14px" }}
            onClick={() => {
              props.setContactOpen(true);
            }}
          >
            UPCOMING MINTS
          </Typography>
        </div>

        <div className="eachOne">
          <Typography
            variant="h6"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "poppins-light", fontWeight: 600, fontSize:"14px" }}
            onClick={() => {
              props.setAboutOpen(true);
            }}
          >
            CREATE
          </Typography>
        </div>
        <div className="eachOne">
          <Typography
            variant="h6"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "poppins-light", fontWeight: 600, fontSize:"14px" }}
            onClick={() => {
              props.setAboutOpen(true);
            }}
          >
            NFT TOOL SUIT
          </Typography>
        </div>
       </div>
      </Toolbar>
    </AppBar>

  



   
  );
};
