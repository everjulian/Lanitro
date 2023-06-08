//Dias
function decrementCounter() {
    const counterElement = document.getElementById("counter");
    const registrationBtn = document.getElementById("registrationBtn");
    let currentNumber = parseInt(counterElement.innerText);
  
    if (currentNumber > 0) {
      currentNumber--;
      counterElement.innerText = currentNumber;
    }
  
    if (currentNumber === 0) {
      registrationBtn.disabled = true;
    }
  }
  
  
  
  // Obtiene la fecha actual
  const currentDate = new Date();
  
  // Calcula la fecha objetivo restando 63 días a la fecha actual
  const targetDate = new Date(currentDate);
  targetDate.setDate(targetDate.getDate() - 63);
  
  // Calcula la diferencia en días entre la fecha actual y la fecha objetivo
  const timeDiff = Math.abs(currentDate.getTime() - targetDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  // Establece la diferencia como el valor inicial del contador
  document.getElementById("counter").innerText = daysDiff;
  
  // Llama a decrementCounter cada 24 horas (86400000 milisegundos) hasta que el contador llegue a 0
  const intervalId = setInterval(decrementCounter, 86400000);
  if (daysDiff === 0) {
    clearInterval(intervalId);
  }
  