document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  const capital = parseInt(localStorage.getItem("capital")) || 100000;
  const currentDay = parseInt(localStorage.getItem("currentDay")) || 1;

  document.getElementById("playerName").textContent = `${username} 💼`;
  updateCapitalDisplay(capital);

  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cost = parseInt(btn.dataset.cost);
      const name = btn.dataset.name;
      let capitalNow = parseInt(localStorage.getItem("capital")) || 100000;
      capitalNow += cost;
      localStorage.setItem("capital", capitalNow);
      updateCapitalDisplay(capitalNow);
      
      document.getElementById("result1").textContent =
        `Құттықтаймыз! Сіз "${name}" дизайнын таңдадыңыз. Шығын: ${Math.abs(cost)} ₸. Қалған капитал: ${capitalNow} ₸.`;
      
      unlockNextDay();
    });
  });
});

function updateCapitalDisplay(amount) {
  document.getElementById("capitalDisplay").textContent = `💰 Капитал: ${amount.toLocaleString()} ₸`;
}

function unlockNextDay() {
  const day1 = document.getElementById("day1");
  const day2 = document.getElementById("day2");
  day1.classList.remove("open");
  day1.classList.add("locked");
  day2.classList.remove("locked");
  day2.classList.add("open");
  day2.querySelector("h3").textContent = "2-КҮН ашылды ✅";
  localStorage.setItem("currentDay", 2);
}




// === setupDay3() ішіндегі finishDay3.addEventListener(...) блогы ===
if (correctCount === 3) {
    // ... капиталды жаңарту кодтары ...
    result.textContent = "🎉 Құттықтаймыз! Барлық есеп дұрыс! +2,000 ₸ бонус!";
    
    // 👇 БҰЛ ЖЕРДЕ 4-КҮН АШЫЛУЫ КЕРЕК
    unlockNextDay(4); 
}

function unlockNextDay(nextDay) {
    // ...
    if (nextDay === 4) setupDay4Logic(); // 👈 БҰЛ ЖОЛДЫҢ БАР ЕКЕНІН ТЕКСЕРІҢІЗ
    // ...
    const nextBlock = document.getElementById(`day${nextDay}`);
    if (nextBlock) {
        nextBlock.classList.remove("locked");
        nextBlock.classList.add("open");
        // ...
    }
}















