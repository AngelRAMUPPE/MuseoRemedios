function incrementValue() {
    const input = document.getElementById('ticketCount');
    const currentValue = parseInt(input.value, 10);
    if (currentValue < 7) {
      input.value = currentValue + 1;
    }
  }
  
  function decrementValue() {
    const input = document.getElementById('ticketCount');
    const currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
      input.value = currentValue - 1;
    }
  }

const btnSig = document.getElementById("btn-next");

if (btnSig) {
    btnSig.addEventListener("click", () => {
        window.location.href = "/404";
    })
}