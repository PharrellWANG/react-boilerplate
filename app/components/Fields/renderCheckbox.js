/* eslint-disable react/prop-types */
import React from 'react';
import MuiThemeProvider from 'material-ui-previous/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui-previous/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui-previous/styles/getMuiTheme';
import Checkbox from 'material-ui-previous/Checkbox';
import ActionFavorite from 'material-ui-previous/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui-previous/svg-icons/action/favorite-border';

const renderCheckbox = ({ input, label }) => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Checkbox
        checkedIcon={<ActionFavorite />}
        uncheckedIcon={<ActionFavoriteBorder />}
        labelStyle={{ fontSize: 12 }}
        iconStyle={{ height: 18, marginRight: 2, paddingTop: 2 }}
        label={label}
        checked={!!input.value}
        onCheck={input.onChange}
      />
    </MuiThemeProvider>
  </div>
);

export default renderCheckbox;

// Usage:

//  offerCheckbox: {
//     paddingTop: 18,
//   },

//      <div className={classes.offerCheckbox}>
//        <Field
//          name="employed"
//          component={renderCheckbox}
//          label="Receive exclusive offers & updates from Zwap"
//        />
//      </div>
