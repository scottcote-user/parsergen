#!/usr/bin/env node

'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = new _index2.default.Rules('S');

rules.addRule('S', 'a S b S');
rules.addRule('S', 'a');

var terminals = ['a', 'b', '$'];

var simpleRules = rules.createSimpleRules(terminals);
var states = new _index2.default.States(simpleRules);

//states.debugPrint();

var parser = new _index2.default.Parser(states);

parser.save();