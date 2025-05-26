const conditions = [
  n => n % 3 === 0 && '3의 배수',
  n => (''+n).includes('7') && '7 포함',
  n => {
    const sum = (''+n).split('').map(Number).reduce((a,b)=>a+b,0);
    return sum === 10 && '숫자 합이 10';
  },
  // 필요한 만큼 추가…
];

// 현재 조건 인덱스, 점수 초기화
let idx = 0, score = 0;

// 조건 표시 함수
function showCondition() {
  idx = Math.floor(Math.random() * conditions.length);
  const desc = conditions[idx](NaN); // 조건 함수에 dummy 전달해 설명 얻기
  document.getElementById('condition').innerText = `조건: ${desc}`;
}

// 입력 확인 함수
function checkGuess() {
  const n = parseInt(document.getElementById('guess').value, 10);
  const result = conditions[idx](n);
  const msgEl = document.getElementById('message');
  
  if (result) {
    score += 10;
    msgEl.innerText = `👍 정답! +10점`;
  } else {
    msgEl.innerText = `❌ 틀렸어요. 다시 도전!`;
  }
  document.getElementById('score').innerText = `점수: ${score}`;
  document.getElementById('guess').value = '';
  showCondition();  // 다음 라운드
}

// 이벤트 바인딩
document.getElementById('checkBtn').addEventListener('click', checkGuess);

// 초기 상태
showCondition();
