const questionsAnswers = [
    {
        question : "Dans quel pays l'Escurial se trouve t-il ?",
        answers : [
            {test : "En Italie", correct : false},
            {test : "En Suisse", correct : false},
            {test : "En Espagne", correct : true},
            {test : "En Grèce", correct : false}
        ]
    },

    {
        question : "Quel est l'ingrédient du houmous ?",
        answers : [
            {test : "Des graines de tournesol", correct : false},
            {test : "Le pois chiche", correct : true},
            {test : "Des oeufs au poisson", correct : false},
            {test : "De l'olive", correct : false}
        ]
    },

    {
        question : "De quel pays James Madison a-t-il été dirigeant politique ?",
        answers : [
            {test : "Du Royaume-Uni", correct : false},
            {test : "De Suède", correct : false},
            {test : "Des Etats-Unis d'Amérique", correct : true},
            {test : "Du canada", correct : false}
        ]
    },

    {
        question : "Dans quel secteur l'entreprise Generali se deploie-t-elle ?",
        answers : [
            {test : "Le prêt à la consommation", correct : false},
            {test : "Le luxe", correct : false},
            {test : "L'équipement automobile", correct : false},
            {test : "Les assurances", correct : true}
        ]
    },

    {
        question : "Dans quelle catégorie Mohamed Ali évoluait-il ?",
        answers : [
            {test : "Poids super-moyens", correct : false},
            {test : "Poids lourds", correct : true},
            {test : "Poids plumes", correct : false},
            {test : "poids coqs", correct : false}
        ]
    },

    {
        question : "Dans quelle pièce peut-on trouver M. Jourdain ?",
        answers : [
            {test : "Les Fourberies de Scapin", correct : false},
            {test : "le Bourgeois Gentilhomme", correct : true},
            {test : "Le Mariage de Figaro", correct : false},
            {test : "Le Misanthrope", correct : false}
        ]
    },

    {
        question : "Qui a chanré << I Will Survive >> ?",
        answers : [
            {test : "Tina Turner", correct : false},
            {test : "Gloria Gaynor", correct : true},
            {test : "Aretha Franklin", correct : false},
            {test : "Donna Summer", correct : false}
        ]
    },

    {
        question : "Qu'est-ce qu'une doline ?",
        answers : [
            {test : "Une berceuse", correct : false},
            {test : "Un outil", correct : false},
            {test : "Un phénomène météorologique", correct : false},
            {test : "Une dépression géologique", correct : true}
        ]
    },

    {
        question : "A quel écrivain doit-on le personnage de Boule de Suif ?",
        answers : [
            {test : "Balzac", correct : false},
            {test : "Stendhal", correct : false},
            {test : "Voltaire", correct : false},
            {test : "Maupassant", correct : true}
        ]
    },

    {
        question : "Qui incarne Cyrano de Bergerac dans le film de 1990 ?",
        answers : [
            {test : "Alain Delon", correct : false},
            {test :"Gérard Depardieu", correct : true},
            {test : "Christian Clavier", correct : false},
            {test : "Jean Reno", correct : false}
        ]
    },

];

const questionElement = document.querySelector("#question-element");
const answersButton = document.querySelector(".answers-button");
const nextQuestion = document.querySelector(".next-question");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextQuestion.innerHTML = "Suivant";

    showNextQuestion();
};

function showNextQuestion() {
    resetState();

    let currentQuestion = questionsAnswers[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + "- " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.test;
        button.classList.add("btn");
        answersButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        };

        button.addEventListener("click", selectAnswer);
    });
};

function resetState() {
    nextQuestion.style.display = "none";
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild)
    };
};

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }

    else {
        selectedBtn.classList.add("correct");
    };

    Array.from(answersButton.children).forEach(button => {
        button.disabled = true
    });

    nextQuestion.style.display = "block";
};

function showScore() {
    resetState();
    questionElement.innerHTML = `Votre score est de ${score} sur ${questionsAnswers.length} !`;
    nextQuestion.innerHTML = "Rejouer";
    nextQuestion.style.display = "block";

};

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsAnswers.length) {
        showNextQuestion();
    }

    else {
        showScore();
    }
};

nextQuestion.addEventListener("click", () => {
    if (currentQuestionIndex < questionsAnswers.length) {
        handleNextQuestion();
    }

    else {
        startQuiz();
    }
});

startQuiz();

