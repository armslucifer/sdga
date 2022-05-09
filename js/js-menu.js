/* CLICK MENU */

$('.menu--trigger').on('click', function(){
	$('.menu--icon').addClass('menu-rot');
	$(this).removeClass('menu-rot');
	$('.menu--icon .menu_part:nth-of-type(1)').addClass('menu-part-1');
	$(this).removeClass('menu-part-1');
	$('.menu--icon .menu_part:nth-of-type(2)').addClass('menu-part-2');
	$(this).removeClass('menu-part-2');
	$('.menu--icon .menu_part:nth-of-type(3)').addClass('menu-part-3');
    $(this).removeClass('menu-part-3');
});

$('.action--close').on('click', function(){
	$('.menu--icon').removeClass('menu-rot');
	$(this).removeClass('menu-rot');
    $('.menu--icon .menu_part:nth-of-type(1)').removeClass('menu-part-1');
    $(this).removeClass('menu-part-1');
    $('.menu--icon .menu_part:nth-of-type(2)').removeClass('menu-part-2');
    $(this).removeClass('menu-part-2');
    $('.menu--icon .menu_part:nth-of-type(3)').removeClass('menu-part-3');
    $(this).removeClass('menu-part-3');
});

$('.logo').on('click', function(){
	$('.menu--icon').removeClass('menu-rot');
	$(this).removeClass('menu-rot');
    $('.menu--icon .menu_part:nth-of-type(1)').removeClass('menu-part-1');
    $(this).removeClass('menu-part-1');
    $('.menu--icon .menu_part:nth-of-type(2)').removeClass('menu-part-2');
    $(this).removeClass('menu-part-2');
    $('.menu--icon .menu_part:nth-of-type(3)').removeClass('menu-part-3');
    $(this).removeClass('menu-part-3');
});

$('.mainmenu__item').on('click', function(){
	$('.menu--icon').removeClass('menu-rot');
	$(this).removeClass('menu-rot');
    $('.menu--icon .menu_part:nth-of-type(1)').removeClass('menu-part-1');
    $(this).removeClass('menu-part-1');
    $('.menu--icon .menu_part:nth-of-type(2)').removeClass('menu-part-2');
    $(this).removeClass('menu-part-2');
    $('.menu--icon .menu_part:nth-of-type(3)').removeClass('menu-part-3');
    $(this).removeClass('menu-part-3');
});

$('.menu__item-inner').on('click', function(){
	$('.menu--icon').removeClass('menu-rot');
	$(this).removeClass('menu-rot');
    $('.menu--icon .menu_part:nth-of-type(1)').removeClass('menu-part-1');
    $(this).removeClass('menu-part-1');
    $('.menu--icon .menu_part:nth-of-type(2)').removeClass('menu-part-2');
    $(this).removeClass('menu-part-2');
    $('.menu--icon .menu_part:nth-of-type(3)').removeClass('menu-part-3');
    $(this).removeClass('menu-part-3');
});


