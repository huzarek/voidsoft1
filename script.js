// JS: Smooth scroll (JavaScript)
document.querySelectorAll('.link a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Użyj scrollIntoView dla płynnego przewijania
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("link1").addEventListener('click', (event) => {
    event.preventDefault();
    scrollToElement('#dowiedz-sie-wiecej');
});

document.getElementById("link2").addEventListener('click', (event) => {
    event.preventDefault();
    scrollToElement('#o-nas');
});
