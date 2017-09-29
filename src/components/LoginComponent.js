import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LoginPage from './../views/LoginPage'

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
    const { theme } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <LoginPage />
      </MuiThemeProvider>
    )
  }

}

export default LoginComponent