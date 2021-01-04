Template.toolbar.events({
  'click #btnAdd' : function(e){
    addSnippet();
  },
  'keypress #txtAdd' : function(e){
    if (e.keyCode!=13) return;
    addSnippet();
  }
});

function addSnippet(){
  var txtNode = $('#txtAdd');
  if (!txtNode || !txtNode.val()) return;
  Snippets.insert({text:txtNode.val()});
  txtNode.val('');
}