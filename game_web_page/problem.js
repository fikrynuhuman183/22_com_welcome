let userGroups = {"E/22/001": "Group A", "E/22/004": "Group A", "E/22/008": "Group A","E/22/010": "Group A", "E/22/014": "Group A", "E/22/018": "Group A","E/22/027": "Group A", "E/22/032": "Group A", "E/22/034": "Group A","E/22/035": "Group A",
                    "E/22/036": "Group A", "E/22/044": "Group A", "E/22/051": "Group A","E/22/052": "Group A", "E/22/054": "Group A", "E/22/056": "Group A","E/22/058": "Group A", "E/22/060": "Group A", "E/22/61": "Group A","E/22/074": "Group A",
                    "E/22/084": "Group A", "E/22/102": "Group A", "E/22/120": "Group A","E/22/121": "Group A", "E/22/124": "Group A", "E/22/125": "Group A","E/22/126": "Group A", "E/22/127": "Group A", "E/22/130": "Group A","E/22/131": "Group A",
                    "E/22/132": "Group A", "E/22/135": "Group A", "E/22/138": "Group A","E/22/141": "Group A", "E/22/142": "Group A", "E/22/151": "Group A","E/22/154": "Group A", "E/22/157": "Group A", "E/22/159": "Group A","E/22/176": "Group A",
                    "E/22/179": "Group A", "E/22/180": "Group A", "E/22/182": "Group A","E/22/184": "Group A", "E/22/188": "Group A", "E/22/193": "Group A","E/22/203": "Group A", "E/22/205": "Group A", "E/22/211": "Group A","E/22/214": "Group A",
                    "E/22/227": "Group A", "E/22/228": "Group A", "E/22/232": "Group A","E/22/233": "Group A", "E/22/237": "Group A", "E/22/248": "Group A","E/22/250": "Group A", "E/22/253": "Group A", "E/22/260": "Group A","E/22/261": "Group A",
                    "E/22/269": "Group A", "E/22/271": "Group A", "E/22/280": "Group A","E/22/288": "Group A", "E/22/291": "Group A", "E/22/296": "Group A","E/22/301": "Group A", "E/22/303": "Group A", "E/22/320": "Group A","E/22/322": "Group A",
                    "E/22/323": "Group A", "E/22/324": "Group A", "E/22/328": "Group A","E/22/330": "Group A", "E/22/336": "Group A", "E/22/337": "Group A","E/22/353": "Group A", "E/22/354": "Group A", "E/22/362": "Group A","E/22/364": "Group A",
                    "E/22/366": "Group A", "E/22/372": "Group A", "E/22/373": "Group A","E/22/378": "Group A", "E/22/381": "Group A", "E/22/382": "Group A","E/22/385": "Group A", "E/22/396": "Group A", "E/22/397": "Group A","E/22/400": "Group A",
                    "E/22/402": "Group A", "E/22/405": "Group A", "E/22/409": "Group A","E/22/419": "Group A", "E/22/421": "Group A", "E/22/425": "Group A","E/22/427": "Group A", "E/22/443": "Group A", "E/22/449": "Group A","E/22/452": "Group A",
    
};
let userGroup = "Unknown";
let currentQuestionIndex = 0;
let timeLeft = 100;
let timerInterval;



// This Questions
let questions = [
    { question: "What is the number of the protagonist in Squid Game?", answer: "456", hint: "Hint: The last contestant!" },
    { question: "What shape represents the workers in Squid Game?", answer: "Circle", hint: "Hint: The simplest geometric figure!" },
    { question: "What color do the players wear?", answer: "Green", hint: "Hint: The color of life and survival!" }
];


function startQuiz() {
    let questionElement = document.getElementById('question');
    questionElement.innerText = "";
    let text = questions[currentQuestionIndex].question;
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            questionElement.innerText += text.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();
    startTimer();
}

function startTimer() {
    timeLeft = 100;
    document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Try again.");
            startQuiz();
        }
    }, 1000);
}

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value.trim();
    let hintElement = document.getElementById('hint');
    let nextStepElement = document.getElementById('nextStep');
    
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        let audio = new Audio('success.mp3');
        audio.play();
        alert("Correct! Moving to the next challenge.");
        nextStepElement.style.display = "block";  // Show the next step buttons
        document.getElementById('answer').value = "";
        hintElement.style.opacity = "0";
        hintElement.style.display = "none";
    } else {
        let audio = new Audio('error.mp3');
        audio.play();
        showHint();
    }
}

function showHint() {
    let hintElement = document.getElementById('hint');
    hintElement.innerText = questions[currentQuestionIndex].hint;
    hintElement.style.display = "block";
    setTimeout(() => {
        hintElement.style.opacity = "1";
    }, 100);
}

function endGame() {
    document.getElementById("question-box").style.display = "none";
    // let userId = getValue();
    // userGroup = userGroups[userId] || "Unassigned";
    let userGroup="Group A";
    document.getElementById("groupBox").style.display = "block";
    document.getElementById("groupMessage").innerText = `You have finished the game! Your assigned group is: ${userGroup}`;
}

function nextStep() {
    let nextStepElement = document.getElementById('nextStep');
    nextStepElement.style.display = "none";  // Hide the next step options
    currentQuestionIndex++;
    if (currentQuestionIndex<1) {
        startQuiz();
    } else {
        endGame();
       
    }
}
window.onload = startQuiz;
