import Cookies from './cores/Cookies'
import {createPalette, createMuiTheme } from 'material-ui/styles'
import { blue, grey, red, indigo, amber } from 'material-ui/colors'

const LoginTheme = createMuiTheme({
  palette: createPalette({
    primary: grey,
    accent: amber,
    error: red,
    type: Cookies.getCookies('theme') || 'light',
  })
})

export default LoginTheme