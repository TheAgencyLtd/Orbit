//jQuery(document).foundation();

// var addEvent = function(object, type, callback) {
//     if (object == null || typeof(object) == 'undefined') return;
//     if (object.addEventListener) {
//         object.addEventListener(type, callback, false);
//     } else if (object.attachEvent) {
//         object.attachEvent("on" + type, callback);
//     } else {
//         object["on"+type] = callback;
//     }
// };


document.documentElement.classList.remove("no-webp");

function addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

function toggleClass(el, className) {
    if( hasClass(el, className) ) {
        removeClass(el, className);
    }else {
        addClass(el, className);
    }
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
