function goToOpenPage() {
    window.location.href = "open.html";  // open.html 페이지로 이동
  }
  
  function press() {
   const el = document.querySelector("#who");
   const paragraph = document.querySelector("#what"); 
   el.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndPW9Mql9e2iKKUi8ObVVZzOGvaXzVGdjpg&s";
   paragraph.textContent = "과연 누가 나올까요?";
   }
  
   function practiceBack() {
   const el = document.querySelector("#who");
   const paragraph = document.querySelector("#what"); 
   el.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtNhhArQt2gDqVVtc_K_n-3OhMrfBLjyIHg&s";
   paragraph.textContent = "";
   }