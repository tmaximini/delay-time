'use strict';
var assert = require('assert');
var should = require('should');
var delayTime = require('./');

it('should calculate the delays correctly', function() {
	delayTime(120, function(err, result) {
		assert.deepEqual(result.delays[0], { 'beat': '1/4', 'value': '500' });
		assert.deepEqual(result.delays[3], { 'beat': '1', 'value': '2000' });
	});
});


it('should have an delays and predelays array', function() {
	delayTime(125, function(err, result) {
		result.should.have.property('delays').with.lengthOf(8);
		result.should.have.property('preDelays').with.lengthOf(6);
	});
});

it('coerces string values correctly', function() {
	delayTime('120.0', function(err, result) {
		assert.deepEqual(result.delays[0], { 'beat': '1/4', 'value': '500' });
	});

});

