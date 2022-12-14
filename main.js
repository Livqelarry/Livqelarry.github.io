// open portofolio content
$(".menu-portofolio").click(() => {
  $(".tab-section .btn-menu").removeClass("active");
  $(".tab-content").removeClass("active");

  $(".tab-section .menu-portofolio").addClass("active");
  $(".tab-content.portofolio").addClass("active");
});
// open about content
$(".menu-about").click(() => {
  $(".tab-section .btn-menu").removeClass("active");
  $(".tab-content").removeClass("active");

  $(".tab-section .menu-about").addClass("active");
  $(".tab-content.about").addClass("active");
});
// open blogs content
$(".menu-blogs").click(() => {
  $(".tab-section .btn-menu").removeClass("active");
  $(".tab-content").removeClass("active");

  $(".tab-section .menu-blogs").addClass("active");
  $(".tab-content.blogs").addClass("active");
});
$(".menu-trigger-mobile").click(() => {
  $("nav .menus").toggleClass("active");
});
$(".menu .btn-menu").click(() => {
  $("nav .menus").removeClass("active");
});

$(document).ready(function () {
  setTimeout(() => {
    $(".content").show();
    $(".loading").addClass("loaded");
  }, 1000);
});
