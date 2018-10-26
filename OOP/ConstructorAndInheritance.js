function AofB(prop1, prop2){
	this.prop1 = prop1;
	this.prop2= prop2;
}

function CofB(prop3, prop4){
	this.prop3 = prop3;
	this.prop4= prop4;
}

//AofB.prototype.superType = "B";
//AofB.prototype.superFunction = function(){console.log("root is B")};

//CofB.prototype.superType = "B";
//CofB.prototype.superFunction = function(){console.log("root is B")};

function B(){
	this.superType = "B";
	this.superFunction= function(){console.log("root is B")};
}

function extend(parent,child){
	function interMediate(){}
	interMediate.prototype = parent.prototype;
	child.prototype = interMediate.prototype;
	child.prototype.Constructor = child;
}

function object(nP){
	function Fun(){}
	Fun.prototype = nP;
	return new Fun();
}

var nationality = {
  nation:'Chinese'
};


var a = new AofB(1,2);
var c = new CofB(1,2);
var b = new B(3,4);

console.log("Before extend:");
for(var p in a){
	console.log(p+":"+a[p]);
}
console.log("a.superType:"+a.superType)

for(var p in c){
	console.log(p+":"+c[p]);
}
console.log("b.superType:"+b.superType)

extend(B,AofB);
extend(B,CofB);
var aa = new AofB(5,6);
var cc = new CofB(7,8);
console.log("After extend:");
for(var p in aa){
	console.log(p+":"+aa[p]);
}
console.log("aa.superType:"+aa.superType)

for(var p in cc){
	console.log(p+":"+cc[p]);
}
console.log("cc.superType:"+cc.superType)

var doctor = object(nationality);
doctor.career = 'Dentist';
console.log(doctor.nation);
