import * as Cookies from 'js-cookie'
import * as MainCore from './MainCore'

const Configs = require('./../Configs')

let objCookies = {
  getEncryptKey() {
    if (typeof Cookies.get('env') !== 'string')
    {
      let EncryptKey = MainCore.makeRandomId(3)
      Cookies.set('env', EncryptKey)
    }
    return Cookies.get('env')
  },
  getCookies(strKey) {
    return Cookies.get(this.getEncryptKey() + strKey)
  },
  setCookies(strKey, anyValues) {
    Cookies.set(this.getEncryptKey() + strKey, anyValues)
  }
}

export default objCookies