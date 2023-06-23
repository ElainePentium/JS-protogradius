const init = () => {
    console.log("Gradius");

    const body = document.querySelector("body");
    console.log(body.offsetHeight);
    console.log(body.offsetWidth);
    
    body.insertAdjacentHTML('beforeend',"<img src='shuttle.png' class='shuttle'>");
    const shuttle = document.querySelector(".shuttle");

    document.addEventListener("keydown", event => {
        // console.log("key: ",event.code);
        if (event.code == 'ArrowRight') {
            if (parseFloat(window.getComputedStyle(shuttle, null).left) <  body.offsetWidth-60) {
                shuttle.style.left = `${parseFloat(window.getComputedStyle(shuttle, null).left) + 10}px`;
            }
            
        } 
        if (event.code == 'ArrowLeft') {
            if (parseFloat(window.getComputedStyle(shuttle, null).left) > 0) {
                shuttle.style.left = `${parseFloat(window.getComputedStyle(shuttle, null).left) - 10}px`;
            }
        }  
        if (event.code == 'Space') {
            console.log('SPACE')
            body.insertAdjacentHTML('beforeend',"<img src='laser.png' class='laser'>");
            const laser = document.querySelector(".laser");
            laser.style.left = `${parseFloat(window.getComputedStyle(shuttle, null).left) + 10}px`;
            laser.style.bottom = `${parseFloat(window.getComputedStyle(shuttle, null).bottom) + 60}px`;

            let fire = setInterval(() => {
                if (parseFloat(window.getComputedStyle(laser, null).bottom) < body.offsetHeight-60) {
                    // console.log(`pew! ${parseFloat(window.getComputedStyle(laser, null).bottom)} px`);
                    laser.style.bottom = `${parseFloat(window.getComputedStyle(laser, null).bottom) + 60}px`;
                } else {
                    clearInterval(fire);
                    // console.log(parseFloat(window.getComputedStyle(laser, null).bottom))
                    laser.remove();
                }
            }, 200)
        } 
    })
}

init();