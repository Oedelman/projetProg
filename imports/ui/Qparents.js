import  './Qparents.html';


Template.Qparents.helpers({
	emails: [
		{},
	],
});

//script pour passer à la prochaine question
Template.Qparents.events({
'click .next' (event) {
	
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
	});
});
}
});

//script pour retourner à la question précédente
Template.Qparents.events({
	'click .previous' (event) {
		var current_fs, next_fs, previous_fs; //fieldsets
		var left, opacity, scale; //fieldset properties which we will animate
		var animating; //flag to prevent quick multi-click glitches

		$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
	});
	});
	}
});

Template.Qparents.events({
    'submit form': function(event, template) {
        event.preventDefault();
        Session.set('page', 'home');
        var usernameVar = event.target.nom.value+" "+event.target.prenom.value;
        var emailVar = event.target.email.value;
        var passwordVar = event.target.pass.value;
        var nameVar = event.target.nom.value;
        var firstNameVar = event.target.prenom.value;
        var codePostVar = event.target.codePostal.value;
        var numTelVar = event.target.phoneNumber.value;
        var addressVar = event.target.address.value;
        var enfantVar = template.find('input:radio[name=enfants]:checked');

        var cuisineVar = template.find('input:checkbox[name=cuisiner]:checked');
        var conduireVar = template.find('input:checkbox[name=conduire]:checked');
        var voitureVar = template.find('input:checkbox[name=voiture]:checked');
        var premierSecVar = template.find('input:checkbox[name=premierSec]:checked');
        var aideDevoirVar = template.find('input:checkbox[name=aideDevoir]:checked');
        var activVar = template.find('input:checkbox[name=activ]:checked');

        var frVar = template.find('input:checkbox[name=fr]:checked');
        var engVar = template.find('input:checkbox[name=eng]:checked');
        var itVar = template.find('input:checkbox[name=it]:checked');
        var gerVar = template.find('input:checkbox[name=ger]:checked');
        var spVar = template.find('input:checkbox[name=sp]:checked');
        var porVar = template.find('input:checkbox[name=por]:checked');
        var rusVar = template.find('input:checkbox[name=rus]:checked');

        Accounts.createUser({
            username: usernameVar,
            email: emailVar,
            password: passwordVar,
            profile: {
            	first_name: firstNameVar,
            	last_name: nameVar,
            	postalCode: codePostVar,
            	phone: numTelVar,
            	address: addressVar,
            	enfants: $(enfantVar).val(),

            	cuisine: $(cuisineVar).val(),
            	conduire: $(conduireVar).val(),
            	voiture: $(voitureVar).val(),
            	premierSec: $(premierSecVar).val(),
            	aideDevoir: $(aideDevoirVar).val(),
            	activ: $(activVar).val(),

            	francais: $(frVar).val(),
            	anglais: $(engVar).val(),
            	italien: $(itVar).val(),
            	allemand: $(gerVar).val(),
            	espagnol: $(spVar).val(),
            	portugais: $(porVar).val(),
            	russe: $(rusVar).val()
			},
        });
    }
});

