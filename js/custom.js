// PRELOADER
$(window).on('load', function () {
    $('.preloader').fadeOut(1000);
});

$(document).ready(function () {

    /* -----------------------------------------------
    NAVBAR MOBILE CLOSE
    ----------------------------------------------- */
    $('.navbar-collapse a').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });

    /* -----------------------------------------------
    NAVBAR SCROLL EFFECT
    ----------------------------------------------- */
    $(window).on('scroll', function () {
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
       FONCTION GÉNÉRIQUE ISOTOPE (🔥 AMÉLIORATION MAJEURE)
    ================================================= */
    function initIsotope(grid, filter) {
        var $grid = $(grid);

        if (!$grid.length) return;

        $grid.imagesLoaded(function () {
            $grid.isotope({
                itemSelector: '.iso-box',
                layoutMode: 'fitRows'
            });
        });

        $(filter + ' a').on('click', function (e) {
            e.preventDefault();

            var value = $(this).attr('data-filter');

            $grid.isotope({ filter: value });

            $(filter + ' a').removeClass('selected');
            $(this).addClass('selected');
        });
    }

    $(function () {
        initIsotope('#grid-activites', '#filter-activites');
        initIsotope('#grid-portfolio', '#filter-portfolio');
        initIsotope('#grid-gufis', '#filter-gufis');
    });

	$(document).ready(function () {
		initIsotope('#grid-activites', '#filter-activites');
		initIsotope('#grid-portfolio', '#filter-portfolio');
		initIsotope('#grid-gufis', '#filter-gufis');
	});

    /* =================================================
       INITIALISATION DES 3 BLOCS
    ================================================= */
    initIsotope('#grid-gufis', '#filter-gufis');
    initIsotope('#grid-activites', '#filter-activites');
    initIsotope('#grid-portfolio', '#filter-portfolio');


    /* -----------------------------------------------
    SMOOTH SCROLL
    ----------------------------------------------- */
    $('.smoothScroll').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    /* -----------------------------------------------
    WOW ANIMATION
    ----------------------------------------------- */
    new WOW().init();

});