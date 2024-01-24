function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    document.getElementById('hour').textContent = hours;
    document.getElementById('minute').textContent = minutes;
    document.getElementById('second').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
  
    setTimeout(updateClock, 1000);
  }
  
  updateClock();
  