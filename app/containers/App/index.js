/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Reboot from 'material-ui/Reboot';
// import { matchPath } from 'react-router';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, withStyles, withTheme } from 'material-ui/styles';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
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
import MenuList from 'material-ui/Menu/MenuList';
import IconButton from 'material-ui/IconButton';
import List, { ListItemIcon, ListItemText } from 'material-ui/List';
// import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
// import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
// import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
// import MailIcon from 'material-ui-icons/Mail';
// import LocaleToggle from 'containers/LocaleToggle';
import Footer from 'components/Footer';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/es/Menu/MenuItem';
import messages from './messages';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      ...green,
      A400: '#00E677',
    },
    error: red,
    // type: 'light', // Switching the dark mode on is a single property value change.
    // type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const drawerWidth = 250;

const styles = {
  flex: {
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
  root: {
    width: '100%',
    // height: 430,
    // marginTop: theme.spacing.unit * 3,
    // zIndex: 1,//
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      // position: 'static',
      // height: '100%',
    },
    height: '100%',
  },
  innerContent: {
    padding: theme.spacing.unit * 3,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    // padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
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
    if (this.props.location.pathname === '/') {
      this.setState({ title: this.props.intl.formatMessage(messages.drawerHome) });
    } else if (this.props.location.pathname === '/features') {
      this.setState({ title: this.props.intl.formatMessage(messages.drawerFeatures) });
    }
  }

  // to render the component title at menus item switch
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === '/') {
      this.setState({ title: this.props.intl.formatMessage(messages.drawerHome) });
    } else if (nextProps.location.pathname === '/features') {
      this.setState({ title: this.props.intl.formatMessage(messages.drawerFeatures) });
    }
  }

  handleClick = () => {
    this.setState({ subMenusOpen: !this.state.subMenusOpen });
  };

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

    return (
      <MuiThemeProvider theme={theme}>
        <AppWrapper>
          <Reboot />
          <Helmet
            titleTemplate="%s - React.js Boilerplate"
            defaultTitle="React.js Boilerplate"
          >
            <meta name="description" content="A React.js Boilerplate application" />
          </Helmet>
          <div className={classes.root}>
            <div className={classes.appFrame}>
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton
                    color="contrast"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.navIconHide}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography type="title" color="inherit" className={classes.flex}>
                    {this.state.title}
                  </Typography>
                  {/* <LocaleToggle /> */}
                </Toolbar>
              </AppBar>
              <Hidden mdUp>
                <Drawer
                  type="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={this.state.mobileOpen}
                  classes={{
                    paper: classes.drawerPaper,
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
                    paper: classes.drawerPaper,
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <main className={classes.content}>
                <div className={classes.innerContent}>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/features" component={FeaturePage} />
                    <Route path="" component={NotFoundPage} />
                  </Switch>
                </div>
                <Footer />
              </main>
            </div>
          </div>
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withTheme(),
  withRouter,
  injectIntl,
)(App);
