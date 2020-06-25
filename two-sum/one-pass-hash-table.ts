export function onePassHashTable(nums: number[], target: number) {
  let map = new Map<number, number>()
  for (const [index, num] of nums.entries()) {
    const complement = target - nums[index]
    if (map.has(complement)) {
      return [map.get(complement), index]
    }
    map.set(num, index)
  }
}
