import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { ListNode } from './list-node.ts'
import { elementaryMath } from './elementary-math.ts'

let l1Node = new ListNode(3)
l1Node = new ListNode(4, l1Node)
l1Node = new ListNode(2, l1Node)

let l2Node = new ListNode(4)
l2Node = new ListNode(6, l2Node)
l2Node = new ListNode(5, l2Node)

let output = new ListNode(8)
output = new ListNode(0, output)
output = new ListNode(7, output)

Deno.test('add two numbers addTwoNumbers()', () => {
  assertEquals(elementaryMath(l1Node, l2Node), output, 'Accepted')
})
