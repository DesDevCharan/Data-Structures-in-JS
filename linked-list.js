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
        //prev.next = node;
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

}

var ll = new LinkedList();
ll.insertAt(0);

/* console.log(ll) */
