import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, IconButton, Container, Paper, Grid, Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { Save, Delete, Check, Clear, Menu } from '@material-ui/icons';
import { useState } from 'react';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'lightGreen',
    border: 0,
    marginBottom: 25,
    borderRadius: 15,
    color: 'white',
    padding: '15 px 30 px'
  }
})

const myTheme = createMuiTheme({
  palette: {
    // primary: {
    //   main: orange[500],
    // },
    // secondary: {
    //   main: blue[500]
    // }
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
    <ThemeProvider theme={myTheme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <Menu>
                  </Menu>
                </IconButton>
                    h6 typography
                    <Button>
                  Login
                    </Button>
              </Toolbar>
            </AppBar>
            <MyButton />

            {/* <TextField
              variant="outlined"
              color="secondary"
              type="time"
              label="samye"
            /> */}
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} sm={6}>
                <Paper style={{
                  height: 75, width: '100%'
                }} />
              </Grid>
              <Grid item>
                <Paper style={{
                  height: 75, width: 50
                }} />
              </Grid>
              <Grid item>
                <Paper style={{
                  height: 75, width: 50
                }} />
              </Grid>
            </Grid>

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
      </Container>
    </ThemeProvider>
  );
}

export default App;
