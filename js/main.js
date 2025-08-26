(function($) {
    // Kliknięcie hamburgera
    $('.toggle').click(function() {
        $(this).toggleClass("is-active");   // animacja hamburgera
        $('.nav').toggleClass("active");    // pokaz/ukryj menu
    });

    // Kliknięcie w linki w menu
    $('.nav a').click(function(e) {
        const isDropdownTrigger = $(this).closest('.item-dropdown').length && $(this).attr('href') === '#';

        if (!isDropdownTrigger) {
            $('.toggle').removeClass("is-active");
            $('.nav').removeClass("active");
        }
    });

    // Obsługa dropdown w mobile
    $('.item-dropdown > a').click(function(e) {
        if ($(window).width() <= 768) {
            e.preventDefault();
            $(this).parent().toggleClass('active');
        }
    });

    // Reset menu przy powrocie na desktop
    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $('.toggle').removeClass("is-active");
            $('.nav').removeClass("active");
            $('.item-dropdown').removeClass("active");
        }
    });
})(jQuery);
