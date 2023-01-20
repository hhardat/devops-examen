/* istanbul ignore file */
try {
    const { isValid } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
        feedbackMessageText = isValid(gamerTagValue)
            ? "Gamer tag is valid"
            : "Gamer tag is not  valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
