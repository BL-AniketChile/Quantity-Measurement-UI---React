import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { UnitInput, BootstrapInput } from "./UnitInput";
import { HttpService } from "./service/http-service";

import './App.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUnitType: "",
      firstUnitType: "",
      firstUnitValue:0.0,
      secondUnitType: "",
      secondUnitValue: 0.0,
      unitTypes: [],
      subUnitTypes: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.firstUnitHandleChange=this.firstUnitHandleChange.bind(this)
    
    
  }

  handleChange = async event => {
    console.log(event);
    await this.setState({
      currentUnitType:event.target.value
    })
    var index=this.state.unitTypes.indexOf(event.target.value)
    console.log("value of index",index);
    
     this.getallUnits(index)
  }

  firstUnitHandleChange = async  event =>{
    console.log("value of event ",event);
    var index=this.state.subUnitTypes.indexOf(event.target.value)
  await   this.setState({firstUnitType: String(event.target.value),
       
                        })
  console.log("after state change ",this.state.firstUnitType);
  
  }

  secondUnitHandleChange = event =>{
    console.log("value of event ",event);
    this.setState({secondUnitType: String(event.target.value)})
    // this.findConversionValueForUnit2ToUnit1()
  }
  

  componentDidMount() {
    var index=0
  this.getallUnits(index)
  }
getallUnits(index){
  console.log("index in get all "+index);

  new HttpService().getAllUnitTypes()
      .then(response1 => {
        console.log(response1.data);
        new HttpService().getAllUnitsByUnitType(response1.data[index])
          .then(response2 => {
            console.log("respnse 2",response2.data);
            this.setState({
              subUnitTypes: response2.data, unitTypes: response1.data,
              currentUnitType: response1.data[index], firstUnitType: response2.data[0], secondUnitType: response2.data[0]
            })
          }).catch(error => {
            console.log(error);
          });
      }).catch(error => {
        console.log(error);
      });
}
shouldComponentUpdate(){
  return true
}
  findConversionValueForUnit1ToUnit2 = (unit1Value) =>{
    let value = unit1Value
    let requestBody = {
      initialValue: unit1Value,
      initialUnit: this.state.firstUnitType,
      unitType: this.state.currentUnitType,
      outputUnit: this.state.secondUnitType
    }
    new HttpService().convertUnitValueToGivenUnitType(requestBody)
    .then(response =>{
      console.log(response.data);
      this.setState({firstUnitValue:value, secondUnitValue:response.data})
    });
  }
  findConversionValueForUnit1ToUnit2Test = (unit1Value) =>{
    // let value = Number(unit1Value.target.value);
    let value=unit1Value
    let requestBody = {
      initialValue: value,
      initialUnit: this.state.firstUnitType,
      unitType: this.state.currentUnitType,
      outputUnit: this.state.secondUnitType
    }
    new HttpService().convertUnitValueToGivenUnitType(requestBody)
    .then(response =>{
      console.log(response.data);
      this.setState({firstUnitValue:value, secondUnitValue:response.data})
    });
  }


  findConversionValueForUnit2ToUnit1 = (unit2Value) =>{
    let value = unit2Value
    let requestBody = {
      initialValue: unit2Value,
      initialUnit: this.state.secondUnitType,
      unitType: this.state.currentUnitType,
      outputUnit: this.state.firstUnitType
    }
    new HttpService().convertUnitValueToGivenUnitType(requestBody)
    .then(response =>{
      console.log(response.data);
      this.setState({firstUnitValue:response.data, secondUnitValue:value})
    });
  }

  findConversionValueForUnit2ToUnit1Test = (unit2Value) =>{
    let value = unit2Value
    let requestBody = {
      initialValue: unit2Value,
      initialUnit: this.state.secondUnitType,
      unitType: this.state.currentUnitType,
      outputUnit: this.state.firstUnitType
    }
    new HttpService().convertUnitValueToGivenUnitType(requestBody)
    .then(response =>{
      console.log(response.data);
      this.setState({firstUnitValue:response.data, secondUnitValue:value})
    });
  }

  render() {
    console.log("first unit type",this.state.firstUnitType);
    
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <header className="App-header">
          <Card className="card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Quantity Measurement
              </Typography>
              <Divider />
              <div style={{ marginTop: "10px" }}>
                <FormControl className="type-select-input">
                  <Select
                    labelId="type-select-label"
                    id="type-select"
                    value={this.state.currentUnitType}
                    onChange={this.handleChange}
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
              <div className="input-section">
                {
                  this.state.subUnitTypes.length === 0 ? null:
                  <UnitInput unitTypes={this.state.subUnitTypes} 
                  handleChange={this.firstUnitHandleChange}
                  handleValueChange={this.findConversionValueForUnit1ToUnit2}
                  type={this.state.firstUnitType}
                  value={this.state.firstUnitValue}
                  // valueChange={this.findConversionValueForUnit1ToUnit2Test}
                  />
                }
                <Typography variant="h1" className="equal-typography" color="textSecondary" gutterBottom> = </Typography>
                {
                  this.state.subUnitTypes.length === 0 ? null:
                  <UnitInput unitTypes={this.state.subUnitTypes} 
                  handleChange={this.secondUnitHandleChange}
                  type={this.state.secondUnitType}
                  handleValueChange={this.findConversionValueForUnit2ToUnit1}
                   value={this.state.secondUnitValue}
                  />
                }
              </div>
            </CardContent>
          </Card>
        </header>
      </div>
    );
  }
}
