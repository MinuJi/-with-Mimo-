function change() {

    let enter = document.getElementById("enterNumber").value;
    let now = document.getElementById("nowNumber").value;
    let want = document.getElementById("wantNumber").value;
    
    if (enter === "" || isNaN(enter)) {
      document.getElementById("result").innerText = "올바른 숫자를 입력하세요";
      return;
     }
    
    enter = parseFloat(enter);
    let mmValue;
    
    if (now === "mm") {
      mmValue = enter;
    } else if (now === "cm") {
      mmValue = enter * 10; 
    } else if (now === "m") {
      mmValue = enter * 1000; 
    } else if (now === "km") {
      mmValue = enter * 1000000; 
    } else {
      document.getElementById("result").innerText = "잘못 적으셨습니다..";
      return;
    }
    
    let changeUnit;
    
    if (want === "mm") {
      changeUnit = mmValue;
    } else if (want === "cm") {
      changeUnit = mmValue / 10; 
    } else if (want === "m") {
      changeUnit = mmValue / 1000; 
    } else if (want === "km") {
      changeUnit = mmValue / 1000000; 
    } else {
      document.getElementById("result").innerText = "잘못 입력하셨습니다..";
      return;
    }
    
    
    
    document.getElementById("result").innerText = `변환 결과: ${changeUnit.toFixed(0)} ${want}`;
    
    console.log(`입력값: ${enter} ${now}`);
    console.log(`변환단위: ${want}`);
    console.log(`변환결과: ${changeUnit.toFixed(0)} ${want}`);
    }