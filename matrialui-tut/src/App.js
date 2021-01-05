import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { Save, Delete, Check, Clear, PlayCircleFilledWhite } from '@material-ui/icons';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'lightGreen',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30 px'
  }
})

function MyButton() {

  const myClass = useStyles();
  return (
    <Button
      className={myClass.root}
    >My Srtyled Button</ Button>
  )
}


function CheckBoxExample() {
  const [checked, changeChecked] = useState(false);


  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => { changeChecked(e.target.checked) }}
          icon={<Check />}
          checkedIcon={<Clear />}
        // col or="primary"
        // disabled
        />
      }
      label="Rough Checkbox"
    />

  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
        <TextField
          variant="outlined"
          color="secondary"
          type="time"
          label="samye"
        />
        <CheckBoxExample />
        <ButtonGroup
          color="primary"
          variant="contained">
          <Button
            startIcon={<Save />}
          >
            Save
        </Button>
          <Button
            startIcon={<Delete />}
          >
            Discard
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div >
  );
}

export default App;
