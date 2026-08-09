// ---------- DATA ----------
const experiences = [
  {
    title: "Research Intern",
    org: "AccessComputing — University of Washington",
    dates: "MAY 2025 – AUG 2025",
    bullets: [
      "Focused on accessibility in computing and tech equity across digital products and curricula.",
      "Gained hands-on experience in inclusive design, disability advocacy, and accessible software development.",
      "Collaborated with researchers to translate accessibility principles into practical engineering guidance."
    ],
    tags: ["Accessibility", "Inclusive Design", "Tech Equity"]
  },
  {
    title: "Conference Assistant",
    org: "University of South Carolina",
    dates: "MAY 2025 – AUG 2025",
    bullets: [
      "Staffed residence hall front desks, managing check-ins and guest support for campus visitors.",
      "Coordinated room preparation and move-in logistics across multiple summer conference sessions.",
      "Built strong time-management and operations habits working high-throughput front-desk shifts."
    ],
    tags: ["Operations", "Logistics", "Guest Support"]
  },
  {
    title: "NASA SC Space Grant Consortium Intern",
    org: "Clemson University",
    dates: "JUN 2024 – AUG 2024",
    bullets: [
      "Designed and constructed a lunar regolith drilling prototype for aerospace hardware research.",
      "Used SolidWorks, EDEM, and ADAMS to model, simulate, and validate mechanical behavior.",
      "Contributed to systems integration and technical documentation for the prototype build."
    ],
    tags: ["CAD", "SolidWorks", "Prototyping"]
  }
];

const projects = [
  {
    category: "Artificial Intelligence",
    name: "Rebuttal.ai",
    desc: "AI-powered communication assistant that delivers real-time responses, counterarguments, and conversation support through a Bluetooth earpiece — with Job Interview, Debate, Negotiation, and Public Speaking modes.",
    tech: "AI · Machine Learning · Product Design · Real-Time UX",
    link: "https://rebuttal-ai-by-alyssia.netlify.app/"
  },
  {
    category: "Campus Technology",
    name: "Campus Connect",
    desc: "Community platform built for college students to explore campus life interactively, with reviews, recommendations, and student-generated content. Public signup is live; full launch Aug 18, 2026.",
    tech: "HTML · CSS · JavaScript · UX · Accessibility",
    link: "https://campusconnect-uofsc.netlify.app"
  },
  {
    category: "Robotics Research",
    name: "A.U.R.A.",
    desc: "Autonomous Utility & Relief Assistant — a quadruped robotic platform for search-and-rescue in disaster environments, built for hazardous terrain and emergency supply delivery.",
    tech: "Robotics · Embedded Systems · CAD · Webots · C",
    link: null
  },
  {
    category: "Embedded Systems",
    name: "ShiroStarr",
    desc: "A portable, interactive digital companion inspired by virtual pet systems, focused on embedded software and human-device interaction. Integrates a microcontroller, display, and physical sensors so the device responds to user interactions and environmental changes through animated behaviors and evolving internal states — with persistent memory, customizable personality traits, and wireless communication between devices.",
    tech: "Embedded Programming · Event-Driven Systems · Hardware-Software Integration · Data Persistence",
    link: null
  },
  {
    category: "Creator Brand",
    name: "mochabytee",
    desc: "Public documentation of computer science, project development, game creation, and college life — grown to 20K+ followers through consistent technical storytelling.",
    tech: "Content Strategy · Community Building",
    link: "https://www.instagram.com/mochabytee/"
  }
];

const hardware = [
  {
    icon: "🤖",
    image: null,
    images: ["assets/aura-side.jpg", "assets/aura-top.jpg"],
    name: "A.U.R.A. — Autonomous Utility & Relief Assistant",
    desc: "A quadruped robotic platform designed for search-and-rescue operations in disaster environments. Modular mechanical design, articulated leg mechanisms, C-based gait logic, and distance-sensor obstacle awareness — tested in Webots simulation before hardware assembly.",
    tech: "CAD, Webots, C, Embedded Systems"
  },
  {
    icon: "🛰️",
    image: null,
    images: ["assets/lunar-drill-poster.jpg", "assets/lunar-drill-2.jpg", "assets/lunar-drill-1.jpg"],
    name: "Lunar Regolith Drilling Prototype",
    desc: "Built during a NASA SC Space Grant Consortium internship at Clemson University. Designed and constructed a drilling prototype for lunar regolith extraction, modeled and validated using SolidWorks, EDEM, and ADAMS.",
    tech: "SolidWorks, EDEM, ADAMS"
  },
  {
    icon: "⭐",
    image: null,
    images: ["assets/shirostarr-technical-main.jpg", "assets/shirostarr-technical-alt.jpg", "assets/shirostarr-xray-ref.jpg"],
    imageNotes: [
      "CAD concept design",
      "CAD concept — alternate angle",
      "concept reference — not an actual build photo"
    ],
    name: "ShiroStarr — Embedded Virtual Companion System",
    desc: "Developing a portable, interactive digital companion inspired by virtual pet systems, with a focus on embedded software and human-device interaction. The project will integrate a microcontroller, display, physical sensors, and custom software to allow the device to respond to user interactions and environmental changes through animated behaviors and evolving internal states. Planned features include persistent memory, sensor-driven responses, customizable personality traits, and wireless communication between devices.",
    tech: "Embedded Programming, Event-Driven Systems, Hardware-Software Integration, Data Persistence"
  }
];

