<template>
  <div class="container">
    <h1>Sandrine Prumpeler | Software Developer</h1>
    <div class="row">
      <div class="kolom">
        <div class="blok" v-for="(button, index) in buttons" :key="'k1-' + index">
          <router-link :to="button.link" class="hoofdknop">
            <div class="titel">{{ button.titel }}</div>
            <div class="onderdelen">
              <div class="onderdeel" v-for="(onderdeel, i) in button.onderdelen" :key="i">
                {{ onderdeel }}
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="kolom">
        <div class="blok" v-for="(button, index) in buttonsK2" :key="'k2-' + index">
          <router-link :to="button.link" class="hoofdknop">
            <div class="titel">{{ button.titel }}</div>
            <div class="onderdelen">
              <div class="onderdeel" v-for="(onderdeel, i) in button.onderdelen" :key="i">
                {{ onderdeel }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      buttons: [
        { titel: 'NeonPortfolio', onderdelen: ['Neon kleuren', 'Futuristisch', 'Geanimeerde stippen, achtergrond', 'TypeWriter', 'Carousel'], link: '/NeonPortfolio' },
        { titel: 'basicPortfolio', onderdelen: ['Minimalistisch', 'lettertypes', 'Kleuren combinaties'], link: '/basicPortfolio' },
        { titel: 'PortfolioJP', onderdelen: ['Portfolio site met demo', 'Toekomstige app', 'Strak-design'], link: '/PortfolioJP' }
      ]
    };
  }
};  
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #471f29;
}

h1 {
  margin-top: -5px;
  margin-bottom: 10px;
  color: #bb657a;
  text-align: center;
}

.container {
  background-color: #471f29;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
  box-sizing: border-box;
}
  


.kolom {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.blok {
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
}

.hoofdknop {
  width: 750px;
  padding: 15px;
  font-size: 18px;
  background-color: #76273a;
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
}

.hoofdknop:hover {
  background: transparent;
  border: 2px solid #bb657a;
}


.titel {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #bb657a;
}

.onderdelen {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.onderdeel {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 16px;
  color: #bb657a;
  border: 1px solid #bb657a;
  background-color: transparent;
}
</style>