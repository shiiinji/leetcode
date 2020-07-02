import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { recursiveApproach } from "./recursive-approach.ts"

Deno.test('findMedianSortedArrays() ex1', () => {
  assertEquals(recursiveApproach([1, 3], [2]), 2.0, 'Accepted')
})

Deno.test('findMedianSortedArrays() ex2', () => {
  assertEquals(recursiveApproach([1, 2], [3, 4]), 2.5, 'Accepted')
})