<script>//<![CDATA[
/*

  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick

 */
$('#post-slider').slick({
  dots: false,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '20px',
  speed: 1200,
  cssEase: 'linear',
  autoplay: true,
    autoplaySpeed: 3000,
  prevArrow: '<button type="button" class="slick-nav slick-prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-nav slick-next"><i class="fa fa-angle-right"></i></button>',
  arrows:true,
  responsive: [
	{
      breakpoint: 1980,
      settings: {
        slidesToShow: 1,
  slidesToScroll: 1
      }
    },
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 1,
  slidesToScroll: 1
      }
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 1,
  slidesToScroll: 1
      }
    },
	{
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
  slidesToScroll: 1
      }
    },	
	{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
  slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
$("#post-slider").addClass("post-slider-start");
//]]>
</script>