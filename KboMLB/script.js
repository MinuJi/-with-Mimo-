function nextPage() {
    window.location.href = "translate.html";  // translate.html 페이지로 이동
  }
  
  
    function checkAnswer() {
      const userInput = parseFloat(document.getElementById("userAnswer").value);
      const correctAnswer = 100 * 1.60934; // 100마일 → km 변환값
      const resultEl = document.getElementById("result");
  
      if (isNaN(userInput)) {
        resultEl.innerText = "숫자를 입력해주세요!";
        return;
      }
  
      // 오차 허용 (소수점 입력 때문에)
      const tolerance = 0.1;
  
      if (Math.abs(userInput - correctAnswer) < tolerance) {
        resultEl.innerText = "정답입니다!";
      } else {
        resultEl.innerText = "틀렸습니다..";
      }
    }