import { fade, makeStyles } from "@material-ui/core/styles";

const topNavStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: 1500,
    },
    topNavContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    topNavLeft: {
        display: "flex",
        alignItems: "center"
    },
    topNavRight: {
        display: "flex",
        alignItems: "center"
    },
    trelloLogo: {
        width: "10ch",
        height: "auto",
        '&:hover': {
            color: fade(theme.palette.common.white, 0.25),
        },
        left: "50%",
        top: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)"
    },
    prairieHealthLogo: {
        width: "3ch",
        height: "3ch",
        borderRadius: "50%"
    }
}));

export default topNavStyles;