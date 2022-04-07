const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution() written by Duc Le", () => {
  describe("error handling", () => {
    it("should return false if the alphabet parameter is missing", () => {
      const message = "thinkful";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("the alphabet parameter must be exactly 26 characters, which could include special character such as '#,$,*,etc'", () => {
      const message = "You are an excellent spy";
      const alphabet = "zxcvbnmasdfghjklqwertyuio$a";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("all characters in the alphabet parameter must be unique, otherwise return false", () => {
      const message = "thinkful";
      const alphabet = "qwertyuiopasdfghjklzxcvnnn";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encode message", () => {
    it("space should be maintained throughout", () => {
      const message = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });

    it("capital letters can be ignored", () => {
      const message = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });

    it("should encode the message using the given alphabet", () => {
      const message = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });

    it("should work with any unique characters key", () => {
      const message = "message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "ysii.rs";

      expect(actual).to.equal(expected);
    });
  });

  describe("decode message", () => {
    it("space should be maintained throughout", () => {
      const message = "elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "you are an excellent spy";
      expect(actual).to.equal(expected);
    });

    it("capital letters can be ignored", () => {
      const message = "elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "you are an excellent spy";
      expect(actual).to.equal(expected);
    });

    it("should decode the message using the given alphabet", () => {
      const message = "elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "you are an excellent spy";
      expect(actual).to.equal(expected);
    });

    it("should work with any unique characters key", () => {
      const message = "ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
  });
});
