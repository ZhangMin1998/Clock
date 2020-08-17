let digits = document.getElementsByClassName('digit'),
    pixels = document.getElementsByClassName('pixel')

function setTime() {
    let i,
        date = new Date(),
        seconds = date.getSeconds(),
        pixels_to_toggle = (seconds === 0) ? 60 : seconds,
        time_numbers = ((date).toTimeString().substr(0, 6)).split(':').join('')

    for (i = 0; i < time_numbers.length; i++) {
        digits[i].className = 'digit digit__' + time_numbers.charAt(i)
    }

    for (i = 0; i < pixels_to_toggle; i++) {
        pixels[i].classList.toggle('pixel__active', seconds !== 0)
    }
}

setTime()
setInterval(setTime, 500)