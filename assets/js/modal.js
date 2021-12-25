$('[open-modal]').on('click', function() {
    var id = $(this).attr('open-modal');
    $('.modal#' + id).addClass('active');
});

$('[close-modal]').on('click', function() {
    $(this).parents('.modal').removeClass('active');
});

$('.modal').on('click', function(e) {
    if (e.target !== this) { return };
    $(this).removeClass('active');

});