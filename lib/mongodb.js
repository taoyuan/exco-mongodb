"use strict";

const math = require('mathjs');

const CALCULATED_TYPES = ['FunctionNode', 'SymbolNode', 'AccessorNode'];

exports.convert = function (expression, options) {
  options = options || {};
  const namemapper = options.namemapper || options.nameMapper || (name => name);

  function convert(node) {
    const args = [];
    switch (node.type) {
      case 'FunctionNode':
        node.forEach(n => args.push(convert(n)));
        return {['$' + node.name]: args.length > 1 ? args : args[0]};
      case 'SymbolNode':
        return '$' + namemapper(node.name);
      case 'AccessorNode':
        return '$' + namemapper(node.toString());
      case 'OperatorNode':
        const filtered = node.filter(n => CALCULATED_TYPES.includes(n.type));
        if (!filtered.length) {
          return node.eval();
        }
        node.forEach(n => args.push(convert(n)));
        return {['$' + node.fn]: args.length > 1 ? args : args[0]};
      case 'ConstantNode':
        switch (node.valueType) {
          case 'number':
            return Number(node.value);
          case 'date':
            return new Date(node.value);
          default:
            return node.value;
        }
      case 'ParenthesisNode':
        return convert(node.content);
      default:
        console.log(node.type);
    }
  }

  return convert(math.parse(expression));

};


