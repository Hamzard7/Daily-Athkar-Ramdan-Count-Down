
// Countdown for Ramadan and Eid
function updateCountdown() {
    const ramadanDate = new Date("2025-03-25T00:00:00"); // Example date
    const eidDate = new Date("2025-04-21T00:00:00"); // Example date

    const now = new Date();
    const ramadanDiff = ramadanDate - now;
    const eidDiff = eidDate - now;

    const ramadanDays = Math.ceil(ramadanDiff / (1000 * 60 * 60 * 24));
    const eidDays = Math.ceil(eidDiff / (1000 * 60 * 60 * 24));

    document.getElementById("ramadan-countdown").innerHTML = "Ramadan in " + ramadanDays + " days.";
    document.getElementById("eid-countdown").innerHTML = "Eid in " + eidDays + " days.";
}

// Zakah calculation (2.5% of wealth)
function calculateZakah() {
    const amount = parseFloat(document.getElementById("zakah-amount").value);
    if (!isNaN(amount) && amount > 0) {
        const zakahAmount = amount * 0.025;
        document.getElementById("zakah-result").innerHTML = "Your Zakah amount is: $" + zakahAmount.toFixed(2);
    } else {
        document.getElementById("zakah-result").innerHTML = "Please enter a valid amount.";
    }
}

// Initialize page
updateCountdown();
