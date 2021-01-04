Template.snippets.helpers({
  snippets : function() {
    return Snippets.find().fetch();
  }
});

Template.snippet.helpers({
  isLink : function(){
    return (this.URL!=undefined);
  }
});