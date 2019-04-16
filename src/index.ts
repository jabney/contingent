import { core } from './core'
import lib from './node-lib'

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
  replace,
  generate,
} = core(lib)

/**
 * Return _n_ random bytes.
 *
 * @param n the number of bytes to return
 */
function randomBytes(n: number): Buffer  {
  // Cast the return value to a Buffer.
  return _randomBytes(n) as Buffer
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
  replace,
  generate,
}
