Template.snippets.helpers({
  snippets : function() {
    return Snippets.find().fetch();
  }
});