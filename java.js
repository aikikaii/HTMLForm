// const form = document.querySelector('form');
// form.style.backgroundColor = 'gray';


$('input').css('backgroundColor', 'lightyellow');
$('textarea').css('backgroundColor', 'lightyellow');

$('button').on('click', function(e) {

    if ($(':checked').length === 0) {
        e.preventDefault();
        alert('Please check over 13 box to continue');
    }
});

$('#clear').on('click', function(e) {
    const input = $('input');
    e.input = '';
});