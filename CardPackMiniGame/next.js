let players = [];
let currentPlayerIndex = 0;
let gamesPerPlayer = 1;
let totalPlayers = 1;

   // 이름 입력창 자동 생성
      function showNameInputs() {
        const count = parseInt(document.getElementById("playerCount").value);
        const container = document.getElementById("nameInputs");
        container.innerHTML = "";

    for (let i = 0; i < count; i++) {
     const input = document.createElement("input");
     input.type = "text";
     input.placeholder = `Player ${i + 1} 이름을 적어주세요`;
     input.id = `playerName${i}`;
     input.style.margin = "5px 0";
     container.appendChild(input);
     container.appendChild(document.createElement("br"));
  }
}

// 선수 데이터 (샘플)
const playersFirstPack = [
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcsKyGtyr6kZCF6pYL6IxhaHTBPhYEolT0A&s", weight: 0.05, name:
  "Ruud van Nistelrooy", ovr:87,position:"ST"}, //반니 1
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx5o188MHAzKGAQTn3reeC3EX17GI-oys8g&s" , weight: 0.004, name: "Cristiano Ronaldo", ovr: 96,position: "LW"}, //호날두 2
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKV4hiFsbTYi7ii2cbm94ptwawzG_CfhxoA&s" , weight: 0.07, name: "Gareth Bale", ovr: 85, position: "RW"},  // 베일 3
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPxxa5iZWqbKwOHEMzjcNn86KzfLScWb1QQ&s", weight: 0.06, name: "Didier Drogba", ovr: 86, position: "ST"}, // 드록바 4
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HoyQFEZ-Mk1yr_Q9XHnufho5u-aTAPK78w&s", weight:0.006, name: "Ronaldo Nazario", ovr: 95, position: "ST"}, //호돈신 5
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vCRwbFk2BSYtijlpJ9AFlD5pBTLLJdAcQg&s", weight:0.08, name: 
  "Ruud Gullit", ovr: 94, position: "CAM"}, //굴리트 6
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98teQPDYYZ0XaNHBiFS4Mgzt0N2Qc_syo1A&s", weight:0.07, name: 
  "박지성", ovr:84, position:"CM"}, //박지성 7
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8GOfQ5_t6ohJaIDRhwd8AcIcO8mwbYzOrw&s", weight:0.04, name: "Ronaldinho Gaúcho", ovr:89, position:"LW"}, //호나우지뉴 8
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrIuN8BvrwtMNZ9pNWr-u8mxK_1EFkqyz6g&s", weight:0.05, name:   "David Beckham", ovr:87, position:"RM" }, //베컴 9
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZh5NbYdw36rJxNdSteWoZ3Lxuv2Y3oRvbSA&s", weight:0.06, name:
  "Edwin vander Sar", ovr:85, position:"GK"}, //반데사르 10
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLY_6Svr7zerCN7XzKBBHNVSFeowsehQZjQ&s", weight:0.05, name:
  "Roberto Carlos", ovr:87, position:"LB"}, //호카 11
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTsP2GEXhEM1SPsiFFZD6ch9TWVVbUl7kEQ&s", weight:0.005, name:
  "Zinedine Zidane", ovr:95, position:"CAM"}, //지단 12
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUHsk4cYeQnuOXxP3wwu3ldfIhYEzxcCn8g&s", weight:0.002, name:
  "Lionel Messi", ovr:98, position:"RW"}, //메시 13
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxtsR4MXV6XJVWU7-P_b6wrB9rTrvyjrIjw&s", weight:0.055, name:
  "손흥민", ovr:87, position:"LW"}, //손흥민 14
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDRZCCSxeMMDFQK83FbR4GuUPh2fdFsnINg&s", weight:0.06, name:
  "Jude Bellingham", ovr:86, position:"CAM"}, //벨링엄 15
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9OCDVCFARXDPN0ph0iSHGI3X093e8pCUhA&s", weight:0.05, name:
  "Kylian Mbappé", ovr:87, position:"ST"}, //음바페 16
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TFcBpF3jXbFUr4c-YZnH_6PpcJHNNjs5IQ&s", weight:0.04, name:
  "Sergio Ramos", ovr:88, position:"CB"}, //라모스 17
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFeBPvnvGqqh65hJzi8hS3Q2qB3Gi4EFayw&s", weight:0.048, name:
  "Iker Casillas", ovr:87, position:"GK"}, //카시야스 18
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4DfSjgMT4pZoVM3qNZR2HH3xfSDvtDKO1w&s", weight:0.03, name:
  "Gianluigi Buffon", ovr:89, position:"GK"}, //부폰 19
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoD3mrD-Q4Tit_8SjwYLSIVli0E7t0-UiWQ&s", weight:0.04, name:
  "Luka Modrić", ovr:88, position:"CM"}, //모드리치 20
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMgOse8tcj9ftKZLOm2eT9ptrnSJ6yYbjQg&s", weight:0.03, name:
  "Harry Kane", ovr:89, position:"ST"}, //케인 21
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46NAz4U7XhwVdY0YuhtOQ0E6WI8x_JXjcTg&s", weight:0.05, name:
  "Javier Zanetti", ovr:86, position:"RB"}, //사네티 22
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlbsFHKHWMj_ldAgLmz8LGvhLU3x8tp71MQ&s", weight:0.03, name:
  "Paolo Maldini", ovr:90, position:"LB"}, //말디니 22
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBIg7zunqzYvneiOcUg-yfW4AxkdKR4d95g&s", weight:0.02, name:
  "차범근", ovr:91, position:"RW"}, //차범근 23
];

