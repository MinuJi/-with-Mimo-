document.addEventListener("DOMContentLoaded", () => {
    const screenContent = document.getElementById("screen-content");
    const screenText = document.getElementById("screen-text");
    const nextBtn = document.getElementById("next-btn");
    const btnOn = document.getElementById("power-on");
    const btnOff = document.getElementById("power-off");
  
    // ✅ Turn ON
    btnOn.addEventListener("click", () => {
      screenContent.style.backgroundColor = "#fff";
      screenContent.style.color = "#000";
      screenText.innerText = "안녕하세요!";
      nextBtn.style.display = "block";
    });
  
    // ✅ Turn OFF → 초기 상태로 리셋
    btnOff.addEventListener("click", () => {
      screenContent.style.backgroundColor = "#000";
      screenContent.style.color = "#0f0";
      screenText.innerText = "";
      nextBtn.style.display = "none";
    });
  
    // ✅ 다음 클릭 시 → 게임 리스트 화면으로 전환
  nextBtn.addEventListener("click", () => {
    screenContent.style.backgroundColor = "#eef";
    screenContent.style.color = "#111";
    screenText.innerHTML = `
      <div style="
        text-align: center;
        font-family: 'Courier New', monospace;
      ">
        <h2 style="
          margin-bottom: 20px;
          font-size: 28px;
          color: #222;
          text-shadow: 1px 1px #ccc;
        ">🎮 Game List</h2>
  
        <ul style="
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        ">
          <li>
            <a href="https://3u5u0s.mimo.run/index.html" target="_blank" style="
              text-decoration: none;
              color: #2c3e50;
              background-color: #ffe8cc;
              padding: 10px 20px;
              border-radius: 8px;
              display: inline-block;
              transition: background 0.2s;
            ">🧠🔢 Guess Number</a>
          </li>
          <li>
            <a href="https://fd1fit.mimo.run/index.html" target="_blank" style="
              text-decoration: none;
              color: #2c3e50;
              background-color: #e0f7fa;
              padding: 10px 20px;
              border-radius: 8px;
              display: inline-block;
              transition: background 0.2s;
            ">🃏 Card Game</a>
          </li>
          <li>
            <a href="https://vidkidz.tistory.com/605" target="_blank" style="
              text-decoration: none;
              color: #2c3e50;
              background-color: #ffd6d6;
              padding: 10px 20px;
              border-radius: 8px;
              display: inline-block;
              transition: background 0.2s;
            ">💪 Dad and Son</a>
          </li>
          </ul>
        </div>
      `;
      nextBtn.style.display = "none";
    });
  });
  
  
  