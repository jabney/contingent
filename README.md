# contingent

**contingent** *(kən-tĭnˈjənt)* neither impossible nor necessary

Create cryptographically-strong random numbers in node.js or the browser, and a few other helpers.

## Installation

```bash
$ npm install contingent
```

## Usage

Import functions individulally:

```typescript
import { randomBit, randomIn } from 'contingent'

randomBit() // true
randomIn(1, 10) // 7
```

Import container:

```typescript
import contingent from 'contingent'

contingent.randomByte() // 113
contingent.randomOf([1, 2, 3, 4, 5]) // 4
```

## Usage in the Browser

By default, `contingent` uses Node.js `crytpo` under the hood to generate random bytes:

```typescript
import { randomBytes } from 'contingent'

const bytes = randomBytes(10)
console.log(bytes)
```

Output:

```
<Buffer e3 f2 87 3b bd 77 cf f2 cf ec>
```

This is fine if you're shimming the `crypto` lib or using a build tool such as `browserify` which shims it for you. If `crypto` is not being shimmed, you can import the `browser` version of `contingent` like so:

```typescript
import { randomBytes } from 'contingent/lib/browser'

const bytes = randomBytes(10)
console.log(bytes)
```

Output:

```
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer { byteLength: 10 } }
```

The `browser` module uses `window.crypto` with a fallback of `window.msCrypto`. If neither are found, `contingent` will throw an error for most function invocations, specifically functions which rely on _de novo_ random value generation.

## Library Functions

### `randomBytes`

Return n random bytes as a `Buffer` or `DataView`, depending on how `contingent` is imported.

Signature:

```typescript
export function randomBytes(n: number): Buffer|DataView
```

Usage:

```typescript
randomBytes(10)
```

Output for node (Buffer):

```
<Buffer 75 0d d6 ad e4 82 9c 85 f7 90>
```

Output for browser (DataView):

```
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer { byteLength: 10 } }
```

#### Converting to Array

Buffer (node):

```typescript
const bytes = randomBytes(4)
const array = Array.from(bytes)

console.log(array) // [ 132, 5, 38, 222 ]
```

DataView (browser):

```typescript
const bytes = randomBytes(4)
const array = Array.from(new Uint8Array(bytes.buffer))

console.log(array) // [ 108, 183, 120, 227 ]
```

The `toArray` helper can also be used, which works for either Buffer or DataView:

```typescript
import { toArray } from 'contingent/lib/utils'

const bytes = randomBytes(4)
const array = toArray(bytes)

console.log(bytes) // [2, 191, 57, 66]
```

### `randomBit`

Return a random `boolean`.

Signature:

```typescript
export function randomBit(): boolean
```

Usage:

```typescript
randomBit() // true
```

### `randomByte`

Return a random unsigned integer in the range `[0, 255]` (8 bits).

Signature:

```typescript
export function randomByte(): number
```

Usage:

```typescript
randomByte() // 223
```

### `randomInt`

Return a random signed integer in the range `[-2147483648, 2147483647]` (32 bits).

Signature:

```typescript
export function randomInt(): number
```

Usage:

```typescript
randomInt() // -656291091
```

### `randomUInt`

Return a random unsigned integer in the range `[0, 4294967295]` (32 bits).

Signature:

```typescript
export function randomUInt(): number
```

Usage:

```typescript
randomUInt() // 2444387034
```

### `randomFloat`

Return a random unsigned float in the range `[0, 1)`.

Signature:

```typescript
export function randomFloat(): number
```

Usage:

```typescript
randomFloat() // 0.14995522797107697
```

### `randomIn`

Return an integer in the range `[min, max)`, where max >= min.

Signature:

```typescript
export function randomIn(min: number, max: number): number
```

Usage:

```typescript
randomIn(1, 100) // 41
```

### `randomOf`

Return an element of the given list at random.

Signature:

```typescript
export function randomOf<T>(list: T[]): T
```

Usage:

```typescript
randomOf(['r', 'a', 'n', 'd']) // 'a'
```

### `roll`

Simulate the roll of a die with _n_ sides.

Signature:

```typescript
export function roll(n: number)
```

Usage:

```typescript
roll(6) // 2
```

### `shuffle`

Shuffle an array in place.

Signature:

```typescript
export function shuffle<T>(list: T[]): T[]
```

Usage:

```typescript
shuffle([1, 2, 3, 4, 5]) // [ 3, 4, 5, 2, 1 ]
```

### `pick`

Pick _n_ values from an array at random. Will not produce duplicates.

Signature:

```typescript
export function pick<T>(num: number, list: T[]): T[]
```

Usage:

```typescript
// Create an array of characters.
const charList = [...'contingent']

// Pick three random characters from the list.
pick(3, charList) // [ 'i', 't', 'c' ]
```

### `replace`

Replace a random element in an array with a given value.

Signature:

```typescript
export function replace<T>(list: T[], value: T): T[]
```

Usage:

```typescript
const array = [1, 2, 3, 4, 5]

replace(array, 999) // [ 1, 2, 3, 999, 5 ]
```

### `generate`

Generate an array of arbitrary values.

Signature:

```typescript
export function generate<T>(len: number, create: () => T): T[]
```

Usage:

```typescript
// Generate 5 random bits.
generate(5, randomBit) // [ true, true, false, true, false ]
```

```typescript
// Generate 3 signed floats.
generate(3, () => randomBit() ? -randomFloat() : randomFloat())
// [ 0.32383300201036036, -0.5866664333734661, 0.47603789367713034 ]
```
