    $(document).ready(function () {
            $('.logSlider').slick({
                infinite: true,
                autoplay: 5000,
                dots: false,
                arrows: false,
                fade:true
            });
        });
    $(document).ready(function () {
            $('.signUpSlider').slick({
                infinite: true,
                autoplay: 5000,
                dots: false,
                arrows: false,
                fade:false
            });
        });




        $('.ml14 .letters').html(function (index, html) {
            return html.replace(/\S/g, '<span class="letter">$&</span>');
        });


        anime.timeline({loop: true})
            .add({
                targets: '.ml14 .line',
                scaleX: [0, 1],
                opacity: [0.5, 1],
                easing: "easeInOutExpo",
                duration: 900
            }).add({
                targets: '.ml14 .letter',
                opacity: [0, 1],
                translateX: [40, 0],
                translateZ: 0,
                scaleX: [0.3, 1],
                easing: "easeOutExpo",
                duration: 2100,
                offset: '-=600',
                // delay: (el, i) => 150 + 25 * i
            }).add({
                targets: '.ml14',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 30
            });

 