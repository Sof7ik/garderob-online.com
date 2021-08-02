const carouselContainer = document.querySelector('.rail-container')
const carouselWrapper = document.querySelector('.carousel-wrapper');
let scrollLeft = 0;

function scrollCarousel()
{
    scrollLeft = scrollLeft >= carouselWrapper.scrollWidth ? 0 : scrollLeft + 1;

    carouselContainer.style.transform = `translateX(${-scrollLeft}px)`;

    window.requestAnimationFrame(scrollCarousel)
}

document.addEventListener('DOMContentLoaded', e => {
    window.requestAnimationFrame(scrollCarousel)
})