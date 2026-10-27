/* =========================================================
   ✏️ PERSONALISE HERE — change these and the whole site updates
   ========================================================= */
const HIS_NAME = "Sagaruu";
const HIS_NICKNAME = "babee";
const YOUR_NAME = "Nistha";

const PHOTOS = [
  { src: "photos/1.jpg", caption: "Our first date", date: "" },
  { src: "photos/2.jpg", caption: "Bacha bachii", date: "" },
  { src: "photos/3.jpg", caption: "Random snap", date: "" },
  { src: "photos/4.jpg", caption: "Smiley face", date: "" },
  { src: "photos/5.jpg", caption: "Movie date", date: "" },
  { src: "photos/6.jpg", caption: "Jam date", date: "" },
  { src: "photos/7.jpg", caption: "Momo date", date: "" },
  { src: "photos/8.jpg", caption: "Mero bhagawan", date: "" },
  { src: "photos/9.jpg", caption: "Paraa", date: "" },
  { src: "photos/10.jpg", caption: "Goodnight babee", date: "" },
  { src: "photos/11.jpg", caption: "Cheeseee", date: "" },
  { src: "photos/12.jpg", caption: "Beautiful dada", date: "" },
];

const WISHES = [
  "May this year be gentle with your heart and generous with your dreams.",
  "I hope you laugh so much today that your cheeks ache by midnight.",
  "May every door you knock on this year open a little wider than you expected.",
  "I wish you mornings that begin slowly and nights that end peacefully.",
  "May you finally see yourself the way I see you — extraordinary.",
  "I hope your coffee is always warm and your worries are always small.",
  "May you find courage on the days you feel unsure.",
  "I wish you rest — real rest — the kind that refills your soul.",
  "May the people around you always choose kindness toward you.",
  "I hope this year brings you a reason to be proud of yourself every single week.",
  "May your favourite song play right when you need it most.",
  "I wish you adventures that become stories we tell when we're old.",
  "May your health be strong and your heart stay soft.",
  "I hope you never forget how deeply you are loved.",
  "May every goal you're quietly chasing come a step closer.",
  "I wish you more sunsets with me than you can count.",
  "May your mind feel quiet whenever you need it to.",
  "I hope you get surprised by good news when you least expect it.",
  "May you keep that beautiful curiosity of yours forever.",
  "I wish you hugs that last longer than you planned.",
  "May you forgive yourself easily and love yourself loudly.",
  "I hope you have more reasons to smile than reasons to worry.",
  "May your dreams feel less like wishes and more like plans.",
  "I wish you friends who feel like home.",
  "May you always find your way back to what makes you happy.",
  "I hope every hard day is followed by an unexpectedly sweet one.",
  "May your kindness come back to you multiplied.",
  "I wish you late-night talks that make you feel understood.",
  "May the version of you a year from now thank the version of you today.",
  "I hope you stay a little silly, no matter how grown-up life gets.",
  "May you feel at peace in your own skin.",
  "I wish you good food, good sleep, and good company — always.",
  "May you be brave enough to rest and bold enough to try.",
  "I hope you know you never have to carry everything alone.",
  "May your birthday cake be delicious and your wish come true.",
  "I wish you a love that grows softer and stronger every year — ours.",
  "May life keep giving you little moments that feel like magic.",
  "I hope you hear 'I'm proud of you' often, and mean it to yourself too.",
  "May every new year of you be my favourite one so far.",
  "And most of all, I wish to be beside you for every birthday still to come.",
];

const ENVELOPES = [
  { icon: "🌙", label: "Open when you need a hug", title: "When you need a hug…",
    text: "Maya, imagine my arms wrapped around you and my head on your shoulder.\nWhenever you need me, call me — I'll always pick up. ♡\n— Nistha" },
  { icon: "🌧️", label: "Open when you feel sad", title: "When you feel sad…",
    text: "Dada, it's okay to not be okay today. You don't have to fix it all at once.\nDrink some water. Breathe slowly. Let yourself feel it.\nAnd remember: the sun always finds you again. Until it does, I'll be your light. I love you endlessly." },
  { icon: "🕯️", label: "Open when you feel alone", title: "When you feel alone…",
    text: "You are not alone. Not now, not ever.\nI'm thinking about you, smiling at a memory of you, choosing you.\nYou have a whole heart that belongs to you — mine. muaaaahhhhhh" },
  { icon: "🔥", label: "Open when you need motivation", title: "When you need motivation…",
    text: "Hey, my favourite cylinder. Look how far you've already come.\nYou've survived every hard day so far — that's a perfect record.\nTake one small step. Then another. I believe in you more than you'll ever know, and I'm cheering the loudest. Go get it, babee." },
  { icon: "🌸", label: "Open when you can't sleep", title: "When you can't sleep…",
    text: "Put your phone down after this, okay?\nImagine us under a blanket, rain on the window, my fingers in your hair.\nYou did enough today. You are enough. Goodnight, my love. 🌙" },
  { icon: "💫", label: "Open when you doubt us", title: "When you doubt us…",
    text: "Remember, jiddi bachaa, we may not always be perfect, but my feelings for you are real. No matter how hard things get, you're still the one I want. I'll keep choosing you, again and again. ❤️" },
];

