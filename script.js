// Обработка формы на странице контактов
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const message = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value.trim();

            message.textContent = `Спасибо, ${name || 'друг'}! Ваше сообщение отправлено.`;
            message.style.color = '#16a34a';
            form.reset();

            setTimeout(() => {
                message.textContent = '';
            }, 5000);
        });
    }

    // Плавное появление карточек при прокрутке
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});