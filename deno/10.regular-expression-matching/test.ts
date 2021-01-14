import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isMatch } from './index.ts'



Deno.test("isMatch() ex1", () => {
  assertEquals(isMatch("aa", "a"), false, "Accepted");
});

Deno.test("isMatch() ex2", () => {
  assertEquals(isMatch("aa", "a*"), true, "Accepted");
});

Deno.test("isMatch() ex3", () => {
  assertEquals(isMatch("ab", ".*"), true, "Accepted");
});

Deno.test("isMatch() ex4", () => {
  assertEquals(isMatch("aab", "c*a*b"), true, "Accepted");
});

Deno.test("isMatch() ex5", () => {
  assertEquals(isMatch("mississippi", "mis*is*p*."), false, "Accepted");
});
