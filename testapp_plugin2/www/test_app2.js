var TestApp2 = function() {};

TestApp2.prototype.show = function(success, fail) {
	
	
    cordova.exec(success, fail, "TestAppPlugin2","show", []);
};

var ts2 = new TestApp2();
module.exports = ts2;