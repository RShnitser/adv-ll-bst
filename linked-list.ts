// Linked List Implementation
export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  // EASY: Append a value to the end of the list
  append(value: number): void {
    // TODO: Implement append method
    let curr = this.head;

    if(curr !== null){
      while(curr.next !== null){
        curr = curr.next;
      }
      curr.next = new ListNode(value);
      return;
    }

    curr = new ListNode(value);
    this.head = curr;
  }

  // EASY: Find a value in the list
  find(value: number): boolean {
    
    // TODO: Implement find method
    let curr = this.head;
    while(curr !== null){
      //console.log(curr.value);
      if(curr.value === value){
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  // MEDIUM: Reverse the linked list
  reverse(): void {
    // if(this.head === null){
    //   return;
    // }
    //let newHead = this.head;
    let curr = this.head;
    this.head = null;
    while(curr !== null){
      let next = curr.next;
      //console.log(next);
      let prevHead = this.head;
      this.head = curr;
      this.head.next = prevHead;
      curr = next;
    }
    //this.print();
  }

  // MEDIUM: Remove a node by value
  remove(value: number): void {
    // TODO: Implement remove method
    let curr = this.head;
    while(curr !== null){
      
      if(curr.next !== null && curr.next.value === value){
        curr.next = curr.next.next;
        break;
      }
      curr = curr.next;
    }
    //this.print();
  }

  print(){
    let curr = this.head;
    while(curr !== null){
      console.log("value: ", curr.value);
      //console.log(curr);
      curr = curr.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

console.log("Linked List Find 3:", linkedList.find(3)); // Expected: true
linkedList.reverse();
console.log("Linked List Reversed Find 3:", linkedList.find(3)); // Expected: true
linkedList.remove(3);
console.log("Linked List Find 3 After Removal:", linkedList.find(3)); // Expected: false
