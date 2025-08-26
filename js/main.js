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

(function($){
  $(document).ready(function(){

    const swiper = new Swiper('.swiper', {
      slidesPerView: 3,        // 3 kolumny
      slidesPerGroup: 3,       // przewijanie o 3 zdjęcia
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grid: {
        rows: 2,                // 2 wiersze
        fill: 'row'             // wypełnianie po wierszach
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          grid: {
            rows: 2
          }
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          grid: {
            rows: 1
          }
        },
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          grid: {
            rows: 1
          }
        }
      }
    });

    // Lightbox
    const lightbox = new SimpleLightbox('.swiper-slide a', {
      captions: false,
      close: true
    });

  });
})(jQuery);





