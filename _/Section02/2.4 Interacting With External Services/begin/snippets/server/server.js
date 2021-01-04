// general server-side code
// (will get specific as needed)
Meteor.publish('snippets', function(){
  return Snippets.find({owner:this.userId});
  //this.userId is the logged in user ID for the publish "session"
});

Snippets.allow({
  insert: function(userId,fields){
    return(userId);
  }
})