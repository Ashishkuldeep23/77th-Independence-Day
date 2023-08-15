

// // // Arrow animation here ------->
let arrows = document.querySelectorAll(".arrow")

console.log(arrows)

arrows.forEach( (arrow , i)=>{
    arrow.style.transform = `rotate(${(i)*15}deg)` 
    arrow.style.animation  = `arrow 1 ease-in-out ${i*0.15}s ` 
})





// // // Mouse move on main

document.querySelector("main").addEventListener("mousemove" , (dets)=>{
    console.log(dets)

    document.getElementById("tracker").style.transform = `translate(${dets.clientX-10}px , ${dets.clientY-10}px)`
} )


