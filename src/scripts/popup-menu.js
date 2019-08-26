let popupMenu = (function(options) {
  let button = document.querySelector(options.button);
  let menu = document.querySelector(options.menu);
  let body = document.querySelector('body');
  let flag = false;

  let _toggleMenu = function(e) {
    button.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("locked");

    flag ? flag = false : flag = true;
  };

  let addListeners = function() {
    button.addEventListener("click", _toggleMenu);

    menu.addEventListener("click", function(e) {
      if (e.target.classList.contains("main-menu__link")) {
        _toggleMenu(e);
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.keyCode === 27 && flag) {
        _toggleMenu(e);
      }
    });
  };

  return {
    openMenu: addListeners
  };
})({
  button: "#menu-icon",
  menu: "#popup-menu"
});

popupMenu.openMenu();
