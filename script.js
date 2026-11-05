
/* =========================
   VALENTINE INVITATION
   BUTTON INTERACTIONS
========================= */

// Get HTML elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const result = document.getElementById("result");

// Number of times No was clicked
let noCount = 0;

// Different messages for every No click
const noMessages = [
    "Are you sure? 😢",
    "Really sure? 🥹",
    "Think again! 💗",
    "Please reconsider! 🥺",
    "Don't do this to me 😭",
    "Give me a chance! 💕",
    "Pretty please? 🥹",
    "One last chance? 💔",
    "I'll break my heart 💔"
];
// When No is clicked
noBtn.addEventListener("click", () => {

    // Change the No button message
    noBtn.textContent =
        noMessages[Math.min(noCount, noMessages.length - 1)];

    // Increase No click counter
    noCount++;

    // Increase Yes button font size
    const newFontSize = Math.min(24 + noCount * 12, 100);

    // Increase Yes button padding
    const verticalPadding = Math.min(16 + noCount * 8, 65);
    const horizontalPadding = Math.min(28 + noCount * 12, 95);

    yesBtn.style.fontSize = newFontSize + "px";

    yesBtn.style.padding =
        verticalPadding + "px " + horizontalPadding + "px";

});

// When Yes is clicked
yesBtn.addEventListener("click", () => {

    // Hide the question screen
    question.hidden = true;

    // Show the happy ending screen
    result.hidden = false;

});
