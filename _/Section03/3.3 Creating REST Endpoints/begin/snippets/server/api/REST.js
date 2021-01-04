Router.route('/api',
           { where:'server'
           })
.get(function(){
  //write headers
  writeHeaders(this);
  //send our response
  this.response.end('GET is not supported. Sorry! \n');
});

function writeHeaders(self){
  self.response.statusCode = 200;
  self.response.setHeader("Content-Type","application/json");
  self.response.setHeader("Access-Control-Allow-Origin", "*");
  self.response.setHeader("Access-Control-Allow-Headers",
                          "Origin, X-Requested-With, Content-Type, Accept");
}