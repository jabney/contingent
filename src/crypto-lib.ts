import { ICryptoLib } from './crypto-lib.interface'
import bufferLib from './buffer-lib'
import dataviewLib from './dataview-lib'

// https://stackoverflow.com/a/31090240/1861779
const isBrowser = new Function('try {return this===window} catch(e) {return false}')
const isNode = new Function('try {return this===global} catch(e) {return false}')

export default function cryptoLib(): ICryptoLib {
  if (isBrowser()) {
    // For the browser.
    return dataviewLib
  } else {
    // Assume node.js.
    return bufferLib
  }
}
