// for our general use
// (we will use specific files as needed, for clarity!)
Meteor.subscribe('snippets');

Router.configure({
  layoutTemplate: 'main'
});