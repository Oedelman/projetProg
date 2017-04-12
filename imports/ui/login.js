import './login.html';

if(Meteor.isClient){


    Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            var usernameVar = event.target.registerUsername.value;
            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            Accounts.createUser({
                username: usernameVar,
                email: emailVar,
                password: passwordVar
            });
        }
    });

    Template.login.events({
        'submit form': function(event){
            event.preventDefault();
            var usernameVar = event.target.loginUsername.value;
            var passwordVar = event.target.loginPassword.value;
            Meteor.loginWithPassword(usernameVar, passwordVar);
        }
    });

    Template.dashboard.events({
        'click .logout': function(event){
            event.preventDefault();
            Meteor.logout();
        }
    });

}