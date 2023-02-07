$(document).ready(function () {
    const table_event = $('.table-event');
    const event_table = $('.show_event_table');
    const close_event_table = $('.show_event_table .bg_blur');
    const close_video = $('.show-video .bg_blur');
    const show_video = $('.show-video');
    const btn_show_video = $('.btn-show-video');

    btn_show_video.click(function () {
        $(this).parent().children('.show-video').show();
    })

    close_video.click(function () {
        show_video.hide();
    })

    table_event.click(function () {
        var id = '#' + $(this).data('id');
        var height = $(this).data('height');
        $('.form_event').hide();

        $(id).show().css('height', height);
        show_event_table();

    })

    close_event_table.click(function () {
        show_event_table();
    })
    const show_event_table = function () {

        if (event_table.is(":visible")) {
            event_table.hide();
        }
        else {
            event_table.show();
        }
    }
});