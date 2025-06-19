<template>
  <div>
    <button @click="goBack" class="back-button" aria-label="Terug naar homepagina">
      ← Terug
    </button>
    <canvas id="background-canvas"></canvas>

    <div class="cv-wrapper" role="main">
      <header class="cv-header" aria-label="Introductie">
        <h1 class="glow-text" aria-live="polite" aria-atomic="true">
          <span ref="typewriterText"></span><span class="cursor">|</span>
        </h1>
        <div class="intro-container">
          <p class="intro-text">
            Hallo, mijn naam is <strong>Sandrine Prumpeler</strong>, ik ben een leergierige software developer.
          </p>
        </div>
      </header>

      <main class="cv-main">
        <section
          v-for="(card, index) in cards"
          :key="card.title"
          :class="['cv-card', card.title === 'Contact' ? 'contact-card' : '']"
          tabindex="0"
          :style="{ animationDelay: (index * 0.3 + 0.5) + 's' }"
          :aria-label="card.title + ' kaart'"
        >
          <h2>{{ card.title }}</h2>
          <ul>
            <li v-for="item in card.items" :key="item.text">
              {{ item.text }}
              <span v-if="item.sub" class="sub-text">{{ item.sub }}</span>
            </li>
            <li v-if="card.link">
              <a
                :href="card.link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-item"
              >
                {{ card.link.text }}
              </a>
            </li>
          </ul>
        </section>
      </main>

      <section class="horizontal-projects" aria-label="Meer projecten">
        <h2 class="scroll-header">Meer Projecten</h2>
        <div class="carousel-3d-wrapper">
          <div class="carousel-3d">
            <img src="/images/SepelinKids.png" alt="Sepelin Kids" />
            <img src="/images/OnlyBowling.png" alt="Only Bowling" />
            <img src="/images/Maatwerk.png" alt="Maatwerk" />
            <img src="/images/PortfolioChristian.png" alt="Portfolio Christian" />
            <img src="/images/JapanGo.png" alt="JapanGo" />
          </div>
        </div>
      </section>

      <footer class="cv-footer" aria-label="Footer">
        &copy;2025 Sandrine Prumpeler
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const typewriterText = ref(null);
const fullText = "Sandrine Prumpeler | Software Developer";
const cards = [
  {
    title: "Over Mij",
    items: [
      { text: "Diploma Software Developer behaald, niveau 4" },
      { text: "Opleiding afgerond op het Vista College in Heerlen, in 2 jaar i.p.v. 4 jaar" },
      { text: "Vooral opzoek en geïnteresseerd in front-end development" },
      { text: "Ik ben heel leergierig en gemotiveerd om te groeien" },
    ],
  },
  {
    title: "Stage-ervaring",
    items: [
      { text: "Ik heb 1 jaar stage gelopen bij KEMBIT in Wijnansrade" },
      { text: "Hier heb ik veel gewerkt aan API’s, feeders en front-end UI" },
    ],
  },
  {
    title: "Vaardigheden",
    items: [
      { text: "Talen: ", sub: "Typescript, Javascript, C++, C#" },
      { text: "Frameworks: ", sub: "React, Vue, Entity Framework" },
      { text: "Databases en API’s: ", sub: "SQL, REST, Dapper" },
      { text: "Tools: ", sub: "Azure DevOps, GitKraken, Git" },
    ],
  },
  {
    title: "Contact",
    items: [
      { text: "Email: sandrineprumpeler@gmail.com" },
      { text: "Telefoon: +31 6 43781635" },
    ],
    link: {
      url: "https://www.linkedin.com/in/sandrine-prumpeler-9b63bb309/",
      text: "Mijn LinkedIn",
    },
  },
];

/// het uittypen van mijn naam
function typeWriter(el, text, speed = 80) {
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}


///achtergrond - spikkels
function setupBackgroundCanvas() {
  const canvas = document.getElementById("background-canvas");
  const ctx = canvas.getContext("2d");
  let width, height;
  let points = [];
  const POINTS_COUNT = 50;

  function createPoints() {
    points = [];
    for (let i = 0; i < POINTS_COUNT; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    createPoints();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    points.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 255, 225, 0.7)";
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

function goBack() {
  window.location.href = "/";
}

onMounted(() => {
  if (typewriterText.value) {
    typeWriter(typewriterText.value, fullText);
  }
  setupBackgroundCanvas();
});
</script>
