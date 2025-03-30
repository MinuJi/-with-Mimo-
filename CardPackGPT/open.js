// '다시 돌아가기' 버튼 클릭 시 이전 페이지로 돌아가기
function goBack() {
    window.history.back(); // 이전 페이지로 돌아감
  }
  
  const playersFirstPack = [
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcsKyGtyr6kZCF6pYL6IxhaHTBPhYEolT0A&s", weight: 0.1, name:
    "Ruud van Nistelrooy"}, //반니 1
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx5o188MHAzKGAQTn3reeC3EX17GI-oys8g&s" , weight: 0.035, name: "Cristiano Ronaldo"}, //호날두 2
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKV4hiFsbTYi7ii2cbm94ptwawzG_CfhxoA&s" , weight: 0.1, name: "Gareth Bale"},  // 베일 3
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPxxa5iZWqbKwOHEMzjcNn86KzfLScWb1QQ&s", weight: 0.1, name: "Didier Drogba"}, // 드록바 4
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HoyQFEZ-Mk1yr_Q9XHnufho5u-aTAPK78w&s", weight:0.015, name: "Ronaldo R9"}, //호돈신 5
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vCRwbFk2BSYtijlpJ9AFlD5pBTLLJdAcQg&s", weight:0.05, name: 
    "Ruud Gullit"}, //굴리트 6
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98teQPDYYZ0XaNHBiFS4Mgzt0N2Qc_syo1A&s", weight:0.1, name: 
    "박지성"}, //박지성 7
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8GOfQ5_t6ohJaIDRhwd8AcIcO8mwbYzOrw&s", weight:0.1, name: "Ronaldinho Gaúcho"}, //호나우지뉴 8
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrIuN8BvrwtMNZ9pNWr-u8mxK_1EFkqyz6g&s", weight:0.05, name:   "David Beckham"}, //베컴 9
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZh5NbYdw36rJxNdSteWoZ3Lxuv2Y3oRvbSA&s", weight:0.15, name:
    "Edwin van der Sar"}, //반데사르 10
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLY_6Svr7zerCN7XzKBBHNVSFeowsehQZjQ&s", weight:0.15, name:
    "Roberto Carlos"}, //호카
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTsP2GEXhEM1SPsiFFZD6ch9TWVVbUl7kEQ&s", weight:0.025, name:
    "Zinedine Zidane"}, //지단
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUHsk4cYeQnuOXxP3wwu3ldfIhYEzxcCn8g&s", weight:0.035, name:
    "Lionel Messi"} //메시
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
   paragraph.textContent = selectedPlayer.name;
   }
  
   function firstBack() {
   const el = document.querySelector(".firstCard");
   const paragraph = document.querySelector(".playerName"); 
   el.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTEgit69CLM0EzgmkkxxDZ8UE7vbfpG9HTw&s";
   paragraph.textContent = "";
   }