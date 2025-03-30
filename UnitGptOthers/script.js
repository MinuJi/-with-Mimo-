document.addEventListener("DOMContentLoaded", () => {
    let enterInput = document.getElementById("enterNumber");
    let nowUnit = document.getElementById("nowNumber");
    let wantUnit = document.getElementById("wantNumber");
    let resultDisplay = document.getElementById("result");
  
    // ✅ 변환 기준 객체 (모든 단위를 mm 기준으로 변환)
    const conversionRates = {
      "mm": 1,
      "cm": 10,
      "m": 1000,
      "km": 1000000
    };
  
    // ✅ 숫자인지 확인하는 함수 (빈 문자열 & 음수 방지)
    const isNum = (value) => value !== "" && !isNaN(parseFloat(value)) && parseFloat(value) >= 0;
  
    // ✅ 자동 변환 함수
    function change() {
      let enterValue = parseFloat(enterInput.value);
      let now = nowUnit.value;
      let want = wantUnit.value;
  
      // 숫자가 아니거나 음수일 경우 에러 메시지
      if (!isNum(enterInput.value)) {
        resultDisplay.innerText = "올바른 숫자를 입력하세요! (0 이상의 숫자)";
        resultDisplay.style.color = "red";
        return;
      }
  
      // ✅ 입력값을 mm 기준으로 변환
      let mmValue = enterValue * conversionRates[now];
  
      // ✅ mm 값을 원하는 단위로 변환
      let convertedValue = mmValue / conversionRates[want];
  
      // ✅ 변환 결과 출력 (정수는 그대로, 소수는 2자리까지)
      resultDisplay.innerText = `변환 결과: ${convertedValue % 1 === 0 ? convertedValue : convertedValue.toFixed(2)} ${want}`;
      resultDisplay.style.color = "green";
    }
  
    // ✅ 입력 & 드롭다운 변경 시 자동 변환되도록 이벤트 추가
    enterInput.addEventListener("keyup", change);
    nowUnit.addEventListener("change", change);
    wantUnit.addEventListener("change", change);
  });