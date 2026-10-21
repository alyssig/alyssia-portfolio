// ---------- DATA ---------- preview
const experiences = [
  {
    "title": "Digital Collections AI & Data Quality Assistant",
    "org": "University of South Carolina",
    "dates": "SEP 2026 – PRESENT",
    "bullets": [
      "Evaluate AI-generated transcriptions for accuracy, consistency, and reliability through systematic quality checks and sampling.",
      "Identify and correct transcription errors, formatting issues, and data inconsistencies before repository ingestion.",
      "Structure unstructured source materials into machine-readable, searchable datasets for institutional digital collections.",
      "Execute data processing and validation workflows across JSTOR Seeklight, Zooniverse, and institutional repository systems."
    ],
    "tags": [
      "AI Output Evaluation",
      "Data Quality",
      "Digital Collections"
    ]
  },
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
    desc: "A campus community platform prototype designed to help college students explore campus life through reviews, recommendations, and student-generated content.",
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

// ---------- INTERNSHIP AVAILABILITY ----------
const heroText = document.querySelector("#home .hero-text");
if (heroText && !document.getElementById("careerAvailability")) {
  const availability = document.createElement("p");
  availability.id = "careerAvailability";
  availability.textContent = "Graduating Spring 2028 · Available for Summer 2027 SWE internships";
  availability.style.cssText = "color:var(--accent,#5eead4);font-weight:600;line-height:1.6;margin:1rem 0;";
  heroText.insertBefore(availability, heroText.querySelector(".hero-buttons"));
}

// ---------- RESUME ----------
const heroButtons = document.querySelector("#home .hero-buttons");
if (heroButtons && !document.getElementById("resumeLink")) {
  const resumeLink = document.createElement("a");
  resumeLink.id = "resumeLink";
  resumeLink.className = "btn btn-ghost";
  resumeLink.href = "assets/Alyssia_Gaston_Resume.pdf";
  resumeLink.target = "_blank";
  resumeLink.rel = "noopener";
  resumeLink.textContent = "Résumé ↗";
  resumeLink.setAttribute("aria-label", "Open Alyssia Gaston's résumé (PDF, new tab)");
  heroButtons.appendChild(resumeLink);
  heroButtons.style.flexWrap = "wrap";
}

// ---------- EXPERIENCE ----------
const expTabsWrap = document.getElementById("expTabs");
const expPanel = document.getElementById("expPanel");

// Keep each experience button aligned with its entry in the data array.
const experienceLabels = ["Digital Collections AI", "AccessComputing", "Conference Assistant", "NASA Space Grant"];
expTabsWrap.innerHTML = experiences.map((experience, i) =>
  `<button type="button" class="exp-tab${i === 0 ? " active" : ""}" data-exp="${i}">${experienceLabels[i] || experience.title}</button>`
).join("");


function renderExp(i) {
  const e = experiences[i];
  expPanel.innerHTML = `
    <h3>${e.title} @ <span>${e.org}</span></h3>
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

// ---------- GAME MODE: PORTFOLIO QUEST ----------
const gameModeBtn = document.getElementById("gameModeBtn");
const arcadeOverlay = document.getElementById("arcadeOverlay");
const arcadeCanvas = document.getElementById("arcadeCanvas");
const actx = arcadeCanvas.getContext("2d");
const arcadeSoundBtn = document.getElementById("arcadeSound");
const startScreen = document.getElementById("arcadeStartScreen");
const winScreen = document.getElementById("arcadeWinScreen");
const overScreen = document.getElementById("arcadeOverScreen");
const arcadeToast = document.getElementById("arcadeToast");
const CW = arcadeCanvas.width, CH = arcadeCanvas.height;
const GROUND_Y = 340, LEVEL_WIDTH = 2900;
const GRAVITY = 0.55, JUMP_V = -11.5, MOVE_SPEED = 4;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const BOSS_DEFS = [
  { name: "AURA-BOT", sprite: "AURA", x: 750, hp: 3, size: 46, attack: "charge", color: "#5eead4", hint: "AURA is charging — jump over it!", title: "A.U.R.A. — Search-and-rescue robotics", detail: hardware[0].desc, link: "#hardware" },
  { name: "DRILL KING", sprite: "DRILL", x: 1550, hp: 3, size: 46, attack: "wave", color: "#38bdf8", hint: "Ground waves incoming — jump!", title: "Lunar Regolith Drilling Prototype", detail: hardware[1].desc, link: "#hardware" },
  { name: "REBUTTAL AI", sprite: "REBUTTAL", x: 2450, hp: 4, size: 48, attack: "bubble", color: "#c4b5fd", hint: "Speech bubbles incoming — dodge and stomp!", title: "Rebuttal.ai — Communication assistance", detail: projects[0].desc, link: "#software" }
];
const FACT_PICKUPS = [
  { x: 220, h: 24, fact: "I'm graduating in Spring 2028 and available for Summer 2027 SWE internships!" },
  { x: 440, h: 86, fact: "At USC, I evaluate AI-generated transcriptions and support digital collections data quality." },
  { x: 1030, h: 24, fact: "At UW's AccessComputing program, I researched accessibility and tech equity." },
  { x: 1250, h: 86, fact: "Campus Connect is my campus community platform prototype for college students." },
  { x: 1840, h: 24, fact: "I built a lunar regolith drilling prototype during my NASA SC Space Grant internship." },
  { x: 2030, h: 86, fact: "A.U.R.A. brings together CAD, Webots simulation, C, and embedded systems." },
  { x: 2210, h: 24, fact: "As @mochabytee, I share my CS projects and college life with 20K+ followers." }
];

// New screens and styling are added here so the existing HTML still works.
const gameStyle = document.createElement("style");
gameStyle.textContent = `
  #arcadeOverlay .arcade-screen { overflow-y:auto; box-sizing:border-box; padding:20px; justify-content:flex-start; }
  @media(max-width:600px) { #arcadeOverlay .arcade-canvas-wrap.quest-menu { min-height:min(440px,60dvh); } }
  #arcadeOverlay .arcade-screen p { max-width:580px; margin:12px auto; line-height:1.5; }
  #questReveal { background:rgba(8,19,29,.96); z-index:5; }
  #questReveal h2 { color:#5eead4; margin:8px 0; font-size:clamp(18px,3vw,26px); }
  .quest-actions { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
  #questPause { background:transparent; border:1px solid #64748b; border-radius:6px; color:#e2e8f0; padding:5px 8px; cursor:pointer; }
  #questConfetti { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:6; }
  #arcadeOverlay button:focus-visible, #arcadeOverlay a:focus-visible { outline:2px solid #5eead4; outline-offset:3px; }
  #arcadeTouch button { touch-action:none; }
`;
document.head.appendChild(gameStyle);
startScreen.querySelector("p").textContent = "Explore three project bosses: dodge AURA's charge, jump Drill King's waves, and avoid Rebuttal.ai's speech bubbles. Stomp from above to win. Each victory reveals the project behind the boss.";
startScreen.querySelector(".arcade-controls-hint").textContent = "← → / A D: move · Space / ↑ / W: jump · P: pause · Esc: close. Touch controls are below. Collect all 7 optional memory shards!";
arcadeCanvas.setAttribute("aria-label", "Portfolio Quest: move, jump, and stomp three project bosses. All portfolio projects are also accessible outside the game.");
arcadeOverlay.setAttribute("role", "dialog");
arcadeOverlay.setAttribute("aria-modal", "true");
arcadeOverlay.setAttribute("aria-label", "Portfolio Quest");
arcadeToast.setAttribute("role", "status");
const revealScreen = document.createElement("div");
revealScreen.id = "questReveal";
revealScreen.className = "arcade-screen hidden";
revealScreen.innerHTML = '<div style="color:#94a3b8">PROJECT UNLOCKED</div><h2 id="questTitle"></h2><p id="questDetail"></p><div class="quest-actions"><a id="questExplore" class="btn btn-ghost">Explore project ↗</a><button id="questContinue" class="btn btn-primary" type="button">Continue</button></div>';
arcadeCanvas.parentElement.appendChild(revealScreen);
const pauseScreen = document.createElement("div");
pauseScreen.className = "arcade-screen hidden";
pauseScreen.innerHTML = '<h2>Paused</h2><p>Take your time, explorer.</p><button id="questResume" class="btn btn-primary" type="button">Resume</button>';
arcadeCanvas.parentElement.appendChild(pauseScreen);
const pauseButton = document.createElement("button");
pauseButton.id = "questPause";
pauseButton.type = "button";
pauseButton.textContent = "Pause";
arcadeSoundBtn.before(pauseButton);
const confettiCanvas = document.createElement("canvas");
confettiCanvas.id = "questConfetti";
confettiCanvas.width = CW;
confettiCanvas.height = CH;
confettiCanvas.setAttribute("aria-hidden", "true");
arcadeCanvas.parentElement.appendChild(confettiCanvas);
const celebrationCtx = confettiCanvas.getContext("2d");

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



let arcadeState = "closed", arcadeKeys = {}, bosses = [], pickups = [];
let player = null, camX = 0, lives = 5, bossesDefeated = 0, shardsCollected = 0;
let hazards = [], effects = [], confetti = [], toastTimer = null, arcadeLoopId = null;
let lastTime = 0, accumulator = 0, gameFrame = 0, returnFocus = null, oldOverflow = "";
let jumpQueued = false, currentReveal = null;
const STEP = 1000 / 60;

function updateHud() {
  document.getElementById("arcadeLives").textContent = "♥ ".repeat(Math.max(0, lives)).trim() || "—";
  document.getElementById("arcadeBossCount").textContent = `bosses: ${bossesDefeated}/${BOSS_DEFS.length}`;
  document.getElementById("arcadeShardCount").textContent = `shards: ${shardsCollected}/${FACT_PICKUPS.length}`;
}
function resetGame() {
  bosses = BOSS_DEFS.map(b => ({ ...b, baseX:b.x, y:GROUND_Y-b.size, maxHp:b.hp, alive:true, dir:-1, phase:"idle", timer:100, flash:0, cooldown:0 }));
  pickups = FACT_PICKUPS.map(p => ({ ...p, y:GROUND_Y-p.h, collected:false }));
  player = { x:40, y:GROUND_Y-30, w:26, h:30, vx:0, vy:0, grounded:true, facing:1, invincible:0, squash:0 };
  camX = 0; lives = 5; bossesDefeated = 0; shardsCollected = 0;
  hazards = []; effects = []; confetti = []; arcadeKeys = {}; jumpQueued = false; currentReveal = null;
  gameFrame = 0; updateHud();
}
function showScreen(which) {
  [startScreen, winScreen, overScreen, revealScreen, pauseScreen].forEach(s => s.classList.add("hidden"));
  const screen = {start:startScreen, won:winScreen, over:overScreen, reveal:revealScreen, paused:pauseScreen}[which];
  arcadeCanvas.parentElement.classList.toggle("quest-menu", Boolean(screen));
  if (screen) {
    screen.classList.remove("hidden");
    screen.querySelector("button")?.focus();
  }
  clearTimeout(toastTimer);
  arcadeToast.classList.add("hidden");
  pauseButton.disabled = !["playing", "paused"].includes(which);
}
function showToast(message) {
  arcadeToast.textContent = message;
  arcadeToast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => arcadeToast.classList.add("hidden"), 3500);
}
function burst(x,y,color,count=12) {
  if (reducedMotion) return;
  for(let i=0;i<count;i++) effects.push({x,y,vx:(Math.random()-.5)*5,vy:-Math.random()*4,life:28,color});
}
function openArcade() {
  if(arcadeState!=="closed") return;
  returnFocus = document.activeElement;
  oldOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  arcadeOverlay.classList.remove("hidden"); gameModeBtn.classList.add("on");
  resetGame(); arcadeState="start"; showScreen("start");
  ensureAudio(); startMusic(); lastTime=0; accumulator=0;
  arcadeLoopId=requestAnimationFrame(arcadeTick);
}
function closeArcade() {
  arcadeState="closed"; arcadeKeys={}; jumpQueued=false;
  arcadeOverlay.classList.add("hidden"); gameModeBtn.classList.remove("on");
  clearTimeout(toastTimer); stopMusic(); cancelAnimationFrame(arcadeLoopId); arcadeLoopId=null;
  document.body.style.overflow=oldOverflow;
  if(returnFocus?.isConnected) returnFocus.focus();
}
function startGame() {
  resetGame(); pauseButton.textContent="Pause"; arcadeState="playing"; showScreen("playing");
  ensureAudio(); startMusic(); pauseButton.focus();
}
function togglePause() {
  if(!["playing","paused"].includes(arcadeState)) return;
  arcadeState=arcadeState==="playing"?"paused":"playing";
  arcadeKeys={}; jumpQueued=false; pauseButton.textContent=arcadeState==="paused"?"Resume":"Pause";
  showScreen(arcadeState);
  if(arcadeState==="paused") stopMusic(); else {startMusic(); pauseButton.focus();}
}
function hurtPlayer(direction) {
  if(player.invincible>0 || arcadeState!=="playing") return;
  lives--; player.invincible=90; player.vy=-5; player.vx=direction*6;
  burst(player.x+13,player.y+15,"#fb7185"); sfxHit(); updateHud();
  if(lives<=0) {
    arcadeState="over"; stopMusic();
    document.getElementById("arcadeOverMsg").textContent=`You unlocked ${bossesDefeated}/${BOSS_DEFS.length} projects and collected ${shardsCollected}/${FACT_PICKUPS.length} shards. Ready for another run?`;
    showScreen("over"); sfxLose();
  }
}
function revealProject(boss) {
  currentReveal=boss; arcadeState="reveal"; arcadeKeys={}; jumpQueued=false; hazards=[];
  document.getElementById("questTitle").textContent=boss.title;
  document.getElementById("questDetail").textContent=boss.detail;
  const link=document.getElementById("questExplore");
  link.href=boss.link;
  if(boss.link.startsWith("#")) {link.removeAttribute("target");link.removeAttribute("rel");}
  else {link.target="_blank";link.rel="noopener";}
  document.getElementById("questContinue").textContent=bossesDefeated===BOSS_DEFS.length?"Celebrate!":"Next adventure →";
  showScreen("reveal"); sfxBossDefeat();
}
function winGame() {
  arcadeState="won"; stopMusic();
  document.getElementById("arcadeWinMsg").textContent=`All ${BOSS_DEFS.length} projects unlocked! ${shardsCollected===FACT_PICKUPS.length?"Perfect collection! ":""}You found ${shardsCollected}/${FACT_PICKUPS.length} memory shards. Thanks for exploring — graduating Spring 2028, available Summer 2027!`;
  showScreen("won"); sfxWin();
  if(!reducedMotion) for(let i=0;i<100;i++) confetti.push({x:Math.random()*CW,y:-Math.random()*CH,vx:(Math.random()-.5)*2,vy:1+Math.random()*2,color:["#5eead4","#fbbf24","#c4b5fd","#fb7185"][i%4],life:300});
}
function continueAdventure() {
  if(bossesDefeated===BOSS_DEFS.length) {winGame();return;}
  lives=Math.min(5,lives+1); player.invincible=90; arcadeState="playing"; currentReveal=null;
  showScreen("playing"); updateHud(); pauseButton.focus();
}
function overlaps(a,b) {return a.x+a.w>b.x && a.x<b.x+b.w && a.y+a.h>b.y && a.y<b.y+b.h;}
function fireAttack(b) {
  b.dir=player.x<b.x?-1:1;
  if(b.attack==="charge") {b.phase="charge";b.timer=34;}
  else {
    b.phase="idle";b.timer=b.attack==="wave"?115:95;
    const wave=b.attack==="wave";
    for(const direction of (wave?[-1,1]:[b.dir])) hazards.push({x:b.x+b.size/2,y:wave?GROUND_Y-16:GROUND_Y-42,w:wave?26:38,h:wave?16:25,vx:direction*(wave?3.6:3.1),life:170,kind:wave?"wave":"bubble",color:b.color});
    burst(b.x+b.size/2,GROUND_Y,b.color);
  }
}
function updateBoss(b) {
  if(b.flash>0)b.flash--;
  if(b.cooldown>0)b.cooldown--;
  if(Math.abs(player.x-b.x)>480) return;
  b.timer--;
  if(b.phase==="charge") {
    b.x+=b.dir*6;
    if(b.timer<=0 || Math.abs(b.x-b.baseX)>190) {b.phase="idle";b.timer=100;}
  } else if(b.phase==="warn") {
    if(b.timer<=0)fireAttack(b);
  } else {
    b.x+=Math.sign(b.baseX-b.x)*.65;
    if(b.timer<=0) {b.phase="warn";b.timer=45;showToast(b.hint);}
  }
}
function updateArcadeGame() {
  gameFrame++;
  const p=player, prevBottom=p.y+p.h;
  if(arcadeKeys.arrowleft||arcadeKeys.a){p.vx=-MOVE_SPEED;p.facing=-1;}
  else if(arcadeKeys.arrowright||arcadeKeys.d){p.vx=MOVE_SPEED;p.facing=1;}
  else p.vx*=.78;
  if(jumpQueued&&p.grounded){p.vy=JUMP_V;p.grounded=false;sfxJump();burst(p.x+13,GROUND_Y,"#5eead4",6);}
  jumpQueued=false;
  p.vy+=GRAVITY; p.x+=p.vx; p.y+=p.vy;
  // Defeat each boss before entering the next stretch.
  const active=bosses.find(b=>b.alive);
  p.x=Math.max(0,Math.min(active?active.baseX+160:LEVEL_WIDTH-p.w,p.x));
  if(p.y+p.h>=GROUND_Y){if(!p.grounded)p.squash=7;p.y=GROUND_Y-p.h;p.vy=0;p.grounded=true;}
  else p.grounded=false;
  if(p.invincible>0)p.invincible--;
  if(p.squash>0)p.squash--;
  for(const pk of pickups){
    if(!pk.collected&&Math.abs(p.x+p.w/2-pk.x)<24&&Math.abs(p.y+p.h/2-pk.y)<26){
      pk.collected=true;shardsCollected++;updateHud();showToast(pk.fact);sfxCollect();burst(pk.x,pk.y,"#fbbf24");
    }
  }
  if(active){
    updateBoss(active);
    const hitbox={x:active.x,y:active.y,w:active.size,h:active.size};
    if(overlaps(p,hitbox)){
      if(p.vy>0&&prevBottom<=active.y+12){
        p.vy=JUMP_V*.72;
        if(active.cooldown===0){
          active.hp--;active.cooldown=20;active.flash=10;sfxStomp();burst(active.x+active.size/2,active.y,active.color,18);
          if(active.hp<=0){active.alive=false;bossesDefeated++;updateHud();revealProject(active);}
        }
      }else hurtPlayer(p.x<active.x?-1:1);
    }
  }
  if(arcadeState==="playing")for(const h of hazards){
    h.x+=h.vx;h.life--;
    if(h.life>0&&overlaps(p,h)){hurtPlayer(Math.sign(h.vx));h.life=0;}
  }
  hazards=hazards.filter(h=>h.life>0&&h.x>0&&h.x<LEVEL_WIDTH);
  camX=Math.max(0,Math.min(LEVEL_WIDTH-CW,p.x+p.w/2-CW/2));
}
function drawSprite(sprite,x,y,width,flip=false){drawPixelSprite(actx,SPRITES[sprite],x,y,width,flip);}
// Each project has its own setting; scenery is decorative, not an obstacle.
function drawQuestScenery() {
  const zone = player ? (player.x < 1100 ? "city" : player.x < 1900 ? "moon" : "stage") : "city";
  const palettes = {
    city: ["#0a1420", "#152431", "#20313a", "#293b43"],
    moon: ["#080d20", "#10152e", "#1c2340", "#30334c"],
    stage: ["#100b24", "#211237", "#301846", "#432250"]
  };
  palettes[zone].forEach((color, i) => {
    actx.fillStyle = color;
    actx.fillRect(0, i * GROUND_Y / 4, CW, GROUND_Y / 4 + 1);
  });
  actx.fillStyle = "#94a3b8";
  for (let i = 0; i < 65; i++) {
    const x = ((i * 137 - camX * .12) % CW + CW) % CW;
    actx.fillRect(x, 30 + (i * 67) % 160, i % 9 === 0 ? 3 : 2, 2);
  }
  if (zone === "city") {
    // Broken skyline, dark windows, and a distant rescue beacon.
    for (let i = -1; i < 12; i++) {
      const x = i * 95 - (camX * .2 % 95);
      const h = 65 + ((i + 13) * 37 % 105);
      actx.fillStyle = "#14242e";
      actx.fillRect(x, GROUND_Y - h, 72, h);
      actx.fillStyle = "#243b43";
      actx.fillRect(x + 9, GROUND_Y - h - 13, 28, 13);
      for (let row = 0; row < 4; row++) for (let col = 0; col < 3; col++) {
        actx.fillStyle = (i + row + col) % 4 === 0 ? "#a38b58" : "#304850";
        actx.fillRect(x + 10 + col * 19, GROUND_Y - h + 16 + row * 24, 8, 10);
      }
      // A jagged missing corner rather than a solid rectangular roof.
      actx.fillStyle = "#20313a";
      actx.fillRect(x + 48, GROUND_Y - h, 24, 17);
    }
    actx.fillStyle = "rgba(94,234,212,.1)";
    actx.beginPath();actx.moveTo(620,GROUND_Y);actx.lineTo(565,90);actx.lineTo(675,90);actx.fill();
    actx.fillStyle = "#344b50";
    for(let i=0;i<16;i++) {
      const x=((i*73-camX*.55)%CW+CW)%CW;
      actx.fillRect(x,GROUND_Y-8-(i%3)*4,25+(i%4)*5,16);
    }
  } else if (zone === "moon") {
    // Earth over the lunar horizon.
    actx.fillStyle="#3679b1";actx.beginPath();actx.arc(640,87,39,0,Math.PI*2);actx.fill();
    actx.save();actx.beginPath();actx.arc(640,87,39,0,Math.PI*2);actx.clip();
    actx.fillStyle="#62b6a2";actx.fillRect(610,57,28,14);actx.fillRect(624,69,23,19);actx.fillRect(642,97,24,23);
    actx.fillStyle="rgba(230,245,255,.6)";actx.fillRect(607,77,69,5);actx.fillRect(613,101,31,4);actx.restore();
    for(let i=-1;i<8;i++) {
      const x=i*150-(camX*.18%150);
      actx.fillStyle=i%2===0?"#42435b":"#34384f";
      actx.beginPath();actx.moveTo(x,GROUND_Y);actx.lineTo(x+65,225+(i%3)*16);actx.lineTo(x+155,GROUND_Y);actx.fill();
    }
    // Small lander in the distance.
    actx.fillStyle="#b3b9c8";actx.fillRect(130,278,34,22);
    actx.fillStyle="#c7a66a";actx.fillRect(136,263,22,15);
    actx.strokeStyle="#b3b9c8";actx.lineWidth=3;
    actx.beginPath();actx.moveTo(135,300);actx.lineTo(122,320);actx.moveTo(160,300);actx.lineTo(174,320);actx.stroke();
  } else {
    // Neon stage, stationary spotlights, and microphone silhouettes.
    actx.fillStyle="#24102f";actx.fillRect(0,45,55,GROUND_Y-45);actx.fillRect(CW-55,45,55,GROUND_Y-45);
    for(const x of [150,650]) {
      actx.fillStyle="rgba(196,181,253,.09)";
      actx.beginPath();actx.moveTo(x,45);actx.lineTo(x-130,GROUND_Y);actx.lineTo(x+130,GROUND_Y);actx.fill();
      actx.fillStyle="#c4b5fd";actx.fillRect(x-13,35,26,9);
    }
    actx.strokeStyle="#9e65cf";actx.lineWidth=2;actx.strokeRect(285,78,230,69);
    actx.fillStyle="#e9d5ff";actx.textAlign="center";actx.font="bold 18px monospace";actx.fillText("IDEAS TAKE THE STAGE",400,108);
    actx.font="11px monospace";actx.fillStyle="#94a3b8";actx.fillText("REBUTTAL.AI",400,129);
    for(const x of [95,695]) {
      actx.fillStyle="#ad93b9";actx.fillRect(x,248,4,72);actx.fillRect(x-13,319,30,4);
      actx.fillStyle="#d8c4e4";actx.fillRect(x-5,227,14,24);
    }
    for(const [x,y] of [[215,180],[530,195]]) {
      actx.strokeStyle="#835d9b";actx.strokeRect(x,y,52,27);
      actx.beginPath();actx.moveTo(x+10,y+27);actx.lineTo(x+10,y+35);actx.lineTo(x+20,y+27);actx.stroke();
      actx.fillStyle="#835d9b";for(let i=0;i<3;i++)actx.fillRect(x+12+i*11,y+12,3,3);
    }
  }
  actx.fillStyle=zone==="moon"?"#55576b":zone==="stage"?"#271734":"#23383e";
  actx.fillRect(0,GROUND_Y,CW,CH-GROUND_Y);
  actx.fillStyle=zone==="moon"?"#aaaec5":zone==="stage"?"#c084fc":"#5eead4";
  actx.fillRect(0,GROUND_Y,CW,3);
  if(zone==="moon") {
    for(let i=0;i<10;i++) {
      const x=((i*99-camX*.8)%CW+CW)%CW;
      actx.fillStyle="#363c51";actx.beginPath();actx.ellipse(x,GROUND_Y+20+(i%3)*12,18,5,0,0,Math.PI*2);actx.fill();
    }
  } else {
    actx.strokeStyle=zone==="stage"?"#573266":"#355057";actx.lineWidth=1;
    for(let x=-(camX%60);x<CW;x+=60){actx.beginPath();actx.moveTo(x,GROUND_Y+4);actx.lineTo(x-30,CH);actx.stroke();}
  }
  const label={city:"01 / A.U.R.A. · RESCUE DISTRICT",moon:"02 / DRILL KING · LUNAR OUTPOST",stage:"03 / REBUTTAL.AI · IDEA STAGE"}[zone];
  actx.fillStyle="rgba(8,15,24,.8)";actx.fillRect(14,12,335,27);
  actx.fillStyle="#d6e3ef";actx.textAlign="left";actx.font="12px monospace";actx.fillText(label,24,30);
}

function renderArcade() {
  actx.imageSmoothingEnabled=false;
  drawQuestScenery();
  for(const pk of pickups){if(pk.collected)continue;const bob=reducedMotion?0:Math.sin(gameFrame/15+pk.x)*3;drawSprite("shard",pk.x-camX-9,pk.y-9+bob,18);}
  for(const b of bosses){
    if(!b.alive)continue;
    const x=b.x-camX;
    if(x<-100||x>CW+100)continue;
    actx.save();actx.globalAlpha=b.flash>0?.5:1;drawSprite(b.sprite,x,b.y,b.size,b.dir<0);actx.restore();
    actx.fillStyle="#334155";actx.fillRect(x,b.y-13,b.size,5);actx.fillStyle=b.color;actx.fillRect(x,b.y-13,b.size*b.hp/b.maxHp,5);
    actx.font="11px monospace";actx.textAlign="center";actx.fillStyle="#e2e8f0";actx.fillText(b.name,Math.max(65,Math.min(CW-65,x+b.size/2)),b.y-22);
    if(b.phase==="warn"){actx.fillStyle="#fbbf24";actx.font="bold 24px monospace";actx.fillText("!",x+b.size/2,b.y-42);}
  }
  for(const h of hazards){
    const x=h.x-camX;actx.fillStyle=h.color;
    if(h.kind==="wave"){
      actx.beginPath();actx.moveTo(x,h.y+h.h);actx.lineTo(x+h.w/2,h.y);actx.lineTo(x+h.w,h.y+h.h);actx.fill();
    }else{
      actx.fillRect(x,h.y,h.w,h.h-5);actx.fillRect(x+6,h.y+h.h-5,6,5);
      actx.fillStyle="#08131d";actx.font="bold 12px monospace";actx.textAlign="center";actx.fillText("...",x+h.w/2,h.y+14);
    }
  }
  if(player){
    const p=player,scaleY=reducedMotion?1:!p.grounded?1.12:p.squash>0?.82:1;
    actx.save();actx.translate(p.x-camX+p.w/2,p.y+p.h);actx.scale(1/scaleY,scaleY);
    actx.globalAlpha=p.invincible>0?.65:1;
    drawSprite("player",-p.w/2,-p.h,p.w,p.facing<0);actx.restore();
  }
  for(const e of effects){actx.fillStyle=e.color;actx.globalAlpha=e.life/28;actx.fillRect(e.x-camX,e.y,4,4);}actx.globalAlpha=1;
  celebrationCtx.clearRect(0,0,CW,CH);
  for(const c of confetti){celebrationCtx.fillStyle=c.color;celebrationCtx.fillRect(c.x,c.y,6,9);}
}
function updateEffects(){
  effects.forEach(e=>{e.x+=e.vx;e.y+=e.vy;e.vy+=.15;e.life--;});effects=effects.filter(e=>e.life>0);
  confetti.forEach(c=>{c.x+=c.vx;c.y+=c.vy;c.life--;});confetti=confetti.filter(c=>c.life>0&&c.y<CH+10);
}
function arcadeTick(time) {
  if(arcadeState==="closed")return;
  if(!lastTime)lastTime=time;
  accumulator+=Math.min(time-lastTime,80);lastTime=time;
  while(accumulator>=STEP){if(arcadeState==="playing")updateArcadeGame();if(arcadeState!=="paused")updateEffects();accumulator-=STEP;}
  renderArcade();arcadeLoopId=requestAnimationFrame(arcadeTick);
}
function bindHold(id,key){
  const button=document.getElementById(id);
  button.addEventListener("pointerdown",e=>{if(arcadeState!=="playing")return;e.preventDefault();button.setPointerCapture(e.pointerId);arcadeKeys[key]=true;if(key===" ")jumpQueued=true;});
  ["pointerup","pointercancel","lostpointercapture"].forEach(event=>button.addEventListener(event,()=>{arcadeKeys[key]=false;}));
}
bindHold("btnLeft","arrowleft");bindHold("btnRight","arrowright");bindHold("btnJump"," ");
gameModeBtn.addEventListener("click",()=>arcadeState==="closed"?openArcade():closeArcade());
["arcadeClose","arcadeDoneBtn","arcadeQuitBtn"].forEach(id=>document.getElementById(id).addEventListener("click",closeArcade));
["arcadeStartBtn","arcadeReplayBtn","arcadeRetryBtn"].forEach(id=>document.getElementById(id).addEventListener("click",startGame));
pauseButton.addEventListener("click",togglePause);document.getElementById("questResume").addEventListener("click",togglePause);
document.getElementById("questContinue").addEventListener("click",continueAdventure);
document.getElementById("questExplore").addEventListener("click", () => {
  if (currentReveal?.link.startsWith("#")) {
    if (currentReveal.sprite === "REBUTTAL") {
      goTo(projects.findIndex(project => project.name === "Rebuttal.ai"));
    }
    closeArcade();
  }
});
window.addEventListener("keydown",e=>{
  if(arcadeState==="closed")return;
  const key=e.key.toLowerCase();
  if(key==="escape"){e.preventDefault();closeArcade();return;}
  if(key==="p"&&!e.repeat){e.preventDefault();togglePause();return;}
  if(key==="tab"){
    const controls=[...arcadeOverlay.querySelectorAll("button,a[href]")].filter(el=>!el.disabled&&el.getClientRects().length);
    const first=controls[0],last=controls[controls.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}
  }
  if(arcadeState!=="playing")return;
  if(["arrowleft","arrowright","arrowup"," ","a","d","w"].includes(key)){
    e.preventDefault();arcadeKeys[key]=true;
    if([" ","arrowup","w"].includes(key)&&!e.repeat)jumpQueued=true;
  }
});
window.addEventListener("keyup",e=>{arcadeKeys[e.key.toLowerCase()]=false;});
window.addEventListener("blur",()=>{arcadeKeys={};jumpQueued=false;if(arcadeState==="playing")togglePause();});
document.addEventListener("visibilitychange",()=>{if(document.hidden&&arcadeState==="playing")togglePause();});
updateHud();
