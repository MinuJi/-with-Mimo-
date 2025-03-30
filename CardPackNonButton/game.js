// 게임 데이터 로드
let players = JSON.parse(localStorage.getItem("players")) || [];
let currentPlayerIndex = parseInt(localStorage.getItem("currentPlayerIndex")) || 0;
let gamesPerPlayer = parseInt(localStorage.getItem("gamesPerPlayer"));
let totalPlayers = parseInt(localStorage.getItem("totalPlayers"));

function startGame() {
  if (players.length === 0) {
    alert("선수 데이터를 가져올 수 없습니다!");
    return;
  }

  document.getElementById("gameArea").style.display = "block";
  document.getElementById("currentPlayer").textContent = players[currentPlayerIndex].name + "'s Turn!";
  document.getElementById("result").style.display = "none";
  document.getElementById("showResultBtn").style.display = "none";

    // 카드 이미지 클릭 시 드로우 카드 실행
  document.getElementById("firstCard").addEventListener("click", drawCard);
}

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

// 카드팩 이미지 초기화 함수
function resetCardImage() {
  // 초기 카드팩 이미지로 되돌리기
  document.getElementById("firstCard").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTEgit69CLM0EzgmkkxxDZ8UE7vbfpG9HTw&s";
}

 function drawCard() {
  // playersFirstPack에서 랜덤 카드 선택
  const randomIndex = Math.floor(Math.random() * playersFirstPack.length);
  const selectedPlayer = playersFirstPack[randomIndex];

  const cardImg = document.getElementById("firstCard");
  cardImg.classList.remove("sparkle", "lightning", "shake");

  players[currentPlayerIndex].ovrScores.push(selectedPlayer.ovr);
  players[currentPlayerIndex].totalOVR = players[currentPlayerIndex].ovrScores.reduce((a, b) => a + b, 0);

  cardImg.src = selectedPlayer.img;

  setTimeout(() => {
    if (selectedPlayer.ovr >= 92) {
      cardImg.classList.add("lightning", "shake", "sparkle");
    } else if (selectedPlayer.ovr >= 89) {
      cardImg.classList.add("sparkle");
    }
  }, 50);

  document.getElementById("playerOVR").textContent = `${selectedPlayer.name} - OVR: ${selectedPlayer.ovr}`;

  // 게임 횟수를 모두 완료하면 알림을 띄우고, 카드 클릭을 막음
  if (players[currentPlayerIndex].ovrScores.length >= gamesPerPlayer) {
    alert("이 카드는 마지막 장입니다!");
    document.getElementById("firstCard").removeEventListener("click", drawCard);  // 클릭 이벤트 리스너 제거

    // "다음 턴" 버튼 활성화
    document.getElementById("nextTurnBtn").style.display = "block";
  }
}

function nextTurn() {
  // 현재 플레이어가 남은 카드 횟수를 다 완료했는지 체크
  if (players[currentPlayerIndex].ovrScores.length < gamesPerPlayer) {
    alert("게임 횟수를 모두 완료해야 다음 플레이어로 이동할 수 있습니다!");
    return;
  }

  // 턴 넘기기
  currentPlayerIndex++;

    if (currentPlayerIndex < totalPlayers) {
    // 다음 플레이어로 턴을 변경
    document.getElementById("currentPlayer").textContent = `${players[currentPlayerIndex].name}'s Turn!`;
    localStorage.setItem("currentPlayerIndex", currentPlayerIndex);  // 현재 플레이어 인덱스 저장

    // 카드팩 이미지 초기화
    resetCardImage();

    // 카드팩 클릭 이벤트 활성화
    document.getElementById("firstCard").addEventListener("click", drawCard);

    // "다음 턴" 버튼 숨기기
    document.getElementById("nextTurnBtn").style.display = "none";
  } else {
    // 게임 종료 후
    document.getElementById("currentPlayer").textContent = "모든 플레이어 완료, 결과를 확인하세요!";
    document.getElementById("showResultBtn").style.display = "block";  // 결과 버튼 활성화
    // 결과 보기 버튼 클릭 시 호출
    document.getElementById("showResultBtn").addEventListener("click", showResult);
  }
}

function goBack() {
  window.location.href = "next.html";
}

// 게임 시작
startGame();

// 결과 페이지로 이동하기 전에 데이터를 저장하는 함수
function showResult() {
  // 결과 데이터를 localStorage에 저장
  const resultData = {
    players: players.map(player => ({
      name: player.name,
      totalOVR: player.totalOVR,
    })),
  };

  localStorage.setItem('gameResult', JSON.stringify(resultData));

  // 결과 페이지로 이동
  window.location.href = 'result.html';  // 결과 페이지로 이동
}
