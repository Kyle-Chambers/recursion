// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Handles primitives passed into function
  if (obj === null){
    return "null";
  } else if (typeof obj === 'string'){
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  }
  // Handles types that cannot be stringified
  if (typeof obj === 'undefined' || typeof obj === 'function'){
    return null;
  }
  // Handles objects
  if (Array.isArray(obj)){
    var segment = '';
    obj.forEach(function(ele){
      segment += stringifyJSON(ele) + ','; // recursive call
    });
    return '[' + segment.slice(0, -1) + ']';
  }

  if (typeof obj === 'object'){
    var segment = '';
    for (var key in obj){
      if (stringifyJSON(obj[key])){
        segment += stringifyJSON(key) + ':' + stringifyJSON(obj[key])  + ',';
      };
    }
    return '{' + segment.slice(0, -1) + '}';
  }
};
