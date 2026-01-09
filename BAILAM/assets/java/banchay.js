
document.addEventListener("DOMContentLoaded", function () {
    
    const bestSellerCards = document.querySelectorAll('.best-sellers .product-card');
    
    if (bestSellerCards.length === 0) return;

    let bsIndex = 0;
    let bsInterval;

    function highlightBestSeller() {
        bestSellerCards.forEach(card => card.classList.remove('highlight'));

        if (bestSellerCards[bsIndex]) {
            bestSellerCards[bsIndex].classList.add('highlight');
        }

        bsIndex++;
        if (bsIndex >= bestSellerCards.length) {
            bsIndex = 0;
        }
    }

    function startBestSellerLoop() {
        if (bsInterval) clearInterval(bsInterval);
        bsInterval = setInterval(highlightBestSeller, 2000);
    }

    startBestSellerLoop();
    bestSellerCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            clearInterval(bsInterval);
            bestSellerCards.forEach(c => c.classList.remove('highlight'));
        });

        card.addEventListener('mouseleave', () => {
            startBestSellerLoop();
        });
    });

});