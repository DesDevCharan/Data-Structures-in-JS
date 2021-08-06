const myArray = function() {
  this.data = {};
  this.length = 0;

  this.push = function(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }
  this.pop = function() {
    const ele = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }


  return this;
}

console.log(new myArray().push(1))
console.log(new myArray().push(2))
console.log(new myArray().pop())
