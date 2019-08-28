$(document).ready(function () {

    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("menu-open");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }

            if ($('.dropdown-btn').hasClass('menu-open')) {
                $(this).children().toggleClass('rotate');
            } else {
                $('.dropdown-btn').children().removeClass('rotate');
            }
        });
    }
});

$(document).ready(function () {

    $('.toggle-menu').click(function () {
        $('body').addClass('push-sidenav-right');
        $('.mobile-sidebar').css({
            transform: 'translateX(0)',
            transition: 'all .3s ease'
        });

        $('.overlay').css('display', 'block');

    });

    $('.overlay').on('touchstart mousedown', function (e) {
        e.preventDefault();
        $('body').removeClass('push-sidenav-right');
        $('.mobile-sidebar').css({
            transform: 'translateX(-110%)',
            transition: 'all .3s ease'
        });
        $(this).css('display', 'none');
    });

    $('.get-to-know-btn a').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('#vision').offset().top - 100
        }, 500);
    });

    /*---- Scroll Top Btn ----*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top-btn').fadeIn();
        } else {
            $('.scroll-top-btn').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scroll-top-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    /*---- Scroll Top Btn End ----*/

});

















