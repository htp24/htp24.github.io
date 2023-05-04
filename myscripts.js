document.addEventListener("DOMContentLoaded", () => {
    function toggleDropdown() {
        document.getElementById("blog-menu").classList.toggle("show");
    }

    document.getElementById("blog-button").onclick = toggleDropdown;

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.my-dropbtn')) {
    var dropdowns = document.getElementsByClassName("my-dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    }
}
  });
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
/*
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.my-dropbtn')) {
    var dropdowns = document.getElementsByClassName("my-dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    }
}
*/