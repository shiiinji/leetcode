import { ListNode } from './list-node.ts'

export function elementaryMath(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0)
  let p = l1
  let q = l2
  let current = dummyHead
  let carry = 0

  while (p !== null || q !== null) {
    const x = p !== null ? p.val : 0
    const y = q !== null ? q.val : 0
    const sum = carry + x + y
    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next
    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }
  return dummyHead.next
}