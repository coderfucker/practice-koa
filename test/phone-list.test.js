const app = require('../app.js');
const request = require('supertest').agent(app.listen());

describe('Phone List', function(){
  describe('when GET /', function() {
    it('should respond with a rendered view', function(done){
      request
        .get('/')
        .expect('content-type', /text\/html/)
        .expect(200, done);
    })
  })
})