// ---------- ROUTING ----------
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-links a");

function route() {
  const hash = (location.hash || "#home").slice(1);
  pages.forEach(p => p.classList.toggle("active", p.id === hash));
  navLinks.forEach(l => l.classList.toggle("active", l.dataset.route === hash));
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  document.querySelector(".nav-links")?.classList.remove("mobile-open");
}
window.addEventListener("hashchange", route);
route();

// mobile hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("mobile-open");
});

// year
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- EXPERIENCE ----------
const expTabsWrap = document.getElementById("expTabs");
const expPanel = document.getElementById("expPanel");

function renderExp(i) {
  const e = experiences[i];
  expPanel.innerHTML = `
    <h3>${e.title} @ <span>${e.org.split("—")[1] ? e.org.split("—")[1].trim() : e.org}</span></h3>
    <div class="exp-dates">${e.dates}</div>
    <ul>${e.bullets.map(b => `<li><span class="arrow">▸</span><span>${b}</span></li>`).join("")}</ul>
    <div class="exp-tags">${e.tags.map(t => `<span>${t}</span>`).join("")}</div>
  `;
}
expTabsWrap.addEventListener("click", (ev) => {
  const btn = ev.target.closest(".exp-tab");
  if (!btn) return;
  document.querySelectorAll(".exp-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderExp(Number(btn.dataset.exp));
});
renderExp(0);

// ---------- PROJECTS: CAROUSEL ----------
const track = document.getElementById("carouselTrack");
const dotsWrap = document.getElementById("carouselDots");
let current = 0;

track.innerHTML = projects.map(p => `
  <div class="carousel-slide">
    <div class="cat">${p.category}</div>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="tech">${p.tech}</div>
    ${p.link ? `<a class="link" href="${p.link}" target="_blank" rel="noopener">Visit project →</a>` : ""}
  </div>
`).join("");

dotsWrap.innerHTML = projects.map((_, i) => `<span data-i="${i}" class="${i === 0 ? "active" : ""}"></span>`).join("");

function goTo(i) {
  current = (i + projects.length) % projects.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll(".carousel-dots span").forEach((d, idx) => d.classList.toggle("active", idx === current));
}
document.getElementById("carouselPrev").addEventListener("click", () => goTo(current - 1));
document.getElementById("carouselNext").addEventListener("click", () => goTo(current + 1));
dotsWrap.addEventListener("click", (ev) => {
  if (ev.target.dataset.i !== undefined) goTo(Number(ev.target.dataset.i));
});
let carouselTimer = setInterval(() => goTo(current + 1), 6000);

// ---------- PROJECTS: GRID ----------
const projectGrid = document.getElementById("projectGrid");
projectGrid.innerHTML = projects.map(p => `
  <div class="project-card">
    <div class="project-card-head">
      <span class="folder">📁</span>
      <div class="links">
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" title="Visit">↗</a>` : ""}
      </div>
    </div>
    <h4>${p.name}</h4>
    <p>${p.desc}</p>
    <div class="tech">${p.tech}</div>
  </div>
`).join("");

// ---------- HARDWARE ----------
const hwGrid = document.getElementById("hardwareGrid");
hwGrid.innerHTML = hardware.map((h, hi) => {
  const gallery = h.images && h.images.length ? h.images : (h.image ? [h.image] : []);
  const notes = h.imageNotes || (h.imageNote ? gallery.map(() => h.imageNote) : null);
  const visual = gallery.length
    ? `
      <div class="hw-gallery" data-hw="${hi}" data-index="0">
        ${gallery.map((src, gi) => `<img src="${src}" alt="${h.name}" class="hw-gallery-img${gi === 0 ? " active" : ""}" />`).join("")}
        ${gallery.length > 1 ? `
          <button class="hw-arrow hw-arrow-left" data-hw="${hi}" data-dir="-1" aria-label="Previous photo">‹</button>
          <button class="hw-arrow hw-arrow-right" data-hw="${hi}" data-dir="1" aria-label="Next photo">›</button>
          <div class="hw-gallery-dots">${gallery.map((_, gi) => `<span class="${gi === 0 ? "active" : ""}"></span>`).join("")}</div>
        ` : ""}
        ${notes ? notes.map((n, gi) => n ? `<div class="hw-image-note${gi === 0 ? " active" : ""}" data-note-index="${gi}">${n}</div>` : "").join("") : ""}
      </div>`
    : h.icon;

  return `
  <div class="hw-card">
    <div class="hw-card-visual">${visual}</div>
    <div class="hw-card-body">
      <h4>${h.name}</h4>
      <p>${h.desc}</p>
      <div class="tech">${h.tech}</div>
    </div>
  </div>
`;
}).join("");

hwGrid.addEventListener("click", (ev) => {
  const btn = ev.target.closest(".hw-arrow");
  if (!btn) return;
  const gallery = btn.closest(".hw-gallery");
  const imgs = gallery.querySelectorAll(".hw-gallery-img");
  const dots = gallery.querySelectorAll(".hw-gallery-dots span");
  const notes = gallery.querySelectorAll(".hw-image-note");
  let idx = Number(gallery.dataset.index);
  idx = (idx + Number(btn.dataset.dir) + imgs.length) % imgs.length;
  gallery.dataset.index = idx;
  imgs.forEach((img, i) => img.classList.toggle("active", i === idx));
  dots.forEach((d, i) => d.classList.toggle("active", i === idx));
  notes.forEach((n) => n.classList.toggle("active", Number(n.dataset.noteIndex) === idx));
});

// ---------- HERO PARTICLE ART (formed from Alyssia's photo) ----------
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let mouse = { x: null, y: null };
let imagePoints = [];
let imageAspect = 721 / 540;
let imageReady = false;

const heroImg = new Image();
heroImg.src = "assets/portrait-cutout.png";
heroImg.onload = () => {
  imageAspect = heroImg.width / heroImg.height;
  const sampleW = Math.min(360, heroImg.width);
  const sampleH = Math.round(sampleW / imageAspect);
  const off = document.createElement("canvas");
  off.width = sampleW;
  off.height = sampleH;
  const octx = off.getContext("2d");
  octx.drawImage(heroImg, 0, 0, sampleW, sampleH);
  const data = octx.getImageData(0, 0, sampleW, sampleH).data;

  // classic halftone dot-screen: a regular grid of cells, each rendered as
  // one dot whose SIZE tracks that cell's darkness. Unlike randomly
  // scattering points, this preserves the actual continuous image (facial
  // features, hat text, contours) at the grid's resolution, so it reads as
  // a real portrait instead of abstract noise.
  const cols = 78;
  const cellSize = sampleW / cols;
  const rows = Math.round(sampleH / cellSize);

  const cellLum = new Float32Array(rows * cols).fill(1);
  const cellCov = new Float32Array(rows * cols);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const x0 = Math.floor(i * cellSize), x1 = Math.floor((i + 1) * cellSize);
      const y0 = Math.floor(j * cellSize), y1 = Math.floor((j + 1) * cellSize);
      let count = 0, fgCount = 0, lumSum = 0;
      for (let y = y0; y < y1; y++) {
        if (y < 0 || y >= sampleH) continue;
        for (let x = x0; x < x1; x++) {
          if (x < 0 || x >= sampleW) continue;
          count++;
          const idx = (y * sampleW + x) * 4;
          const a = data[idx + 3];
          if (a >= 60) {
            fgCount++;
            const r = data[idx], g = data[idx + 1], b = data[idx + 2];
            lumSum += (r * 0.299 + g * 0.587 + b * 0.114) / 255;
          }
        }
      }
      if (count === 0) continue;
      cellCov[j * cols + i] = fgCount / count;
      if (fgCount > 0) cellLum[j * cols + i] = lumSum / fgCount;
    }
  }

  // local contrast at the cell-grid scale: a cell that's darker than its
  // immediate neighborhood (eyes vs. skin, brim shadow vs. hat, letters vs.
  // background) gets emphasized on top of plain overall darkness — this is
  // what makes both fine detail (hat text, eyes) AND the overall solid
  // silhouette read clearly at the same time
  const win = 3; // 7x7
  const localMean = new Float32Array(rows * cols);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let sum = 0, count = 0;
      for (let dj = -win; dj <= win; dj++) {
        const jj = j + dj;
        if (jj < 0 || jj >= rows) continue;
        for (let di = -win; di <= win; di++) {
          const ii = i + di;
          if (ii < 0 || ii >= cols) continue;
          sum += cellLum[jj * cols + ii];
          count++;
        }
      }
      localMean[j * cols + i] = sum / count;
    }
  }

  imagePoints = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const idx = j * cols + i;
      const coverage = cellCov[idx];
      if (coverage < 0.1) continue;

      const lum = cellLum[idx];
      const globalDark = Math.max(0, 1 - lum);
      const localDark = Math.max(0, localMean[idx] - lum);
      const score = Math.min(1, 0.55 * globalDark + 3.2 * Math.pow(localDark, 1.1));

      const maxR = cellSize * 0.62;
      const radius = maxR * (0.1 + 1.05 * score) * Math.min(1, coverage * 1.4);
      if (radius < 0.5) continue;

      const cx = (i + 0.5) * cellSize, cy = (j + 0.5) * cellSize;
      imagePoints.push({ u: cx / sampleW, v: cy / sampleH, r: radius / sampleW, lum });
    }
  }

  imageReady = true;
  resizeCanvas();
};

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  initParticles();
}

function initParticles() {
  particles = [];
  if (!imageReady || !imagePoints.length) return;

  const canvasAspect = canvas.width / canvas.height;
  let boxW, boxH;
  if (imageAspect > canvasAspect) {
    boxW = canvas.width * 0.92;
    boxH = boxW / imageAspect;
  } else {
    boxH = canvas.height * 0.92;
    boxW = boxH * imageAspect;
  }
  const offsetX = (canvas.width - boxW) / 2;
  const offsetY = (canvas.height - boxH) / 2;

  imagePoints.forEach(p => {
    const tx = offsetX + p.u * boxW;
    const ty = offsetY + p.v * boxH;
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      tx, ty,
      size: 0,
      targetSize: p.r * boxW,
      speed: Math.random() * 0.045 + 0.02,
      lum: p.lum
    });
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#5eead4";
  particles.forEach(p => {
    p.x += (p.tx - p.x) * p.speed;
    p.y += (p.ty - p.y) * p.speed;
    p.size += (p.targetSize - p.size) * p.speed;

    let dx = 0, dy = 0;
    if (mouse.x !== null) {
      const distX = p.x - mouse.x;
      const distY = p.y - mouse.y;
      const dist = Math.sqrt(distX * distX + distY * distY);
      if (dist < 90) {
        const force = (90 - dist) / 90;
        dx = (distX / (dist || 1)) * force * 16;
        dy = (distY / (dist || 1)) * force * 16;
      }
    }

    if (p.size < 0.4) return;
    ctx.beginPath();
    ctx.arc(p.x + dx, p.y + dy, p.size, 0, Math.PI * 2);
    ctx.fillStyle = accent;
    ctx.globalAlpha = 0.82 + Math.random() * 0.14;
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateParticles);
}

canvas.parentElement.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
canvas.parentElement.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
requestAnimationFrame(animateParticles);

// ---------- GAME MODE: "Portfolio Quest" boss-rush arcade ----------
const gameModeBtn = document.getElementById("gameModeBtn");
const arcadeOverlay = document.getElementById("arcadeOverlay");
const arcadeClose = document.getElementById("arcadeClose");
const arcadeCanvas = document.getElementById("arcadeCanvas");
const actx = arcadeCanvas.getContext("2d");
const arcadeLivesEl = document.getElementById("arcadeLives");
const arcadeBossCountEl = document.getElementById("arcadeBossCount");
const arcadeShardCountEl = document.getElementById("arcadeShardCount");
const arcadeSoundBtn = document.getElementById("arcadeSound");
const arcadeToast = document.getElementById("arcadeToast");
const startScreen = document.getElementById("arcadeStartScreen");
const winScreen = document.getElementById("arcadeWinScreen");
const overScreen = document.getElementById("arcadeOverScreen");
const overMsg = document.getElementById("arcadeOverMsg");
const winMsgEl = document.getElementById("arcadeWinMsg");

const CW = arcadeCanvas.width, CH = arcadeCanvas.height;
const GROUND_Y = 340;
const LEVEL_WIDTH = 3400;
const GRAVITY = 0.55;
const JUMP_V = -11.5;
const MOVE_SPEED = 4;

const BOSS_DEFS = [
  { name: "AURA-BOT", sprite: "AURA", baseX: 750, range: 90, speed: 1.6, hp: 3, size: 46,
    fact: "AURA-BOT defeated! The real quadruped robot lives on the Hardware page." },
  { name: "DRILL KING", sprite: "DRILL", baseX: 1550, range: 110, speed: 2.0, hp: 3, size: 46,
    fact: "Drill King defeated! Check out the Lunar Regolith Drilling Prototype under Hardware." },
  { name: "REBUTTAL AI", sprite: "REBUTTAL", baseX: 2350, range: 100, speed: 2.3, hp: 4, size: 48,
    fact: "Rebuttal.ai defeated! See it live from the Projects page." },
  { name: "SHIROSTARR", sprite: "SHIRO", baseX: 3050, range: 120, speed: 2.6, hp: 5, size: 54,
    fact: "ShiroStarr defeated! You beat the final boss — thanks for playing." }
];

// ---------- FACT SHARDS: portfolio trivia scattered through the level ----------
const FACT_PICKUPS = [
  { x: 220, h: 22, fact: "I'm a Computer Science student building software, AI, and human-centered systems." },
  { x: 430, h: 90, fact: "I spent a summer at the University of Washington's AccessComputing program researching accessibility & tech equity." },
  { x: 1000, h: 22, fact: "Rebuttal.ai is an AI earpiece coach I built for interviews, debates, negotiation, and public speaking." },
  { x: 1250, h: 90, fact: "Campus Connect, my community platform for college students, fully launches August 18, 2026." },
  { x: 1850, h: 22, fact: "A.U.R.A. is a quadruped robot I designed for search-and-rescue in disaster environments." },
  { x: 2050, h: 90, fact: "I designed a lunar regolith drilling prototype during a NASA SC Space Grant internship at Clemson." },
  { x: 2650, h: 22, fact: "ShiroStarr is a tamagotchi-style companion I'm building — shaped like a star." },
  { x: 2850, h: 90, fact: "As @mochabytee I've grown a 20K+ follower community documenting my CS projects and college life." }
];

let bgStars = [];
(function seedStars() {
  let seed = 99;
  function rand() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  for (let i = 0; i < 140; i++) {
    bgStars.push({ x: rand() * LEVEL_WIDTH, y: rand() * (GROUND_Y - 20), r: rand() * 1.6 + 0.4 });
  }
})();

// ---------- PIXEL SPRITES (Undertale-ish chibi pixel art, hand-drawn as grids) ----------
const SPRITES = {
  player: {
    palette: { T: "#5eead4", D: "#08131d" },
    rows: [
      "..TTTTTT..",
      ".TTTTTTTT.",
      "TTTTTTTTTT",
      "TTTTTTTTTT",
      "TTDTTTDTTT",
      "TTDTTTDTTT",
      "TTTTTTTTTT",
      "TTTTTTTTTT",
      "TTTTTTTTTT",
      ".TTTTTTTT.",
      ".TT....TT.",
      ".TT....TT."
    ]
  },
  AURA: {
    palette: { G: "#94a3b8", R: "#f87171", D: "#0f172a" },
    rows: [
      "...G..G...",
      "..GGGGGG..",
      ".GGGGGGGG.",
      "GGGGGGGGGG",
      "GGDGGGGDGG",
      "GGDGGGGDGG",
      "GGGGRRGGGG",
      ".GGGGGGGG.",
      "..GG..GG..",
      "..G....G.."
    ]
  },
  DRILL: {
    palette: { C: "#38bdf8", A: "#fbbf24", D: "#0f172a" },
    rows: [
      "....CC....",
      "...CCCC...",
      "..CCCCCC..",
      ".CCCCCCCC.",
      "CCCCCCCCCC",
      "CCDCCCCDCC",
      "CCCAAAACCC",
      ".CCCCCCCC.",
      "..CC..CC..",
      "..C....C.."
    ]
  },
  REBUTTAL: {
    palette: { P: "#a78bfa", K: "#f472b6", D: "#0f172a" },
    rows: [
      "...PPPP...",
      "..PPPPPP..",
      ".PPPPPPPP.",
      "PPPPPPPPPP",
      "PPDPPPPDPP",
      "PPDPPPPDPP",
      "PPPKKKKPPP",
      ".PPPPPPPP.",
      "..PP..PP..",
      "..P....P.."
    ]
  },
  SHIRO: {
    palette: { Y: "#fde047", W: "#ffffff" },
    rows: [
      "....YY....",
      "....YY....",
      "...YYYY...",
      "..YYYYYY..",
      "YYYYWWYYYY",
      "YYYYWWYYYY",
      "..YYYYYY..",
      "...YYYY...",
      "....YY....",
      "..Y....Y.."
    ]
  },
  shard: {
    palette: { Y: "#5eead4", W: "#ffffff" },
    rows: [
      "..YY..",
      ".YYYY.",
      "YYYYYY",
      "YYWWYY",
      ".YYYY.",
      "..YY.."
    ]
  }
};

function drawPixelSprite(ctx, spriteDef, x, y, totalW, flip) {
  const rows = spriteDef.rows;
  const cols = rows[0].length;
  const ps = totalW / cols;
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    for (let c = 0; c < cols; c++) {
      const ch = row[c];
      if (ch === ".") continue;
      const color = spriteDef.palette[ch];
      if (!color) continue;
      const cc = flip ? (cols - 1 - c) : c;
      ctx.fillStyle = color;
      ctx.fillRect(x + cc * ps, y + r * ps, ps + 0.6, ps + 0.6);
    }
  }
}

// low-res offscreen buffer that gets nearest-neighbor upscaled onto the real
// canvas — this is what gives the whole scene a chunky, retro pixel-art look
// instead of smooth vector shapes.
const PIXEL_SCALE = 2;
const pixelBuf = document.createElement("canvas");
pixelBuf.width = CW / PIXEL_SCALE;
pixelBuf.height = CH / PIXEL_SCALE;
const pctx = pixelBuf.getContext("2d");
pctx.imageSmoothingEnabled = false;
actx.imageSmoothingEnabled = false;

// ---------- SOUND: synthesized SFX + soft looping "cute sci-fi" music (Web Audio, no external files) ----------
let soundOn = true;
let audioCtx = null, masterGain = null, musicGain = null, sfxGain = null;
let musicInterval = null;
let musicStep = 0;
let padOscillators = [];

function ensureAudio() {
  try {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioCtx = new AC();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = soundOn ? 1 : 0;
      masterGain.connect(audioCtx.destination);
      musicGain = audioCtx.createGain();
      musicGain.gain.value = 0.22;
      musicGain.connect(masterGain);
      sfxGain = audioCtx.createGain();
      sfxGain.gain.value = 0.5;
      sfxGain.connect(masterGain);
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
  } catch (e) { /* audio unsupported — game still works silently */ }
}

function playTone({ freq, dur = 0.15, type = "sine", peak = 0.3, attack = 0.01, glideTo = null, dest = null }) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, audioCtx.currentTime + dur);
    g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    g.gain.linearRampToValueAtTime(peak, audioCtx.currentTime + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
    osc.connect(g);
    g.connect(dest || sfxGain);
    osc.start();
    osc.stop(audioCtx.currentTime + dur + 0.03);
  } catch (e) { /* ignore */ }
}

function sfxJump() { playTone({ freq: 420, glideTo: 720, dur: 0.14, type: "square", peak: 0.16 }); }
function sfxStomp() { playTone({ freq: 300, glideTo: 110, dur: 0.16, type: "triangle", peak: 0.26 }); }
function sfxHit() { playTone({ freq: 180, glideTo: 70, dur: 0.28, type: "sawtooth", peak: 0.22 }); }
function sfxCollect() {
  playTone({ freq: 880, glideTo: 1320, dur: 0.16, type: "sine", peak: 0.2 });
  setTimeout(() => playTone({ freq: 1320, dur: 0.14, type: "sine", peak: 0.14 }), 70);
}
function sfxBossDefeat() {
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => setTimeout(() => playTone({ freq: f, dur: 0.2, type: "square", peak: 0.2 }), i * 90));
}
function sfxWin() {
  [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => setTimeout(() => playTone({ freq: f, dur: 0.3, type: "triangle", peak: 0.22 }), i * 130));
}
function sfxLose() {
  [392, 349.23, 293.66, 220].forEach((f, i) => setTimeout(() => playTone({ freq: f, dur: 0.35, type: "sawtooth", peak: 0.18 }), i * 140));
}

const MUSIC_SCALE = [523.25, 587.33, 659.25, 783.99, 880.0, 987.77, 1046.5];
const MUSIC_MELODY = [0, 3, 2, 4, 3, 5, 3, 2, 0, 2, 4, 2, 0, null, 2, null];

function startMusic() {
  if (!soundOn || !audioCtx) return;
  stopMusic();
  musicStep = 0;
  const padFreqs = [130.81, 196.0];
  padOscillators = padFreqs.map(f => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.value = f;
    g.gain.value = 0.05;
    osc.connect(g);
    g.connect(musicGain);
    osc.start();
    return { osc, g };
  });
  musicInterval = setInterval(() => {
    if (!audioCtx) return;
    const note = MUSIC_MELODY[musicStep % MUSIC_MELODY.length];
    musicStep++;
    if (note !== null) {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.value = MUSIC_SCALE[note];
      g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      g.gain.linearRampToValueAtTime(0.16, audioCtx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      osc.connect(g);
      g.connect(musicGain);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.55);
    }
  }, 300);
}

function stopMusic() {
  if (musicInterval) { clearInterval(musicInterval); musicInterval = null; }
  padOscillators.forEach(({ osc, g }) => {
    try {
      g.gain.setValueAtTime(g.gain.value, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
      osc.stop(audioCtx.currentTime + 0.32);
    } catch (e) { /* ignore */ }
  });
  padOscillators = [];
}

function toggleSound() {
  soundOn = !soundOn;
  if (masterGain) masterGain.gain.value = soundOn ? 1 : 0;
  arcadeSoundBtn.textContent = soundOn ? "🔊" : "🔇";
  arcadeSoundBtn.setAttribute("aria-label", soundOn ? "Mute sound" : "Unmute sound");
  if (soundOn) startMusic(); else stopMusic();
}
arcadeSoundBtn.addEventListener("click", toggleSound);

let arcadeState = "closed"; // closed | start | playing | won | over
let arcadeKeys = {};
let bosses = [];
let pickups = [];
let player = null;
let camX = 0;
let lives = 3;
let bossesDefeated = 0;
let shardsCollected = 0;
let arcadeLoopId = null;
let toastTimer = null;

function freshBosses() {
  return BOSS_DEFS.map(b => ({
    ...b, x: b.baseX, dir: 1, hp: b.hp, maxHp: b.hp,
    y: GROUND_Y - b.size, alive: true, hitFlash: 0, defeated: false
  }));
}

function freshPickups() {
  return FACT_PICKUPS.map(p => ({ ...p, y: GROUND_Y - p.h, collected: false }));
}

function resetGame() {
  bosses = freshBosses();
  pickups = freshPickups();
  player = { x: 40, y: GROUND_Y - 30, w: 26, h: 30, vx: 0, vy: 0, grounded: false, facing: 1, invincible: 0 };
  lives = 3;
  bossesDefeated = 0;
  shardsCollected = 0;
  camX = 0;
  updateHud();
}

function updateHud() {
  arcadeLivesEl.textContent = "♥ ".repeat(Math.max(0, lives)).trim() || "—";
  arcadeBossCountEl.textContent = `bosses: ${bossesDefeated}/${BOSS_DEFS.length}`;
  arcadeShardCountEl.textContent = `shards: ${shardsCollected}/${FACT_PICKUPS.length}`;
}

function showToast(msg) {
  arcadeToast.textContent = msg;
  arcadeToast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => arcadeToast.classList.add("hidden"), 3200);
}

function showScreen(which) {
  startScreen.classList.add("hidden");
  winScreen.classList.add("hidden");
  overScreen.classList.add("hidden");
  if (which === "start") startScreen.classList.remove("hidden");
  if (which === "won") winScreen.classList.remove("hidden");
  if (which === "over") overScreen.classList.remove("hidden");
  if (which === "won" || which === "over") {
    clearTimeout(toastTimer);
    arcadeToast.classList.add("hidden");
  }
}

function openArcade() {
  arcadeOverlay.classList.remove("hidden");
  gameModeBtn.classList.add("on");
  arcadeState = "start";
  resetGame();
  showScreen("start");
  renderArcade();
  ensureAudio();
  startMusic();
  if (!arcadeLoopId) arcadeLoopId = requestAnimationFrame(arcadeTick);
}

function closeArcade() {
  arcadeOverlay.classList.add("hidden");
  gameModeBtn.classList.remove("on");
  arcadeState = "closed";
  stopMusic();
  if (arcadeLoopId) cancelAnimationFrame(arcadeLoopId);
  arcadeLoopId = null;
}

gameModeBtn.addEventListener("click", () => {
  if (arcadeOverlay.classList.contains("hidden")) openArcade();
  else closeArcade();
});
arcadeClose.addEventListener("click", closeArcade);
document.getElementById("arcadeStartBtn").addEventListener("click", () => {
  resetGame();
  arcadeState = "playing";
  showScreen(null);
});
document.getElementById("arcadeReplayBtn").addEventListener("click", () => {
  resetGame();
  arcadeState = "playing";
  showScreen(null);
});
document.getElementById("arcadeDoneBtn").addEventListener("click", closeArcade);
document.getElementById("arcadeRetryBtn").addEventListener("click", () => {
  resetGame();
  arcadeState = "playing";
  showScreen(null);
});
document.getElementById("arcadeQuitBtn").addEventListener("click", closeArcade);

window.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  arcadeKeys[k] = true;
  if (arcadeState === "playing" && ["arrowleft", "arrowright", "arrowup", " ", "spacebar"].includes(k)) {
    e.preventDefault();
  }
  if (k === "escape" && arcadeState !== "closed") closeArcade();
});
window.addEventListener("keyup", (e) => { arcadeKeys[e.key.toLowerCase()] = false; });

// touch controls
function bindHold(id, key) {
  const el = document.getElementById(id);
  const on = (ev) => { ev.preventDefault(); arcadeKeys[key] = true; };
  const off = (ev) => { ev.preventDefault(); arcadeKeys[key] = false; };
  el.addEventListener("touchstart", on, { passive: false });
  el.addEventListener("touchend", off, { passive: false });
  el.addEventListener("mousedown", on);
  el.addEventListener("mouseup", off);
  el.addEventListener("mouseleave", off);
}
bindHold("btnLeft", "arrowleft");
bindHold("btnRight", "arrowright");
bindHold("btnJump", " ");

function updateArcadeGame() {
  const p = player;
  const prevBottom = p.y + p.h;

  if (arcadeKeys["arrowleft"] || arcadeKeys["a"]) { p.vx = -MOVE_SPEED; p.facing = -1; }
  else if (arcadeKeys["arrowright"] || arcadeKeys["d"]) { p.vx = MOVE_SPEED; p.facing = 1; }
  else p.vx *= 0.78;

  if ((arcadeKeys[" "] || arcadeKeys["spacebar"] || arcadeKeys["arrowup"] || arcadeKeys["w"]) && p.grounded) {
    p.vy = JUMP_V;
    p.grounded = false;
    sfxJump();
  }

  p.vy += GRAVITY;
  p.x += p.vx;
  p.y += p.vy;

  p.x = Math.max(0, Math.min(LEVEL_WIDTH - p.w, p.x));

  if (p.y + p.h >= GROUND_Y) {
    p.y = GROUND_Y - p.h;
    p.vy = 0;
    p.grounded = true;
  } else {
    p.grounded = false;
  }

  if (p.invincible > 0) p.invincible--;

  // fact shard pickups
  pickups.forEach(pk => {
    if (pk.collected) return;
    const dx = (p.x + p.w / 2) - pk.x;
    const dy = (p.y + p.h / 2) - pk.y;
    if (Math.abs(dx) < 22 && Math.abs(dy) < 24) {
      pk.collected = true;
      shardsCollected++;
      updateHud();
      showToast(pk.fact);
      sfxCollect();
    }
  });

  bosses.forEach(b => {
    if (!b.alive) return;
    b.x += b.speed * b.dir;
    if (b.x > b.baseX + b.range) { b.x = b.baseX + b.range; b.dir = -1; }
    if (b.x < b.baseX - b.range) { b.x = b.baseX - b.range; b.dir = 1; }
    if (b.hitFlash > 0) b.hitFlash--;

    const overlapX = p.x + p.w > b.x && p.x < b.x + b.size;
    const overlapY = p.y + p.h > b.y && p.y < b.y + b.size;
    if (overlapX && overlapY) {
      const wasAbove = prevBottom <= b.y + 12;
      if (p.vy > 0 && wasAbove) {
        // stomp!
        b.hp--;
        b.hitFlash = 10;
        p.vy = JUMP_V * 0.55;
        sfxStomp();
        if (b.hp <= 0) {
          b.alive = false;
          b.defeated = true;
          bossesDefeated++;
          updateHud();
          showToast(b.fact);
          sfxBossDefeat();
          if (bossesDefeated >= BOSS_DEFS.length) {
            arcadeState = "won";
            winMsgEl.textContent = `all four bosses defeated — you also found ${shardsCollected}/${FACT_PICKUPS.length} memory shards. thanks for playing through my portfolio.`;
            showScreen("won");
            sfxWin();
          }
        }
      } else if (p.invincible <= 0) {
        lives--;
        p.invincible = 80;
        p.vx = p.x < b.x ? -6 : 6;
        p.vy = -6;
        updateHud();
        sfxHit();
        if (lives <= 0) {
          arcadeState = "over";
          overMsg.textContent = `the bosses got you — you defeated ${bossesDefeated}/${BOSS_DEFS.length} and found ${shardsCollected}/${FACT_PICKUPS.length} memory shards before going down.`;
          showScreen("over");
          sfxLose();
        }
      }
    }
  });

  camX = Math.max(0, Math.min(LEVEL_WIDTH - CW, p.x + p.w / 2 - CW / 2));
}

const SKY_BANDS = ["#080f18", "#0a1622", "#0d1c2c", "#0f2334"];

function renderArcade() {
  pctx.setTransform(1, 0, 0, 1, 0, 0);
  pctx.clearRect(0, 0, pixelBuf.width, pixelBuf.height);
  pctx.scale(1 / PIXEL_SCALE, 1 / PIXEL_SCALE);

  // banded retro sky (flat color steps instead of a smooth gradient)
  const bandH = CH / SKY_BANDS.length;
  SKY_BANDS.forEach((color, i) => {
    pctx.fillStyle = color;
    pctx.fillRect(0, i * bandH, CW, bandH + 1);
  });

  // parallax stars as little pixel dots
  pctx.fillStyle = "rgba(148,163,184,0.65)";
  bgStars.forEach(s => {
    const sx = s.x - camX * 0.4;
    if (sx < -10 || sx > CW + 10) return;
    pctx.fillRect(sx - 1, s.y - 1, 2, 2);
  });

  // ground + scrolling tick texture
  pctx.fillStyle = "#132a3d";
  pctx.fillRect(0, GROUND_Y, CW, CH - GROUND_Y);
  pctx.fillStyle = "#5eead4";
  pctx.fillRect(0, GROUND_Y, CW, 3);
  pctx.fillStyle = "rgba(94,234,212,0.15)";
  for (let gx = -(camX % 40); gx < CW; gx += 40) {
    pctx.fillRect(gx, GROUND_Y + 4, 2, CH - GROUND_Y - 4);
  }

  if (player) {
    // fact shard pickups
    pickups.forEach(pk => {
      if (pk.collected) return;
      const sx = pk.x - camX;
      if (sx < -20 || sx > CW + 20) return;
      const bob = Math.sin(Date.now() / 260 + pk.x) * 4;
      drawPixelSprite(pctx, SPRITES.shard, sx - 9, pk.y - 9 + bob, 18, false);
    });

    // bosses
    bosses.forEach(b => {
      if (!b.alive) return;
      const sx = b.x - camX;
      if (sx < -80 || sx > CW + 80) return;
      const wobble = Math.sin(Date.now() / 220 + b.baseX) * 3;
      pctx.save();
      pctx.globalAlpha = b.hitFlash > 0 ? 0.4 : 1;
      drawPixelSprite(pctx, SPRITES[b.sprite], sx, b.y + wobble, b.size, b.dir < 0);
      pctx.restore();

      // hp bar
      const barW = b.size;
      pctx.fillStyle = "rgba(0,0,0,0.4)";
      pctx.fillRect(sx, b.y - 12, barW, 5);
      pctx.fillStyle = "#5eead4";
      pctx.fillRect(sx, b.y - 12, barW * (b.hp / b.maxHp), 5);
    });

    // player
    const px = player.x - camX;
    pctx.save();
    if (player.invincible > 0 && Math.floor(player.invincible / 6) % 2 === 0) {
      pctx.globalAlpha = 0.35;
    }
    drawPixelSprite(pctx, SPRITES.player, px, player.y, player.w, player.facing < 0);
    pctx.restore();
  }

  // blit the low-res buffer onto the real canvas, upscaled with nearest-neighbor
  // for that chunky pixel-art look
  actx.clearRect(0, 0, CW, CH);
  actx.drawImage(pixelBuf, 0, 0, CW, CH);

  // crisp boss name labels drawn at full resolution on top, for legibility
  if (player) {
    bosses.forEach(b => {
      if (!b.alive) return;
      const sx = b.x - camX;
      if (sx < -80 || sx > CW + 80) return;
      actx.fillStyle = "#93a1b7";
      actx.font = "11px monospace";
      actx.textAlign = "center";
      const labelHalfW = actx.measureText(b.name).width / 2 + 4;
      const labelX = Math.min(CW - labelHalfW, Math.max(labelHalfW, sx + b.size / 2));
      actx.fillText(b.name, labelX, b.y - 18);
    });
  }
}

function arcadeTick() {
  if (arcadeState === "playing") updateArcadeGame();
  renderArcade();
  arcadeLoopId = requestAnimationFrame(arcadeTick);
}
