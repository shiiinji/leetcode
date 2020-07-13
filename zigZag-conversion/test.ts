import { convert } from "./sort-by-row.ts"
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"

Deno.test('convert() ex1', () => {
  assertEquals(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR', 'Accepted')
})

Deno.test('convert() ex2', () => {
  assertEquals(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI', 'Accepted')
})