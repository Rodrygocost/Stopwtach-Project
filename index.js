const StartBtn = document.getElementById("StartCouting");
const ChooseNumber = document.getElementById("ChooseNumber");
const Counting = document.querySelector("h2");
const RestartBtn = document.getElementById("Restart Button");
let CountingNumber = 0;

StartBtn.addEventListener("click", () => {
  const SetIntervalId = setInterval(() => {
    CountingNumber += 1;
    Counting.textContent = CountingNumber;
    if (CountingNumber >= ChooseNumber.value) {
      clearInterval(SetIntervalId);
      return SetIntervalId;
    }
  }, 1000);
  return SetIntervalId;
});

RestartBtn.addEventListener("click", () => {
  location.reload();
});
