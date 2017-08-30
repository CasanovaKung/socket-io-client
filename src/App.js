import React from 'react'
import { render } from 'react-dom'
import Cookies from './cores/Cookies'

import LoginComponent from './components/LoginComponent'

const Configs = require('./Configs')

if (typeof Cookies.getCookies('user') !== 'string')
{
  render(<LoginComponent />, document.querySelector('#root'))
}
else
{
  console.log('login')
}