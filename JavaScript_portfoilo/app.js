const quiz = [
    {
        question: 'ゲーム市場、もっとも売れたゲーム機は？',
        answers: [
            ' スーパーファミコン',
            'プレステ2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        corecct: 'ニンテンドーDS'
    },  {
        question: 'ゲーム市場、もっとも売れたゲーム機は？',
        answers: [
            ' スーパーファミコン',
            'プレステ2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        corecct: 'ニンテンドーDS'
    },  {
        question: 'ゲーム市場、もっとも売れたゲーム機は？',
        answers: [
            ' スーパーファミコン',
            'プレステ2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        corecct: 'ニンテンドーDS'
    }
];

const quzLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


// クイズの問題文の準備
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    
    
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setUpQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].corecct === e.target.textContent){
        window.alert('正解！');
        score++;
    } else{
        window.alert('不正解！');
    }

    quizIndex++;
    if(quizIndex < quzLength){
        setUpQuiz();
    } else  {
        window.alert('終了!あなたの正解数は' + score + '/' + quzLength + 'です！');
    }
}

let handerIndex = 0;
while(handerIndex < buttonLength){
    $button[handerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handerIndex++;
}

