<template>
  <div
    class="about d-flex flex-column position-relative bg-purple"
  >
    <div class="slideFromNext" />
    <div class="first-part-wrapper">
      <div class="first-part d-flex flex-column bg-purple text-white padding">
        <div class="d-flex align-items-center justify-content-center p-4 mt-5">
          <h2>THIS website</h2>
        </div>
        <div class="d-flex flex-column justify-content-around flex-fill">
          <div class="appear appear-left p-5">
            was created using Vue JS 3 ( options api )
          </div>
          <div class="appear appear-right align-self-end p-5">
            also used LARAVEL 10 for backend
          </div>
          <div class="appear appear-bottom align-self-center p-5">
            and a lot of plain JS and CSS
          </div>
        </div>
      </div>
      <div class="second-part-after" />
      <div class="second-part d-flex flex-column align-items-center bg-darkblack text-white">
        <h1 class="mt-5 pt-5">
          But ... WAIT
        </h1>
        <h3> (keep scrolling)</h3>
        <img
          class="mt-5"
          src="/images/steven-he.gif"
          alt=""
        >
      </div>
    </div>
  </div>
  <div class="third-part-wrapper">
    <div class="third-part hidden">
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;</span>
      <span>&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;<br>D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;<br>&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <div>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    window.onload = () => {
      document.getElementsByClassName("scrollable-content")[0].addEventListener("scroll", (e) => {
        // first part
        // THIS website part
        const divs = document.getElementsByClassName("appear");
        for (let i = 0; i < divs.length; i++) {
          const item = divs[i];
          const distance = item.getBoundingClientRect().top - window.innerHeight;
          if (distance < -100) {
            item.classList.add("shown");
          }
        }

        // second part
        // steven he part
        const parent = document.getElementsByClassName("first-part-wrapper")[0];
        const secondPart = document.getElementsByClassName("second-part")[0];
        const secondPartAfter = document.getElementsByClassName("second-part-after")[0];

        if (parent.offsetTop > 100) {
          let offset = parent.offsetTop / 2 - 100;
          offset = offset > 0 ? offset : 0;
          secondPart.style.setProperty("--maxHeight", offset + "px");
          secondPartAfter.style.opacity = 1;
          secondPartAfter.style.setProperty("--translateTop", offset + "px");
        }

        // third parent
        // Am I a frontend developer part

        const thirdPart = document.getElementsByClassName("third-part")[0];
        const distance = document.getElementsByClassName("third-part-wrapper")[0].getBoundingClientRect().top - window.innerHeight;
        if (distance < -window.innerHeight / 1.5) {
          thirdPart.classList.add("shown");
        } else {
          thirdPart.classList.remove("shown");
        }
        if (distance < -window.innerHeight * 2) {
          thirdPart.classList.remove("shown");
          thirdPart.classList.add("hidden");
        } else {
          thirdPart.classList.remove("hidden");
        }
      });
    };
  }
};
</script>

<style lang="scss" scoped>
.first-part-wrapper{
  position: sticky;
  top:0;
}
.first-part{
  height:100vh;
  width:100%;
  position: absolute;
  top:0;
}
.third-part-wrapper{
  height:300vh;
  width:100%;
}
.third-part{
  height:100vh;
  width:100%;
  position: sticky;
  top:0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  font-family:monospace;
  transition: 3s;
}
.third-part>span,.third-part>div>span{
  position:absolute;
  text-align: center;
  opacity: 0;
}
.third-part>span:nth-child(1){
  top:25%;
  right:90%;
  transform: rotate(-10deg) scale(2);
}
.third-part>span:nth-child(2){
  top:75%;
  right:25%;
  transform: rotate(10deg) scale(2);
}
.third-part>span:nth-child(3){
  top:45%;
  right:85%;
  transform: rotate(-30deg) scale(2);
}
.third-part>span:nth-child(4){
  top:85%;
  right:50%;
  transform: rotate(0deg) scale(2);
}
.third-part>span:nth-child(5){
  top:85%;
  right:25%;
  transform: rotate(15deg) scale(2);
}
.third-part>span:nth-child(6){
  top:15%;
  right:25%;
  transform: rotate(20deg) scale(2);
}
.third-part>span:nth-child(7){
  top:15%;
  right:45%;
  transform: rotate(-2deg) scale(2);
}
.third-part>span:nth-child(8){
  top:60%;
  right:40%;
  transform: rotate(0deg) scale(2);
}
.third-part>div>span:nth-child(1){
  top:45%;
  right:10%;
  transform: rotate(100deg) scale(2);
}
.third-part>div>span:nth-child(2){
  top:45%;
  right:10%;
  transform: rotate(100deg) scale(2);
}

// hard coding here
.third-part.shown>span,.third-part.shown>div>span{
  top:calc(45% - 75px);
  right:calc(50% - 225px);
  transform: rotate(0deg) scale(1);
  opacity:1;
}

.third-part.hidden>div>span:nth-child(9){
  top:calc(55% - 75px);
  right:calc(70% - 225px);
  transform: rotate(0deg) scale(3);
  opacity: 1;
}
.third-part.hidden>div>span:nth-child(10){
  top:calc(30% - 75px);
  right:calc(70% - 225px);
  transform: rotate(0deg) scale(3);
  opacity: 1;
}

.second-part-final{
  opacity:1;
  top: calc(50% - 75px);
  left: calc(50% - 225px);
  transform: rotate(0deg);
}
.second-part{
  height:100vh;
  max-height: var(--maxHeight,0px);
  width:100%;
  position: absolute;
  top:0;
  overflow: hidden;
}
.second-part-after{
  position: absolute;
  z-index: 2;
  top:var(--translateTop,-10vh);;
  left:0;
  width: 100%;
  height: 10vh;
  border: 2px solid var(--white);
  background-color: rgba($color: var(--purple), $alpha: 0.5);
  backdrop-filter: blur(10px);
  opacity: 0;
}
.about{
    height:300vh;
}
.slideFromNext{
  width: 100%;
  height:100px;
}
.appear{
  width: fit-content;
  border:1px solid white;
  border-image-slice: 1;
  opacity: 0;
  transition:1s;
}
.appear-left{
  border-image-source: linear-gradient(to right,var(--purple),var(--white));
  transform: translate(-5vw,0);
}
.appear-right{
  border-image-source: linear-gradient(to left,var(--purple),var(--white));
  transform: translate(5vw,0);
}
.appear-bottom{
  border-image-source: linear-gradient(to top,var(--purple),var(--white));
  transform: translate(0,5vh);
}

.shown{
  transform:translate(0,0);
  opacity:1;
}

</style>
