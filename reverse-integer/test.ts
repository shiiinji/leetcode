import { reverse } from "./popAndPushDigits.ts"
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"

Deno.test('reverseInteger() ex1', () => {
  assertEquals(reverse(123), 321, 'Accepted')
})

Deno.test('reverseInteger() ex2', () => {
  assertEquals(reverse(-123), -321, 'Accepted')
})

Deno.test('reverseInteger() ex3', () => {
  assertEquals(reverse(120), 21, 'Accepted')
})
