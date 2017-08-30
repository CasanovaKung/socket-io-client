import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input/Input'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import ThemeDefault from './../theme-default'
import { withTheme } from 'material-ui/styles'

import LoginPage from './../views/LoginPage'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
  }

  render() {
    const classes = PropTypes.object.isRequired
    return (
      <MuiThemeProvider theme={ThemeDefault}>
        <LoginPage />
      </MuiThemeProvider>
    )
  }

}

export default withStyles(styles)(LoginComponent)