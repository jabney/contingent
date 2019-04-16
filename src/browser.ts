import { core } from './core'
import lib from './browser-lib'

const {
  randomBytes: _randomBytes,
  randomBit,
  randomByte,
  randomInt,
  randomUInt,
  randomFloat,
  randomIn,
  roll,
  randomOf,
  shuffle,
  pick,
  select,
  replace,
  generate,
} = core(lib)

/**
 * Return _n_ random bytes.
 *
 * @param n the number of bytes to return
 */
function randomBytes(n: number): DataView  {
  // Cast the return value to a DataView.
  return _randomBytes(n) as DataView
}

export {
  randomBytes,
  randomBit,
  randomByte,
  randomInt,
  randomUInt,
  randomFloat,
  randomIn,
  roll,
  randomOf,
  shuffle,
  pick,
  select,
  replace,
  generate,
}

export default {
  randomBytes,
  randomBit,
  randomByte,
  randomInt,
  randomUInt,
  randomFloat,
  randomIn,
  roll,
  randomOf,
  shuffle,
  pick,
  select,
  replace,
  generate,
}
