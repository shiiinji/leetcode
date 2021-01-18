import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { maxArea } from './index.ts'


Deno.test("maxArea() ex1", () => {
  assertEquals(maxArea([1,8,6,2,5,4,8,3,7]), 49, "Accepted");
});

Deno.test("maxArea() ex2", () => {
  assertEquals(maxArea([1,1]), 1, "Accepted");
});

Deno.test("maxArea() ex3", () => {
  assertEquals(maxArea([4,3,2,1,4]), 16, "Accepted");
});

Deno.test("maxArea() ex4", () => {
  assertEquals(maxArea([1,2,1]), 2, "Accepted");
});
