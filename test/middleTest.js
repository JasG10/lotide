
const middle = require('../middle');
const assertArraysEqual = require('chai').assertArraysEqual;

describe('middle function', () => {
    it('should return an empty array for an input array with one element', () => {
      assertArraysEqual(middle([1]), []);
    });
  
    it('should return an empty array for an input array with two elements', () => {
      assertArraysEqual(middle([1, 2]), []);
    });
  
    it('should return an array with the middle element for an odd-length input array', () => {
      assertArraysEqual(middle([1, 2, 3]), [2]);
    });
  
    it('should return an array with the two middle elements for an even-length input array', () => {
      assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
    });
  
    it('should return an array with the two middle elements for an input array with more than four elements', () => {
      assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    });
  });