// general server-side code
// (will get specific as needed)
Meteor.publish('snippets', function(){
  return Snippets.find({});
});