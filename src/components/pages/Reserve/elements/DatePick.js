import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { background, grey, red, yellow } from '../../../../utilities';

const materialTheme = createMuiTheme({
  overrides: {
    MuiDialogActions: {
      root: {
        backgroundColor: yellow,
        color: background
      }
    },

    MuiInputBase: {
      root: {
        color: grey,
        cursor: 'pointer',
        border: `${yellow} solid 1px`,
        width: '100%'
      },
      input: {
        textAlign: 'center',
        width: '100%'
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

    MuiFormControl: {
      root: {
        width: '300px'
      }
    },

    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: red
      },
      thumb: {
        borderColor: red
      }
    },

    PrivateNotchedOutline: {
      root: {
        border: `${yellow} solid 1px`
      }
    },

    MuiPickersClock: {
      pin: {
        backgroundColor: red
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

export const DatePick = ({ onChange, value }) => {
  let date = new Date();

  return (
    <ThemeProvider theme={materialTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          minDate={new Date()}
          maxDate={date.setDate(date.getDate() + 7)}
          inputVariant="outlined"
          value={value}
          onChange={onChange}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};
