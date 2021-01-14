import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { bruteForce } from "./brute-force.ts"
import { hashTable } from "./hash-table.ts"
import { onePassHashTable } from "./one-pass-hash-table.ts"

Deno.test('two sum bruteForce()', () => {
  assertEquals(bruteForce([2,7,11,15], 9), [0,1], 'Accepted')
})

Deno.test('two sum hashTable()', () => {
  assertEquals(hashTable([2,7,11,15], 9), [0,1], 'Accepted')
})

Deno.test('two sum onePassHashTable()', () => {
  assertEquals(onePassHashTable([2,7,11,15], 9), [0,1], 'Accepted')
})
