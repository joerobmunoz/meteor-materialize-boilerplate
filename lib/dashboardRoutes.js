FlowRouter.route(['/dashboard', '/sample'], {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('dashboard_layout', { top: "logged_in_nav_bar", main: "sample_pane", side: "side_nav"});
    }
});