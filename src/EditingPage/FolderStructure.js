import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";
import { Folders } from "./BuildFolder";
import logo from '../assets/images/logo.png'
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
    <a href="https://linktr.ee/nft_paradise">
    <img width="80%" src={logo} alt="" style={{ marginBottom: "10px" }}/>
    </a>
    <div style={{ padding: "10px"}}>
    <div
        style={{
          justifyContent: "center",
          display: "flex",
          // fontWeight: 800,
          fontSize: "25px",
          fontFamily: "Muller-ExtraBold",
          color: "#fff",
          textTransform:"uppercase",
         
        }}
      >
        Folder Structure
      </div>
      <List>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<IconButton />}
          defaultExpandIcon={<MenuIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto", background:"red" }}
        >
          <Folders children={treeData && treeData.children} />
        </TreeView>
      </List>
      
    </div>
      
    </div>
  );
}