const REASONS = [
  "The way your eyes soften when you look at me.",
  "Your random calls are my favorite kind of interruption.",
  "Your laugh — especially the one you try to hide.",
  "You remember the tiny things I mention once.",
  "You're patient with me, even when I'm not patient with myself.",
  "How you say my name like it's something precious.",
  "You make me feel safe just by being in the room.",
  "Your terrible jokes (that I secretly love).",
  "The way you care for the people you love.",
  "You listen — really listen.",
  "Your hugs fix things words can't.",
  "You believe in my dreams like they're already real.",
  "How hard you work, even when no one is watching.",
  "You're my favourite person to do nothing with.",
  "The little forehead kisses.",
  "You apologise sincerely and forgive gracefully.",
  "You make me want to be a better version of me.",
  "How you get excited about the things you love.",
  "You're honest, even when it's hard.",
  "Your voice is my favourite sound.",
  "You make my bad days lighter just by texting me.",
  "You make me feel like I'm someone's favorite person.",
  "You believe in me on the days I struggle to believe in myself.",
  "Because you're you — and that has always been enough.",
  "Because every version of my future has you in it.",
];

/* ========================================================= */
const $ = (s) => document.querySelector(s);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fill names everywhere
document.querySelectorAll(".name").forEach((el) => {
  el.textContent = el.textContent.includes("Nickname") ? HIS_NICKNAME : HIS_NAME;
});
document.querySelectorAll(".name-me").forEach((el) => (el.textContent = YOUR_NAME));
const fillNames = (t) => t.replaceAll("[Your Name]", YOUR_NAME).replaceAll("[His Nickname]", HIS_NICKNAME);

/* ---------- Floating hearts ---------- */
function spawnHearts(layer, count, interval) {
  if (reduceMotion || !layer) return;
  const make = () => {
    const h = document.createElement("span");
    h.className = "float-heart";
    h.textContent = ["♥", "♡", "❀", "✿"][Math.floor(Math.random() * 4)];
    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = 12 + Math.random() * 26 + "px";
    h.style.animationDuration = 6 + Math.random() * 6 + "s";
    layer.appendChild(h);
    setTimeout(() => h.remove(), 12000);
  };
  for (let i = 0; i < count; i++) setTimeout(make, i * 200);
  return setInterval(make, interval);
}
const layers = document.querySelectorAll(".hearts-layer");
const introTimer = spawnHearts(layers[0], 15, 350);
spawnHearts(layers[1], 6, 1200);

/* ---------- Intro ---------- */
document.body.classList.add("locked");
$("#openBtn").addEventListener("click", () => {
  $("#intro").classList.add("hidden");
  document.body.classList.remove("locked");
  clearInterval(introTimer);
  burstConfetti(120);
  playMusic(); // user just clicked, so the browser allows audio
});

/* ---------- Nav ---------- */
$("#navToggle").addEventListener("click", () => {
  const open = $("#navLinks").classList.toggle("open");
  $("#navToggle").setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => $("#navLinks").classList.remove("open"))
);

/* ---------- Music ---------- */
const audio = $("#bgMusic");
let synth = null; // fallback gentle melody if music.mp3 is missing
function playMusic() {
  audio.volume = 0.5;
  audio.play().then(setPlaying).catch(() => { startSynth(); setPlaying(); });
}
function stopMusic() {
  audio.pause();
  if (synth) { clearInterval(synth.timer); synth.ctx.close(); synth = null; }
  $("#musicBtn").classList.remove("playing");
  $("#musicBtn").setAttribute("aria-pressed", "false");
  $("#musicBtn span").textContent = "Play music";
}
function setPlaying() {
  $("#musicBtn").classList.add("playing");
  $("#musicBtn").setAttribute("aria-pressed", "true");
  $("#musicBtn span").textContent = "Pause music";
}
function startSynth() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46];
  let i = 0;
  const tick = () => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine"; o.frequency.value = notes[i++ % notes.length];
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.1);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);
    o.connect(g).connect(ctx.destination); o.start(); o.stop(ctx.currentTime + 1.5);
  };
  tick();
  synth = { ctx, timer: setInterval(tick, 700) };
}
$("#musicBtn").addEventListener("click", () => {
  $("#musicBtn").classList.contains("playing") ? stopMusic() : playMusic();
});

