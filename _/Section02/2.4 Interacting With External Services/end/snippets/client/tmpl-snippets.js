Template.snippets.helpers({
  snippets : function() {
    return Snippets.find().fetch();
  },
  isLink : function(){
    return (this.URL!=undefined);
  }
});