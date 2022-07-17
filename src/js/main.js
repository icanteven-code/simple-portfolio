let mobileBtnEl = null;
let mobileNavEl = null;

const handleMobileMenuState = () => {
    mobileBtnEl = document.querySelector("#header .mobile-menu");
    mobileNavEl = document.querySelector("#header .nav");

    mobileBtnEl.addEventListener('click', () => {
        mobileBtnEl.classList.toggle('active')
        mobileNavEl.classList.toggle('active')
    });
}

window.addEventListener('load', (event) => {
    handleMobileMenuState();
});