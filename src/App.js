import React from 'react'
import { render } from 'react-dom'
import Cookies from './cores/Cookies'

import LoginComponent from './components/LoginComponent'
import TestoneComponent from './components/TestoneComponent'

const Configs = require('./Configs')

if (typeof Cookies.getCookies('user') !== 'string')
{
  render(<LoginComponent />, document.querySelector('#root'))
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