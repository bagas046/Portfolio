import '../css/style.css'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
});
// ======================
// Hamburger Menu
// ======================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {

    const icon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        if (mobileMenu.classList.contains("hidden")) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        } else {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }

    });

    // Tutup menu setelah memilih salah satu menu
    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}
// Back To Top Button
const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.remove("hidden");

        } else {

            backToTop.classList.add("hidden");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const activateNav = () => {

    const scrollPos = window.scrollY + 150;

    let currentSection = "home";

    sections.forEach(section => {

        if(scrollPos >= section.offsetTop){

            currentSection = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("active");

        }

    });

};

window.addEventListener("scroll", activateNav);
window.addEventListener("load", activateNav);
