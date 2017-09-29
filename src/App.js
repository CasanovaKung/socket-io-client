import React from 'react'
import { render } from 'react-dom'
import Cookies from './cores/Cookies'

import createMuiTheme from 'material-ui/styles/theme'
import {grey, amber, red} from 'material-ui/colors'
import createPalette from 'material-ui/styles/palette'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LoginComponent from './components/LoginComponent'
import TestoneComponent from './components/TestoneComponent'
import LoginTheme from './theme-default'

const Configs = require('./Configs')

if (typeof Cookies.getCookies('user') !== 'string')
{
  render(
    <MuiThemeProvider theme={LoginTheme}>
      <LoginComponent />
    </MuiThemeProvider>
    , document.querySelector('#root'))
}
else if (typeof Cookies.getCookies('test') === 'string')
{
  render(<TestoneComponent />, document.querySelector('#root'))
}
else
{
  console.log(typeof Cookies.getCookies('test'))
  console.log('login')
}