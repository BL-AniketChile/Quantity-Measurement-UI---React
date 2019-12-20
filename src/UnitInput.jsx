import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

export const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export class UnitInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      age:1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event =>{
    console.log(event);
    
  }

  render() {
    return (
      <div>
        <TextField id="outlined-basic" variant="outlined" />
        <FormControl className="subtype-select-input">
          <Select
            labelId="input-select-label"
            id="input-select"
            value={this.state.age}
            onChange={this.handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={1}>Length</MenuItem>
            <MenuItem value={2}>Weight</MenuItem>
            <MenuItem value={3}>Temperature</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}