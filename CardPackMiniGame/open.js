// '다시 돌아가기' 버튼 클릭 시 이전 페이지로 돌아가기
function goBack() {
    window.history.back(); // 이전 페이지로 돌아간다.
  }
  
  // "다음" 버튼 클릭 시 next.html로 이동
  function gogo() {
      window.location.href = "next.html";
  }
  
  function toggleCheckbox(selected) {
      const yesCheckbox = document.getElementById("yesCheckbox");
      const noCheckbox = document.getElementById("noCheckbox");
  
      if (selected === "yes") {
          noCheckbox.checked = false; // "네"를 선택하면 "아니요"는 해제
      } else {
          yesCheckbox.checked = false; // "아니요"를 선택하면 "네"는 해제
      }
  
      // 선택된 값을 표시
      document.getElementById("checkboxResult").textContent =(yesCheckbox.checked ? "다음 버튼을 눌러주세요!" : "네 알겠습니다!");
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
  
  function getRandomPlayerWithWeight(players) {
    const random = Math.random();
    let weightSum = 0;
  
    for (const player of players) {
      weightSum += player.weight;
  
      if(random <= weightSum) {
        return player;
      }
    }
  }
  
  function firstPack() {
   const el = document.querySelector(".firstCard");
   const paragraph = document.querySelector(".playerName"); 
  
   const selectedPlayer = getRandomPlayerWithWeight(playersFirstPack);
   
   el.src= selectedPlayer.img;
   paragraph.innerHTML = "OVR: " + selectedPlayer.ovr + "<br>" + selectedPlayer.position + "<br>" + selectedPlayer.name;
  }
  
   function firstBack() {
   const el = document.querySelector(".firstCard");
   const paragraph = document.querySelector(".playerName"); 
   el.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTEgit69CLM0EzgmkkxxDZ8UE7vbfpG9HTw&s";
   paragraph.textContent = "";
   }