const wrapper = document.querySelector(".wrapper");
const startJs = document.querySelector("#startJs");
const startReactJs = document.querySelector("#startReactJs");
const startGit = document.querySelector("#startGit");

function startQuiz(topic) {
    localStorage.setItem('selectedTopic', topic);
    window.location.href = "quizzrules.html";
}


