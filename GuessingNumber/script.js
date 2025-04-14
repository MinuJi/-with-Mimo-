let randomNumber;
let remainingChances = 0;
let gameStarted = false;

function startGame() {
  const selectedValue = Number(document.getElementById("chanceCount").value);
  if (!selectedValue) return;

  randomNumber = Math.floor(Math.random() * 100) + 1;
  remainingChances = selectedValue;
  gameStarted = true;

  document.getElementById("chanceDisplay").innerText = `남은 기회: ${remainingChances}번`;
  document.getElementById("result").innerText = "";
  document.getElementById("guess").value = "";
}

function checkGuess() {
  if (!gameStarted) {
    alert("먼저 기회를 선택해주세요!");
    return;
  }

  const guessInput = document.getElementById("guess").value;
  const guess = Number(guessInput);
  const result = document.getElementById("result");
  const gameImage = document.getElementById("gameImage");

  if (!guessInput || isNaN(guess) || guess < 1 || guess > 100) {
    const randomHint = Math.random() > 0.5 ? "🔼 UP" : "🔽 DOWN";
    result.innerHTML = `
      <div style="color: #e74c3c; font-weight: bold;">❗ ${randomHint} 숫자를 입력해주세요!</div>
    `;
    return;
  }

  if (guess === randomNumber) {
    result.innerHTML = "🎉 정답입니다! 축하합니다!";
    gameImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPAw7bhFuyCIOTDJXLX3uFA0PYqI025PUfA&s"; // ✅ 정답 이미지로 변경
    gameStarted = false;
  } else {
    remainingChances--;

    // ❌ 오답 이미지 랜덤
    const wrongImages = [
      "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F25BA3A33596F0FB730",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBDrDgZUG1OuAYHmeercvooNA45P1MvqASQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZONY05i9SYsutMRhWD6kDVo9cSkM6iwitAQ&s"
    ];
    const randomIndex = Math.floor(Math.random() * wrongImages.length);
    gameImage.src = wrongImages[randomIndex];

    // 🌀 흔들림 효과 추가
    gameImage.classList.add("shake");
    setTimeout(() => {
      gameImage.classList.remove("shake");
    }, 400);

    if (remainingChances <= 0) {
      result.innerHTML = `😭 아쉬워요..<br>정답은 ${randomNumber}이었어요.<br>다시 시도해보세요!`;
      gameStarted = false;
    } else {
      const hint = guess < randomNumber ? "🔼 UP" : "🔽 DOWN";
      result.innerHTML = `${hint}<br>남은 기회: ${remainingChances}번`;
    }
  }

  document.getElementById("chanceDisplay").innerText = `남은 기회: ${remainingChances}번`;
}

function resetGame() {
  gameStarted = false;
  randomNumber = null;
  remainingChances = 0;

  document.getElementById("guess").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("chanceDisplay").innerText = "기회를 선택해주세요";
  document.getElementById("chanceCount").value = "";

  document.getElementById("gameImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGqqykSj6qAgs7kNUpQG7K2C1cyw1pa8ujA&s";
  document.getElementById("startImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2iCAkKI4jn5mVUT8gIoYZEMPLHlo9V1zqw&s";
}
