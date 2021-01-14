import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { isPalindrome } from "./revert-half-of-the-number.ts"

Deno.test('isPalindrome() ex1', () => {
  assertEquals(isPalindrome(121), true, 'Accepted')
})

Deno.test('isPalindrome() ex2', () => {
  assertEquals(isPalindrome(-121), false, 'Accepted')
})

Deno.test('isPalindrome() ex3', () => {
  assertEquals(isPalindrome(10), false, 'Accepted')
})
