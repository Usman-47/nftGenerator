import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NumberOfCopies, ObjectContext, ObjectSelection } from "./EditingPage";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";
import { Typography } from "@material-ui/core";
import "./buildFolder.css";

// ===========
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     backgroundColor: "red !important",
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

// ==============

export const Folders = (props) => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);
  const children = props.children;
  let folderStructure = [];
  // const classes = useStyles();
  const handleClick = (folder, subfolder) => {
    //console.log(objects, "folder: ", folder, subfolder, "index: ", index);
    dispatch1({
      type: "update",
      nameToFind: folder,
      valueToChange: "path",
      currentSlide: subfolder.path.slice(3),
    });
  };

  // console.log(folderStructure);

  return (
    <div>
      {children &&
        children.map((folder, index1) => (
          <div style={{}}>
          <Accordion className="accordian_root">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#CECECE"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         
            <ListItem key={index1} button component="a" href="#">
              <Typography
                // style={{  }}
                className="element"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                style={{
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  backgroundColor: "rgba(0, 0, 0, 0.2)"
                }}
              >
                {folder.name.slice(0, 1).toUpperCase() + folder.name.slice(1)}
              </Typography>
            </ListItem>
</AccordionSummary>
          <div>
          {folder.children.map((subfolder, index2) => (
              <div onClick={() => handleClick(folder.name, subfolder)}>
              <AccordionDetails>
                <ListItem key={index2} button component="a" href="#" style={{borderBottom:"1px solid #2F2861",}}>
                  <Typography
                    className="elementSubfolder"
                    style={{
                      fontFamily: "Poppins",
                    }}
                  >
                    {subfolder.name}
                  </Typography>
                </ListItem>
                </AccordionDetails>
              </div>
            ))}
          </div>
            <TreeItem
              nodeId="1"
              label={
                <ListItem root component="a" href="#">
                  <Typography styles={{ backgroundColor: "#034b92" }}>
                    {" "}
                  </Typography>
                </ListItem>
              }
            />
            </Accordion>
          </div>
        ))}
    </div>
  );
};
