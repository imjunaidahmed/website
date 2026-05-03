// /* -------------------------
//    PAGE 1: TYPEWRITER
// --------------------------*/

// const text = "Hey Ahmed ❤️";
// let i = 0;

// function typeWriter() {
//   const el = document.getElementById("type");
//   if (!el) return;

//   if (i < text.length) {
//     el.innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, 100);
//   }
// }
// typeWriter();


// /* -------------------------
//    PAGE 2: SAVE + NEXT
// --------------------------*/

// // function savePage2() {

// //   let data = {
// //     p1: document.getElementById("p1")?.value || "",
// //     p2: document.getElementById("p2")?.value || "",
// //     p3: document.getElementById("p3")?.value || "",
// //     p4: document.getElementById("p4")?.value || "",
// //     p5: document.getElementById("p5")?.value || ""
// //   };

// //   console.log("Page 2 Saved:", data);
// //   alert("Page 2 Saved ❤️");
// // }

// // function goPage3() {
// //   window.location.href = "page3.html";
// // }

// async function savePage2() {

//   let data = {
//     p1: document.getElementById("p1")?.value || "",
//     p2: document.getElementById("p2")?.value || "",
//     p3: document.getElementById("p3")?.value || "",
//     p4: document.getElementById("p4")?.value || "",
//     p5: document.getElementById("p5")?.value || "",
//     time: new Date().toISOString()
//   };

//   try {
//     await addDoc(collection(window.db, "responses"), data);
//     alert("Saved to Firebase ❤️");
//   } catch (e) {
//     console.log(e);
//     alert("Error ❌");
//   }
// }


// /* -------------------------
//    PAGE 3: LOVE GAME
// --------------------------*/

// // YES button
// function goNext() {
//   window.location.href = "page4.html";
// }

// // NO button escape
// function moveNo(btn) {
//   btn.style.position = "absolute";
//   btn.style.top = Math.random() * 80 + "%";
//   btn.style.left = Math.random() * 80 + "%";
// }

// // ANSWER CHECK
// function checkAnswer() {

//   let input = document.getElementById("answer");

//   if (!input || input.value.trim() === "") {
//     alert("⚠️ Pehle answer likho!");
//     return;
//   }

//   let ans = input.value.toLowerCase().trim();

//   if (!(ans.includes("aby") || ans.includes("iloveu") || ans.includes("i love u"))) {
//     alert("❌ Wrong answer 😜 Try again");
//     return;
//   }

//   alert("❤️ Correct Answer!");

//   // 🌸 effect
//   for (let i = 0; i < 50; i++) {

//     let el = document.createElement("div");
//     el.innerHTML = Math.random() > 0.5 ? "🌸" : "❤️";

//     el.style.position = "fixed";
//     el.style.left = Math.random() * 100 + "vw";
//     el.style.top = Math.random() * 100 + "vh";
//     el.style.fontSize = Math.random() * 20 + 10 + "px";
//     el.style.opacity = 0.8;
//     el.style.pointerEvents = "none";

//     document.body.appendChild(el);

//     setTimeout(() => el.remove(), 3000);
//   }

//   setTimeout(() => {
//     window.location.href = "page4.html";
//   }, 1500);
// }


// /* -------------------------
//    PAGE 4: FLIP CARDS (UPDATED)
// --------------------------*/

// function flip(card) {

//   // prevent double click spam
//   if (card.classList.contains("flipped") || card.classList.contains("flipping")) return;

//   card.classList.add("flipping");

//   // 💫 press feel
//   card.style.transform = "scale(0.94)";
//   setTimeout(() => {
//     card.style.transform = "";
//   }, 150);

//   // ⏳ delayed flip (1 second)
//   setTimeout(() => {
//     card.classList.add("flipped");
//     card.classList.remove("flipping");
//   }, 1000);


//   // 💖 heart burst
//   for (let i = 0; i < 6; i++) {

//     let heart = document.createElement("div");
//     heart.innerHTML = "💖";

