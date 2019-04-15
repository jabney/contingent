
export interface ICryptoLib {
  randomBytes(n: number): Buffer|DataView
  randomBit(): boolean
  randomByte(): number
  randomInt(): number
  randomUint(): number
}
