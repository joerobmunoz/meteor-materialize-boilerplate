if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}

// sample collection, using autopublish
SampleCollection = new Mongo.Collection("sampleCollection");