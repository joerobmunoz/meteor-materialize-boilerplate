Template.user_form_layout.rendered = function() {
    // On template change, the DOM body classes will reactivly change
    document.body.className = "primary-color";
};

Template.dashboard_layout.rendered = function() {
    document.body.className = "white";
};

var initializeNav = function() {
    // Some template changes require jQuery plugin reinitialization
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();

    // Attach active tab click event
    $("#dashboard_side_nav li").click(function() {
        $("#dashboard_side_nav li ").each(function() {
            $(this).removeClass("active");
        });

        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
        }
    });

    // Set active side tab
    $(function() {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/"));
            $("#dashboard_side_nav li a").each(function() {
                if($(this).attr("href") == pgurl) {
                    $(this).parent().addClass("active");
                }
        });
    });

};

Template.logged_in_nav_bar.helpers({
    'userName': function () {
    	var user = Meteor.user();
      	return user && user.emails !== "undefined" ? user.emails[0].address.split('@')[0] : null;
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
Template.logged_in_nav_bar.rendered = initializeNav;