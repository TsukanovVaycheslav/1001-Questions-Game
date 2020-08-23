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
            question: 'В состав какой страны входит остров Гренландия?',
            options: [
                'Англия',
                'Норвегия',
                'Дания',
                'Индонезия',
            ],
            rightAnswer: 0
        },
        {
            question: 'Какова приблизительная численность островов в архипелаге Соломоновых островов?',
            options: [
                'Около 500',
                'Около 1000',
                'Около 1500',
                'Около 1700',
            ],
            rightAnswer: 1
        },
        {
            question: 'В каком океане расположен остров Реюньон?',
            options: [
                'Индийский океан',
                'Тихий океан',
                'Атлантический океан',
                'Каспийское море',
            ],
            rightAnswer: 0
        },
        {
            question: 'Какое побережье острова Крит является самым туристическим?',
            options: [
                'Южное',
                'Восточное',
                'Западное',
                'Северное',
            ],
            rightAnswer: 3
        },
        {
            question: 'В каком году остров Мадагаскар стал самостоятельной Демократической Республикой Мадагаскар?',
            options: [
                '1890',
                '1960',
                '1920',
                '1970',
            ],
            rightAnswer: 1
        },
        {
            question: 'На каком острове раньше, чем где либо, была построена железная дорога?',
            options: [
                'Ямайка',
                'Бали',
                'Кипр',
                'Куба',
            ],
            rightAnswer: 0
        },
        {
            question: 'Как португальцы называют остров Мадера?',
            options: [
                'Цветок',
                'Рыба',
                'Дерево',
                'Трава',
            ],
            rightAnswer: 2
        },
        {
            question: 'Какое прозвище носит штат Гавайи?',
            options: [
                'Острова',
                'Рай',
                'Гавайские острова',
                'Алоха',
            ],
            rightAnswer: 3
        },
        {
            question: 'На сколько каст подразделяют все население острова балийцы?',
            options: [
                '3',
                '4',
                '5',
                '7',
            ],
            rightAnswer: 1
        },
        {
            question: 'Какое необычное название носит остров, находящийся недалеко от Магадана?',
            options: [
                'Землетрясение',
                'Наваждение',
                'Неостров',
                'Недоразумение',
            ],
            rightAnswer: 3
        },
        {
            question: 'Какие две страны одновременно владеют островом Фазанов?',
            options: [
                'Испания и Франция',
                'Испания и Португалия',
                'Испания и Бельгия',
                'Испания и Италия',
            ],
            rightAnswer: 0
        },
            // Tour of Europe
        {
            question: 'Какие два цвета сочетаются на флаге Греции?',
            options: [
                'Белый и синий',
                'Зелёный и красный',
                'Черный и голубой',
                '',
            ],
            rightAnswer: 0
        },
        {
            question: 'Является ли Хельсинки крупнейшим городом Финляндии или только ее столицей?',
            options: [
                'Является',
                'Нет',
                '',
                '',
            ],
            rightAnswer: 0
        },
        {
            question: 'Где в Германии находится национальный парк Берхтесгаден?',
            options: [
                'В Альпах',
                'В шлезвиг-гольштейнской части Ваттового моря',
                'На северо-востоке острова Рюген',
                '',
            ],
            rightAnswer: 0
        },
        {
            question: 'Федеральной землей какой страны является Зальцбург?',
            options: [
                'Германии',
                'Франции',
                'Австрии',
                '',
            ],
            rightAnswer: 2
        },
        {
            question: 'Самая маленькая страна в Европе - это ...',
            options: [
                'Ватикан',
                'Монако',
                'Люксембург',
                '',
            ],
            rightAnswer: 0
        },
        {
            question: 'В какой европейской стране нет комаров?',
            options: [
                'Швейцария',
                'Исландия',
                'Норвегия',
                '',
            ],
            rightAnswer: 1
        },
        {
            question: 'Сколько государств Европы полностью расположены на островах (являются островными)?',
            options: [
                '19',
                '22',
                '14',
                '',
            ],
            rightAnswer: 2
        },
        {
            question: 'Какая из стран считается самой богатой страной Европы?',
            options: [
                'Ирландия',
                'Швейцария',
                'Люксимбург',
                '',
            ],
            rightAnswer: 2
        },
        {
            question: 'Как называется единица административно-территориального деления Швеции?',
            options: [
                'Лен',
                'Чивог',
                'Гевог',
                '',
            ],
            rightAnswer: 0
        },
        {
            question: 'Какой стране принадлежит крупнейший на земле остров Гренландия?',
            options: [
                'Венгрии',
                'Румынии',
                'Дании',
                '',
            ],
            rightAnswer: 2
        },
            // Underwater world
        {
            question: 'Как называется морская оранжево-белая рыбка, которая может прятаться от врагов среди щупалец актинии, благодаря своему симбиозу с ними?',
            options: [
                'Рыба-клоун',
                'Рыба-ангел',
                'Рыба-бабочка',
                'Рыба-пила',
            ],
            rightAnswer: 0
        },
        {
            question: 'Как называется морское беспозвоночное, которое обладает известковым скелетом и участвует в рифообразовании?',
            options: [
                'Морская звезда',
                'Коралловый полип',
                'Акула',
                'Моллюск',
            ],
            rightAnswer: 1
        },
        {
            question: 'Кем является один из самых опасных подводных жителей — Морская оса?',
            options: [
                'Скат',
                'Актиния',
                '',
                'Медуза',
            ],
            rightAnswer: 3
        },
        {
            question: 'Как дышат медузы?',
            options: [
                'С помощью лёгких',
                'С помощью жабр',
                'Всей поверхностью тела',
                'Не умеют дышать',
            ],
            rightAnswer: 2
        },
        {
            question: 'Кто такой лобстер?',
            options: [
                'Крупное морское ракообразное',
                'Мелкое морское ракообразное',
                'Рыба',
                'Млекопитающее',
            ],
            rightAnswer: 0
        },
        {
            question: 'Какое морское существо способно выворачивать желудок наизнанку?',
            options: [
                'Морская звезда',
                'Медуза',
                'Рыба-ёж',
                'Рыба-меч',
            ],
            rightAnswer: 1
        },
        {
            question: 'Какая рыба является самой крупной в мире?',
            options: [
                'Рыба-слон',
                'Китовая акула',
                'Молотоголовая акула',
                'Кит',
            ],
            rightAnswer: 1
        },
        {
            question: 'Какая рыба умеет развивать скорость до 100 км / час?',
            options: [
                'Рыба-парусник',
                'Щука',
                'Окунь',
                'Треска',
            ],
            rightAnswer: 0
        },
        {
            question: 'Как называется рыба, которая умеет ходить?',
            options: [
                'Рыба-игла',
                'Рыба-удильщик',
                'Рыба-пила',
                'Илистый прыгун',
            ],
            rightAnswer: 3
        },
        {
            question: 'Какая рыба охотится, приманивая своих жертв свечением тела?',
            options: [
                'Медуза',
                'Радужная форель',
                'Рыба-удильщик',
                'Рыба-пила',
            ],
            rightAnswer: 2
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

          var deadline = new Date(Date.parse(new Date()) + 600 * 1000); // for endless timer 10:00 minutes
          initializeClock("countdown", deadline);
    }
    timeOnClock();

})
