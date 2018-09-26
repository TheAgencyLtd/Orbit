/* Sticky Footer */
//
// (function($) {
//
//   var $footer = $('#footer-container'); // only search once
//
//   $(window).bind('load resize orientationChange', function () {
//
//     var pos = $footer.position(),
//         height = ($(window).height() - pos.top) - ($footer.height() -1);
//
//     if (height > 0) {
//        $footer.css('margin-top', height);
//     }
//
//   });
//
// })(jQuery);

// var $footer = document.getElementById('footer-container'),
//     temPos = $footer.offsetTop,
//     windowHeight = window.innerHeight;
//
// function calculate() {
//     var topPos = $footer.offsetTop;
//     if( window.innerHeight == windowHeight ){
//         topPos = temPos;
//     }
//
//     var height = ( window.innerHeight - topPos ) - ( $footer.offsetHeight - 1 );
// console.log(topPos);
//     if ( height > 0 ) {
//         $footer.style.marginTop = height + 'px';
//     }
// }
//
// addEvent( window, 'load', calculate() );
// addEvent( window, 'resize', function(){
//     calculate();
//     //console.log($footer.offsetTop);
// });

//window.onresize = calculate();
//$body.addEventListener( 'resize', calculate() );
