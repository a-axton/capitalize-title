const assert = require('assert');
const capitalizeText = require('../lib/index.js');

describe('Capitalize title tests', function() {
  describe('Error catching', function() {
    it('should return null if title is not a string', function() {
      assert.equal(null, capitalizeText(123));
    });
  });
  describe('Capitalization Rules', function() {
    it('should keep small words lower case when not the first or last word', function() {
      let title = 'is an example title of';
      assert.ok(capitalizeText(title).includes('an'));
      assert.ok(capitalizeText(title).includes('Is'));
      assert.ok(capitalizeText(title).includes('Of'));
    });
    it('should skip words that contain capitalized letters', function() {
      assert.equal('iTunes Sucks', capitalizeText('iTunes sucks'));
    });
    it('should skip words with dots in them', function() {
      assert.equal('example.com as an Example', capitalizeText('example.com as an example'));
    });
    it('should capitalize small words after a colon', function() {
      assert.equal('Title: An Example Title', capitalizeText('title: an example title'));
    });
  });
});