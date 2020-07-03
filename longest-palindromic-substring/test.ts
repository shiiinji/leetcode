import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { longestPalindromicSubstring } from "./expand-around-center.ts"

Deno.test('longestPalindromicSubstring() ex1', () => {
  assertEquals(longestPalindromicSubstring('babad'), 'aba', 'Accepted')
})

Deno.test('longestPalindromicSubstring() ex2', () => {
  assertEquals(longestPalindromicSubstring('cbbd'), 'bb', 'Accepted')
})