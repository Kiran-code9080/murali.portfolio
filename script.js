/*

* Muralidharan T
* ERP Functional Consultant Portfolio
  */

/* =========================================
AOS INITIALIZATION
========================================= */

AOS.init({
duration: 700,
once: true,
offset: 80
});

/* =========================================
RESUME DOWNLOAD
========================================= */

function triggerCvDownload(event) {

```
if (event) {
    event.preventDefault();
}

const cvPath = "Murali_ERP_CV.pdf";

const link = document.createElement("a");

link.href = cvPath;
link.download = "Muralidharan_T_ERP_CV.pdf";

document.body.appendChild(link);

link.click();

document.body.removeChild(link);
```

}

/* =========================================
TYPED TEXT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

```
const typedElement = document.querySelector("#typed");

if (typedElement && typeof Typed !== "undefined") {

    new Typed("#typed", {

        strings: [
            "Supply Chain Specialist",
            "Oracle SQL Support",
            "Business Analyst"
        ],

        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1200,
        startDelay: 300,
        loop: true,
        showCursor: true,
        cursorChar: "|"

    });

}
```

});

/* =========================================
ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".sidebar-nav a");

window.addEventListener("scroll", function () {

```
let currentSection = "";

sections.forEach(function (section) {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 250) {
        currentSection = section.getAttribute("id");
    }

});

navLinks.forEach(function (link) {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
    }

});
```

});

/* =========================================
EMAILJS CONTACT FORM
========================================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

```
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const submitButton = document.getElementById("submit-btn");
    const status = document.getElementById("form-status");

    const originalButtonHTML =
        'Send Message <i class="fas fa-paper-plane"></i>';

    submitButton.disabled = true;

    submitButton.innerHTML =
        'Sending... <i class="fas fa-spinner fa-spin"></i>';

    status.innerText = "";
    status.style.color = "";


    emailjs.sendForm(
        "service_753xgur",
        "template_edmn3me",
        contactForm
    )

    .then(function () {

        status.innerText =
            "✓ Message Sent Successfully!";

        status.style.color =
            "var(--primary)";

        contactForm.reset();

        submitButton.disabled = false;

        submitButton.innerHTML =
            originalButtonHTML;

    })

    .catch(function (error) {

        console.error(
            "EmailJS Error:",
            error
        );

        status.innerText =
            "✕ Failed to send message. Please try again.";

        status.style.color =
            "#F43F5E";

        submitButton.disabled = false;

        submitButton.innerHTML =
            originalButtonHTML;

    });

});
```

}

/* =========================================
SMOOTH NAVIGATION
========================================= */

navLinks.forEach(function (link) {

```
link.addEventListener("click", function (event) {

    const targetId =
        this.getAttribute("href");

    const target =
        document.querySelector(targetId);

    if (target) {

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});
```

});

/* =========================================
PAGE LOAD EFFECT
========================================= */

window.addEventListener("load", function () {

```
document.body.classList.add("page-loaded");
```

});
