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

  constructor(props) {
    super(props);
    this.state = {
      currentUnitType: props.unitTypes.length === 0 ? "" : props.unitTypes[props.type],
      unitTypes: props.unitTypes,
      value:props.value,
      recivedValue:props.value
    }
    console.log(this.state.currentUnitType);
    
    // this.handleChange = this.handleChange.bind(this)
  }
//   static getDerivedStateFromProps(nextProps, prevState){
//     console.log("value from next props"+nextProps.value);
    
//     if(nextProps.value!==prevState.recivedValue){
//       return {recivedValue : nextProps.value};
//    }
//    else return null;
//  }

  componentWillReceiveProps(newProps){
    console.log("new value from props",newProps);
    
    if(this.props.value !== newProps.value){
      this.setState({value:newProps.value,
        unitTypes:newProps.unitTypes,
      currentUnitType:newProps.unitTypes.length === 0 ? "" : newProps.unitTypes[newProps.type]
      })
    }
    if(this.props.unitTypes !== newProps.unitTypes){
      this.setState({
        unitTypes:newProps.unitTypes,
      currentUnitType:newProps.unitTypes.length === 0 ? "" : newProps.unitTypes[newProps.type]
      })
    }
  }

  handleChange = event => {
    console.log("event in",event);
    
    this.props.handleChange(event)
     this.props.handleValueChange(this.state.value)
  }

  handleInputValueChange = async  event =>{
    console.log("in handel value change",event.target.value);
   await this.setState({
      value:event.target.value
    })
    this.props.handleValueChange(this.state.value)
  }

  render() {
    console.log("selected value"+this.props.value);
    console.log(" value of"+this.state.value);
    console.log(this.state.currentUnitType);
    return (
      <div>
        <TextField id="outlined-basic" variant="outlined" type="number" value={this.state.value}
        onChange={this.handleInputValueChange}/>
        <FormControl className="subtype-select-input">
          <Select
            labelId="input-select-label"
            id="input-select"
            value={this.state.currentUnitType}
            onChange={event =>this.handleChange(event)}
            input={<BootstrapInput />}
          >
            {
              this.state.unitTypes.map(unitType => {
                return <MenuItem key={this.state.unitTypes.indexOf(unitType)} value={unitType}>
                  {unitType}
                </MenuItem>
              })
            }
          </Select>
        </FormControl>
      </div>
    );
  }
}