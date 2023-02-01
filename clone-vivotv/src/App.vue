<template>
<div class="container">
  <header>
    <div class="mainImg">
      <img alt="Vue logo" src="./assets/main-header.jpg">
    </div>
    <nav>
      <div class="nav-head">
        <div class="head-logo">
          <img src="./assets/vivo-logo.png" alt="">
        </div>
        <div class="head-nav">
          <a class="head-tab" v-for="a in head" :key="a">{{ a }}</a>
        </div>
        <div class="head-lag">
          <span><a href="#">KR</a></span> 
          <span> | </span>
          <span><a href="#" :style="{color:'rgba(255, 255, 255, 0.5)'}">EN</a></span> 
        </div>
      </div>
    </nav>
  </header>
  <main>
    <section>
      <dl class="section-box">
        <dt class="section-title">ARTIST MANAGEMENT</dt>
        <dd class="section-content">미디어랩 시소는 아티스트의 꿈을 함께 키워가는 든든한 파트너가 되어 아티스트와 함께 발맞춰 성장하고 있습니다. 무게와 거리의 관계를 고려하여 함께 즐기는 놀이 기구 ‘시소’처럼 아티스트와의 파트너쉽을 최우선으로 여기는 엔터테인먼트가 되겠습니다.</dd>
      </dl>
    </section>
  </main>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      head : ['회사소개', '컨텐츠랩 비보', '미디어랩 시소', '비보 웨이브', '뉴스', '문의']
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body{
  margin: 0 auto;
  padding: 0;
}
nav{
  height: 100vh;
  position: relative;
  margin: 0 auto;
}
.nav-head{
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.head-tab{
  padding: 10px;
  text-align: center;
}
.mainImg{
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 360px;
}
.head-tab{
  font-weight: bold;
}
.nav-head{
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.head-logo img{
  width: 120px
}
.head-lag a{
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}
.head-lag span{
  display: inline-block;
  margin: 0 10px;
}

section{
  width: 80%;
  margin: 0 auto;
}
.section-box{
  display: flex;
  align-items: center;
}
.section-title{
  font-size: 50px;
  font-weight: bold;
  text-align: left;
  color: #000;
  width: 80%;
}
.section-title::before{
  content: '';
  position: absolute;
  bottom: 0;
  width: 70px;
  height: 2px;
  background-color: #ff0085;
}
.section-content{
  text-align: left;
  font-size: 18px;
  line-height: 30px;
}
.section-content::before{
  content: '';
  position: absolute;
  left: 36.5%;
  bottom: 1%;
  width: 500px;
  height: 1px;
  background-color: gray;
}
</style>
