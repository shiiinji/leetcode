import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { bruteForce } from "./brute-force.ts"
import { slidingWindow } from "./sliding-window.ts"
import { slidingWindowOptimized } from "./sliding-window-optimized.ts"


Deno.test('longest substring without repeating characters ex1) lengthOfLongestSubstring()', () => {
  assertEquals(bruteForce('abcabcbb'), 3, 'Accepted')
})

Deno.test('longest substring without repeating characters ex2) lengthOfLongestSubstring()', () => {
  assertEquals(bruteForce('bbbbb'), 1, 'Accepted')
})

Deno.test('longest substring without repeating characters ex3) lengthOfLongestSubstring()', () => {
  assertEquals(bruteForce('pwwkew'), 3, 'Accepted')
})

Deno.test('longest substring without repeating characters ex1) slidingWindow()', () => {
  assertEquals(slidingWindow('abcabcbb'), 3, 'Accepted')
})

Deno.test('longest substring without repeating characters ex2) slidingWindow()', () => {
  assertEquals(slidingWindow('bbbbb'), 1, 'Accepted')
})

Deno.test('longest substring without repeating characters ex3) slidingWindow()', () => {
  assertEquals(slidingWindow('pwwkew'), 3, 'Accepted')
})

Deno.test('longest substring without repeating characters ex1) slidingWindowOptimized()', () => {
  assertEquals(slidingWindowOptimized('abcabcbb'), 3, 'Accepted')
})

Deno.test('longest substring without repeating characters ex2) slidingWindowOptimized()', () => {
  assertEquals(slidingWindowOptimized('bbbbb'), 1, 'Accepted')
})

Deno.test('longest substring without repeating characters ex3) slidingWindowOptimized()', () => {
  assertEquals(slidingWindowOptimized('pwwkew'), 3, 'Accepted')
})