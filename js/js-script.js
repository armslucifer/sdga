/* COOKIE */

$(document).ready(function(){

		// Cookie setting script wrapper
		var cookieScripts = function () {
			// Internal javascript called
			console.log("Running");
		
			// Loading external javascript file
			$.cookiesDirective.loadScript({
				uri:'external.js',
				appendTo: 'eantics'
			});
		}
		
		$.cookiesDirective({
			privacyPolicyUri: 'https://www.sdga.fr/rgpd/',
			explicitConsent: false,
			position : 'bottom',
			scriptWrapper: cookieScripts, 
			backgroundColor: '#000',
			duration: 0,
			linkColor: '#b7b7b7',
			fontSize: 'inherit',
			fontFamily: 'inherit',
			fontColor: '#fff',
			backgroundOpacity: '99',
			// customDialogSelector: '#cookie-dialog', // See dialog.html
		});
	});
	
	

/* PROGRESS BAR */

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
} 


/* INPUT */

(function() {
if (!String.prototype.trim) {
	(function() {
		
		var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		String.prototype.trim = function() {
			return this.replace(rtrim, '');
		};
	})();
}

[].slice.call( document.querySelectorAll( 'textarea.input__field' ) ).forEach( function( textareaEl ) {
	
	if( textareaEl.value.trim() !== '' ) {
		classie.add( textareaEl.parentNode, 'input--filled' );
	}

	textareaEl.addEventListener( 'focus', onInputFocus );
	textareaEl.addEventListener( 'blur', onInputBlur );
} );

function onInputFocus( ev ) {
	classie.add( ev.target.parentNode, 'input--filled' );
}

function onInputBlur( ev ) {
	if( ev.target.value.trim() === '' ) {
		classie.remove( ev.target.parentNode, 'input--filled' );
	}
}
})();

(function() {
if (!String.prototype.trim) {
	(function() {
		
		var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		String.prototype.trim = function() {
			return this.replace(rtrim, '');
		};
	})();
}

[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
	
	if( inputEl.value.trim() !== '' ) {
		classie.add( inputEl.parentNode, 'input--filled' );
	}

	inputEl.addEventListener( 'focus', onInputFocus );
	inputEl.addEventListener( 'blur', onInputBlur );
} );

function onInputFocus( ev ) {
	classie.add( ev.target.parentNode, 'input--filled' );
}

function onInputBlur( ev ) {
	if( ev.target.value.trim() === '' ) {
		classie.remove( ev.target.parentNode, 'input--filled' );
	}
}
})();


/* CHANGE COLOR */

$(window).scroll(function(){
if($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
	$('body').css('color','var(--bg)')
    $('body').css('background-color','var(--noir)')
	$('.progress-container').css('background','var(--gris-fonce)')
    $('.progress-bar').css('background','var(--bg)')
	$('.footer strong').css('color','var(--gris-fonce)')
	$('.menu_part').css('background','var(--blanc)')
	$('.action--formulaire').css('color','var(--bg)')
	$('.page a').css('color','var(--bg)')
	$('.menu--trigger').css('background','var(--noir)')
	$('.navigation a').css('color','var(--bg)')
	$('.logo svg').css('fill','var(--bg)')
	$('.menu .logo svg').css('fill','var(--bg)')
	$('.menu a').css('color','var(--bg)')
	$('section a').css('color','var(--bg)')
	$('.navigation span').css('background-image','linear-gradient(var(--bg),var(--bg))')
	$('textarea').css('color','var(--bg)')
	$('.input--filled .graphic--nao').css('stroke','var(--bg)')
	$('.btn').css('color','var(--bg)')
	$('.formulaire .logo svg').css('fill','var(--noir)')
	$('.formulaire').css('color','var(--noir)')
	$('.formulaire .btn').css('color','var(--noir)')
}else{
	$('body').css('color','var(--noir)')
    $('body').css('background-color','#f4f4f4')
	$('.logo svg').css('fill','var(--noir)')
	$('.menu .logo svg').css('fill','var(--blanc)')
	$('.menu a').css('color','var(--blanc)')
	$('section a').css('color','var(--noir)')
	$('.progress-container').css('background','#dbdbdb')
    $('.progress-bar').css('background','var(--noir)')
	$('.footer strong').css('color','var(--bg)')
	$('.menu_part').css('background','var(--noir)')
	$('.action--formulaire').css('color','var(--noir)')
	$('.menu--trigger').css('background','var(--bg)')
	$('.navigation a').css('color','var(--noir)')
	$('page a').css('color','var(--noir)')
	$('.navigation span').css('background-image','linear-gradient(var(--noir),var(--noir))')
	$('textarea').css('color','var(--noir)')
	$('.input--filled .graphic--nao').css('stroke','var(--noir)')
	$('.btn').css('color','var(--noir)')
	$('.formulaire .logo svg').css('fill','var(--noir)')
	$('.formulaire').css('color','var(--noir)')
	$('.formulaire .btn').css('color','var(--noir)')
}
})


/* CAROUSSEL */

$('.caroussel').slick({centerMode: false, centerPadding: 0, speed: 500, slidesToShow: 3, slidesToScroll: 2, focusOnSelect:true, arrows:false, infinite:false,
  responsive: [
    {
      breakpoint: 1190,
      settings: {
       slidesToShow: 2
      }
    },
	{
      breakpoint: 500,
      settings: {
       slidesToShow: 1
      }
    }
  ]
  });