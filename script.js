
// ================================================
// A LITTLE UNIVERSE FOR YOU
// COMPLETE BIRTHDAY WEBSITE JAVASCRIPT
// ================================================


// ================= PERSONALIZE YOUR WEBSITE =================

const CONFIG = {
  birthdayName: "MONI",

  photos: [
  "images/photo1.jpeg",
  "images/photo2.jpeg",
  "images/photo3.jpeg",
  "images/photo4.jpeg",
  "images/photo5.jpeg",
  "images/photo6.jpeg"
],

  // Keep your birthday song inside the music folder.
  songFile: "music/Annakiliye(KoshalWorld.Com).mp3",

  // Realistic flower image.
 
 flowerImage: "images/all-flowers.png"
  
};


// ================= ELEMENT SELECTORS =================

const $ = (id) => document.getElementById(id);

const intro = $("intro");
const story = $("story");
const memories = $("memories");
const finale = $("finale");

const audio = $("birthdayAudio");

const flowerStage = $("flowerStage");
const flowerImage = $("realFlowerImage");

let hasStarted = false;
let finaleTimer = null;

let audioStarted = false;

let petalRAF = null;
let petals = [];


// ================= PERSONALIZE BIRTHDAY NAME =================

if ($("nameReveal")) {
  $("nameReveal").textContent =
    `HAPPY BIRTHDAY, ${CONFIG.birthdayName.toUpperCase()}`;
}

const finaleEm = document.querySelector(".finale-title em");

if (finaleEm) {
  finaleEm.textContent = CONFIG.birthdayName + ".";
}

// Disable right-click on images
document.addEventListener("contextmenu", function (e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
});

// Prevent dragging images
document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
});

// ================= PHOTO CONFIGURATION =================


// ==========================================
// CHECK BIRTHDAY PHOTO QUALITY AND LOADING
// ==========================================

document.querySelectorAll(".photo-card img").forEach((img, index) => {

  img.addEventListener("load", () => {
    console.log(
      `Photo ${index + 1} loaded successfully`,
      {
        path: img.currentSrc,
        width: img.naturalWidth,
        height: img.naturalHeight
      }
    );
  });

  img.addEventListener("error", () => {
    console.error(
      `Photo ${index + 1} failed to load:`,
      img.src
    );
  });

});




// ================================================

// ================================================
// BACKGROUND MUSIC
// ================================================

if (audio) {
  audio.src = CONFIG.songFile;
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = 0.7;
}

function tryStartMusic() {

  if (!audio || audioStarted) return;

  audio.play()
    .then(() => {

      audioStarted = true;

      console.log("Birthday music started!");

      $("openBtn").disabled = false;
      $("openBtn").classList.add("music-ready");

      const note = document.querySelector(".tap-note");

      if (note) {
        note.textContent =
          "Music is playing. Now unlock your surprise ♡";
      }

    })
    .catch((error) => {

      console.log("Waiting for music permission:", error);

      const note = document.querySelector(".tap-note");

      if (note) {
        note.textContent =
          "Tap anywhere to start the birthday music ♡";
      }

    });
}

// Try autoplay when the website opens.
tryStartMusic();

// Start music after the visitor's first interaction.
document.addEventListener("pointerdown", tryStartMusic);
document.addEventListener("keydown", tryStartMusic);


// ================================================
// REALISTIC PURPLE FLOWER IMAGE
// ================================================

// Check whether the flower image exists.

if (flowerImage) {

  flowerImage.src = CONFIG.flowerImage;

  flowerImage.addEventListener("load", () => {

    console.log("Realistic purple flower image loaded.");

  });

  flowerImage.addEventListener("error", () => {

    console.error(
      "Flower image not found. Check:",
      CONFIG.flowerImage
    );

  });

}


// Reveal the realistic flowers.

function bloomRealFlowers() {

  if (!flowerStage || !flowerImage) return;

  // Remove previous animation.

  flowerStage.classList.remove("bloom-active");

  // Restart the CSS animation.

  void flowerStage.offsetWidth;

  // Show the flower.

  flowerStage.classList.add("bloom-active");

}


// Reset flower animation before replay.

function resetRealFlowers() {

  if (!flowerStage) return;

  flowerStage.classList.remove("bloom-active");

  void flowerStage.offsetWidth;

}


// ================================================
// SECRET TEXT REVEAL
// ================================================

const symbols = "!<>-_\\/[]{}—=+*^?#________";

const secret = "A LITTLE SURPRISE, MADE JUST FOR YOU";


