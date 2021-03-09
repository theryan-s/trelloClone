import React from "react";
// Mui Components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase"
import Toolbar from "@material-ui/core/Toolbar";
// Icons
import Add from "@material-ui/icons/Add";
import Apps from "@material-ui/icons/Apps";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import Home from "@material-ui/icons/Home";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import NotificationsNoneOutlined from "@material-ui/icons/NotificationsNoneOutlined";
import SearchIcon from "@material-ui/icons/Search";
// Images
import prairieHealthLogo from "../../assets/prairieHealthLogo.png";
import trelloLogo from "../../assets/trelloLogo.svg"
// Styles
import topNavStyles from "./TopNav.styles";

const TopNav = () => {
     const classes = topNavStyles();

     return (
          <div>
               <AppBar position="static" color="transparent" className={classes.appBar}>
                    <Toolbar className={classes.topNavContainer}>
                         <div className={classes.topNavLeft}>
                              <IconButton aria-label="Apps">
                                   <Apps />
                              </IconButton>
                              <IconButton aria-label="Home">
                                   <Home />
                              </IconButton>
                              <Button variant="contained" startIcon={<DashboardOutlinedIcon />}>
                                   Boards
                              </Button>
                              <div className={classes.search}>
                                   <div className={classes.searchIcon}>
                                        <SearchIcon />
                                   </div>
                                   <InputBase
                                        placeholder="Search…"
                                        classes={{
                                             root: classes.inputRoot,
                                             input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                   />
                              </div>
                         </div>
                         <a href="trello.com"><img className={classes.trelloLogo} src={trelloLogo} alt="Trello Logo" /></a>
                         <div className={classes.topNavRight}>
                              <IconButton aria-label="Add">
                                   <Add />
                              </IconButton>
                              <IconButton aria-label="Info">
                                   <InfoOutlined />
                              </IconButton>
                              <IconButton aria-label="Notifications">
                                   <NotificationsNoneOutlined />
                              </IconButton>
                              <img className={classes.prairieHealthLogo} src={prairieHealthLogo} alt="Prairie Health Logo"/>
                         </div>
                    </Toolbar>
               </AppBar>
          </div>
     );
};

export default TopNav;
