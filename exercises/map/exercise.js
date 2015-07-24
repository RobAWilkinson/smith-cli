var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var fs = require('fs');
exercise = filecheck(exercise);
exercise = execute(exercise);
exercise.addVerifyProcessor(function(cb) {

  var filename = __dirname +'/solution/solution.js';
  var input = [1,2,3,4],
  callback = function(elem) {
    return elem + 1;
  },
    expectedOutput = [2,3,4,5];

  fs.readFile(filename, 'utf-8', function(err, data) {
    eval(data);
    var output = map(input, callback);

    if(JSON.stringify(output) !== JSON.stringify(expectedOutput)) {
      exercise.emit('fail', 'Your map function is off');
      cb(void 0, false);
    }else {
      cb(void 0, true);
    }


  });

});

module.exports = exercise;
