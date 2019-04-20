import React from 'react'
// import { Route } from 'react-router-dom'
// //css imports
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'
import Typography from '@material-ui/core/Typography'
import AppBar from './AppBar'


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
      <AppBar />
      <Grid container spacing={24}>
        <Grid item xs={12}>
          12 Grid
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
