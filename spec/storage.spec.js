var Storage = require('../storage.js');
describe("Storage Suite", function() {

	var spy;
	var module;

	beforeEach(function(){
		spy = jasmine.createSpy();
		module = Storage(spy);
	});
});