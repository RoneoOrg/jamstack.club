// sidebar toggler
var sidebar = document.querySelector(".sidebar");
if (sidebar) {
  var sidebarToggler = document.querySelector(".sidebar-toggler");
  var sidebarOverlay = document.querySelector(".sidebar-overlay");
  var sidebarTogglerIcon = document.querySelector(".sidebar-toggle-icon");
  var body = document.querySelector("body");
  sidebarToggler.addEventListener("click", function () {
    sidebarOverlay.classList.toggle("show");
    sidebar.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
  });
  sidebarOverlay.addEventListener("click", function () {
    this.classList.remove("show");
    sidebarTogglerIcon.classList.remove("active");
    sidebar.classList.remove("show");
    body.classList.remove("overflow-hidden");
  });
}
