import crypto from 'crypto'
import { ICryptoLib } from './crypto-lib'

/**
 * Return a Buffer of _n_ random bytes.
 *
 * @param n the number of bytes to generate
 */
function randomBytes(n: number): Buffer {
  return crypto.randomBytes(n)
}

/**
 * Return true or false at random.
 */
function randomBit(): boolean {
  return randomBytes(1).readUInt8(0) % 2 === 0
}

/**
 * Return a random byte in the range [0, 255].
 */
function randomByte(): number {
  return randomBytes(1).readUInt8(0)
}

/**
 * Return a random 32 bit signed integer.
 */
function randomInt(): number {
  return randomBytes(4).readInt32LE(0)
}

/**
 * Return a random 32 bit unsigned integer.
 */
function randomUint(): number {
  return randomBytes(4).readUInt32LE(0)
}

export default <ICryptoLib> {
  randomBytes,
  randomBit,
  randomByte,
  randomInt,
  randomUint,
}
