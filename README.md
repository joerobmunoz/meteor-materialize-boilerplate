# meteor-materialize-boilerplate
Boilerplate code for a Meteor web application, with Materialize CSS, Blaze routing, and basic authentication integration.
 
# Description

[Meteor](https://www.meteor.com/) is an intuitive JS development framework allowing for thin, isomorphic code. The Meteor package manager has many popular options, some of which are frequently involved in most projects. This a quick boilerplate of common modules to demo the basic functionality, including: authentication, routing, and library-specific css.

### Project Structure
The main page showcases [Materialize](http://materializecss.com/) layout functionality. Login and SignUp are supported in the upper right menu, leading to a dashboard with a listview. This code is meant mainly for educational purposes, but can also be usedful for quick mock ups. _./lib/Routes.js_ is a good starting place for understanding 

### Meteor Packages
+ [accounts-ui](https://www.meteor.com/accounts)
+ accounts-password
+ [kadira:flow-router](https://atmospherejs.com/kadira/flow-router)
+ [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout)
+ [useraccounts:flow-routing](https://atmospherejs.com/useraccounts/flow-routing)
+ [useraccounts:materialize](https://atmospherejs.com/useraccounts/materialize)

###### Development Notes
This code still includes the [Autopublish and Insecure](http://practical.meteor.com/autopublish-and-insecure) modules, for prototyping Collections without explicitly subscribing. These should be removed for production deployments.

# License

#### MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
