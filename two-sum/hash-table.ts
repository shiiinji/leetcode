export function hashTable(nums: number[], target: number) {
  let map = new Map<number, number>()
    nums.map((num, index) => {
      map.set(num, index)
    })

  for (const [index] of nums.entries()) {
    const complement = target - nums[index]
    if (map.has(complement)) {
      return [index, map.get(complement)]
    }
  }
}