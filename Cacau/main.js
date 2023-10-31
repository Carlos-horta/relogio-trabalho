function updateTime() {
    // Obtém a hora atual
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
  
    // Atualiza o relógio
    document.querySelector(".hour").textContent = hour;
    document.querySelector(".minute").textContent = minute;
    document.querySelector(".second").textContent = second;
  }
  
  // Inicia o temporizador
  setInterval(updateTime, 1000);
  