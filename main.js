var lex = function(input) {
  var tokens = [];

  return tokens;
}

var isOperator = function(c) {
  return /[+\-*\/\^%=(),]/.test(c);
}
var isDigit = function(c) {
  return /[0-9]/.test(c);
}
var isWhiteSpace = function(c) {
  return /\s/.test(c);
}
var isIdentifier = function(c) {
  return typeof c === 'string' && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c);
}


