function Airport(){
	this.planes = [];
	this.capacity = 2
};

function Plane(){};

Airport.prototype.land = function(plane) {
	if(this.planes.length < this.capacity) { 
		this.planes.push(plane);
		return plane;
		}
};

Airport.prototype.takeoff = function(plane) {
	if (this.planes.indexOf(plane) !== -1) {;
	return this.planes.splice(this.planes.indexOf(plane), 1)[0];
	}
};