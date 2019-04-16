
/**
 * Swap two elements of an array in place.
 */
export function swap(list: any[], a: number, b: number) {
  const temp = list[a]
  list[a] = list[b]
  list[b] = temp
  return list
}

/**
 * Convert a Buffer or a DataView to an array.
 *
 * @param obj a Buffer or a DataView instance
 */
export function toArray(obj: Buffer|DataView) {
  if (obj instanceof DataView) {
    return Array.from(new Uint8Array(obj.buffer))
  }
  return Array.from(obj)
}
