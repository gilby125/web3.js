var repl = require("repl");
var Web3 = require('./lib/web3.js');
var endpoint = process.argv[2] || '127.0.0.1:8545';
var context = repl.start('aion-'+ endpoint +'> ').context;
context.web3 = new Web3(new Web3.providers.HttpProvider('http://' + endpoint));
context.eth = context.web3.eth;
context.personal = context.web3.personal;
