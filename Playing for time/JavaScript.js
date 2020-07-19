
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
            question: 'Как в JS вычислить процент от числа ?',
            options: [
                'Так в JS нельзы делать',
                'Оператор: %',
                'Умножить на кол-во процентов и разделить на 100',
                'Вызвать метод findPrecent()',
            ],
            rightAnswer: 2
        },
        {
            question: 'Результат выражения: "13" + 7',
            options: [
                '20',
                '137',
                'undefinde',
                'error',
            ],
            rightAnswer: 1
        },
        {
            question: 'На JS нельзя писать: ',
            options: [
                'Игры',
                'Скрипты для сайтов',
                'Дескриптные приложения',
                'Плохо',
            ],
            rightAnswer: 3
        },
    ];

    numberOfAllQuestion.innerHTML = questions.length; // Выводим количество всех вопросов

    const load = () => {
        question.innerHTML = questions[indexOfQuestion].question; // Сам вопрос

        option1.innerHTML = questions[indexOfQuestion].options[0];
        option2.innerHTML = questions[indexOfQuestion].options[1];
        option3.innerHTML = questions[indexOfQuestion].options[2];
        option4.innerHTML = questions[indexOfQuestion].options[3];

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
        document.getElementById('countdown').remove();
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


    // Игра на время

    function timeOnClock() {
        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
              total: t,
              days: days,
              hours: hours,
              minutes: minutes,
              seconds: seconds
            };
          }
          
          function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector(".days");
            var hoursSpan = clock.querySelector(".hours");
            var minutesSpan = clock.querySelector(".minutes");
            var secondsSpan = clock.querySelector(".seconds");
          
            function updateClock() {
              var t = getTimeRemaining(endtime);
          
              if (t.total <= -1) {
               // document.getElementById("countdown").className = "hidden";
               // document.getElementById("deadline-message").className = "visible";
              // alert('Game Over');
                clearInterval(timeinterval);
                quizOver();
                return true;
              }
          
              daysSpan.innerHTML = t.days;
              hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
              minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
              secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
            }
          
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
          }

          var deadline = new Date(Date.parse(new Date()) + 5 * 1000); // for endless timer
          initializeClock("countdown", deadline);
    }
    timeOnClock();