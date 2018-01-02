// import React from 'react';
// // import { FormattedMessage } from 'react-intl';
// import { withStyles } from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import PropTypes from 'prop-types';
// // import Button from 'material-ui/Button';
// // import IconButton from 'material-ui/IconButton';
// // import MenuIcon from 'material-ui-icons/Menu';
// import { compose } from 'redux';
// import { withTheme } from 'material-ui/styles'
// import LocaleToggle from 'containers/LocaleToggle';
// // import A from './A';
// // import Img from './Img';
// // import NavBar from './NavBar';
// // import HeaderLink from './HeaderLink';
// // import Banner from './banner.jpg';
// // import messages from './messages';
//
// const styles = {
//   root: {
//     width: '100%',
//   },
//   flex: {
//     flex: 1,
//     fontWeight: 420,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//     // fontWeight: 360,
//   },
//   fontWeightButton: {
//     fontWeight: 420,
//   },
//   list: {
//     width: 250,
//   },
//   listFull: {
//     width: 'auto',
//   },
// };
//
// class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           {/* fixed, static */}
//           <Toolbar>
//             {/* <IconButton className={classes.menuButton} color="contrast" aria-label="Menu"> */}
//             {/*  <MenuIcon />  */}
//             {/* <Typography type="title" color="inherit" className={classes.flex}> */}
//             {/* <FormattedMessage {...messages.resumeTitle} /> */}
//             {/* </Typography> */}
//             {/* </IconButton> */}
//             <Typography type="title" color="inherit" className={classes.flex}>
//               title
//               {/*<FormattedMessage {...messages.resumeTitle} />*/}
//             </Typography>
//             {/* <Button color="contrast" className={classes.fontWeightButton}>Login</Button> */}
//             <LocaleToggle />
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }
//
// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default compose(
//   withStyles(styles),
//   withTheme(),
// ) (Header);
// // export default withStyles(styles)(withTheme()(Header));
// // export default withStyles(styles)(Header);

// Header is moved into App container for drawer integration using react state
// later we can refactor to use redux
