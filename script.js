const typingText = document.querySelector('.typing');
const phrases = ['Web Developer', 'Software Engineer', 'UI/UX designer'];
let i = 0; // phrase index
let j = 0; // letter index
let currentPhrase = '';
let isDeleting = false;

function typeEffect() {
    const current = phrases[i];
    
    if (isDeleting) {
        // remove one character
        currentPhrase = current.slice(0, j--);
    } else {
        // add one character
        currentPhrase = current.slice(0, ++j);
    }

    typingText.textContent = currentPhrase;

    let typingSpeed = isDeleting ? 60 : 120; // speed difference

    if (!isDeleting && j === current.length) {
        // pause before deleting
        typingSpeed = 1200;
        isDeleting = true;
    } else if (isDeleting && j === 0) {
        // move to next word
        isDeleting = false;
        i = (i + 1) % phrases.length;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// 💌 Contact form demo (optional)
document.querySelector('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent successfully! (Demo)');
});
