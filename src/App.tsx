import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom'
import React, {useState} from 'react'
import {
    AppBar,
    Container,
    createStyles, Divider, Drawer,
    Icon, IconButton, List, ListItem, makeStyles,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {MuiThemeProvider} from '@material-ui/core/styles';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Links} from "./Pages/PageList";
import {theme} from "./Common/Theme";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: 0,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    }),
);

export const App = () => {
    const [open, setOpen] = useState(false);
    const handleDrawerChange = () => {
        setOpen(!open);
    };

    const classes = useStyles();

    return (
        <>
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <AppBar
                            position="fixed"
                            className={clsx(classes.appBar, {
                                [classes.appBarShift]: open,
                            })}
                        >
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerChange}
                                    edge="start"
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                                <Typography variant="h6" noWrap style={{fontSize: '1.2rem'}}>
                                    Заголовок
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="left"
                            open={open}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={handleDrawerChange}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                                </IconButton>
                            </div>
                            <Divider/>
                            <List>
                                {Links.map(link => {
                                    return (
                                        <NavLink key={link.path} to={link.path}>
                                            <ListItem button>
                                                <Typography>{link.label}</Typography>
                                            </ListItem>
                                        </NavLink>
                                    )
                                })}
                            </List>
                        </Drawer>

                        {/*{ ТЕЛО ВСЕЙ СТРАНИЦЫ }*/}
                        <Switch>
                            <main
                                className={clsx(classes.content, {
                                    [classes.contentShift]: open,
                                })}
                            >
                                <div className={classes.drawerHeader}/>
                                <Container>
                                    {Links.map(link => {
                                        return (
                                            <Route key={link.path} exact path={link.path}
                                                   component={link.component}/>
                                        )
                                    })}
                                    <Redirect to="/"/>
                                </Container>
                            </main>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        </>
    )
};

