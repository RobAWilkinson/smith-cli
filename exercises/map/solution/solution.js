// solution stuff here
//
// 

function map (array, callback) {
  var output = [];
  for( var i = 0; i < array.length; i++) {
    output.push(callback(array[i], i, array));
  }
  return output;

}

