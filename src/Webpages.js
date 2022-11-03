import React from "react";
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import { EditingPage } from "./EditingPage/EditingPage";
import { Error } from "./ErrorPage/Error.js";
import { Fluidity } from "./LoadingPage/Fluidity";
import { ThreeData } from "./ThreeDIntro.js/page";
import "./EditingPage/styles.css";
import { Selection } from "./SelectionPage/Selection";
import Navb from "./EditingPage/Navbar/index";



export const Webpages = () => {
  return (
   <>
   
     <Router>
      <Routes>
        <Route exact path="/" element={<ThreeData />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/editing" element={<EditingPage />} />
        <Route path="/loading" element={<Fluidity />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
   </>
  );
};
export default Webpages;
