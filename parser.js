var parse = function (tokens) {
  var symbols = {},
    symbol = function (id, nud, lbp, led) {
      var sym = symbols[id] || {};
      symbols[id] = {
        lbp: sym.lbp || lbp,
        nud: sym.nud || nud,
        led: sym.lef || led
      };
    };

  var interpretToken = function (token) {
    var sym = Object.create(symbols[token.type]);
    sym.type = token.type;
    sym.value = token.value;
    return sym;
  };

  var i = 0, token = function () { return interpretToken(tokens[i]); };
  var advance = function () { i++; return token(); };

  var expression = function (rbp) {
    var left, t = token();
    advance();
    if (!t.nud) throw "Unexpected token: " + t.type;
    left = t.nud(t);
    while (rbp < token().lbp) {
      t = token();
      advance();
      if (!t.led) throw "Unexpected token: " + t.type;
      left = t.led(left);
    }
    return left;
  };

  var infix = function (id, lbp, rbp, led) {
    rbp = rbp || lbp;
    symbol(id, null, lbp, led || function (left) {
      return {
        type: id,
        left: left,
        right: expression(rbp)
      };
    });
  },
    prefix = function (id, rbp) {
      symbol(id, function () {
        return {
          type: id,
          right: expression(rbp)
        };
      });
    };


  symbol(",");
  symbol(")");
  symbol("(end)");

  symbol("number", function (number) {
    return number;
  });
  symbol("identifier", function (name) {
    if (token().type === "(") {
      var args = [];
      if (tokens[i + 1].type === ")") advance();
      else {
        do {
          advance();
          args.push(expression(2));
        } while (token().type === ",");
        if (token().type !== ")") throw "Expected closing parenthesis ')'";
      }
      advance();
      return {
        type: "call",
        args: args,
        name: name.value
      };
    }
    return name;
  });

  symbol("(", function () {
    value = expression(2);
    if (token().type !== ")") throw "Expected closing parenthesis ')'";
    advance();
    return value;
  });

  prefix("-", 7);
  infix("^", 6, 5);
  infix("*", 4);
  infix("/", 4);
  infix("%", 4);
  infix("+", 3);
  infix("-", 3);

  infix("=", 1, 2, function (left) {
    (left.type === "call") {
      (var i = 0; i < left.args.length; i++) {
        (left.args[i].type !== "identifier") throw "Invalid argument name";

        {
          : "function",
            : left.name,
            : left.args,
            : expression(2)

          else if (left.type === "identifier") {
            {
              : "assign",
                : left.value,
                : expression(2)


              throw "Invalid lvalue";

              120  	var parseTree = [];
              (token().type !== "(end)") {
                .push(expression(0));

                parseTree;
              };

