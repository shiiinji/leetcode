export function convert(s: string, numRows: number): string {
  if (numRows === 1) return s

  const N = s.length
  const arr: string[][] = [...Array(numRows)].map(() => [])

  for (let i = 0; i < N; i++) {
    const pos = i % (2 * numRows - 2)
    const ii = pos < numRows ? pos : 2 * numRows - 2 - pos
    arr[ii].push(s[i])
  }
  
  return arr.map(r => r.join('')).join('')
}