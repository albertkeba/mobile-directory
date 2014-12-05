/*jslint browser: true, devel: true, nomen: true, white: true*/
/*global App, $, Mustache, Lungo, View*/

App.Views.Card = (function () {
	'use strict';

	function ViewCard( options ){
		View.call(this, options);
	
		this.events		= {
			click: [{
				element	: '#btn-update',
				attach	: 'gotoUpdateContact'
			}]
		};
	}

	ViewCard.prototype = Object.create( View.prototype );
	
	ViewCard.prototype.render = function(){
		if ( this.$el )
		{
			this.$el.empty();
		}
		
		View.prototype.render.call(this);
	};
	
	ViewCard.prototype.gotoUpdateContact = function(e){
		var $form= $('#contact-form').find('form'),
			model= e.data.model;
		
		if ( $form.length === 0 )
		{
			new App.Views.Form({
				el: '#contact-form',
				template: 'form'
			}).render();
			
			$form = $('#contact-form').find('form');
		}
		
		$form.find('#contactid').val( model.id );
		$form.find('#firstname').val( model.firstname );
		$form.find('#lastname').val( model.lastname );
		$form.find('#title').val( model.title );
		$form.find('#department').val( model.department );
		$form.find('#officePhone').val( model.phone );
		$form.find('#email').val( model.email );
		
		Lungo.Router.article('main','contact-form');
	};

	return ViewCard;
}());