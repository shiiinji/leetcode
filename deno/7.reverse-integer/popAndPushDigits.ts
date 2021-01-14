export function reverse(x: number): number {
  const max = Math.pow(2, 31)
  let r = 0
  while (x !== 0) {
    r = r * 10 + x % 10
    if (r > max || r < -max) {
      return 0
    }
    x = (x / 10) << 0
  }

  return r
}
