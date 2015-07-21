#!/usr/bin/env node
'use strict';
var meow = require('meow');
var delayTime = require('./');
var Table = require('cli-table');

var cli = meow({
	help: [
		'Usage',
		'  $ delay-time [bpm]',
		'',
		'Examples',
		'  $ delay-time 125',
		''
	]
});

delayTime(cli.input[0], function(err, result) {
	if (err) {
		throw new Error(err);
	}
	process.stdout.write('Delays @ ' + cli.input[0] + 'bpm \n\n');

	var delayTable = new Table({
    	head: ['Note Value', 'Delay Time']
	});


	result.delays.forEach(function(val) {
		delayTable.push([val.beat, val.value + 'ms']);
	});
	console.log(delayTable.toString());
	process.stdout.write('\n\n');
	process.stdout.write('Pre-Delays @ ' + cli.input[0] + 'bpm \n\n');
	var predelayTable = new Table({
    	head: ['Note Value', 'Delay Time']
	});
	result.preDelays.forEach(function(val) {
		predelayTable.push([val.beat, val.value + 'ms']);
	});
	console.log(predelayTable.toString());
});
