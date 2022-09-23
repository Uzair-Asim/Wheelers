let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector('#createAccount').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
    document.querySelector('.register-form-container').classList.toggle('active');
}

document.querySelector('#register-btn').onclick = () => {
    document.querySelector('.register-form-container').classList.toggle('active');
}

document.querySelector('#close-register-form').onclick = () => {
    document.querySelector('.register-form-container').classList.remove('active');
}

document.querySelector('#close-otp-form').onclick = () => {
    document.querySelector('.otp-form-container').classList.remove('active');
}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    };

};

document.querySelector('.home').onmousemove = (e) => {

    document.querySelectorAll('.home-parallax').forEach(elm => {

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });

};


document.querySelector('.home').onmouseleave = (e) => {

    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });

};

var swiper = new Swiper(".vehicles-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

document.getElementById("loginEmail").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        loginUser();
    }
});

document.getElementById("loginPass").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        loginUser();
    }
});

//document.getElementById("regEmail").addEventListener("keypress", function (event) {
//    if (event.key === "Enter") {
//        registerUser();
//    }
//});

//document.getElementById("regPass").addEventListener("keypress", function (event) {
//    if (event.key === "Enter") {
//        registerUser();
//    }
//});

//document.getElementById("regConfirmPass").addEventListener("keypress", function (event) {
//    if (event.key === "Enter") {
//        registerUser();
//    }
//});

//document.getElementById("regPhoneNumber").addEventListener("keypress", function (event) {
//    if (event.key === "Enter") {
//        registerUser();
//    }
//});

function registerUser() {
    data1 = {
        Email: document.getElementById("regEmail").value,
        Password: document.getElementById("regPass").value,
        ConfirmPassword: document.getElementById("regConfirmPass").value,
        PhoneNumber: document.getElementById("regPhoneNumber").value
    };
    $.ajax({
        type: "Post",
        url: "/api/Account/Register",
        data: data1,
        success: function (result) {
            document.querySelector('.register-form-container').classList.remove('active');
            alert('User registered successfully');
            document.querySelector('.otp-form-container').classList.toggle('active');
        },
        error: function (req, status, error) {
            //  Or failure
        }
    });
}
function VerifyOTP() {
    var Email = document.getElementById("regEmail").value;
    var OTP = document.getElementById("otp").value;
    $.ajax({
        type: "Get",
        url: "/api/Account/VerifyOTP?email=" + Email + "&otp=" + OTP,
        success: function (result) {
            document.querySelector('.register-form-container').classList.remove('active');
            document.querySelector('.otp-form-container').classList.toggle('active');
            alert('OTP verified');
        },
        error: function (req, status, error) {
            //  Or failure
        }
    });
}
function loginUser() {
    loginInfo = {
        UserName: document.getElementById("loginEmail").value,
        Password: document.getElementById("loginPass").value,
        grant_type: 'password'
    };
    login(loginInfo);
}

function login(data2) {

    $.ajax({
        type: "Post",
        url: "/Token",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: data2,
        success: function (result) {
            document.querySelector('.login-form-container').classList.remove('active');
            alert('User logged in successfully');
        },
        error: function (result) {
            alert(result.responseJSON.error_description);
        }
    });
}
