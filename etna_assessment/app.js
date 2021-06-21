
function onMenuClick(e) {
e.preventDefault()
    $('.fa-bars').removeClass('active')
    $('.burger-menu').toggleClass('active')
}
$('.fa-bars').click(onMenuClick)

