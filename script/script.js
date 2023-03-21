AOS.init({
    duration: 1600,
    once: true,
});

// Hover 3D Effect

$('.js-tilt').tilt({
    scale: 1.15,
    glare: true,
    maxGlare: 0.5,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 400
});

// SMTP Contact

const form = document.getElementById(contact - main);
form.addEventListener("submit", e => {
    e.preventDefault();
    let name = document.getElementsByClassName("form-name").value;
    let email = document.getElementsByClassName("form-email").value;

    document.querySelector("#contact-main").reset();

    sendEmail(name, email);
})

function sendEmail(name, email) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "techzip13@gmail.com",
        Password: "0C5A0721DA6081BE1990B13A3B8549DD5A35",
        To: 'techzip13@gmail.com',
        From: "${email}",
        Subject: "I'm a ${name}.This is the subject",
        Body: "Name: ${name} And this is the body"
    }).then(
        message => alert(message)
    );
}

