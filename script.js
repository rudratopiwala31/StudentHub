/* PAGE LOAD */

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


/* LIGHT / DARK THEME
   localStorage */

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


/* CREATE THEME BUTTON */

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


/* NOTIFICATION BANNER */

function createNotification() {

    var notification = document.createElement("div");

    notification.id = "notification";

    notification.innerHTML = "Welcome to StudentHub!";

    var closeButton = document.createElement("button");

    closeButton.innerHTML = "Close";

    closeButton.onclick = function () {

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


/* MODAL POPUP */

function createModal() {

    var modal = document.createElement("div");

    modal.id = "modal";

    var modalBox = document.createElement("div");

    modalBox.className = "modal-box";

    var closeButton = document.createElement("button");

    closeButton.innerHTML = "X";

    closeButton.onclick = function () {

        closeModal();

    };

    var heading = document.createElement("h2");

    heading.innerHTML = "🎓 StudentHub Modal";

    var message = document.createElement("p");

    message.innerHTML =
        "This modal popup is created using JavaScript DOM manipulation.";

    var button = document.createElement("button");

    button.innerHTML = "Close";

    button.onclick = function () {

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

    var modal = document.getElementById("modal");

    if (modal) {

        modal.style.display = "block";

    }

}


function closeModal() {

    var modal = document.getElementById("modal");

    if (modal) {

        modal.style.display = "none";

    }

}


/* CONTENT SLIDER */

var currentSlide = 0;


function createSlider() {

    var slider = document.createElement("div");

    slider.className = "slider";

    var title = document.createElement("h2");

    title.innerHTML = "🖼 StudentHub Slider";

    slider.appendChild(title);


    /* Slide 1 */

    var slide1 = document.createElement("div");

    slide1.className = "slide active";

    slide1.innerHTML =
        "<div class='slide-image'>📚</div>" +
        "<h3>Courses</h3>" +
        "<p>View and manage your available courses.</p>";

    slider.appendChild(slide1);


    /* Slide 2 */

    var slide2 = document.createElement("div");

    slide2.className = "slide";

    slide2.innerHTML =
        "<div class='slide-image'>📝</div>" +
        "<h3>Assignments</h3>" +
        "<p>Check assignments and their due dates.</p>";

    slider.appendChild(slide2);


    /* Slide 3 */

    var slide3 = document.createElement("div");

    slide3.className = "slide";

    slide3.innerHTML =
        "<div class='slide-image'>📖</div>" +
        "<h3>Notes</h3>" +
        "<p>Access your study notes easily.</p>";

    slider.appendChild(slide3);


    /* Previous Button */

    var previousButton =
        document.createElement("button");

    previousButton.innerHTML = "Previous";

    previousButton.onclick = function () {

        previousSlide();

    };


    /* Next Button */

    var nextButton =
        document.createElement("button");

    nextButton.innerHTML = "Next";

    nextButton.onclick = function () {

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

        currentSlide = slides.length - 1;

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

        currentSlide = slides.length - 1;

    }


    showSlide(currentSlide);

}


/* FAQ */

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


/* HAMBURGER MENU */

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

    menuButton.innerHTML = "☰ Menu";

    menuButton.id = "menuButton";

    menuButton.onclick = function () {

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


/* COURSE BUTTONS */

function viewCourse(courseName) {

    alert(
        courseName +
        " details opened successfully."
    );

}


/* ASSIGNMENT BUTTONS */

function viewAssignment(assignmentName) {

    alert(
        assignmentName +
        " opened successfully."
    );

}


/* NOTES BUTTONS */

function downloadNote(noteName) {

    alert(
        noteName +
        " download started."
    );

}


/* GENERAL BUTTON EVENTS */

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


/* PRACTICAL 5 - REGISTRATION VALIDATION */

var registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            var valid = true;


            /* Get form values */

            var name =
                document.getElementById("name").value.trim();

            var email =
                document.getElementById("email").value.trim();

            var mobile =
                document.getElementById("mobile").value.trim();

            var password =
                document.getElementById("password").value;

            var confirmPassword =
                document.getElementById("confirmPassword").value;

            var course =
                document.getElementById("course").value;

            var year =
                document.getElementById("year").value;

            var gender =
                document.querySelector(
                    'input[name="gender"]:checked'
                );

            var terms =
                document.getElementById("terms").checked;


            /* Clear old errors */

            document.getElementById("nameError").innerHTML = "";

            document.getElementById("emailError").innerHTML = "";

            document.getElementById("mobileError").innerHTML = "";

            document.getElementById("passwordError").innerHTML = "";

            document.getElementById("confirmPasswordError").innerHTML = "";

            document.getElementById("courseError").innerHTML = "";

            document.getElementById("yearError").innerHTML = "";

            document.getElementById("genderError").innerHTML = "";

            document.getElementById("termsError").innerHTML = "";

            document.getElementById("successMessage").innerHTML = "";


            /* Name validation */

            var namePattern = /^[A-Za-z ]+$/;


            if (name == "") {

                document.getElementById("nameError").innerHTML =
                    "Name is required.";

                valid = false;

            }

            else if (!namePattern.test(name)) {

                document.getElementById("nameError").innerHTML =
                    "Name should contain only letters.";

                valid = false;

            }


            /* Email validation */

            var emailPattern =
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


            if (email == "") {

                document.getElementById("emailError").innerHTML =
                    "Email is required.";

                valid = false;

            }

            else if (!emailPattern.test(email)) {

                document.getElementById("emailError").innerHTML =
                    "Enter a valid email address.";

                valid = false;

            }


            /* Mobile validation */

            var mobilePattern = /^[0-9]{10}$/;


            if (mobile == "") {

                document.getElementById("mobileError").innerHTML =
                    "Mobile number is required.";

                valid = false;

            }

            else if (!mobilePattern.test(mobile)) {

                document.getElementById("mobileError").innerHTML =
                    "Enter a valid 10 digit mobile number.";

                valid = false;

            }


            /* Password validation */

            if (password == "") {

                document.getElementById("passwordError").innerHTML =
                    "Password is required.";

                valid = false;

            }

            else if (password.length < 8) {

                document.getElementById("passwordError").innerHTML =
                    "Password must be at least 8 characters.";

                valid = false;

            }


            /* Confirm password */

            if (confirmPassword == "") {

                document.getElementById("confirmPasswordError").innerHTML =
                    "Please confirm your password.";

                valid = false;

            }

            else if (password != confirmPassword) {

                document.getElementById("confirmPasswordError").innerHTML =
                    "Passwords do not match.";

                valid = false;

            }


            /* Course validation */

            if (course == "") {

                document.getElementById("courseError").innerHTML =
                    "Please select your course.";

                valid = false;

            }


            /* Year validation */

            if (year == "") {

                document.getElementById("yearError").innerHTML =
                    "Please select your year.";

                valid = false;

            }


            /* Gender validation */

            if (!gender) {

                document.getElementById("genderError").innerHTML =
                    "Please select your gender.";

                valid = false;

            }


            /* Terms validation */

            if (!terms) {

                document.getElementById("termsError").innerHTML =
                    "Please accept the Terms and Conditions.";

                valid = false;

            }


            /* Final result */

            if (valid) {

                document.getElementById("successMessage").innerHTML =
                    "Registration successful!";

            }

        }
    );


    /* PASSWORD STRENGTH */

    document.getElementById("password").addEventListener(
        "input",
        function() {

            var password = this.value;

            var strength =
                document.getElementById("strength");


            if (password.length == 0) {

                strength.innerHTML = "";

            }

            else if (password.length < 6) {

                strength.innerHTML =
                    "Password Strength: Weak";

            }

            else if (password.length < 10) {

                strength.innerHTML =
                    "Password Strength: Medium";

            }

            else {

                strength.innerHTML =
                    "Password Strength: Strong";

            }

        }
    );

}
