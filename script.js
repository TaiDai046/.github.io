function startTimer() {
    let timeLeft = 300;
    const timerElement = document.getElementById("timer");

    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("時間到！");
            exitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

function exitQuiz() {
    window.location.href = "main.html";
}
