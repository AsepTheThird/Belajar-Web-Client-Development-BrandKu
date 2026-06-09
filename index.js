const CTABtn = document.querySelector('#cta-btn');
const CTAFeedback = document.querySelector('#cta-feedback');

let counter = 0;

CTABtn.addEventListener('click', () => {
    counter++;
    console.log(counter);
        
    CTAFeedback.classList.remove('hidden');
    CTAFeedback.textContent = `Harusnya Muncul Cuyy!`;
});
