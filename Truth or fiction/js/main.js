document.addEventListener('DOMContentLoaded', () => {
/* All answer options */
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

/* All our options */
      const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'),
      numberOfQuestion = document.getElementById('numder-of-question');
      numberOfAllQuestion = document.getElementById('number-of-all-questions');

let indexOfQuestion,  // индекс текущего вопроса
    indexOfPage = 0;  // Индекс страницы

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

let score = 0; // Итоговый результат векторины

const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

// Массив вопросов / Ответов
const questions = [
    {
        question: 'Свинья не может посмотреть в небо',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 0
    },
    {
        question: 'ДНК человека и банана сходны на 90%.',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 1
    },
    {
        question: ' Если брить волосы на голове, то они будут расти гуще',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 1
    },
    {
        question: 'У осьминога три сердца',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 0
    },
    {
        question: 'Россию и США отделяют всего 4 километра',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 0
    },
    {
        question: 'Лунатиков нельзя будить',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 1
    },
    {
        question: 'Если проглотить жвачку, она останется в желудке на 7 лет',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 1
    },
    {
        question: 'Употребление моркови улучшает зрение',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 1
    },
    {
        question: 'Страусы засовывают голову в песок, когда пугаются',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 1
    },
    {
        question: 'В пустыне Сахара никогда не выпадает снег',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 1
    },
    {
        question: 'Автор пьесы "НА ДНЕ" - А.С. Пушкин',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 1
    },
    {
        question: 'У бобров зубы растут постоянно на протяжении всей жизни',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 0
    },
    {
        question: 'Отпечатки пальцев коал такие же, как и у людей',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 0
    },
    {
        question: 'Далматинцы рождаются без пятен',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 0
    },
    {
        question: 'Автор логотипа "Чупа-Чупс" - Сальвадор Дали',
        options: [
            'Правда',
            'Вымысел',
            '',
            '',
        ],
        rightAnswer: 0
    },
    
];

numberOfAllQuestion.innerHTML = questions.length; // Выводим количество всех вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; // Сам вопрос

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
  //  option3.innerHTML = questions[indexOfQuestion].options[2];
  //  option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
};

let completedAnswers = []; // Массив с вопросами которые уже были

// Функция делает рандомным 'indexOfQuestion'
const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length); // Выводит рандомный вопрос
    let hitDuplicate = false;   // Не повторяющиеся вопросы

    if(indexOfPage == questions.length) {       // Проверяет количество вопросов
        quizOver();
    } else { // Если остались вопросы - продолжает
        if(completedAnswers.length > 0) {       // 'completedAnswers' - проверяет forEach > 0
            completedAnswers.forEach(item => {  // и возвращает 'true' - повторение
                if(item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate) {      // Если hitDuplicate - 'true'
                randomQuestion();   // Запускает функцию
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        };
        if(completedAnswers == 0) {  // 'completedAnswers' - равняется нулю
            indexOfQuestion = randomNumber;
            load();
        }
    };

    completedAnswers.push(indexOfQuestion);
}


// Проверка ответа
const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {  // Ответ верный
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {  // Ответ не верный
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}

const disabledOptions = () => { // Проверка правильного ответа
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}

const enableOptions = () => {   // переход на следующий уровень
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong'); // Удаление классов
    })
};

const answerTracker = () => {    // Если правильный ответ - зеленый / В противном случае - красный
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')) {
        alert('Вам нужно выбрать один из вариантов ответа');
    } else {
        randomQuestion();
        enableOptions();
    }
};

btnNext.addEventListener('click', validate);    // Кнопка далее

for(option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
}

const quizOver = () => {   // Результат
    document.querySelector('.quiz-over-modal').classList.add('active');
    document.getElementById('id1').remove();
    correctAnswer.innerHTML = score;
    numberOfAllQuestion2.innerHTML = questions.length;
};

const tryAgain = () => {   // Перезагрузка страницы
    window.location.reload();
}

btnTryAgain.addEventListener('click', tryAgain); // Начать заново

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
});

})
