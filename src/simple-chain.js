const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  length: 0,

  getLength() {
    return this.length;
  },

  addLink(value) {

    this.chain.push(String(value));
    this.length += 1;
    
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chain = [];
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    if (position === 1) {

      this.chain = this.chain.slice(1);
      return this;

    } else if (position > 1 && position < this.length) {

      let firstPart = this.chain.slice(0, position - 1);
      let secondPart = this.chain.slice(position);

      this.chain = [...firstPart, ...secondPart];
      return this;

    } else if (position === this.length) {

      this.chain.pop();
      return this;

    } else {
      this.chain = [];
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let chainString = `( ${this.chain.join(" )~~( ")} )`;

    this.chain = [];
    this.length = 0;
    return chainString;
  }
};

module.exports = {
  chainMaker
};