// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// var i = 0;
var stringifyJSON = function(obj) {
	var count = 0;
	var keyCount;
	var string = '{';
  if (obj === null) {
  	return 'null';
  }
  keyCount = Object.keys(obj).length;
  if (obj === true) {
  	return 'true';
  }
  if (obj === false) {
  	return 'false';
  }
  if (typeof obj === 'number') {
  	return obj.toString();
  }
	if (typeof obj === 'string') {
		return '"' + obj+ '"';
	}
  if (Array.isArray(obj) && !obj.length) {
  	return '[]';
  }
  if (keyCount === 0) {
  	return '{}'
  }
  if (Array.isArray(obj)) {
  	return '[' + obj.map(function(item) {
  			return stringifyJSON(item);
  	}) + ']';
  }
	for (let key in obj) {
		count++;
		if (typeof obj[key] === 'function' || typeof obj[key] === undefined) {
			return '{}';
		}
		if (count !== keyCount) {
				string += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
		} else {
				string += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
		}	
	}
	string += '}';
	return string;
};
var unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];
// console.log(stringifyJSON({a:1, b:2, c:[1,'2', 3], d: "string" }));
// console.log(stringifyJSON({'a': 'apple'}));
// console.log(stringifyJSON([[[['foo']]]]));
// console.log(stringifyJSON([{'a': 'b'}, {'c': 'd'}]));
// console.log(stringifyJSON({'a': [], 'c': {}, 'b': true}));
// console.log(stringifyJSON(unstringifiableValues));



