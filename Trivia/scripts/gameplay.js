
        const questions = [
            {
                question: 'Qual é o nome da personagem?',
                a: 'Alice Shimada',
                b: 'Anzu Kadotani',
                c: 'Yukari Akiyama',
                d: 'Miho Nishizumi',
                answer: 'a'
            },
            {
                question: 'Esse uniforme é de qual escola?',
                a: 'Pravda High School',
                b: 'Saunders',
                c: 'Saint Gloriana',
                d: 'Kuromorimine',
                answer: 'd'
            },
            {
                question: 'Qual é a nação tema da escola Kuromorimine?',
                a: 'França',
                b: 'Estados Unidos',
                c: 'Alemanha',
                d: 'Japão Imperial',
                answer: 'c'
            },
            {
                question: 'Quem é a irmã de Maho Nishizumi?',
                a: 'Erika Itsumi',
                b: 'Miho Nishizumi',
                c: 'Koume Akaboshi',
                d: 'Shiho Nishizumi',
                answer: 'b'
            },
            {
                question: 'Esse é o emblema de qual escola?',
                a: 'Pravda',
                b: 'Kuromorimine',
                c: 'Oorai',
                d: 'Jatkosota',
                answer: 'a'
            },
            {
                question: 'Essa música é tema de qual escola?',
                a: 'Jatkosota',
                b: 'Oorai',
                c: 'Pravda',
                d: 'Anzio',
                answer: 'd'
            },
            {
                question: 'Que "tanque" é esse?',
                a: 'Pershing',
                b: 'Tiger 1',
                c: 'Churchill',
                d: 'Panzer 3',
                answer: 'b'
            }
        ];

        let round = 1;
        const roundHTML = document.getElementById('round');
        const question = document.getElementById('question');
        const altA = document.getElementById('altA');
        const altB = document.getElementById('altB');
        const altC = document.getElementById('altC');
        const altD = document.getElementById('altD');
        const timerHTML = document.getElementById('timer');
        let timerID = undefined;
        let countdownID = undefined;

        function updateInfos() {
            question.textContent = questions[round - 1].question;
            altA.textContent = questions[round - 1].a;
            altB.textContent = questions[round - 1].b;
            altC.textContent = questions[round - 1].c;
            altD.textContent = questions[round - 1].d;
            roundHTML.textContent = round;

            startTimer();
        }

        function startTimer() {
            clearInterval(countdownID);
            clearTimeout(timerID);

            let timeLeft = 10; // Defina o tempo desejado em segundos
            timerHTML.textContent = timeLeft;

            countdownID = setInterval(() => {
                timeLeft--;
                timerHTML.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(countdownID);
                }
            }, 1000);

            timerID = setTimeout(timeOut, timeLeft * 1000);
        }

        function answer(alt) {
            clearInterval(countdownID);
            clearTimeout(timerID);

            if (alt === questions[round - 1].answer) {
                console.log('Acertou');

                if (round < questions.length) {
                    round++;
                    updateInfos();
                } else {
                    alert('Acabaram as questões');
                    window.location.replace('../html/index.html');
                }
            } else {
                console.log('Errou');
            }
        }

        function timeOut() {
            alert('O tempo acabou.');
            window.location.replace('../html/index.html');
        }

        updateInfos();