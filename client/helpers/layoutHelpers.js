Template.user_form_layout.rendered = function() {
    // On template change, the DOM body classes will reactivly change
    document.body.className = "blue darken-2";
};

Template.dashboard_layout.rendered = function() {
    document.body.className = "white";
};

var initializeNav = function() {
    // Some template changes require jQuery plugin reinitialization
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
};

Template.logged_in_nav_bar.helpers({
    'userName': function () {
    	var user = Meteor.user();
      	return user !== null ? user.emails[0].address.split('@')[0] : null;
    }
});

Template.logged_in_nav_bar.events({
    'click #logout': function () {
    	Meteor.logout(function() {
    		FlowRouter.go("/");
    	});
    }
});

Template.nav_bar.rendered = initializeNav;
Template.side_nav.rendered = initializeNav;
Template.logged_in_nav_bar.rendered = initializeNav;