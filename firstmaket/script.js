$(document).ready( function f() {
    let $element = $('.arrow');
    $($element).on("click", function () {
        //let elem = event.currentTarget;
        $(this).toggleClass('arrow-up');
        $(this).parent('.list-title-container').siblings('.text-column').toggle('hidden');
});
})