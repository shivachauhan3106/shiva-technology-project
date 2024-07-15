document.addEventListener('DOMContentLoaded', () => {
    const floatingBtn = document.querySelector('.floating-btn');
    floatingBtn.addEventListener('click', () => {
        floatingBtn.style.position = 'static';
        floatingBtn.style.animation = 'glow';
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
