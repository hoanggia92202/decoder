const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius() written by Duc Le", () => {
  describe("error handling", () => {
    it("the output should be a string", () => {
      const message = "thinkful";
      const actual = polybius(message);
      expect(actual).to.be.string;
    });
  });

  describe("encode message", () => {
    it("space should be maintained throughout", () => {
      const message = "Hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";
      expect(actual).to.equal(expected);
    });

    it("when encoding, the letter 'i' or 'j' should be converted to 42", () => {
      const message = "ij";
      const actual = polybius(message);
      const expected = "4242";
      expect(actual).to.equal(expected);
    });
  });

  describe("decode message", () => {
    it("when decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false", () => {
      const message = "1234 12345";
      const actual = polybius(message, false);
      expect(actual).to.be.false;
    });

    it("space should be maintained throughout", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";
      expect(actual).to.equal(expected);
    });

    it("when decoding, the number 42 should be converted to 'i/j", () => {
      const message = "4432423352125413";
      const actual = polybius(message, false);
      const expected = "th(i/j)nkful";
      expect(actual).to.equal(expected);
    });
  });
});
