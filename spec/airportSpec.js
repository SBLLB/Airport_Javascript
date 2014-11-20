describe('My Javascript airport', function() {

	beforeEach(function(){
		airport = new Airport;
		plane = new Plane;
	});

	it('can have a plane', function() {
		expect(airport.planes).toEqual([]);
	});

	it('should allow a plane to land', function(){
		expect(airport.land(plane)).toEqual(plane);
	});

	it('should know how many planes it has', function(){
		airport.land(plane);
		expect(airport.planes.length).toEqual(1);
	});

	it('should allow a plane to takeoff', function() {
		airport.land(plane);
		expect(airport.takeoff(plane)).toEqual(plane);
	});

	it('should know a plane has taken off', function() {
		airport.land(plane);
		airport.takeoff(plane);
		expect(airport.planes).toEqual([])
	});

	it('should not let a plane leave unless at the airport', function() {
		expect(airport.takeoff(plane)).toEqual(undefined)
	});

	it('should have a capacity', function() {
		expect(airport.capacity).toEqual(2)
	});

	it('should not allow a plane to land if already full', function() {
		2.times(airport.land, plane);
		expect(airport.land(plane)).toEqual(undefined);
	});

	Number.prototype.times = function(args) {
	  		var args = Array.prototype.slice.apply(arguments);
	  		for(var i = 0; i < this; i++) {
	    	args[0].apply(null, args.slice(1))
	    }
	};


});



