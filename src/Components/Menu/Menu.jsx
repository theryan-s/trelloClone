import React from "react";
import { useState } from "react";
// Components
import Board from "../Board/Board";
// Mui Components
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
// Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ViewWeekOutlinedIcon from "@material-ui/icons/ViewWeekOutlined";
// Image
import trelloLogo from "../../assets/trelloLogo.svg";
// Styles
import menuStyles from "./Menu.styles";

const Menu = () => {
    const classes = menuStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar
                position="absolute"
                color="transparent"
                className={clsx(classes.appBar, { [classes.appBarShift]: open, })}
            >
                <Toolbar className={classes.topNavContainer}>
                    <div className={classes.topNavLeft}>
                        <Button
                            variant="contained"
                            startIcon={<ViewWeekOutlinedIcon />}
                            endIcon={<KeyboardArrowDownOutlinedIcon />}
                        >
                            Boards
                        </Button>
                        <Button variant="contained">
                            Test
                        </Button>
                        <IconButton>
                            <StarBorderOutlinedIcon />
                        </IconButton>
                        <Button variant="contained">
                            Prairie Health
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<GroupOutlinedIcon />}
                        >
                            Team Visible
                        </Button>
                        <a href="trello.com"><img className={classes.trelloLogo} src={trelloLogo} alt="Trello Logo" /></a>
                        <Button variant="contained">
                            Invite
                        </Button>
                    </div>
                    <div className={classes.topNavRight}>
                        <Button
                            variant="contained"
                            startIcon={<RoomServiceIcon />}
                        >
                            Butler
                        </Button>
                        <Button
                            color="default"
                            aria-label="open drawer"
                            variant="contained"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                            startIcon={<MoreHorizIcon />}
                        >
                            Show Menu
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Board className={classes.drawerHeader} />
            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className="classes.toolBar">
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        Hello
                    </List>
                </div>
            </Drawer>
        </div>
    )
};

export default Menu;
