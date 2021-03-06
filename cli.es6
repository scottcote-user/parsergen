import ParserGen from './index.js';

let rules = new ParserGen.Rules('E');

rules.addRule('E', 'E * B');
rules.addRule('E', 'E + B');
rules.addRule('E', 'B');
rules.addRule('B', '0');
rules.addRule('B', '1');

let terminals = ['0', '1', '+', '*','$'];

/*
let rules = new ParserGen.Rules('S');

rules.addRule('S', 'a S b S');
rules.addRule('S', 'a');

let terminals = ['a', 'b', '$'];

let rules = new ParserGen.Rules('E');

rules.addRule('E', 'E + T');
rules.addRule('E', 'T');
rules.addRule('T', 'T * F');
rules.addRule('T', 'F');
rules.addRule('F', '( E )');
rules.addRule('F', 'i');

let terminals = ['+', '*', '(', ')', 'i', '$'];
*/

let simpleRules = rules.createSimpleRules(terminals);
let states = new ParserGen.States(simpleRules);

states.printTable();

//states.debugPrint();

//let parser = new ParserGen.Parser(states);

//parser.save();
