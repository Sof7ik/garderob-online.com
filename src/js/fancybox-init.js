$(document).ready(function() {
    document.querySelectorAll('a.fancybox-image-wrapper').forEach(item => item.addEventListener('click', e => e.preventDefault()))

    /* Apply fancybox to multiple items */
    $("a.review-image-wrapper").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600,
        'speedOut'		:	200,
        'overlayShow'	:	false
    });

});