/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function closenavFunction() {
    var x = document.getElementById("rcTopNav");
    if (x.className === "rcNav") {
        x.className += " responsive";
    } else {
        x.className = "rcNav";
    }
}
