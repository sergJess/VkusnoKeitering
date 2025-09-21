// navigation show submenu
export function showNavigationSubmenu() {
  const navigation = document.getElementById("navigation-id");
  const navigationLists = navigation.querySelectorAll(
    ".navigation-show__submenu"
  );
  for (let i = 0, length = navigationLists.length; i < length; i++) {
    navigationLists[i].onclick = () => {
      const navigationSubmenu = navigation.querySelectorAll(
        ".navigation__submenu"
      );
      const submenu = navigationLists[i].querySelector(".navigation__submenu");
      const isHaveActiveClass = submenu.classList.contains(
        "navigation__submenu_show"
      );
      for (let j = 0; j < navigationSubmenu.length; j++) {
        navigationSubmenu[j].classList.remove("navigation__submenu_show");
      }
      if (!isHaveActiveClass) submenu.classList.add("navigation__submenu_show");
    };
  }
}
