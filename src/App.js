import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import { UnitInput, BootstrapInput } from "./UnitInput";

import './App.css';



function App() {
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
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
                  value={age}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <MenuItem value={1}>Length</MenuItem>
                  <MenuItem value={2}>Weight</MenuItem>
                  <MenuItem value={3}>Temperature</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="input-section">
              <UnitInput></UnitInput>
              <Typography variant="h1" className="equal-typography" color="textSecondary" gutterBottom> = </Typography>
              <UnitInput></UnitInput>
            </div>
          </CardContent>
        </Card>
      </header>
    </div>
  );
}

export default App;
