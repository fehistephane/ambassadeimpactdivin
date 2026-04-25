// PRELOADER
$(window).on('load', function () {
    $('.preloader').fadeOut(1000);
});

$(document).ready(function () {

    /* -----------------------------------------------
    NAVBAR MOBILE CLOSE
    ----------------------------------------------- */
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    /* -----------------------------------------------
    NAVBAR SCROLL EFFECT
    ----------------------------------------------- */
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /* -----------------------------------------------
    FLEXSLIDER
    ----------------------------------------------- */
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false
    });

    /* =================================================
       ISOTOPE 1 : GROUPES & UFIS
    ================================================= */
    var $gufis = $('#grid-gufis');

    if ($gufis.length > 0) {

        $gufis.imagesLoaded(function () {

            $gufis.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.iso-box'
            });

        });

        $('#filter-gufis a').on('click', function (e) {
            e.preventDefault();

            var filterValue = $(this).attr('data-filter');

            $gufis.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('#filter-gufis a').removeClass('selected');
            $(this).addClass('selected');
        });
    }

    /* =================================================
		ISOTOPE 2 : PORTFOLIO (CORRIGÉ)
		================================================= */
		var $portfolio = $('#grid-portfolio');

		if ($portfolio.length > 0) {

			$portfolio.imagesLoaded(function () {

				$portfolio.isotope({
					layoutMode: 'fitRows',
					itemSelector: '.iso-box'
				});

			});

			$('#filter-portfolio a').on('click', function (e) {
				e.preventDefault(); // 🔥 empêche le scroll vers le haut

				var filterValue = $(this).attr('data-filter');

				$portfolio.isotope({
					filter: filterValue,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});

				$('#filter-portfolio a').removeClass('selected');
				$(this).addClass('selected');
			});
		}

		$('.smoothScroll').click(function(e) {
			e.preventDefault();

			var target = $(this.hash);
			var offset = 80; // hauteur navbar

			$('html, body').animate({
				scrollTop: target.offset().top - offset
			}, 800);
		});

    /* -----------------------------------------------
    WOW ANIMATION
    ----------------------------------------------- */
    new WOW().init();

});