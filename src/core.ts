import { ICryptoLib } from './crypto-lib'
import { swap } from './utils'

type CreateFn<T> = () => T

/**
 *
 */
function randomBytes(crypto: ICryptoLib, n: number) {
  return crypto.randomBytes(n)
}

/**
 *
 */
function randomBit(crypto: ICryptoLib): boolean {
  return crypto.randomBit()
}

/**
 *
 */
function randomByte(crypto: ICryptoLib): number {
  return crypto.randomByte()
}

/**
 *
 */
function randomInt(crypto: ICryptoLib): number {
  return crypto.randomInt()
}

/**
 *
 */
function randomUInt(crypto: ICryptoLib): number {
  return crypto.randomUint()
}

/**
 *
 */
function randomFloat(crypto: ICryptoLib): number {
  return crypto.randomUint() / 2**32
}

/**
 *
 */
function randomIn(crypto: ICryptoLib, min: number, max: number): number {
  if (min < 0 || max < 0) {
    throw new Error('min and max should be >= 0')
  }

  if (max < min) {
    throw new Error('max should be >= min')
  }

  return min + Math.floor((max - min) * randomFloat(crypto))
}

/**
 *
 */
function roll(crypto: ICryptoLib, n: number) {
  if (n <= 0) {
    throw new Error('<roll> sides should be >= 1')
  }

  return randomIn(crypto, 1, n + 1)
}

/**
 *
 */
function randomOf<T>(crypto: ICryptoLib, list: T[]): T {
  return list[randomIn(crypto, 0, list.length)]
}

/**
 *
 */
function shuffle<T>(crypto: ICryptoLib, list: T[]): T[] {
  for (let i = 0; i < list.length; i++) {
    const elem = randomIn(crypto, i, list.length)
    swap(list, i, elem)
  }
  return list
}

/**
 *
 */
function pick<T>(crypto: ICryptoLib, n: number, list: T[]): T[] {
  if (n < 0 || n > list.length) {
    throw new Error(`num should be in the range [0, ${list.length}]`)
  }

  const copy = list.slice()
  shuffle(crypto, copy)
  return copy.slice(-n)
}

/**
 *
 */
function generate<T>(len: number, create: CreateFn<T>): T[] {
  return new Array(len).fill(0).map(create)
}

export function core(crypto: ICryptoLib) {
  return {
    /**
     * Return _n_ random bytes.
     *
     * @param n the number of bytes to return
     */
    randomBytes: (n: number) => randomBytes(crypto, n),
    /**
     * Return true or false at random.
     */
    randomBit: () => randomBit(crypto),
    /**
     * Return a random byte in the range [0, 255].
     */
    randomByte: () => randomByte(crypto),
    /**
     * Return a random 32 bit signed integer.
     */
    randomInt: () => randomInt(crypto),
    /**
     * Return a random 32 bit unsigned integer.
     */
    randomUInt: () => randomUInt(crypto),
    /**
     * Return a random float in the range [0, 1).
     */
    randomFloat: () => randomFloat(crypto),
    /**
     * Return a positive random number in the range [min, max).
     *
     * @param min the minimum value >= 0
     * @param max the maximum value, exclusive >= value
     */
    randomIn: (min: number, max: number) => randomIn(crypto, min, max),
    /**
     * Roll a die of _n_ sides.
     *
     * @param n the number of die sides.
     */
    roll: (n: number) => roll(crypto, n),
    /**
     * Return a random value from the given list.
     *
     * @param list the list from which to select a value.
     */
    randomOf: <T>(list: T[]) => randomOf(crypto, list),
    /**
     * Shuffle elements of an array in place.
     *
     * @param list the list to shuffle in place
     */
    shuffle: <T>(list: T[]) => shuffle(crypto, list),
    /**
     * Pick _n_ random values from a list.
     *
     * @param n the number of values to pick from the list
     * @param list the list to pick values from
     */
    pick: <T>(n: number, list: T[]) => pick(crypto, n, list),
    /**
     * Generate an array of _n_ values with a generator function.
     *
     * @param len the length of the list to generate
     * @param create the function that creates the list values
     */
    generate: <T>(len: number, create: CreateFn<T>) => generate(len, create),
  }
}
