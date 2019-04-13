import { ICryptoLib } from './crypto-lib.interface'

/**
 * Return a DataView of _n_ random bytes.
 *
 * @param n the number of bytes to generate
 */
export function randomBytes(n: number): DataView {
  // @ts-ignore ie11 has crypto support on msCrypto.
  const crypto = window.crypto || window.msCrypto

  if (crypto == null) {
    throw new Error('crypto not found for randomBytes')
  }

  const uint8 = crypto.getRandomValues(new Uint8Array(n))
  return new DataView(uint8.buffer)
}

/**
 * Return true or false at random.
 */
export function randomBit(): boolean {
  return randomBytes(1).getUint8(0) % 2 === 0
}

/**
 * Return a random byte in the range [0, 255].
 */
export function randomByte(): number {
  return randomBytes(1).getUint8(0)
}

/**
 * Return a random 32 bit signed integer.
 */
export function randomInt(): number {
  return randomBytes(4).getInt32(0)
}

/**
 * Return a random 32 bit unsigned integer.
 */
export function randomUint(): number {
  return randomBytes(4).getUint32(0)
}

export default <ICryptoLib> {
  randomBytes,
  randomBit,
  randomByte,
  randomInt,
  randomUint,
}
