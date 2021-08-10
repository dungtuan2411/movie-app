import { NavLink } from "react-router-dom";
import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    useMediaQuery,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 60,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("sm")]: {
            flexGrow: 1,
        },
    },
    inform: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
    },
    links: {
        textDecoration: "none",
        color: "black",
        "&:hover": {
            textDecoration: "none",
            color: "#dc3545",
        }  
    },
    menu: {
        fontSize: "14px",
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

export default function PrimarySearchAppBar() {
    // Style header
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // Router
    const history = useHistory();
    // Lấy dữ liệu trên store
    const credential = useSelector((state) => state.auth.credential);
    return (
        <div className={classes.root}>
            <AppBar style={{ position: "fixed" }} color="default">
                <Toolbar>
                    <NavLink
                        to="/"
                        className={classes.title}
                        style={{ textDecoration: "none" }}
                    >
                        <Typography variant="h5" className={classes.links}>
                            Trang chủ
                        </Typography>
                    </NavLink>
                    {!isMobile && (
                        <div className={classes.inform}>
                            <a href="#lichChieu" className={classes.links}>
                                <Typography
                                    variant="h6"
                                    style={{ marginRight: "10px" }}
                                    className={classes.menu}
                                >
                                    Lịch chiếu
                                </Typography>
                            </a>
                            <NavLink to="" className={classes.links}>
                                <Typography
                                    variant="h6"
                                    style={{ marginRight: "10px" }}
                                    className={classes.menu}
                                >
                                    Cụm rạp
                                </Typography>
                            </NavLink>
                            <NavLink to="" className={classes.links}>
                                <Typography
                                    variant="h6"
                                    style={{ marginRight: "10px" }}
                                    className={classes.menu}
                                >
                                    Tin tức
                                </Typography>
                            </NavLink>
                            <NavLink to="" className={classes.links}>
                                <Typography
                                    variant="h6"
                                    className={classes.menu}
                                >
                                    Ứng dụng
                                </Typography>
                            </NavLink>
                        </div>
                    )}
                    {/* Hiện menu ở màn hình nhỏ */}
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                classes={{ paper: classes.drawerPaper }}
                                anchor="right"
                                onClose={() => setOpen(false)}
                                open={open}
                            >
                                <List>
                                    <ListItem button>Lịch chiếu</ListItem>
                                    <ListItem button>Cụm rạp</ListItem>
                                    <ListItem button>Tin tức</ListItem>
                                    <ListItem button>Ứng dụng</ListItem>
                                    <Divider />
                                    {credential ? (
                                        <ListItem button>Đăng xuất</ListItem>
                                    ) : (
                                        <ListItem
                                            button
                                            onClick={() =>
                                                history.push("/sign-in")
                                            }
                                        >
                                            Đăng nhập
                                        </ListItem>
                                    )}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        // login đưa đến trang profile, ngược lại hiện đăng nhập
                        <>
                            {credential ? (
                                <Button color="inherit">
                                    {credential.hoTen}
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        color="inherit"
                                        onClick={() => history.push("/sign-in")}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        color="inherit"
                                        onClick={() => history.push("/sign-up")}
                                    >
                                        Signup
                                    </Button>
                                </>
                            )}
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
