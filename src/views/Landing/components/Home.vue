<template>
  <div
    class="home position-relative d-flex align-items-center justify-content-center padding text-darkwhite"
  >
    <div class="bg-darker" />
    <div class="changeColor" />
    <div class="bg-brighter" />
    <div class="cover" />
    <div class="backgrounded text-center position-relative p-5">
      <h1>Hi! my name is Zhan</h1>
      <h1>I am <em>front-end</em> developer</h1>
      <br>
      <h2> I don't create design </h2>
      <h2> But I <strong>DO</strong> make it <strong>REAL</strong></h2>
      <br>
      ~~!~~
      <br>
      ( this design was created by me, though )
    </div>
    <div class="slideToNext" />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.bg-darker{
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--purple);
}

.bg-brighter{
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background:radial-gradient(rgba(255,255,255,.2),rgba(0,0,0,1) 80% 75%, rgba(31,1,26) 90% 90%);
  /* background:radial-gradient(rgba(255,255,255,.2),transparent,var(--purple),var(--purple)); */
  animation-name:bg-appear;
  animation-duration:3s;
  /* animation-duration:15s; */
  animation-delay:5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.home{
  height:100vh;
  min-height:600px;
  /* background:
    radial-gradient(31.54% 50% at 50% 50%, rgba(255, 0, 212, 0.50) 0%, rgba(31, 1, 26, 0.50) 42.81%),
    radial-gradient(66.21% 66.21% at 50% 50%, #5A004B 0%, #1F011A 100%),
    #1F011A; */
  overflow: hidden;
}

.changeColor{
  position: absolute;
  border: 10px solid white;
  background-color: #5A004B;
  top: calc(-10px);
  left: calc(-10px);
  border-radius: 0%;
  width:calc(100vw + 20px);
  height:calc(100vh + 20px);
  animation-name:appear-first, changeColor;
  animation-duration:5s,25s;
  animation-delay:0s,5s;
  animation-iteration-count: 1,infinite;
  animation-fill-mode: none,forwards;
}

.backgrounded{
  background-color: var(--purple);
  border:3px solid white;
  border-radius: 10px;
  border-color: transparent;
  /* box-shadow: 0 0 10px 10px black; */
  animation-name:border-appear, changeBorderColor;
  animation-duration:5s,25s;
  animation-delay:0s,5s;
  animation-iteration-count: 1,infinite;
  animation-fill-mode: forwards,forwards;
}

.cover{
  content:'';
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-image: url('/public/images/hexagons.svg');
}

.slideToNext{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height:50px;
  background: linear-gradient(transparent,var(--purple));
}
@keyframes bg-appear {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes appear-first {
  0%{
    top: calc(max(50vh,300px) - 190px);
    left: calc(50vw - 190px);
    border-radius: 50%;
    width:380px;
    height:380px;
  }
  25%{
    border-radius: 50%;
  }
  100%{
    top: calc(-10px);
    left: calc(-10px);
    border-radius: 0%;
    width:calc(100vw + 20px);
    height:calc(100vh + 20px);
  }
}
@keyframes changeColor {
  0%,100%{
    background-color: #5A004B;
  }
  10%,90%{
    background-color: #9E00FF;
  }
  20%,80%{
    background-color: #005A2F;
  }
  30%,70%{
    background-color: #5A5100;
  }
  40%,60%{
    background-color: #00045A;
  }
  50%{
    background-color: #5A004B;
  }
}

@keyframes changeBorderColor {
  0%,100%{
    border-color: #5A004B;
  }
  10%,90%{
    border-color: #9E00FF;
  }
  20%,80%{
    border-color: #005A2F;
  }
  30%,70%{
    border-color: #5A5100;
  }
  40%,60%{
    border-color: #00045A;
  }
  50%{
    border-color: #5A004B;
  }
}

@keyframes border-appear{
  0%{
    border-color: none;
  }
  50%{
    border-color:white
  }
  100%{
    border-color: #5A004B;
  }
}

</style>
