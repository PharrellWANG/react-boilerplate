/* eslint-disable arrow-body-style,no-console */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import styled, { css } from 'styled-components';
import Reboot from 'material-ui/Reboot';
import { connect } from 'react-redux';
// import { matchPath } from 'react-router';
// import { Redirect } from 'react-router';
// import { browserHistory } from 'react-router'
import { push } from 'react-router-redux';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { MuiThemeProvider, createMuiTheme, withStyles, withTheme } from 'material-ui/styles';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignIn from 'containers/SignIn/Loadable';
// import Header from 'components/Header';
import { injectIntl } from 'react-intl';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// import ExpandLess from 'material-ui-icons/ExpandLess';
// import ExpandMore from 'material-ui-icons/ExpandMore';
// import StarBorder from 'material-ui-icons/StarBorder';
import { OpenInNew } from 'mdi-material-ui';
// import { GithubCircle } from 'mdi-material-ui';
// import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import List, { ListItemIcon, ListItemText } from 'material-ui/List';
// import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
// import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
// import MailIcon from 'material-ui-icons/Mail';
// import LocaleToggle from 'containers/LocaleToggle';
import Footer from 'components/Footer';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { MenuList, MenuItem } from 'material-ui/Menu';
import messages from './messages';
import { isLoggedIn as pureIsLoggedIn } from '../../utils/localStorage';
// import { isLoggedIn } from '../../utils/localStorage';
// import makeSelectIsLoggedIn from '../SignIn/selectors';
import {
  makeSelectIsLoggedIn,
  userIsAuthenticated,
} from './selectors';
// import bgImageAsHK from 'images/hk.jpg';
// import { changeUsername } from '../HomePage/actions'

const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
    // type: 'dark', // Switching the dark mode on is a single property value change.
    // logoPrimary: '#00b0c1',
  },
  breakpoints: {
    keys: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const drawerWidth = 250;

const styles = {
  // bgDiv: {
    // backgroundImage: 'url(https://ibb.co/hMd2zw)',
    // backgroundImage: `url(${bgImg})`,
    // backgroundSize: 'cover',
    // backgroundColor: '#efefef',
    // overflow: 'hidden',
    // height: '100%',
  // },
  globalFlex: {
    flex: 1,
    fontWeight: 420,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    // fontWeight: 360,
  },
  fontWeightButton: {
    fontWeight: 420,
  },
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
  globalRoot: {
    width: '100%',
    // height: 430,
    // marginTop: theme.spacing.unit * 3,
    // zIndex: 1,//
    overflow: 'hidden',
  },
  globalAppFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  globalAppBarStyle: {
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  appBarFullWidth: {
    position: 'fixed',
  },
  globalNavIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  globalDrawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      // position: 'static',
      // height: '100%',
    },
    height: '100%',
  },
  contentNotSignInYet: {
    marginTop: 56,
  },
  globalInnerContent: {
    padding: theme.spacing.unit * 3,
    flex: 1,
  },
  globalContent: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    width: '100%',
    // padding: theme.spacing.unit * 3,
    // height: 'calc(100% - 56px)',
    // marginTop: 56,
    paddingTop: 56,
    // position: 'relative',
    // marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },

    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: drawerWidth,
    //   width: `calc(100% - ${drawerWidth}px)`,
      // height: 'calc(100% - 64px)',
      // marginTop: 64,
    // },
    // listItem: {
    // '&:focus': {
    //   background: theme.palette.primary[500],
    //   '& $text, & $icon': {
    //     color: theme.palette.common.white,
    //     fontWeight: 600,
    //   },
    // },
  },
  nested: {
    paddingLeft: theme.spacing.unit,
  },
};

class App extends React.Component {
  state = {
    mobileOpen: false,
    title: '',
    subMenusOpen: true,
  };

  // to render the component title at the initial rendering
  componentWillMount() {
    // if (!this.props.isLoggedIn) {
    //   this.props.history.push('/signin')
    // }
    //
    this.props.checkAuth(pureIsLoggedIn(), this.props.location.pathname);
    if (this.props.location.pathname === '/') {
      this.setState({ title: this.props.intl.formatMessage(messages.drawerHome) });
    } else if (this.props.location.pathname === '/features') {
      this.setState({ title: this.props.intl.formatMessage(messages.drawerFeatures) });
    }
  }