/* ---------- Wishes ---------- */
$("#wishGrid").innerHTML = WISHES.map(
  (w, i) => `<div class="wish-card c${i % 5} reveal"><span class="num">Wish no. ${i + 1}</span><p>${w}</p></div>`
).join("");

/* ---------- Envelopes + modal ---------- */
$("#envGrid").innerHTML = ENVELOPES.map(
  (e, i) => `<button class="envelope reveal" data-i="${i}" aria-label="${e.label}"><span class="seal">${e.icon}</span><span class="label">${e.label}</span></button>`
).join("");
let lastFocus = null;
function openModal(title, text) {
  lastFocus = document.activeElement;
  $("#modalTitle").textContent = title;
  $("#modalText").textContent = fillNames(text);
  $("#modal").hidden = false;
  $("#modalClose").focus();
}
function closeModal() { $("#modal").hidden = true; lastFocus && lastFocus.focus(); }
$("#envGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".envelope");
  if (btn) { const env = ENVELOPES[btn.dataset.i]; openModal(env.title, env.text); }
});
$("#modalClose").addEventListener("click", closeModal);
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#modal").hidden) closeModal(); });

/* ---------- Reasons ---------- */
$("#reasonGrid").innerHTML = REASONS.map(
  (r, i) => `<button class="reason reveal" aria-label="Reveal reason ${i + 1}"><span class="front">♡<br><small>${i + 1}</small></span><span class="back">${r}</span></button>`
).join("");
$("#reasonGrid").addEventListener("click", (e) => {
  const r = e.target.closest(".reason"); if (r) r.classList.toggle("open");
});
$("#revealAll").addEventListener("click", () => {
  const all = document.querySelectorAll(".reason");
  const anyClosed = [...all].some((r) => !r.classList.contains("open"));
  all.forEach((r) => r.classList.toggle("open", anyClosed));
  $("#revealAll").textContent = anyClosed ? "Hide them again" : "Reveal them all";
});

const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
}), { threshold: 0.12 });

/* ---------- Scrapbook ---------- */
const scrapbook = $("#scrapbook");
const photoInput = $("#photoInput");
const photoDBPromise = new Promise((resolve, reject) => {
  const request = indexedDB.open("birthdayScrapbook", 1);
  request.onupgradeneeded = () => request.result.createObjectStore("photos", { keyPath: "key" });
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error || new Error("Could not open photo storage."));
});

function photoDBRequest(mode, action) {
  return photoDBPromise.then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction("photos", mode);
    const request = action(transaction.objectStore("photos"));
    let result;
    request.onsuccess = () => { result = request.result; };
    request.onerror = () => reject(request.error || new Error("Could not access saved photos."));
    transaction.oncomplete = () => resolve(result);
    transaction.onerror = () => reject(transaction.error || new Error("Could not save photo data."));
    transaction.onabort = () => reject(transaction.error || new Error("Photo storage was interrupted."));
  }));
}

function showPhoto(slot, image) {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(image);
  img.alt = "Our memory";
  slot.replaceChildren(img);
}

function renderPhoto(p, i) {
  const figure = document.createElement("figure");
  figure.className = "polaroid reveal";
  figure.innerHTML = `
    <button class="photo-slot" data-i="${i}" aria-label="Add photo ${i + 1}">
      ${p.src ? `<img src="${p.src}" alt="${p.caption}">` : "＋ add a photo"}
    </button>
    <figcaption class="caption"><input class="caption-text" data-i="${i}" type="text" aria-label="Caption for photo ${i + 1}" placeholder="Add a caption"><small></small></figcaption>`;
  figure.querySelector(".caption-text").value = p.caption;
  figure.querySelector("small").textContent = p.date;
  scrapbook.appendChild(figure);
  io.observe(figure);
}
PHOTOS.forEach(renderPhoto);
Promise.all(Array.from({ length: PHOTOS.length }, async (_, i) => {
  const [savedPhoto, savedCaption] = await Promise.all([
    photoDBRequest("readonly", (store) => store.get(`photo-${i}`)),
    photoDBRequest("readonly", (store) => store.get(`caption-${i}`)),
  ]);
  if (savedPhoto?.image) showPhoto(scrapbook.querySelector(`.photo-slot[data-i="${i}"]`), savedPhoto.image);
  const captionInput = scrapbook.querySelector(`.caption-text[data-i="${i}"]`);
  const localCaption = localStorage.getItem(`bdayScrapbookCaption-${i}`);
  if (savedCaption) {
    captionInput.value = localCaption ?? savedCaption.caption;
    if (localCaption === null) localStorage.setItem(`bdayScrapbookCaption-${i}`, savedCaption.caption);
  } else if (localCaption !== null) {
    captionInput.value = localCaption;
  }
})).catch((error) => {
  console.error("Could not restore scrapbook photos:", error);
  alert("Saved scrapbook photos could not be loaded. Please try reopening the page.");
});
let currentSlot = null;
scrapbook.addEventListener("click", (e) => {
  const slot = e.target.closest(".photo-slot");
  if (slot) { currentSlot = slot; photoInput.click(); }
});
scrapbook.addEventListener("input", (e) => {
  const caption = e.target.closest(".caption-text");
  if (!caption) return;
  try {
    localStorage.setItem(`bdayScrapbookCaption-${caption.dataset.i}`, caption.value);
  } catch (error) {
    console.error("Could not save scrapbook caption:", error);
    alert("This caption could not be saved in your browser. Please check available storage and try again.");
  }
});
photoInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file || !currentSlot) return;
  try {
    await photoDBRequest("readwrite", (store) => store.put({ key: `photo-${currentSlot.dataset.i}`, image: file }));
    showPhoto(currentSlot, file);
  } catch (error) {
    console.error("Could not save scrapbook photo:", error);
    alert("This photo could not be saved in your browser. Try a smaller image or another browser.");
  } finally {
    photoInput.value = "";
  }
});

