    $(document).ready(function () {
            $('.logSlider').slick({
                infinite: true,
                autoplay: 11000,
                dots: false,
                arrows: false,
                fade:true
            });
        });
 





        $('.ml9 .letters').html(function (index, html) {
            return html.replace(/\S/g, '<span class="letter">$&</span>');
        });

 
        anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 1600,
    delay: (el, i) => 10 * i
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1600,
    easing: "easeOutExpo",
    delay: 0
  });