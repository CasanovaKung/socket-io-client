import createMuiTheme from 'material-ui/styles/theme'
import { blue, grey, red, indigo } from 'material-ui/colors'

const themeDefault = createMuiTheme({
  root: {
    backgroundColor: red[500],
    marginTop: 5,
  },
  appBar: {
    height: 57,
    color: blue[600]
  },
  drawer: {
    width: 230,
    color: grey[900]
  },
  raisedButton: {
    primaryColor: blue[600],
  }
})

export default themeDefault