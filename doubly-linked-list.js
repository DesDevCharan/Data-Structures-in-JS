function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedlist() {
  this.head = null;
  this.size = 0;
  this.insertAtHead = function(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      return;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  this.print = function(head) {
    let curr = head;
    let str = " "
    while (curr) {
      str += curr.element + " ";
      curr = curr.next
    }
    console.log("Print", str)
    return str;
  }
}

const dll = new DoublyLinkedlist();
dll.insertAtHead(1);
dll.insertAtHead(2);
dll.insertAtHead(3);
dll.print(dll.head);
