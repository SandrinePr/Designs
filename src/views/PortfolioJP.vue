<template>
  <div class="portfolio-site">
    <nav class="portfolio-nav">
      <button @click="goBack" class="back-button" aria-label="Terug naar homepagina">
        ← Terug
      </button>
      <h1>Sandrine Prumpeler</h1>
      <span>Software Developer</span>
    </nav>

    <main class="portfolio-main">
      <section class="portfolio-info">
        <article class="intro">
          <h2>Hallo, mijn naam is Sandrine Prumpeler</h2>
          <p>
            Ik ben achttien jaar en kom uit Lemiers. Onlangs heb ik mijn diploma Software Developer (niveau 4) behaald aan het Vista College in Heerlen.
            Dankzij een maatwerktraject heb ik de opleiding in slechts twee jaar afgerond in plaats van de gebruikelijke vier jaar. Dit laat zien dat ik leergierig,
            gedreven en gemotiveerd ben om mezelf continu te blijven ontwikkelen.
          </p>
        </article>

        <article class="devskills">
          <h3>Vaardigheden</h3>
          <ul>
            <li><strong>Talen:</strong> Typescript, Javascript, C++, C#</li>
            <li><strong>Frameworks:</strong> React, Vue, Entity Framework</li>
            <li><strong>Database en API's:</strong> SQL, REST, Dapper</li>
            <li><strong>Tools:</strong> Azure DevOps, GitKraken, Git</li>
          </ul>
        </article>

        <article class="ccpagina">
          <h3>Contact</h3>
          <ul>
            <li>Email: <a href="mailto:sandrineprumpeler@gmail.com">sandrineprumpeler@gmail.com</a></li>
            <li>Telefoon: <a href="tel:+31634871635">+31 6 34871635</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/sandrine-prumpeler" target="_blank" rel="noopener">linkedin.com/in/sandrine-prumpeler</a></li>
          </ul>
        </article>
      </section>

      <section class="app-demo">
        <h3>App Demo</h3>
        <div class="phones">
          <div class="phone">
            <img src="/images/JapanGoIMG1.jpg" alt="JapanGo" />
          </div>
          <div class="phone">
            <img src="/images/JapanGoIMG2.jpg" alt="JapanGo" />
          </div>
        </div>
        <p class="caption">JapanGo app -> Toekomstige app</p>
      </section>
    </main>

    <footer class="portfolio-footer">
      © 2025 | Sandrine Prumpeler
    </footer>
  </div>
</template>

<script setup>
function goBack() {
  window.location.href = "/";
}
</script>
