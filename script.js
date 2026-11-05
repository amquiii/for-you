
/* VALENTINE INVITATION */

// Elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");
const result = document.getElementById("result");
const receiptScreen = document.getElementById("receiptScreen");
const mainTitle = document.getElementById("mainTitle");

const dateForm = document.getElementById("dateForm");
const dateInput = document.getElementById("dateInput");
const chosenDate = document.getElementById("chosenDate");

const changeDateBtn = document.getElementById("changeDateBtn");
const printBtn = document.getElementById("printBtn");

let noCount = 0;

/* NO BUTTON MESSAGES */

const noMessages = [
    "Are you sure? 🥺",
    "Really sure? 🥹",
    "Think again! 💗",
    "Please reconsider! 🥺",
    "Don't do this to me 😭",
    "Give me a chance! 💕",
    "Pretty please? 🥹",
    "One last chance? 💔",
    "I'll break my heart 💔"
];

/* NO BUTTON CLICK */

noBtn.addEventListener("click", () => {

    noBtn.textContent =
        noMessages[Math.min(noCount, noMessages.length - 1)];

    noCount++;

    // Grow the Yes button while fitting mobile screens
    const fontLimit = Math.min(100, window.innerWidth * 0.16);
    const fontSize = Math.min(24 + noCount * 12, fontLimit);

    const verticalPadding = Math.min(16 + noCount * 8, 65);
    const horizontalPadding = Math.min(
        28 + noCount * 12,
        95,
        window.innerWidth * 0.12
    );

    yesBtn.style.fontSize = fontSize + "px";

    yesBtn.style.padding =
        verticalPadding + "px " + horizontalPadding + "px";
});

/* YES BUTTON CLICK */

yesBtn.addEventListener("click", () => {

    question.hidden = true;
    result.hidden = false;

    // Make Ok yay!!! pop up
    result.classList.add("pop-in");

});

/* SET MINIMUM DATE TO TODAY */

function getTodayDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

dateInput.min = getTodayDate();

/* FORMAT SELECTED DATE */

function formatDate(value) {

    const [year, month, day] = value.split("-").map(Number);

    const selectedDate = new Date(
        year,
        month - 1,
        day
    );

    return new Intl.DateTimeFormat("en-PH", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(selectedDate);

}

/* SUBMIT CALENDAR DATE */

dateForm.addEventListener("submit", (event) => {

    event.preventDefault();

    // Refresh minimum date
    dateInput.min = getTodayDate();

    if (!dateInput.value || dateInput.value < dateInput.min) {
        dateInput.setCustomValidity(
            "Please choose today or a future date."
        );
        dateInput.reportValidity();
        return;
    }

    dateInput.setCustomValidity("");

    // Display selected date on receipt
    chosenDate.textContent = formatDate(dateInput.value);

    // Hide calendar screen
    result.hidden = true;
    mainTitle.hidden = true;

    // Show receipt
    receiptScreen.hidden = false;
    receiptScreen.classList.add("pop-in");

});

/* CLEAR DATE VALIDATION */

dateInput.addEventListener("input", () => {
    dateInput.setCustomValidity("");
});

/* CHANGE DATE */

changeDateBtn.addEventListener("click", () => {

    receiptScreen.hidden = true;
    result.hidden = false;
    mainTitle.hidden = false;

});

/* SAVE OR PRINT RECEIPT */

printBtn.addEventListener("click", () => {
    window.print();
});
