import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts repeated characters', () => {
  assert.deepEqual(
    [...api.characterCounts('banana')],
    [
      ['b', 1],
      ['a', 3],
      ['n', 2],
    ],
  );
});
test('counts supplementary symbol once', () => {
  assert.equal(api.characterCounts('😀😀').get('😀'), 2);
});
test('returns empty map for empty text', () => {
  assert.equal(api.characterCounts('').size, 0);
});
test('preserves first-seen key order', () => {
  assert.deepEqual([...api.characterCounts('cab').keys()], ['c', 'a', 'b']);
});
test('counts whitespace', () => {
  assert.equal(api.characterCounts(' a ').get(' '), 2);
});
test('rejects non-string input', () => {
  assert.throws(() => api.characterCounts(1), TypeError);
});
