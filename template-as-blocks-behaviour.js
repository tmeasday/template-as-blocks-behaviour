if (Meteor.isClient) {
  Template.A.helper = 'A-helper';
  Template.B.helper = 'B-helper';
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
