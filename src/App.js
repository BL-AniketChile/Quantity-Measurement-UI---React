import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';


import './App.css';

const BootstrapInput = withStyles(theme => ({
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

function App() {
  const [age,setAge] = React.useState('');
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
            <div style={{marginTop:"10px"}}>
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
            <FormControl className="subtype-select-input">
                <Select
                  labelId="input-select-label"
                  id="input-select"
                  value={age}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <MenuItem value={1}>Length</MenuItem>
                  <MenuItem value={2}>Weight</MenuItem>
                  <MenuItem value={3}>Temperature</MenuItem>
                </Select>
              </FormControl>
              <Typography className="equal-typography" color="textSecondary" gutterBottom> = </Typography>
              <FormControl className="subtype-select-input">
                <Select
                  labelId="output-select-label"
                  id="output-select"
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
          </CardContent>
        </Card>
      </header>
    </div>
  );
}

export default App;
