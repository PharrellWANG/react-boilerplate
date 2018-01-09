import { green } from 'material-ui/colors';

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
    // position: 'relative',
    top: '3%',
    left: 10,
    right: 10,
    margin: 'auto',
    maxWidth: 460,
    // minHeight: 640,
  },
  signInPaper: {
    padding: 8,
    // elevation: 10,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]: {
      padding: 42,
    },
  },
  signInPaperOuter: {
    // padding: 12,
    // elevation: 10,
    // textAlign: 'left',
    color: theme.palette.text.secondary,
    // [theme.breakpoints.up('sm')]: {
    //   padding: 42,
    // },
  },
  // paddingTop: {
  //   paddingTop: 90,
  // },
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
  rootForButtonLoading: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 80,
  },
  rootEmail: {
    // display: 'flex',
    alignItems: 'center',
  },
  emailCheckingProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '2%',
    // marginTop: -12,
    // marginLeft: -12,
  },
  wrapperForButtonLoading: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightAlignedButton: {
    margin: theme.spacing.unit,
    textAlign: 'right',
  },
  fullWidth: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: '100%',
    paddingBottom: 12,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    paddingLeft: 100,
    margin: theme.spacing.unit,
    position: 'relative',
  },
  absoluteProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: 18,
  },
  absoluteProgressX: {
    position: 'absolute',
    top: 2,
  },
  formControl: {
    // margin: theme.spacing.unit,
    width: '600px',
    verticalAlign: 'center',
  },
  formControlDatePicker: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
    minWidth: 180,
    // width: 300,
    verticalAlign: 'center',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  selector: {
    // width: 80,
    verticalAlign: 'center',
  },
  paper: {
    padding: 10,
  },
  fixedWidthX: {
    width: '200px',
  },
  myUnderline: {
    borderColor: '#7964ef',
  },
  paddingTop: {
    paddingTop: 18,
  },
  buttonNextStep: {
    background: '#00b0c1',
    // backgroundColor: '#00b0c1',
    // color: 'white',
    // hover: {
    //   backgroundColor: '#00b0c1',
    // },
  },
  buttonNextStepDivRight: {
    // paddingTop: 72,
    // paddingBottom: 96,
    textAlign: 'right',
    // paddingRight: 3,
  },
  buttonNextStepDivLeft: {
    // paddingTop: 72,
    // paddingBottom: 96,
    textAlign: 'Left',
  },
  buttonNextGroup: {
    flexGrow: 1,
    marginTop: 72,
    marginBottom: 48,
  },
  createAccount: {
    paddingTop: 4,
    color: '#00b0c1',
    fontSize: 16,
  },
  marginOnSmallScreen: {
    marginTop: 18,
    marginLeft: 18,
    marginRight: 18,
  },
  buttonProgressWrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
});

export default styles;
