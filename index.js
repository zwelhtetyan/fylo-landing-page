// header navbar
const header = document.querySelector('.header');
//scroll icon
const scrollDown = document.querySelector('.scroll-down');
const scrollUp = document.querySelector('.scroll-up');

const breakPoint = window.innerHeight;
let userScroll;

window.addEventListener('scroll', function () {
    userScroll = this.scrollY;
    if (userScroll > breakPoint) {
        header.style.backgroundColor = 'hsl(218, 28%, 13%)';
        header.style.setProperty(
            'box-shadow',
            'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
        );
        scrollDown.style.display = 'none';
        scrollUp.style.display = 'flex';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = `0`;
        header.style.setProperty('box-shadow', 'none');
        scrollDown.style.display = 'flex';
        scrollUp.style.display = 'none';
    }
});
