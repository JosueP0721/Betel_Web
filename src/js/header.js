const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
    })
}

const showSubMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-submenu');
        toggle.classList.toggle('show-add');
    })
}

showMenu('nav-toggle', 'nav-menu');
showSubMenu('nav-subtoggle-1', 'nav-submenu-1');
showSubMenu('nav-subtoggle-2', 'nav-submenu-2');
