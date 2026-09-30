// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when a link is clicked

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// SMOOTH SCROLLING
// ===============================

navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        const targetId = item.getAttribute("href");

        if (targetId.startsWith("#")) {
            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");

        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }
    });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, .project-card, .service-card, .contact-content"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been submitted.`);

        contactForm.reset();
    });
}


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ===============================
// GET STARTED / PROJECT BUTTON
// ===============================

const projectButtons = document.querySelectorAll(
    'a[href="#projects"]'
);

projectButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const projectsSection = document.querySelector("#projects");

        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// CONTACT BUTTON
// ===============================

const contactButtons = document.querySelectorAll(
    'a[href="#contact"]'
);

contactButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const contactSection = document.querySelector("#contact");

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});