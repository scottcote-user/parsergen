"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SimpleRuleModule = {

  createClass: function createClass(Term) {

    var SimpleRule = function SimpleRule(left, right) {

      this.createTerm = function () {
        return new Term(left, [], right);
      };
    };

    return SimpleRule;
  }
};

exports.default = SimpleRuleModule;