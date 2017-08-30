import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input/Input'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import { FormGroup, FormControlLabel } from 'material-ui'
import { grey, red, purple } from 'material-ui/colors'
import ThemeDefault from '../theme-default'

const grey500 = grey[500]
const white = '#FFFFFF'

const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 20,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  flatButton: {
    color: grey500
  },
  loginBtn: {
    float: 'right',
    marginLeft: 5,
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441'
  },
  btnSpan: {
    marginLeft: 5
  },
}

const classes = PropTypes.object.isRequired

class LoginPage extends Component {
  constructor(props) {
    super(props)
    const classes = PropTypes.object.isRequired
    this.state = {
      username: '',
      password: '',
      remember: false,
    }
  }

  handleChangeCheckbox = name => (event, checked) => {
    this.setState({ [name]: checked })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>
              <form>
                <FormGroup row>
                  <TextField
                    autoFocus={true}
                    label="Username"
                    fullWidth={true}
                  />
                </FormGroup>
                <FormGroup row>
                  <TextField
                    label="Password"
                    fullWidth={true}
                    type="password"
                  />
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.remember}
                        onChange={this.handleChangeCheckbox('remember')}
                        value="remember"
                        classes={{
                          checked: classes.checked,
                        }}
                      />
                    }
                    label="Remember me"
                  />
                </FormGroup>
                <div style={styles.buttonsDiv}>
                  <Button raised color="accent" className={classes.button} style={styles.loginBtn}>
                    Register
                  </Button>
                  <Button raised color="primary" className={classes.button} style={styles.loginBtn}>
                    Login
                  </Button>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default LoginPage