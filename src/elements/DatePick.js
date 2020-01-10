import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { background, grey, red, yellow } from '../utilities';

const materialTheme = createMuiTheme({
  overrides: {
    MuiDialogActions: {
      root: {
        backgroundColor: yellow,
        color: background
      }
    },
    MuiInputBase: {
      input: {
        border: 'transparent',
        color: grey
      }
    },
    MuiOutlinedInput: {
      input: {
        border: `${grey} solid 1px`,
        color: grey,
        value: 'none'
      }
    },

    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: yellow
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: grey,
        color: background
      },
      daysHeader: {
        background: grey,
        color: background
      }
    },

    MuiTabs: {
      flexContainer: {
        backgroundColor: yellow
      }
    },

    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: red
      },
      thumb: {
        color: red
      }
    },

    MuiPaper: {
      root: {
        backgroundColor: grey
      }
    },

    MuiPickersSlideTransition: {
      transitionContainer: {
        backgroundColor: grey
      }
    },
    MuiPickersDay: {
      day: {
        color: background
      },
      daySelected: {
        backgroundColor: red,
        color: grey
      },
      dayDisabled: {
        color: grey
      },
      current: {
        color: red
      }
    }
  }
});

export const DatePick = ({ onChange, value }) => (
  <ThemeProvider theme={materialTheme}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        inputVariant="outlined"
        value={value}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);
