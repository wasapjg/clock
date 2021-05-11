const addZero = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const hoursContainer = document.querySelector('.hours');
// const minutesContainer = document.querySelector('.minutes');
// const secondsContainer = document.querySelector('.seconds');


const updateHour = setInterval(function (){
    const date = new Date;
    // let hours = date.getHours()
    // let minutes = date.getMinutes()
    // let seconds = date.getSeconds()

    // hoursContainer.innerHTML = hours
    // minutesContainer.innerHTML = minutes
    // secondsContainer.innerHTML = seconds

    hoursContainer.innerHTML = `${addZero(date.getHours())} : ${addZero(date.getMinutes())} : ${addZero(date.getSeconds())}`;

},1000)