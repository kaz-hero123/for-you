function openLetter() {
    const envelope = document.querySelector('.envelope');
    const letter = document.getElementById('letter');

    // Check if the letter is already open
    if (letter.style.display === 'block') return;

    // Add animation to envelope flap and show the letter
    envelope.classList.add('open');
    setTimeout(() => {
        letter.style.display = 'block'; // Display letter after flap animation completes
        letter.style.opacity = 1; // Set opacity to 1
        letter.style.transform = 'translateY(0)'; // Reset transform to original position
    }, 700); // Delay to match envelope flap animation time
}