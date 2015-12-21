if (Meteor.isClient) {


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}

SampleCollection = new Mongo.Collection("sampleCollection");