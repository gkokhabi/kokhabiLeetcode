/*
Leetcode number: 141

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/


func hasCycle(head *ListNode) bool {
	if head == nil || head.Next == nil {
			return false
	}
	p1, p2 := head, head.Next
	for p1 != p2 {
			if p2 == nil || p2.Next == nil {
					return false
			}
			p1 = p1.Next
			p2 = p2.Next.Next
	}
	return true
}