// '다시 돌아가기' 버튼 클릭 시 이전 페이지로 돌아가기
function goBack() {
    window.history.back(); // 이전 페이지로 돌아간다.
  }
  
  function change() {
  
  let enter = document.getElementById("enterNumber").value;
  let now = document.getElementById("nowNumber").value;
  let want = document.getElementById("wantNumber").value;
  
  if (enter === "" || isNaN(enter)) {
    document.getElementById("result").innerText = "올바른 숫자를 입력하세요";
    return;
   }
  
  enter = parseFloat(enter);
  let milesValue;
  
  if (now === "km") {
    milesValue = enter;
  }  else if (now === "miles") {
    milesValue = enter * 1.60934;
  } else {
    document.getElementById("result").innerText = "잘못 적으셨습니다..";
    return;
  }
  
  let changeUnit;
  
  if (want === "km") {
    changeUnit = milesValue;
  } else if (want === "miles") {
    changeUnit = milesValue / 1.60934;
  }  else {
    document.getElementById("result").innerText = "잘못 입력하셨습니다..";
    return;
  }
  
  
  
  document.getElementById("result").innerText = `변환 결과: ${changeUnit.toFixed(0)} ${want}`;
  
  console.log(`입력값: ${enter} ${now}`);
  console.log(`변환단위: ${want}`);
  console.log(`변환결과: ${changeUnit.toFixed(0)} ${want}`);
  }