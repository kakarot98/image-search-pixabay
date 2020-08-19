import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import MenuButton from "@material-ui/core"

const useStyles = makeStyles({
  header: {
    backgroundColor:"black"
  }
})

const NavBar = () => {
  const classes=useStyles()
  return (
    <div>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <Typography>PixaBay Image Finder</Typography>
        </Toolbar>
      </AppBar>
      <br/>
      
    </div>
  );
};

export default NavBar;
