var sift3 = process.env.SIFT3_COVERAGE ? require('../lib-cov/sift3.js') : require('..')
var assert = require('assert')
var fixtures = require('./fixtures.json')

describe('sift3', function() {
  it('should return 0 for two empty strings', function() {
    assert(sift3('', '') === 0)
    assert(sift3(null, '') === 0)
    assert(sift3('', null) === 0)
    assert(sift3(undefined, '') === 0)
    assert(sift3('', undefined) === 0)
    assert(sift3(undefined, undefined) === 0)
    assert(sift3(null, null) === 0)
  })

  it('should return the length of a string when the other one is empty', function() {
    assert(sift3('', 'abcdef') === 6)
    assert(sift3(null, 'abcqwe') === 6)
    assert(sift3('cde', null) === 3)
  })

  it('should return 0 if two strings are an exact match', function() {
    assert(sift3('same', 'same') === 0)
  })

  it('should calculate distance', function() {
    fixtures.forEach(function(item) {
      assert(sift3(item.attempt, item.original) === item.score)
    })
  })
})