//     heart.style.position = "fixed";
//     heart.style.left = Math.random() * 100 + "vw";
//     heart.style.top = Math.random() * 100 + "vh";
//     heart.style.fontSize = (18 + Math.random() * 10) + "px";
//     heart.style.opacity = 0.9;
//     heart.style.pointerEvents = "none";

//     document.body.appendChild(heart);

//     setTimeout(() => heart.remove(), 1500);
//   }
// }


// /* -------------------------
//    GLOBAL HEART RAIN
// --------------------------*/

// setInterval(() => {

//   let h = document.createElement("div");
//   h.innerHTML = "❤️";

//   h.style.position = "fixed";
//   h.style.left = Math.random() * 100 + "vw";
//   h.style.top = "-10vh";
//   h.style.fontSize = (16 + Math.random() * 10) + "px";
//   h.style.opacity = 0.6;
//   h.style.pointerEvents = "none";
//   h.style.transition = "transform 4s linear, opacity 4s linear";

//   document.body.appendChild(h);

//   // animate fall
//   setTimeout(() => {
//     h.style.transform = "translateY(110vh)";
//     h.style.opacity = "0";
//   }, 50);

//   setTimeout(() => h.remove(), 4000);

// }, 600);


// /* -------------------------
//    NAVIGATION HELPER
// --------------------------*/

// function nextPage(url) {
//   window.location.href = url;
// }


/* -------------------------
   PAGE 1: TYPEWRITER
--------------------------*/

const text = "Hey MERRUB ❤️";
let i = 0;

function typeWriter() {
  const el = document.getElementById("type");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();


/* -------------------------
   PAGE 2: SAVE + NEXT
--------------------------*/

function savePage2() {

  let data = {
    p1: document.getElementById("p1")?.value || "",
    p2: document.getElementById("p2")?.value || "",
    p3: document.getElementById("p3")?.value || "",
    p4: document.getElementById("p4")?.value || "",
    p5: document.getElementById("p5")?.value || ""
  };

  console.log("Page 2 Saved:", data);
  alert("Page 2 Saved ❤️");
}

function goPage3() {
  window.location.href = "page3.html";
}


/* -------------------------
   PAGE 3: LOVE GAME
--------------------------*/

// YES button
function goNext() {
  window.location.href = "page4.html";
}

// NO button escape
function moveNo(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

// ANSWER CHECK
function checkAnswer() {

  let input = document.getElementById("answer");

  // ❌ empty check
  if (!input || input.value.trim() === "") {
    alert("⚠️ Pehle answer likho!");
    return;
  }

  let ans = input.value.toLowerCase().trim();

  // ❌ wrong answer
  if (!(ans.includes("1NOVEMBER") || ans.includes("1") || ans.includes("1november"))) {
    alert("❌  Try again");
    return;
  }

  // ✅ correct answer
  alert("❤️ Correct Answer!");

  // 🌸 effect
  for (let i = 0; i < 50; i++) {

    let el = document.createElement("div");
    el.innerHTML = Math.random() > 0.5 ? "🌸" : "❤️";

    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.fontSize = Math.random() * 20 + 10 + "px";
    el.style.opacity = 0.8;

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 3000);
  }

  setTimeout(() => {
    window.location.href = "page4.html";
  }, 1500);
}


/* -------------------------
   PAGE 4: FLIP CARDS
--------------------------*/

function flip(card) {
  card.classList.toggle("flipped");

  let heart = document.createElement("div");
  heart.innerHTML = "💖";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.fontSize = "20px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1500);
}


/* -------------------------
   GLOBAL HEART RAIN
--------------------------*/

setInterval(() => {

  let h = document.createElement("div");
  h.innerHTML = "❤️";

  h.style.position = "fixed";
  h.style.left = Math.random() * 100 + "vw";
  h.style.top = "100vh";
  h.style.fontSize = "18px";
  h.style.opacity = 0.6;
  h.style.pointerEvents = "none";

  document.body.appendChild(h);

  setTimeout(() => h.remove(), 4000);

}, 600);


/* -------------------------
   NAVIGATION HELPER
--------------------------*/

function nextPage(url) {
  window.location.href = url;
}