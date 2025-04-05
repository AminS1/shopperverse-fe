import React from "react";
import classes from "./NavBar.module.scss";
import classNames from "classnames";

const NavBar: React.FC = () => {
  return (
    <div className={classes.navbarContainer}>
      <header className={classNames(classes.navbar, classes.b)}>
        <div className={classes.navItem}>About</div>
        <div className={classes.navItem}>Experience</div>
        <div className={classes.navItem}>Projects</div>
        <div className={classes.navItem}>Contact</div>
      </header>
    </div>
  );
};

export default NavBar;
