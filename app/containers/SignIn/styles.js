const styles = (theme) => ({
  rootDiv: {
    // backgroundImage: `url(${bgImageAsHK})`,
    // backgroundSize: 'cover',
    // overflow: 'hidden',
    // width: '100%',
    // height: '100%',
    // position: 'fixed',
    // display: 'flex',
    // JustifyContent: 'center',
    // objectFit: 'cover',
  },
  imageDiv: {
    height: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  paperDiv: {
    margin: 'auto',
    height: 'auto',
    width: 'auto',
    verticalAlign: 'middle',
    JustifyContent: 'center',
    padding: 50,
    color: theme.palette.text.secondary,
  },
  signInContainer: {
    height: 'auto',
    position: 'absolute',
    top: '3%',
    left: 10,
    right: 10,
    margin: 'auto',
    maxWidth: 460,
    // minHeight: 640,
  },
  signInPaper: {
    padding: 12,
    // elevation: 10,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]: {
      padding: 42,
    },
  },
  paddingTop: {
    paddingTop: 90,
  },
  logoImage: {
    margin: 'auto',
    // textAlign: 'left',
    // width: '100%',
    height: 64,
    verticalAlign: 'center',
    // horizontalAlign: 'center',
    // textAlign: 'center',
    // display: 'block',
    paddingTop: 0,
    paddingBottom: 24,
  },
  flex: {
    flex: 1,
  },
  subDiv: {
    paddingLeft: 6,
  },
  center: {
    textAlign: 'center',
  },
  // bolderFont: {
  //   fontWeight: 480,
  // },
});

export default styles;
