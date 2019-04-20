import React from 'react'
// import { Route } from 'react-router-dom'
// //css imports
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline';
import AddTarget from './AddTarget'

const theme = createMuiTheme({
  palette: {
    palette: {
      primary: {
        main: '#004d40',
      },
      secondary: {
        main: '#1a237e',
      },
    },
  },
  status: {
    danger: 'orange'
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 40
  }
})

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <AddTarget />
        </Grid>
        <Grid item xs={6}>
        6 Grid
         </Grid>
         <Grid item xs={6}>
          6 Grid
          </Grid>
         </Grid>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default App