{
    // Class Menu.
    class Menu {
        constructor(el) {
            this.DOM = {el: el};
            // Open and close ctls.
            this.DOM.openCtrl = this.DOM.el.querySelector('.action--menu');
            this.DOM.closeCtrl = this.DOM.el.querySelector('.action--close');
            this.DOM.closeCtrla = this.DOM.el.querySelector('.menu__item');
            this.DOM.openCtrl.addEventListener('click', () => this.open());
            this.DOM.closeCtrl.addEventListener('click', () => this.close());
             this.DOM.closeCtrla.addEventListener('click', () => this.close());


            // The menu items.
            this.DOM.items = Array.from(this.DOM.el.querySelectorAll('.menu__item'));
            // The total number of items.
            this.itemsTotal = this.DOM.items.length;

            // Custom elements that will be animated.
            this.DOM.mainLinks = this.DOM.el.querySelectorAll('.mainmenu > .mainmenu__link');
            this.DOM.sidemenuLinks = this.DOM.el.querySelectorAll('.sidemenu');
			this.DOM.logo = this.DOM.el.querySelectorAll('.menu__item-inner .logo');
        }
        // Open the menu.
        open() {
            this.toggle('open');
        }
        // Close the menu.
        close() {
            this.toggle('close');
        }
        toggle(action) {
            if ( this.isAnimating ) return;

            // Toggling the open state class.
            this.DOM.el.classList[action === 'open' ? 'add' : 'remove']('menu--open');
            // After all is animated..
            const animationEnd = (pos) => {
                if ( pos === this.itemsTotal-1 ) {
                    this.isAnimating = false;
                }
            };
            // Going through each menuÂ´s item.
            this.DOM.items.forEach((el, pos) => {
                // The inner wrapper.
                const innerEl = el.querySelector('.menu__item-inner');
                // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
                const config = {};
                const configInner = {};
                // Direction defined in the HTML data-direction.
                // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
                const direction = el.dataset.direction;
                // Using 101% instead of 100% to avoid rendering problems.
                // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
                if ( direction === 'bt' ) {
                    config.y = '101%';
                    configInner.y = '-101%';
                    configInner.x = '0%';
                }
                else if ( direction === 'tb' ) {
                    config.y = '-101%';
                    configInner.y = '101%';
                    configInner.x = '0%';
                }
                else if ( direction === 'lr' ) {
                    config.x = '-101%';
                    configInner.x = '101%';
                }
                else if ( direction === 'rl' ) {
                    config.x = '101%';
                    configInner.x = '-101%';
                }
                else {
                    config.x = '101%';
                    config.y = '101%';
                    configInner.x = '-101%';
                    configInner.y = '-101%';
                }
                
                if ( action === 'open' ) {
                    // Setting the initial values.
                    TweenMax.set(el, config);
                    TweenMax.set(innerEl, configInner);

                    // Animate.
                    TweenMax.to([el,innerEl], .9, {
                        ease: Quint.easeOut,
                        x: '0%',
                        y: '0%',
                        onComplete: () => animationEnd(pos)
                    });
                }
                else {
                    TweenMax.to(el, 0.6, {
                        ease: Quart.easeInOut,
                        x: config.x || 0,
                        y: config.y || 0
                    });
                    TweenMax.to(innerEl, 0.6, {
                        ease: Quart.easeInOut,
                        x: configInner.x || 0,
                        y: configInner.y || 0,
                        onComplete: () => animationEnd(pos)
                    });
                }
            });
			
            // Main links animation.
            TweenMax.staggerTo(this.DOM.mainLinks, action === 'open' ? 1 : 0.3, {
                ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
                startAt: action === 'open' ? {x: '50%', opacity: 0} : null,
                x: action === 'open' ? '0%' : '50%',
                opacity: action === 'open' ? 1 : 0
            }, action === 'open' ? 0.05 : -0.05);

            // Sidemenu links animation.
            TweenMax.staggerTo(this.DOM.sidemenuLinks, action === 'open' ? 1 : 0.5, {
                ease: action === 'open' ? Quint.easeInOut : Quart.easeInOut,
                startAt: action === 'open' ? {x: '100%', opacity: 0} : null,
                x: action === 'open' ? '0%' : '100%',
				opacity: action === 'open' ? 1 : 0
            }, action === 'open' ? 0.05 : -0.05);
			
			 // Logo animation.
            TweenMax.staggerTo(this.DOM.logo, action === 'open' ? 0.3 : -0.05, {
                ease: action === 'open' ? Quint.easeInOut : Quart.easeInOut,
                startAt: action === 'open' ? {y: '-200%', opacity:0} : null,
                y: action === 'open' ? '0%' : '-200%',
				opacity: action === 'open' ? 1 : 0
            }, action === 'open' ? 0.05 : -0.05);

        }
    }
	// Initialize the Menu.
    const menu = new Menu(document.querySelector('nav.menu'));

}
