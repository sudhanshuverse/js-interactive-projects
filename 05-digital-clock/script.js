const time = document.querySelector('.time')

setInterval(() => {
    const currentTime = new Date;
    time.innerText = currentTime.toLocaleTimeString('en')
}, 1000)
