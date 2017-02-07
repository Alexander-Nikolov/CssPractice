var sideNav = document.getElementById('sidemenu');
var phonemenuImg = document.getElementById('phonemenuImg')
var sidemenulinks = document.getElementsByClassName('sidemenulink')

var isMenuSlided = false;

function slideRight() {
    sideNav.style.animation = 'slideRight 1s forwards';
    isMenuSlided = true;
    phonemenuImg.src = '../../Images/returnmenu.png';
    for (var index = 0; index < sidemenulinks.length; index++) {
        sidemenulinks[index].style.animation = 'turnOpacityUp 2s ease 0.5s forwards';
    }
}

function slideLeft() {
    sideNav.style.animation = 'slideLeft 1s forwards';
    isMenuSlided = false;
    phonemenuImg.src = '../../Images/menu.png';
    for (var index = 0; index < sidemenulinks.length; index++) {
        sidemenulinks[index].style.animation = 'turnOpacityDown 0.1s ease forwards';
    }
}

var slideShow = document.getElementById('slideshow');
var slideShowHeader = document.getElementById('slideShowHeader');
var slideShowParagraph = document.getElementById('slideShowParagraph');
var slideShowButton1 = document.getElementById('slideShowButton1');
var slideShowButton2 = document.getElementById('slideShowButton2');

var slideShowInfo = [
    ['../../Images/mordhaupic.png', 'Mordhau 2017', 'Mordhau is a melee slasher game that is going to come out in 2017'],
    ['../../Images/masseffect.jpg', 'Mass Effect Andromeda', 'The new part of Mass Effect'],
    ['../../Images/reddead.jpg', 'Red Dead Redemption 2', 'The sequal to the first part']
]

var slides = document.getElementsByClassName('slidesImg');
var index = 0;

function changeSlide() {
    slideShow.style['background-image'] = 'url(' + slideShowInfo[index][0] + ')';
    slideShowHeader.innerHTML = slideShowInfo[index][1];
    slideShowParagraph.innerHTML = slideShowInfo[index][2]
    for (var img = 0; img < slides.length; img++) {
        slides[img].style.bottom = '-20px';
    }
    slides[index].style.bottom = '0px';
    index++
    if (index > slideShowInfo.length - 1) {
        index = 0;
    }
}


changeSlide()
var interval = setInterval(changeSlide, 10000);



var labels = document.getElementsByClassName('formlabel')


function focusInput(n) {
    labels[parseInt(n)].style.animation = 'marginUp 1s forwards';
}

function blurInput(n) {
    labels[parseInt(n)].style.animation = 'marginDown 1s forwards';
}


var fav = false;

function favorite(n) {

    var heart = document.getElementById('heart' + n);
    var likes = document.getElementById('likes' + n);

    if (fav) {
        heart.src = '../../Images/heart.png';
        likes.innerHTML = parseInt(images[n][2]);
    } else {
        heart.src = '../../Images/heartFav.png';
        likes.innerHTML = parseInt(images[n][2]) + 1;
    }
    fav = !fav;

}


var searchInput = document.getElementById('searchInput');
var searchIcon = document.getElementById('searchIcon');
var inputForSearchPC = document.getElementById('inputForSearchPC');

function tabletPCForm() {
    if (searchIcon.style.display == 'none') {
        searchIcon.style.display = 'block';
        searchInput.style.display = 'none';
    } else {
        searchIcon.style.display = 'none';
        searchInput.style.display = 'block';
        searchInput.style.animation = 'turnOpacityUp 1s forwards';
        setTimeout(function () {
            inputForSearchPC.focus();
        }, 1000);

    }

}

var testimonions = [
    ['gamer1.jpg', 'Frank F.'],
    ['gamer2.jpg', 'D D'],
    ['gamer3.jpg', 'Old Guy']
]
var testimonionsImg = document.getElementById('testimonionsImg');
var gamerName = document.getElementById('gamerName');
var testimonion = 0;
function changeTestimonions() {
    if (testimonion > 2) {
        testimonion = 0;
    }

    if (testimonion < 0) {
        testimonion = 2;
    }

    testimonionsImg.src = '../../Images/' + testimonions[testimonion][0];
    gamerName.innerHTML = testimonions[testimonion][1]
}

changeTestimonions();