$(document).ready(function() {
    $(".testimonial .indicators li").click(function() {
      var i = $(this).index();
      $(".testimonial .tabs li").removeClass('active').eq(i).addClass('active');
      $(".testimonial .carousel-inner .carousel-item").removeClass('active').eq(i).addClass('active');
      $(".testimonial .indicators li").removeClass('active').eq(i).addClass('active');
    });

    $(".testimonial .tabs li").click(function() {
      var i = $(this).index();
      $(".testimonial .indicators li").removeClass('active').eq(i).addClass('active');
      $(".testimonial .carousel-inner .carousel-item").removeClass('active').eq(i).addClass('active');
      $(".testimonial .tabs li").removeClass('active').eq(i).addClass('active');
    });
  });