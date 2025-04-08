import React from "react";
import classes from "./header.module.scss";
import Logo from "../../assets/SVGs/logo.svg?react";
import SearchBox from "./SearchBox";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerLeft}>
        <div className={classes.logoContainer}>
          <Logo />
        </div>
      </div>
      <SearchBox />
      <div className={classes.headerRight}></div>
    </header>
  );
};

export default Header;
