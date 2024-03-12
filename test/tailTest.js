const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
    it('should not modify the original array', () => {
      const words = ["Yo Yo", "Lighthouse", "Labs"];
      tail(words);
      assert.Strictequal(words.length, 3);
    });
  
    it('should return an array with one less element than the original array', () => {
      const words = ["Yo Yo", "Lighthouse", "Labs"];
      const result = tail(words);
      assert.Strictequal(result.length, words.length - 1);
    });
  
    it('should return an empty array when called on an array with one element', () => {
      const result = tail(["test"]);
      assert.isEmpty(result);
    });
  
    it('should return an empty array when called on an empty array', () => {
      const result = tail([]);
      assert.isEmpty(result);
    });
  });