  // to render the component title at menus item switch
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn !== this.props.isLoggedIn) {
      this.props.checkAuth(nextProps.isLoggedIn, this.props.location.pathname);
    }
    if (nextProps.location.pathname === '/') {
      this.setState({ title: this.props.intl.formatMessage(messages.drawerHome) });
    } else if (nextProps.location.pathname === '/features') {
      this.setState({ title: this.props.intl.formatMessage(messages.drawerFeatures) });
    }
  }

  // handleClick = () => {
  //   this.setState({ subMenusOpen: !this.state.subMenusOpen });
  // };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, location, intl } = this.props;
    const { formatMessage } = intl;

    const internalLinkButtons = (
      <div>
        <MenuList>
          <MenuItem button selected={location.pathname === '/'} component={NavLink} to="/" onClick={this.handleDrawerToggle}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={formatMessage(messages.drawerHome)} />
          </MenuItem>
          <MenuItem button selected={location.pathname === '/features'} component={NavLink} to="/features" onClick={this.handleDrawerToggle}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary={formatMessage(messages.drawerFeatures)} />
          </MenuItem>
        </MenuList>
      </div>
    );

    const externalLinkButtons = (
      <div>
        {/* collapse example, kept here for future reference */}
        {/* <List> */}
        {/* <ListItem button onClick={this.handleClick}> */}
        {/* <ListItemIcon> */}
        {/* <InboxIcon /> */}
        {/* </ListItemIcon> */}
        {/* <ListItemText inset primary={formatMessage(messages.externalLinks)} /> */}
        {/* {this.state.subMenusOpen ? <ExpandLess /> : <ExpandMore />} */}
        {/* </ListItem> */}
        {/* <Collapse component="li" in={this.state.subMenusOpen} timeout="auto" unmountOnExit> */}
        {/* <List disablePadding> */}
        {/* <ListItem button className={classes.nested} component="a" href="https://git.io/wzx" target="_blank" onClick={this.handleDrawerToggle}> */}
        {/* <ListItemText inset primary="Résumé" /> */}
        {/* </ListItem> */}
        {/* </List> */}
        {/* </Collapse> */}
        {/* </List> */}
        <MenuList>
          <MenuItem button component="a" href="https://git.io/wzx" target="_blank" onClick={this.handleDrawerToggle}>
            <ListItemIcon>
              <OpenInNew />
            </ListItemIcon>
            <ListItemText primary={formatMessage(messages.resumeLink)} />
          </MenuItem>
        </MenuList>
      </div>
    );

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        <List>{internalLinkButtons}</List>
        <Divider />
        <List>{externalLinkButtons}</List>
      </div>
    );

    // const { isLoggedIn } = this.props;
    console.log(pureIsLoggedIn());

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Reboot />
          <Helmet
            titleTemplate="%s - React.js Boilerplate"
            defaultTitle="React.js Boilerplate"
          >
            <meta name="description" content="A React.js Boilerplate application" />
          </Helmet>
          <div className={classes.globalRoot} >
            {pureIsLoggedIn() &&
            <div>
              <AppBar className={classes.globalAppBarStyle}>
                <Toolbar>
                  <IconButton
                    color="contrast"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.globalNavIconHide}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography type="title" color="inherit" className={classes.globalFlex}>
                    {this.state.title}
                  </Typography>
                </Toolbar>
              </AppBar>
              <Hidden mdUp>
                <Drawer
                  type="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={this.state.mobileOpen}
                  classes={{
                    paper: classes.globalDrawerPaper,
                  }}
                  onClose={this.handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden smDown implementation="css">
                <Drawer
                  type="permanent"
                  open
                  classes={{
                    paper: classes.globalDrawerPaper,
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </div>
            }
            <main className={classes.globalContent}>
              <div className={classes.globalInnerContent}>
                {/* <div> */}
                <Switch>
                  <Route exact path="/signin" component={SignIn} />
                  <Route exact path="/signup" component={NotFoundPage} />
                  <Route exact path="/" component={userIsAuthenticated(HomePage)} />
                  <Route path="/features" component={userIsAuthenticated(FeaturePage)} />
                  <Route path="*" component={NotFoundPage} />
                </Switch>
              </div>
              {pureIsLoggedIn() &&
              <Footer />
              }
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
});
//
export function mapDispatchToProps(dispatch) {
  return {
    checkAuth: (isLoggedIn, location) => {
      if (!isLoggedIn && ['/signin', '/signup'].includes(location)) {
        dispatch(push(location));
      } else if (!isLoggedIn && !['/signin', '/signup'].includes(location)) {
        dispatch(push('/signin'));
      } else if (isLoggedIn && ['/signin', '/signup'].includes(location)) {
        dispatch(push('/'));
      }
    },
  };
}
//
const withConnect = connect(mapStateToProps, mapDispatchToProps);
// const withConnect = connect(mapStateToProps, null);
// const withConnect = connect(null, mapDispatchToProps);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool,
  checkAuth: PropTypes.func,
  // history: React.PropTypes.shape({
  //   push: React.PropTypes.func.isRequired,
  // }).isRequired,
};

export default compose(
  // put withRouter in the first place, otherwise many stuff won't work!
  withRouter,
  withConnect,
  withStyles(styles),
  withTheme(),
  injectIntl,
)(App);
//
// export default injectIntl()(withTheme()(withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)))))(App);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(injectIntl(App))))