/* ---------- Letter (saved in this browser) ---------- */
const letter = $("#letterPaper");
const original = letter.innerHTML;
const letterStorageKey = "bdayLetter-v2";
const saved = localStorage.getItem(letterStorageKey);
if (saved) letter.innerHTML = saved;
$("#editLetter").addEventListener("click", () => {
  const editing = letter.getAttribute("contenteditable") === "true";
  letter.setAttribute("contenteditable", String(!editing));
  letter.classList.toggle("editing", !editing);
  $("#editLetter").textContent = editing ? "✎ Edit letter" : "✓ Save letter";
  if (editing) localStorage.setItem(letterStorageKey, letter.innerHTML);
  else letter.focus();
});
$("#resetLetter").addEventListener("click", () => {
  if (confirm("Reset the letter to the original text?")) {
    letter.innerHTML = original; localStorage.removeItem(letterStorageKey);
  }
});

/* ---------- Cake & wishes ---------- */
$("#candles").innerHTML = '<div class="candle"><div class="flame"></div></div>'.repeat(5);
$("#blowBtn").addEventListener("click", () => {
  const cake = $("#cake");
  const out = cake.classList.toggle("out");
  $("#blowBtn").textContent = out ? "🕯️ Light them again" : "🌬️ Blow the candles";
  if (out) burstConfetti(200);
});
$("#confettiBtn").addEventListener("click", () => burstConfetti(160));
$("#wishForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = $("#wishInput").value.trim(); if (!v) return;
  const li = document.createElement("li"); li.textContent = "✨ " + v;
  $("#starWishes").appendChild(li);
  $("#wishInput").value = "";
  burstConfetti(60);
});

/* ---------- Hug ---------- */
$("#hugBtn").addEventListener("click", () => {
  $("#hugStage").classList.add("show");
  $("#hugBtn").textContent = "Another hug? Always 🤍";
  spawnHearts($("#hug"), 25, 99999);
  burstConfetti(100, ["#d97a8c", "#f7d6dc", "#6e1e34"]);
});
$("#hug").style.position = "relative"; $("#hug").style.overflow = "hidden";

/* ---------- Confetti ---------- */
const canvas = $("#confetti"), ctx = canvas.getContext("2d");
let pieces = [], running = false;
function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
addEventListener("resize", resize); resize();
function burstConfetti(n, colors = ["#f7d6dc", "#e6dcf3", "#d97a8c", "#6e1e34", "#fff1c9"]) {
  if (reduceMotion) return;
  for (let i = 0; i < n; i++) pieces.push({
    x: innerWidth / 2 + (Math.random() - 0.5) * 200, y: innerHeight / 3,
    vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 12 - 4,
    s: 5 + Math.random() * 7, r: Math.random() * 6, c: colors[i % colors.length], life: 160,
  });
  if (!running) { running = true; requestAnimationFrame(draw); }
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach((p) => {
    p.vy += 0.3; p.x += p.vx; p.y += p.vy; p.r += 0.1; p.life--;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c;
    ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore();
  });
  pieces = pieces.filter((p) => p.life > 0 && p.y < canvas.height + 20);
  if (pieces.length) requestAnimationFrame(draw);
  else { running = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
}

/* ---------- Reveal on scroll ---------- */
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
