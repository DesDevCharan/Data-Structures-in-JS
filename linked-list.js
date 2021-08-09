function Node(element) {
  this.element = element;
  this.next = null
}

function LinkedList() {
  this.head = null;
  this.size = 0;
  this.add = function(element) {
    var node = new Node(element);
    var current;
    if (this.head == null)
      this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  this.insertAt = function(element, index) {
    if (index < 0 || index > this.size || index === undefined) {
      return console.log("Not a valid index");
    } else {
      var node = new Node(element);
      var current, prev;
      current = this.head;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        var it = 0;
        while (it < index) {
          it++;
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
      }
      this.size++;
    }
  }

  this.removeFrom = function(index) {
    if (index < 0 || index >= this.size) {
      return "Not a valid index";
    } else {
      var current, prev;
      current = this.head;
      prev = current;
      if (index === 0) {
        this.head = current.next;
      } else {
        current = this.head;
        var it = 0;
        while (it < index) {
          it++;
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
      this.size--;
    }
  }

  this.remove = function(element) {
    var current = this.head;
    var prev = null;
    while (current !== null) {
      if (current.element = element) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      } else {
        prev = current;
        current = current.next;
      }
    }
    return -1;
  }

  this.print = function(head) {
    var curr = head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  this.reverseIterative = function(head) {
    var node = head;
    var previous = null;

    while (node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return previous; // Change the list head !!!
  }
  this.returnRecursive = (head) => {
    if (!head || !head.next) {
      return head;
    }
    let temp = this.returnRecursive(head.next);
    head.next.next = head;
    head.next = undefined;
    return temp;
  }
}

var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
/* ll.insertAt(4,2);
ll.removeFrom(4,2); */
ll.print(ll.head);
const l1 = ll.returnRecursive(ll.head);
ll.print(l1);
