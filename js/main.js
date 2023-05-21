let iconContainer = document.getElementsByClassName('iconContainer')[0];
let icon1 = document.getElementsByClassName('icon1')[0];
let icon2 = document.getElementsByClassName('icon2')[0];

onload = () => {
    iconContainer.appendChild(icon1);
    icon1.style.display = "block";
}

function displayNav() {

    let nav = document.getElementById('mobileNav');

    if (nav.style.display == 'none') {
        
        // Display navigation menu
        nav.style.display = 'block';
        icon1.style.display = "none";
        iconContainer.appendChild(icon2);

        // Display navigation icon
        icon2.style.display = "block";

    } else if (nav.style.display = 'block') {
        nav.style.display = 'none';
        icon1.style.display = "block";
        icon2.style.display = "none";
    }

}