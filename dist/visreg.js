function imageComparator() {
  sizeDiv = $('.slider-ic').val();
  $('.image--original').css('width',sizeDiv + '%');
  $('.cursor-ic').css('left',sizeDiv + '%');
}

$('.slider-ic').on('mousemove touchmove click', function(){
  imageComparator();
});
