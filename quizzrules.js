const homeButton = document.querySelector("#home");
const rulesWrapper = document.querySelector(".rulesWrapper");

homeButton.addEventListener("click", () => {
    rulesWrapper.style.display = "none";
    if (rulesWrapper.style.display = "none") {
        window.location.href = "index.html";
    } else {
        rulesWrapper.style.display = "block";
    }
})

function loadQuiz() {
    const selectedTopic = localStorage.getItem('selectedTopic');

    if (selectedTopic === 'HTML') {
        window.location.href = "quizJs.html";
    } else if (selectedTopic === 'CSS') {
        window.location.href = "quizReact.html"; 
    } else if (selectedTopic === 'Javascript') {
        window.location.href = "quizGit.html"; 
    }
}