document.addEventListener('DOMContentLoaded', function () {
    const resultData = JSON.parse(localStorage.getItem('gameResult'));
  
    if (resultData && resultData.players && resultData.players.length > 0) {
      determineWinner(resultData.players); // 👉 이 부분에서 순위 및 승자 처리
    } else {
      document.getElementById("result").innerHTML = "<p>No result data found.</p>";
    }
  });
  
  function determineWinner(players) {
    // OVR 내림차순 정렬
    players.sort((a, b) => b.totalOVR - a.totalOVR);
  
    const topScore = players[0].totalOVR;
    const winners = players.filter(p => p.totalOVR === topScore);
  
    let resultText = "";
  
    if (winners.length === 1) {
      resultText += `
    <div class="center-winner">
      🏆 <strong>${winners[0].name}</strong> 우승!! 🏆
    </div><br>`;
    } else {
      const names = winners.map(p => `<strong>${p.name}</strong>`).join(", ");
      resultText += `
    <div class="center-winner">
      🤝 무승부입니다! (${names})
    </div><br>`;
    }
  
    // 순위 계산
    let rank = 1;
    let tableRows = "";
    for (let i = 0; i < players.length; i++) {
      if (i > 0 && players[i].totalOVR !== players[i - 1].totalOVR) {
        rank = i + 1;
      }
      tableRows += `
        <tr>
          <td>${rank}</td>
          <td>${players[i].name}</td>
          <td>${players[i].totalOVR}</td>
        </tr>`;
    }
  
    const tableHTML = `
      <table class="result-table">
        <thead>
          <tr>
            <th>순위</th>
            <th>이름</th>
            <th>총합 OVR</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
  
    // 최종 결과 삽입
    document.getElementById("result").innerHTML = resultText + tableHTML;
  }
  