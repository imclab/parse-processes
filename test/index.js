var processes = require('..')
  , assert = require('assert');

describe('processes', function(){
  it('should list', function(done){
    processes(function(err, array){
      console.log(array);
      done();
    });
  });
});
