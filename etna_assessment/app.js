// $(document).ready(function(){
//     $(".fa-bars").click(function() {
//       $(".burger-menu").addClass("active");
//       console.log('clicked')
//     });
//   });
// $(document).ready(function(){
//     $(".fa-bars").click(function(){
//         console.log('clicked')
//       $(".burger-menu").addClass('active');
//     });
//   });


//   const navClickActive = () => {
//       $('.fa-bars').addClass('active')
//       $(".burger-menu").addClass("active")

//       console.log('clicked')

//   }

//   $('.fa-bars').click(navClickActive)

function onMenuClick(e) {
e.preventDefault()
    $('.fa-bars').removeClass('active')
    $('.burger-menu').toggleClass('active')
}
$('.fa-bars').click(onMenuClick)

