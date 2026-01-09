document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item.has-answer');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const isCurrentlyActive = this.classList.contains('active');
            const answer = this.nextElementSibling;
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.nextElementSibling;
                if (otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    if (otherAnswer && otherAnswer.classList.contains('faq-answer')) {
                        otherAnswer.style.maxHeight = null;
                        otherAnswer.style.padding = '0 20px';
                        otherAnswer.style.opacity = '0';
                    }
                }
            });

            if (!isCurrentlyActive) {
                this.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 50 + "px"; 
                answer.style.padding = '0 20px 15px 20px';
                answer.style.opacity = '1';
            }
        });
    });
});