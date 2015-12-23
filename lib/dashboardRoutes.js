FlowRouter.route(['/dashboard', '/sample'], { // multiple paths can be explicitly assigned to the same route
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('dashboard_layout', { top: "logged_in_nav_bar", main: "sample_pane", side: "side_nav"});
    }
});