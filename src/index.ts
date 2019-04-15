import { core } from './core'
import lib from './node-lib'

const {
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
  generate,
} = core(lib)

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
  generate,
}

// // import cryptoLib from './crypto-lib'
// import { swap } from './utils'

// // const crypto = cryptoLib()

// /**
//  * Return true or false at random.
//  */
// export function randomBit(): boolean {
//   return crypto.randomBit()
// }

// /**
//  * Return a random byte in the range [0, 255].
//  */
// export function randomByte(): number {
//   return crypto.randomByte()
// }

// /**
//  * Return a random 32 bit signed integer.
//  */
// export function randomInt(): number {
//   return crypto.randomInt()
// }

// /**
//  * Return a random 32 bit unsigned integer.
//  */
// export function randomUInt(): number {
//   return crypto.randomUint()
// }

// /**
//  * Return a random float in the range [0, 1).
//  */
// export function randomFloat(): number {
//   return crypto.randomUint() / 2**32
// }

// /**
//  * Return a positive random number in the range [min, max).
//  *
//  * @param value the minimum value >= 0
//  * @param max the maximum value, exclusive >= value
//  */
// export function randomIn(min: number, max: number): number {
//   if (min < 0 || max < 0) {
//     throw new Error('min and max should be >= 0')
//   }

//   if (max < min) {
//     throw new Error('max should be >= min')
//   }

//   return min + Math.floor((max - min) * randomFloat())
// }

// /**
//  * Return a random value from the given list.
//  *
//  * @param list the list from which to select a value.
//  */
// export function randomOf<T>(list: T[]): T {
//   return list[randomIn(0, list.length)]
// }

// /**
//  * Roll a die of _n_ sides.
//  */
// export function roll(n: number) {
//   if (n <= 0) {
//     throw new Error('<roll> sides should be >= 1')
//   }

//   return randomIn(1, n + 1)
// }

// /**
//  * Shuffle elements of an array in place.
//  */
// export function shuffle<T>(list: T[]): T[] {
//   for (let i = 0; i < list.length; i++) {
//     const elem = randomIn(i, list.length)
//     swap(list, i, elem)
//   }
//   return list
// }

// /**
//  * Pick _n_ random values from a list.
//  */
// export function pick<T>(n: number, list: T[]): T[] {
//   if (n < 0 || n > list.length) {
//     throw new Error(`num should be in the range [0, ${list.length}]`)
//   }

//   const copy = list.slice()
//   shuffle(copy)
//   return copy.slice(-n)
// }

// /**
//  * Generate an array of _n_ values with a generator function.
//  */
// export function generate<T>(len: number, create: () => T): T[] {
//   return new Array(len).fill(0).map(create)
// }

// export default {
//   randomBit,
//   randomByte,
//   randomInt,
//   randomUInt,
//   randomFloat,
//   randomIn,
//   randomOf,
//   shuffle,
//   pick,
//   generate,
// }