function scrambleReveal() {

  const el = $("scrambleText");

  if (!el) return;

  let frame = 0;

  const total = 42;

  const timer = setInterval(() => {

    el.textContent = secret.split("").map((char, i) => {

      if (char === " ") return " ";

      if (i < frame / total * secret.length) {
        return char;
      }

      return symbols[
        Math.floor(Math.random() * symbols.length)
      ];

    }).join("");

    frame++;

    if (frame > total) {

      clearInterval(timer);

      el.textContent = secret;

    }

  }, 55);

}

scrambleReveal();


// ================================================
// PAGE NAVIGATION
// ================================================

function showSection(section) {

  [intro, story, memories, finale].forEach((s) => {

    if (s && s !== section) {
      s.classList.add("hidden");
    }

  });

  section.classList.remove("hidden");

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


// ================================================
// UNLOCK BIRTHDAY SURPRISE
// ================================================

 // ================================================
 // UNLOCK BIRTHDAY SURPRISE
 // ================================================

$("openBtn").addEventListener("click", async () => {

  if (hasStarted) return;

  // Make sure the music is playing before unlocking.
  if (!audioStarted) {
    try {
      await audio.play();
      audioStarted = true;

      $("openBtn").classList.add("music-ready");

    } catch (error) {
      console.log("Music could not start:", error);

      const note = document.querySelector(".tap-note");

      if (note) {
        note.textContent = "Tap again to start the music ♡";
      }

      return;
    }
  }

  // Unlock only after music starts.
  hasStarted = true;

  showSection(story);
  startPetals();
  bloomRealFlowers();

});


// ================================================
// MEMORIES BUTTON
// ================================================

$("memoriesBtn").addEventListener("click", () => {
  showSection(memories);
  revealPhotos();

  clearTimeout(finaleTimer);

  const lastPhotoDelay = 250 + (CONFIG.photos.length - 1) * 300;

  finaleTimer = setTimeout(() => {
    finale.classList.remove("hidden");
    finale.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, lastPhotoDelay + 1800);
});


// ================================================
// PHOTO REVEAL ANIMATION
// ================================================

function revealPhotos() {

  document.querySelectorAll(".photo-card").forEach((card, i) => {

    setTimeout(() => {

      card.classList.add("visible");

    }, 250 + i * 300);

  });

}


// ================================================
// REPLAY BIRTHDAY EXPERIENCE
// ================================================

$("replayBtn").addEventListener("click", () => {

  clearTimeout(finaleTimer);

  // Hide all photos again.

  document.querySelectorAll(".photo-card").forEach((card) => {

    card.classList.remove("visible");

  });

  // Hide finale.

  finale.classList.add("hidden");

  // Reset flower animation.

  resetRealFlowers();

  // Reset page state.

  hasStarted = false;

  // Return to intro.

  showSection(intro);

  // Restart music only if it has finished.

  if (audio && audio.ended) {

    audio.currentTime = 0;

    tryStartMusic();

  }

});


// ================================================
// FLOATING PETALS ANIMATION
// ================================================

const canvas = $("petalCanvas");

const ctx = canvas ? canvas.getContext("2d") : null;


function resizeCanvas() {

  if (!canvas || !ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

}


window.addEventListener("resize", resizeCanvas);

resizeCanvas();


// Create floating petals.

function makePetal() {

  return {

    x: Math.random() * window.innerWidth,

    y: -20 - Math.random() * window.innerHeight,

    size: 3 + Math.random() * 6,

    speed: .5 + Math.random() * 1.2,

    drift: Math.random() * 1.2 - .6,

    angle: Math.random() * 6.28,

    spin: (Math.random() - .5) * .025,

    alpha: .35 + Math.random() * .45

  };

}


// Start floating petals.

function startPetals() {

  if (!canvas || !ctx || petalRAF) return;

  petals = Array.from(
    { length: 38 },
    makePetal
  );


  function draw() {

    ctx.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );


    petals.forEach((p) => {

      p.y += p.speed;

      p.x += p.drift + Math.sin(p.y * .012) * .35;

      p.angle += p.spin;


      // Reset petals after they leave the screen.

      if (p.y > window.innerHeight + 20) {

        Object.assign(
          p,
          makePetal(),
          { y: -15 }
        );

      }


      // Draw individual petals.

      ctx.save();

      ctx.translate(p.x, p.y);

      ctx.rotate(p.angle);

      ctx.globalAlpha = p.alpha;

      ctx.fillStyle = "#efabc8";

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        p.size * .65,
        p.size,
        0,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

    });


    petalRAF = requestAnimationFrame(draw);

  }


  draw();

}


// ================================================
// END OF BIRTHDAY WEBSITE SCRIPT
// ================================================
