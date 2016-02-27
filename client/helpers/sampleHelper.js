Template.sample_add.events({ // Add a document to the Sample collection
    "submit .new_sample_form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Each event.target corresponds to an individual form input element
      var first = event.target[0].value;
      var last = event.target[1].value;
      var male = event.target[2].checked;
 
      SampleCollection.insert({
        first: first,
        last: last,
        isMale: male,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target[0].value = "";
      event.target[1].value = "";

      Materialize.toast(first + " added!", 900);
      event.target[0].focus();
    }
});

Template.sample_grid.events({
    "click .delete_sample": function (event) {
      SampleCollection.remove(this._id);
    }
});

Template.sample_grid.helpers({
  // Find all existing sample documents  
  samples: function () {
      return SampleCollection.find({});
  }
});