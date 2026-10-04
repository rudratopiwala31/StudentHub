/* =========================================
   STUDENTHUB - PRACTICAL 4
   JavaScript DOM Manipulation,
   Event Handling and UI Interaction
   ========================================= */


/* =========================================
   PAGE LOAD
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    loadTheme();

    createThemeButton();

    createNotification();

    createModal();

    createHamburgerMenu();

    createSlider();

    createFAQ();

    addButtonEvents();

});


/* =========================================
   LIGHT / DARK THEME
   localStorage
   ========================================= */

function changeTheme() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }
}


function loadTheme() {

    var theme = localStorage.getItem("theme");

    if (theme == "dark") {

        document.body.classList.add("dark");

    }

}


/* =========================================
   CREATE THEME BUTTON
   ========================================= */

function createThemeButton() {

    var button = document.createElement("button");

    button.innerHTML = "🌙 Light / Dark Theme";

    button.id = "themeButton";

    button.onclick = function () {
        changeTheme();
    };

    var header = document.querySelector("header");

    if (header) {

        header.appendChild(button);

    }

}


/* =========================================
   NOTIFICATION BANNER
   ========================================= */

function createNotification() {

    var notification =
        document.createElement("div");

    notification.id = "notification";

    notification.innerHTML =
        "Welcome to StudentHub!";

    var closeButton =
        document.createElement("button");

    closeButton.innerHTML = "Close";

    closeButton.onclick =
        function () {
            closeNotification();
        };

    notification.appendChild(closeButton);

    document.body.insertBefore(
        notification,
        document.body.firstChild
    );

}


function showNotification() {

    var notification =
        document.getElementById("notification");

    if (notification) {

        notification.style.display = "block";

    }

}


function closeNotification() {

    var notification =
        document.getElementById("notification");

    if (notification) {

        notification.style.display = "none";

    }

}


/* =========================================
   MODAL POPUP
   ========================================= */

function createModal() {

    var modal =
        document.createElement("div");

    modal.id = "modal";

    var modalBox =
        document.createElement("div");

    modalBox.className = "modal-box";

    var closeButton =
        document.createElement("button");

    closeButton.innerHTML = "X";

    closeButton.onclick =
        function () {
            closeModal();
        };

    var heading =
        document.createElement("h2");

    heading.innerHTML =
        "🎓 StudentHub Modal";

    var message =
        document.createElement("p");

    message.innerHTML =
        "This modal popup is created using JavaScript DOM manipulation.";

    var button =
        document.createElement("button");

    button.innerHTML = "Close";

    button.onclick =
        function () {
            closeModal();
        };

    modalBox.appendChild(closeButton);
    modalBox.appendChild(heading);
    modalBox.appendChild(message);
    modalBox.appendChild(button);

    modal.appendChild(modalBox);

    document.body.appendChild(modal);

}


function openModal() {

    var modal =
        document.getElementById("modal");

    if (modal) {

        modal.style.display = "block";

    }

}


function closeModal() {

    var modal =
        document.getElementById("modal");

    if (modal) {

        modal.style.display = "none";

    }

}


/* =========================================
   CONTENT SLIDER
   ========================================= */

var currentSlide = 0;


function createSlider() {

    var slider =
        document.createElement("div");

    slider.className = "slider";

    var title =
        document.createElement("h2");

    title.innerHTML =
        "🖼 StudentHub Slider";

    slider.appendChild(title);


    /* Slide 1 */

    var slide1 =
        document.createElement("div");

    slide1.className = "slide active";

    slide1.innerHTML =
        "<div class='slide-image'>📚</div>" +
        "<h3>Courses</h3>" +
        "<p>View and manage your available courses.</p>";

    slider.appendChild(slide1);


    /* Slide 2 */

    var slide2 =
        document.createElement("div");

    slide2.className = "slide";

    slide2.innerHTML =
        "<div class='slide-image'>📝</div>" +
        "<h3>Assignments</h3>" +
        "<p>Check assignments and their due dates.</p>";

    slider.appendChild(slide2);


    /* Slide 3 */

    var slide3 =
        document.createElement("div");

    slide3.className = "slide";

    slide3.innerHTML =
        "<div class='slide-image'>📖</div>" +
        "<h3>Notes</h3>" +
        "<p>Access your study notes easily.</p>";

    slider.appendChild(slide3);


    /* Previous Button */

    var previousButton =
        document.createElement("button");

    previousButton.innerHTML =
        "Previous";

    previousButton.onclick =
        function () {
            previousSlide();
        };


    /* Next Button */

    var nextButton =
        document.createElement("button");

    nextButton.innerHTML =
        "Next";

    nextButton.onclick =
        function () {
            nextSlide();
        };


    slider.appendChild(previousButton);
    slider.appendChild(nextButton);


    var homePage =
        document.querySelector(".home-page");

    var mainPage =
        document.querySelector(".main-page");


    if (homePage) {

        homePage.appendChild(slider);

    } else if (mainPage) {

        mainPage.appendChild(slider);

    }

}


