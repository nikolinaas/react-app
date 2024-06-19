import { TextField, withStyles } from "@material-ui/core";

export const StyledTxtField = withStyles({
    root: {
      '& label': {
        color: 'red',
      },
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#00809a',
        },
      },
    },
  })(TextField);