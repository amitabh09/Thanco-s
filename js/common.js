const navbarArray = [
    { 'path': './index.html', 'title': 'Home' },
    { 'path': './aboutus.html', 'title': 'About Us' },
    { 'path': './franchise.html', 'title': 'Franchisee' },
    { 'path': './flavour.html', 'title': "Flavours" },
    { 'path': './gallery.html', 'title': 'Gallery' },
    { 'path': "./stores.html", 'title': 'Stores' },
    { 'path': "./findus.html", 'title': 'Find Us' },
    { 'path': './orderOnline.html', 'title': 'Order Online' }
];

document.querySelector('.nav-cont').innerHTML = displayNavbar(navbarArray);

function displayNavbar(navbarArray) {
    let str = '';
    for (obj of navbarArray) {
        str += `<div class="nav-child"><a href=${obj.path}>${obj.title}</a></div>`;
    }
    return str;
}

/*************************************************************************************************************/

const parent6Array = ["./images/facebook.png","./images/twitter.png","./images/google.png"];

document.querySelector('.parent6').innerHTML = displayParent2(parent6Array);

function displayParent2(parent6Array) {
    let str = '<div>Powered</div><div>';
    for (obj of parent6Array) {
        str += `<div><img src=${obj} alt=""></div>`;
    }
    str += '</div>';
    return str;
}