function showSlide(number) {

    var slides =
        document.getElementsByClassName("slide");

    if (slides.length == 0) {

        return;

    }


    for (var i = 0; i < slides.length; i++) {

        slides[i].classList.remove("active");

    }


    if (number >= slides.length) {

        currentSlide = 0;

    }


    if (number < 0) {

        currentSlide =
            slides.length - 1;

    }


    slides[currentSlide].classList.add("active");

}


function nextSlide() {

    var slides =
        document.getElementsByClassName("slide");

    if (slides.length == 0) {

        return;

    }

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


function previousSlide() {

    var slides =
        document.getElementsByClassName("slide");

    if (slides.length == 0) {

        return;

    }

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            slides.length - 1;

    }

    showSlide(currentSlide);

}


/* =========================================
   FAQ
   ========================================= */

function createFAQ() {

    var faqSection =
        document.createElement("div");

    faqSection.id = "practical4-faq";

    faqSection.className = "box";

    faqSection.innerHTML =
        "<h2>❓ Frequently Asked Questions</h2>" +

        "<button class='question' " +
        "onclick='showAnswer(0)'>" +
        "What is StudentHub?" +
        "</button>" +

        "<div class='answer'>" +
        "StudentHub is a simple Student Management System " +
        "for courses, assignments, notes and profiles." +
        "</div>" +

        "<button class='question' " +
        "onclick='showAnswer(1)'>" +
        "How can I view courses?" +
        "</button>" +

        "<div class='answer'>" +
        "Open the Courses page from the navigation menu." +
        "</div>" +

        "<button class='question' " +
        "onclick='showAnswer(2)'>" +
        "How can I change the theme?" +
        "</button>" +

        "<div class='answer'>" +
        "Click the Light / Dark Theme button." +
        "</div>" +

        "<button class='question' " +
        "onclick='showAnswer(3)'>" +
        "Is the theme remembered after refresh?" +
        "</button>" +

        "<div class='answer'>" +
        "Yes. The selected theme is stored using localStorage." +
        "</div>";


    var homePage =
        document.querySelector(".home-page");

    var mainPage =
        document.querySelector(".main-page");


    if (homePage) {

        homePage.appendChild(faqSection);

    } else if (mainPage) {

        mainPage.appendChild(faqSection);

    }

}


function showAnswer(number) {

    var answers =
        document.getElementsByClassName("answer");

    if (answers.length == 0) {

        return;

    }


    if (answers[number].style.display == "block") {

        answers[number].style.display = "none";

    } else {

        answers[number].style.display = "block";

    }

}


/* =========================================
   HAMBURGER MENU
   ========================================= */

function createHamburgerMenu() {

    var header =
        document.querySelector("header");

    var nav =
        document.querySelector("nav");

    if (!header || !nav) {

        return;

    }


    var menuButton =
        document.createElement("button");

    menuButton.innerHTML =
        "☰ Menu";

    menuButton.id =
        "menuButton";

    menuButton.onclick =
        function () {
            showMenu();
        };


    header.appendChild(menuButton);

}


function showMenu() {

    var nav =
        document.querySelector("nav");

    if (nav) {

        nav.classList.toggle("mobile-show");

    }

}


/* =========================================
   COURSE BUTTONS
   ========================================= */

function viewCourse(courseName) {

    alert(
        courseName +
        " details opened successfully."
    );

}


/* =========================================
   ASSIGNMENT BUTTONS
   ========================================= */

function viewAssignment(assignmentName) {

    alert(
        assignmentName +
        " opened successfully."
    );

}


/* =========================================
   NOTES BUTTONS
   ========================================= */

function downloadNote(noteName) {

    alert(
        noteName +
        " download started."
    );

}


/* =========================================
   GENERAL BUTTON EVENTS
   ========================================= */

function addButtonEvents() {

    var buttons =
        document.getElementsByTagName("button");


    for (var i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener(
            "click",
            function () {

                console.log(
                    "Button clicked: " +
                    this.innerHTML
                );

            }
        );

    }

}