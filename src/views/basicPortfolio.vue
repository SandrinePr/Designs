<template>
  <div class="page">
    <nav class="nav" aria-label="Hoofdnavigatie">
      <ul>
        <li><a href="#about" class="nav-link">Over Mij</a></li>
        <li><a href="#skills" class="nav-link">Vaardigheden</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
        <li><a href="#Projecten" class="nav-link">Projecten</a></li>
      </ul>
    </nav>
    
      <button @click="goBack" class="back-button" aria-label="Terug naar homepagina">
        ← Terug
      </button>

    <main class="main-content" role="main">
      <section class="intro" id="about" aria-label="Over Mij">
        <img
          src="/images/profile.jpg"
          alt="Profielfoto Sandrine Prumpeler"
          class="profile-foto"
        />
        <div class="intro-text">
          <h1 class="name">Sandrine Prumpeler</h1>
          <p class="role">Software Developer</p>
          <p class="description">
            Hallo, mijn naam is Sandrine Prumpeler, ik ben achttien jaar en kom uit Lemiers.
            Onlangs heb ik mijn diploma Software Developer (niveau 4) behaald aan het Vista College in Heerlen.<br />
            Dankzij een maatwerktraject heb ik de opleiding in slechts twee jaar afgerond in plaats van de gebruikelijke vier jaar.
            Dit laat zien dat ik leergierig, gedreven en gemotiveerd ben om mezelf continu te blijven ontwikkelen.
          </p>
        </div>
      </section>

      <section class="centered-sections">
        <article class="card skills" id="skills" aria-label="Vaardigheden">
          <h2>Vaardigheden</h2>
          <ul>
            <li><strong>Talen:</strong> Typescript, Javascript, C++, C#</li>
            <li><strong>Frameworks:</strong> React, Vue, Entity Framework</li>
            <li><strong>Database en API's:</strong> SQL, REST, Dapper</li>
            <li><strong>Tools:</strong> Azure DevOps, GitKraken, Git</li>
          </ul>
        </article>

        <article class="card contact" id="contact" aria-label="Contactinformatie">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:sandrineprumpeler@gmail.com">sandrineprumpeler@gmail.com</a></p>
          <p>Telefoon: <a href="tel:+31 6 43781635">+31 6 34871635</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sandrine-prumpeler-9b63bb309/" target="_blank" rel="noopener">linkedin.com/in/sandrine-prumpeler</a></p>
        </article>
      </section>

      <section class="section project-section" id="Projecten" aria-label="Projecten">
        <div class="project-section">
          <h2 class="section-title">Projecten:</h2>
          <div class="project-content">
            <div class="gallery">
              <div class="row">
                <img src="/images/SepelinKids-cut.png" alt="Sepelin Kids" class="img-breed" />
                <img src="/images/OnlyBowling-cut.png" alt="Only Bowling" class="img-smal" />
              </div>
              <div class="row-middel">
                <img src="/images/PortfolioChristian-cut.png" alt="Portfolio Christian" class="img-smal" />
                <img src="/images/Maatwerk.png" alt="Maatwerk" class="img-breed" />
              </div>
              <div class="row-end">
                <img src="/images/JapanGo-cut.png" alt="JapanGo" class="img-normaal" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer" role="contentinfo">
      &copy;2025 | Sandrine Prumpeler
    </footer>
  </div>
</template>

<script setup>
function goBack() {
  window.location.href = "/";
}
</script>
