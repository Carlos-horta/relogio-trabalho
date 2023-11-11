function updateTime() {
    // Obtém a hora atual
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
  
    // Atualiza o relógio
    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minute").innerHTML = minute;
    document.querySelector(".second").innerHTML = second;
  }
  
  // Inicia o temporizador
  setInterval(updateTime, 1000);
  