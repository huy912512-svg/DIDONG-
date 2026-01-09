document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(".product-card, .feature-item, .section-header");

    revealElements.forEach(element => {
        element.classList.add("reveal-item");
    });

    const scrollReveal = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", scrollReveal);
    scrollReveal();

    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    const menuIcon = document.querySelector(".menu-icon");
    const mainMenu = document.querySelector(".main-menu");

    if (menuIcon) {
        menuIcon.addEventListener("click", () => {
            mainMenu.classList.toggle("open");
            if (mainMenu.classList.contains("open")) {
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");
            } else {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        });
    }

    const cards = document.querySelectorAll(".card-item");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let autoSlideInterval;

    cards.forEach((card, index) => {
        if (card.classList.contains("active")) currentIndex = index;
    });

    function activateSlide(index) {
        cards.forEach(c => c.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        currentIndex = index;

        if (cards[currentIndex]) cards[currentIndex].classList.add("active");
        if (dots[currentIndex]) dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        let newIndex = currentIndex + 1;
        if (newIndex >= cards.length) newIndex = 0;
        activateSlide(newIndex);
    }

    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            activateSlide(index);
            startAutoSlide();
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            activateSlide(index);
            startAutoSlide();
        });
    });

    startAutoSlide();
});
