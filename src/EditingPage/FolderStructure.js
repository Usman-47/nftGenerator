import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";
import { Folders } from "./BuildFolder";
import logo from "../assets/images/logo2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function TreesTemp(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const treeData = props.folderData;

  return (
    <div className={classes.root}>
      <NavLink to='/'>
        <div className='logo_div2'>
          <img width='160px' src={logo} alt='' />
        </div>
      </NavLink>
      <div style={{ padding: "10px" }}>
        <div
          className='folder-strucrure'
          style={{
            justifyContent: "center",
            display: "flex",
            // fontWeight: 800,
            fontSize: "25px",
            fontFamily: "Muller-ExtraBold",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Folder Structure
        </div>
        <List>
          <TreeView
            aria-label='file system navigator'
            defaultCollapseIcon={<IconButton />}
            defaultExpandIcon={<MenuIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400 }}
          >
            <Folders children={treeData && treeData.children} />
          </TreeView>
        </List>
      </div>
    </div>
  );
}
