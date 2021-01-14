export function bruteForce(nums: number[], target: number) {
  for (const [index, num] of nums.entries()) {
    for (const [i, n] of nums.entries()) {
      if ((num + n) === target) {
        return [index, i]
      }
    }
  }
}