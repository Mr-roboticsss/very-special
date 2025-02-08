// script.js
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    header.addEventListener('mouseover', function () {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    });
    header.addEventListener('mouseout', function () {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    });
});
