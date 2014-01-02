require('component-plus-node')
var type = require('type')

var sift3 = function(s1, s2){
  if(!(this instanceof sift3)) return new sift3(s1, s2)

  this.s1 = s1
  this.s2 = s2
}

sift3.prototype.calc = function(){
  var length = this.areStrings()
  if(length !== true) return length

  this.c = 0
  this.offset1 = 0
  this.offset2 = 0
  this.lcs = 0
  this.maxOffset = 5

  while(this.condition()) this.compare()

  return (this.s1.length + this.s2.length) / 2 - this.lcs
}

sift3.prototype.condition = function(){
  var condition1 = this.c + this.offset1 < this.s1.length
  var condition2 = this.c + this.offset2 < this.s2.length
  return condition1 && condition2
}

sift3.prototype.areStrings = function(){
  var isS1 = this.isString(this.s1)
  var isS2 = this.isString(this.s2)

  if(isS1 && isS2) return true
  if(!isS1 && !isS2) return 0
  if(!isS1) return this.s2.length
  return this.s1.length
}

sift3.prototype.isString = function(s){
  return type(s) === 'string' && !!s.length
}

sift3.prototype.compare = function(){
  if(this.isEql()) {
    this.lcs += 1
    this.c += 1
    return
  }

  this.offset1 = 0
  this.offset2 = 0

  for(var i = 0; i < this.maxOffset; i += 1){
    if(this.isSync(this.s1.charAt(this.c + i), this.s2.charAt(this.c), this.s1, i)){
      this.offset1 = i
      break
    }

    if(this.isSync(this.s1.charAt(this.c), this.s2.charAt(this.c + i), this.s2, i)){
      this.offset2 = i
      break
    }
  }

  this.c += 1
}

sift3.prototype.isEql = function(){
  var s1Char = this.s1.charAt(this.c + this.offset1)
  var s2Char = this.s2.charAt(this.c + this.offset2)
  return s1Char === s2Char
}

sift3.prototype.isSync = function(chr1, chr2, s, i){
  return (this.c + i < s.length) && chr1 === chr2
}

module.exports = function(s1, s2){
  return sift3(s1, s2).calc()
}