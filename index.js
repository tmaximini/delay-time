'use strict';

var delayValues = [1/4, 1/3, 1/2, 1, 4/3, 2, 3, 4];
var delayValueStrings = ['1/4', '1/3', '1/2', '1', '4/3', '2', '3', '4'];
var preDelayValues = [1/128, 1/64, 1/32, 1/16, 1/8, 1/4];
var preDelayValueStrings = ['1/128', '1/64', '1/32', '1/16', '1/8', '1/4'];

module.exports = function delayTime(bpm, cb) {
	bpm = Number(bpm);
	if (bpm === NaN) {
		return cb(new TypeError('Expected bpm as a number'), null);
	}

	var getDelayTime = function(bpm, val) {
		return (60000 / bpm * 4 * val).toFixed(2).replace(/\.00$/, '');
	};

	var delays = delayValues.map(function(val, i) {
		return {
			beat: delayValueStrings[i],
			value: getDelayTime(bpm, val)
		};
	});
	var preDelays = preDelayValues.map(function(val, i) {
		return {
			beat: preDelayValueStrings[i],
			value: getDelayTime(bpm, val)
		};
	});


	return cb(null, {
		delays: delays,
		preDelays: preDelays
	});

};
