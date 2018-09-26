var $mainMenu = document.getElementById('menu-main'),
    $hamburger = document.getElementById('hamburger'),
    $header = document.getElementById('masthead'),
    $up = document.getElementById('js-top');

    addEvent($hamburger, 'click', function(){
        console.log($hamburger);
        toggleClass($hamburger, 'is-open');
        toggleClass($hamburger, 'is-closed');
        toggleClass($mainMenu, 'is-shown');
    });

    addEvent(window, 'scroll', function(){
        //var top = document.documentElement.scrollTop;
        //console.log(window.scrollY);
        var top = window.scrollY;
        if(top > 100) addClass($up, 'shown');
        else removeClass($up, 'shown');
    });

    addEvent($up, 'click', function(){
        var goTop =  setInterval(
                        function() {
                            if( document.body.scrollTop == 0 ) {
                                document.documentElement.scrollTop -= 80;
                                if( document.documentElement.scrollTop <= 0 ) {
                                    clearInterval(goTop);
                                }
                            }
                            if( document.documentElement.scrollTop == 0 ) {
                                document.body.scrollTop -= 80;
                                if( document.body.scrollTop <= 0 ) {
                                    clearInterval(goTop);
                                }
                            }

                        },
                        10
                    );

    });

/**
 * Cookie handle section
 */
/*
var $acceptBtn = document.getElementById('js-accept'),
    $refuseBtn = document.getElementById('js-refuse'),
    $banner = document.getElementById('js-banner');

    if( $acceptBtn ) {
        addEvent($acceptBtn, 'click', function(e){
            e.preventDefault();
            setCookie('cookie_accept','true', 365);
            setCookie('fullCSS', 'true', 365);
        });

        addEvent($refuseBtn, 'click', function(e){
            e.preventDefault();
            setCookie('cookie_accept', 'false', 365);
        });
    }


var setCookie = function(name, value, expire) {
    var expires = new Date(+new Date + (expire * 24 * 60 * 60 * 1000)).toUTCString();
    document.cookie = name+'='+value+'; expires=' + expires;
    $banner.style.display = "none";
    location.reload();
};
*/
/**
 * Hide error on form
 */
var $validForm = document.getElementsByClassName('invalid');
if( $validForm.length > 0 ) { //if we can find invalid
    var $screenReader = document.querySelector('.screen-reader-response[role=alert]');
    $screenReader.style.display = 'none';
}
