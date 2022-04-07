// Write your tests here!
// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar() test written by Duc Le", () => {
  describe("error handling", () => {
    it("should return false if the shift argument is missing", () => {
      const actual = caesar("thinkful");
      expect(actual).to.be.false;
    });

    it("should return false if shift equal to 0", () => {
      const shift = 0;
      const actual = caesar("thinkful", shift);
      expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
      const shift = -26;
      const actual = caesar("thinkful", shift);
      expect(actual).to.be.false;
    });

    it("Should return false if shift is larger than 25", () => {
      const shift = 26;
      const actual = caesar("thinkful", shift);
      expect(actual).to.be.false;
    });
  });

  describe("encode message", () => {
    it("space should be maintained throughout", () => {
      const shift = 8;
      const message = "This is a secret message!";
      const actual = caesar(message, shift);
      const expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.equal(expected);
    });

    it("capital letters should be ignored", () => {
      const shift = 8;
      const message = "This is a secret message!";
      const actual = caesar(message, shift);
      const expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.equal(expected);
    });

    it("letters should wrap around at the end of the alphabet", () => {
      const shift = 7;
      const message = "you were here";
      const actual = caesar(message, shift);
      const expected = "fvb dlyl olyl";
      expect(actual).to.equal(expected);
    });

    it("letters should shift to the left if shift value is negative", () => {
      const shift = -5;
      const message = "java";
      const actual = caesar(message, shift);
      const expected = "evqv";
      expect(actual).to.equal(expected);
    });
  });

  describe("decode message", () => {
    it("space should be maintained throughout", () => {
      const shift = 8;
      const message = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar(message, shift, false);
      const expected = "this is a secret message!";
      expect(actual).to.equal(expected);
    });

    it("capital letters should be ignored", () => {
      const shift = 8;
      const message = "Bpqa qa I amkzmb umaaiom!";
      const actual = caesar(message, shift, false);
      const expected = "this is a secret message!";
      expect(actual).to.equal(expected);
    });

    it("letters should wrap around at the end of the alphabet", () => {
      const shift = 7;
      const message = "fvb dlyl olyl";
      const actual = caesar(message, shift, false);
      const expected = "you were here";
      expect(actual).to.equal(expected);
    });

    it("letters should shift to the left if shift value is negative", () => {
      const shift = -5;
      const message = "evqv";
      const actual = caesar(message, shift, false);
      const expected = "java";
      expect(actual).to.equal(expected);
    });
  });
});
