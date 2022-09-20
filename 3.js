// Number: 1

// document.addEventListener("keydown", function (a) {

//     let key = a.key;

//     let partDrum = document.querySelector("[data-part=" + key + "]");

//     partDrum.classList.add("sound");

//     setTimeout(() => {

//         partDrum.classList.remove("sound");

//     }, 100);

//     let musics = {

//         s: "./drums/hi_hats.mp3",

//         f: "./drums/MediumTom.mp3",

//         d: "./drums/snareDrum.mp3",

//         b: "./drums/bassPedal.mp3",

//         j: "./drums/HighTom.mp3",

//         k: "./drums/floorTom.mp3",

//         l: "./drums/rideCymbal.mp3",

//     }

//     let e = musics[event.key]

//     if (e) {

//         audio.src = musics[event.key]


//         audio.play()

//     }

// });



// Number: 2

document.addEventListener("keydown", function (a) {

    let key = a.key;

    let partDrum = document.querySelector("[data-part=" + key + "]");
   
    partDrum.classList.add("sound");
    
    setTimeout(() => {
    
        partDrum.classList.remove("sound");
        
    }, 100);
        
    let music = document.querySelector("[data-partMusic=" + key + "]");
   
    music.currentTime = 0;
   
    music.play();

});