// 게임 시작
function startGame() {
    totalPlayers = parseInt(document.getElementById("playerCount").value);
    gamesPerPlayer = parseInt(document.getElementById("gameCount").value);

    // 플레이어 초기화
    players = [];
  for (let i = 0; i < totalPlayers; i++) {
    const nameInput = document.getElementById(`playerName${i}`);
    const name = nameInput && nameInput.value.trim() !== "" ? nameInput.value.trim() : `Player ${i + 1}`;
    players.push({ name, ovrScores: [], totalOVR: 0 });
  }

   currentPlayerIndex = 0;
        document.getElementById("gameArea").style.display = "block";
        document.getElementById("currentPlayer").textContent = players[currentPlayerIndex].name + "'s Turn!";
        document.getElementById("result").style.display = "none";
        document.getElementById("showResultBtn").style.display = "none";
}

// 카드팩 개봉
function drawCard() {
  const player = players[currentPlayerIndex];
  if (player.ovrScores.length >= gamesPerPlayer) {
    alert("더 이상 개봉할 수 없습니다!");
    return;
  }

  const selectedPlayer = playersFirstPack[Math.floor(Math.random() * playersFirstPack.length)];

  // OVR 저장
  player.ovrScores.push(selectedPlayer.ovr);
  player.totalOVR = player.ovrScores.reduce((a, b) => a + b, 0);

  // 카드 이미지 요소
  const cardImg = document.getElementById("playerCard");

  // 기존 효과 제거
  cardImg.classList.remove("sparkle", "lightning", "shake");

  // 이미지 업데이트
  cardImg.src = selectedPlayer.img;

  // 반짝이/번개 효과 적용 (잠깐 딜레이 주면 리셋됨)
  setTimeout(() => {
    if (selectedPlayer.ovr >= 92) {
      cardImg.classList.add("lightning", "shake", "sparkle");
    } else if (selectedPlayer.ovr >= 89) {
      cardImg.classList.add("sparkle");
    }
  }, 50);

  // 이름 + OVR 표시
  document.getElementById("playerOVR").textContent = `${selectedPlayer.name} - OVR: ${selectedPlayer.ovr}`;
}

// 다음 플레이어로 이동
function nextTurn() {
    if (players[currentPlayerIndex].ovrScores.length < gamesPerPlayer) {
        alert("게임 횟수를 모두 완료해야 다음 플레이어로 이동할 수 있습니다!");
        return;
    }

    currentPlayerIndex++;
   if (currentPlayerIndex < totalPlayers) {
          document.getElementById("currentPlayer").textContent = players[currentPlayerIndex].name + "'s Turn!";
          document.getElementById("playerCard").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTEgit69CLM0EzgmkkxxDZ8UE7vbfpG9HTw&s";
          document.getElementById("playerOVR").textContent = "";
    } else {
        document.getElementById("currentPlayer").textContent = "모든 플레이어 완료 이제 결과를 확인해보세요!";
        document.getElementById("showResultBtn").style.display = "block";
    }
}

// 승자 결정 및 총합 OVR 표시
function determineWinner() {
  players.sort((a, b) => b.totalOVR - a.totalOVR);

  const topScore = players[0].totalOVR;
  const winners = players.filter(p => p.totalOVR === topScore);

  let resultText = "";

  if (winners.length === 1) {
    resultText += `🏆 ${winners[0].name} Wins! 🏆<br><br>`;
  } else {
    const names = winners.map(p => p.name).join(", ");
    resultText += `🤝 무승부입니다! (${names})<br><br>`;
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

  document.getElementById("result").innerHTML = resultText + tableHTML;
  document.getElementById("result").style.display = "block";
  document.getElementById("showResultBtn").style.display = "none";
}

// 다시 돌아가기
function goBack() {
    window.history.back();
}