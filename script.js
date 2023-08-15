

// // // Arrow animation here ------->
let arrows = document.querySelectorAll(".arrow")

// console.log(arrows)

arrows.forEach((arrow, i) => {
    arrow.style.transform = `rotate(${(i) * 15}deg)`
    arrow.style.animation = `arrow 1 ease-in-out ${i * 0.15}s `
})




// // // Play music by js ------->
let audio = new Audio("./play.mp3")  // // // Prepare audio for paly


// // // Mouse move on main
document.querySelector("main").addEventListener("mousemove", (dets) => {
    // console.log(dets)

    audio.play()   // // If mouse move then play music

    document.getElementById("tracker").style.transform = `translate(${dets.clientX - 10}px , ${dets.clientY - 10}px)`
})




