AccountsTemplates.configureRoute('signIn', {
    layoutType: 'blaze',
    name: 'signin',
    path: '/login',
    layoutTemplate: 'user_form_layout',
    layoutRegions: {
      top: 'nav_bar'
    },
    contentRegion: 'main'
});

AccountsTemplates.configureRoute('signUp', {
    layoutType: 'blaze',
    name: 'signup',
    path: '/register',
    layoutTemplate: 'user_form_layout',
    layoutRegions: {
      top: 'nav_bar'
    },
    contentRegion: 'main'
});

FlowRouter.route('/', {
    triggersEnter: [isLoggedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('layout', { top: "nav_bar", main: "front_page"});
    },
    name: "home" // optional // refer to name in code instead of route
});

function isLoggedIn (context) { // define default override for the root route
    if (Meteor.loggingIn() || Meteor.user()) {
        FlowRouter.go('/dashboard');
    }
}
