const countdown = document.querySelector('.countdown');

// SET LAUNCH DATE (MS)
const launchDate = new Date('july 15, 2018 11:00:00').getTime();

// UPDATE EVERY SECOND
const intvl = setInterval(() => {
    // GET TODAYS DATE AND TIME (MS)
    const now = new Date().getTime();

    // DISTANCE FROM NOW TO THE LAUNCH DATE
    const distance = launchDate - now;

    // TIME CALCULATIONS
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // DISPLAY RESULT
    countdown.innerHTML = `
        <div>${days}<span> Days</span></div>
        <div>${hours}<span> Hours</span></div>
        <div>${mins}<span> Minutes</span></div>
        <div>${seconds}<span> Seconds</span></div>
    `;

    // IF LAUNCH DATE PASSED
    if(distance < 0){
        // STOP COUNTDOWN
        clearInterval(intvl);
        // STYLE AND OUTPUT TEXT
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000);