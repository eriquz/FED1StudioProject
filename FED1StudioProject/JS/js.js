function toggleNav() {
    let navBar = document.getElementById('navBar');
    navBar.classList.toggle('expanded');

    //Hamburger menu btn
    let btnHamburger = document.getElementById('menu-btn');
    if (navBar.classList.contains('expanded')) {
        btnHamburger.innerHTML = "&times;";
    } else {
        btnHamburger.innerHTML = "&#9776;";
    }
}

var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footerp');
el.innerHTML = 'All Rights Reserved ' + year;


