import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

function myAtoi(str: string): number {
  str = str.trim()
  if (!str) return 0
  let sign = 1
  let i = 0
  let answer = 0
  if (str[i] === '+') {
    sign = 1
    i++
  } else if (str[i] === '-') {
    sign = -1
    i++
  }

  for (; i < str.length; i++) {
    const temp = str.charCodeAt(i) - 48
    console.log(answer)
    if (temp > 9 || temp < 0) break
    if (answer > 2147483647 / 10 || answer > (2147483647 / 10)) {
      return sign == 1 ? 2147483647 : -2147483648
    } else {
      answer = answer * 10 + temp
    }
  }
  return answer * sign
}

Deno.test("isPalindrome() ex1", () => {
  assertEquals(myAtoi("42"), 42, "Accepted");
});

Deno.test("myAtoi() ex2", () => {
  assertEquals(myAtoi("   -42"), -42, "Accepted");
});

Deno.test("myAtoi() ex3", () => {
  assertEquals(myAtoi("4193 with words"), 4193, "Accepted");
});

Deno.test("myAtoi() ex4", () => {
  assertEquals(myAtoi("words and 987"), 0, "Accepted");
});

Deno.test("myAtoi() ex5", () => {
  assertEquals(myAtoi("-91283472332"), -2147483648, "Accepted");
});
