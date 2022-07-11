<script>
export default {
  data() {
    return {}
  },
  mounted() {
    const sliderMath = window.jQuery('.slider-math').rubyslider({
      fx: "rectRun",
      speed: 800,
      width: 940,
      pag: {
        type: "bullet",
        isMark: true
      }
    })

    const sliderOneEffect = window.jQuery('.slider-one-effect').rubyslider({
      fx: "cssOne",
      speed: 800,
      width: 940,
      pag: {
        type: "bullet",
        isMark: true
      }
    })

    const sliderLineEffect = window.jQuery('.slider-line-effect').rubyslider({
      fx: "line",
      speed: 400,
      width: 755,
      widthSlide: 0.8,
      margin: 1,
      pag: {
        type: "bullet",
        isMark: true
      }
    })

    const sliderTabs = window.jQuery('.slider-tabs').rubyslider({
      optionsPlus: "tabs",
      fx: "cssOne",
      cssOne: "scalePulse",
      speed: 800,
      pag: {
        align: "center"
      }
    })
  }
}
</script>


<template>
<div class="wrapper effect-others">
  <div class="container">

  <!-- Heading - begin -->
  <div class="title-big-wrap">
    <h1>OTHER LAYOUTS <strong>&amp;</strong> EFFECTS</h1>
  </div>
  <!-- Heading - end -->




  <div class="row">

    <!-- MATH EFFECT - begin -->
    <div class="col6">
    <div class="slider-math rs01 ruby-mark">
      <div class="rs01slide">
        <img class="rs01imgback" src="@/assets/img/season-landscape2.jpg" alt="Season 2">
      </div>
      <div class="rs01slide">
        <img class="rs01imgback" src="@/assets/img/season-landscape4.jpg" alt="Season 4">
      </div>
      <div class="rs01slide">
        <img class="rs01imgback" src="@/assets/img/season-landscape7.jpg" alt="Season 7">
      </div>
    </div>

    <a class="effect-title" href="slider-effect-math.html" target="_blank">8 Math Effects</a>
    </div>
    <!-- MATH EFFECT - end -->



    <!-- CSS ONE EFFECT - begin -->
    <div class="col6">
    <div class="slider-one-effect rs01 ruby-mark">
      <img class="rs01imgback" src="@/assets/img/season-landscape2.jpg" alt="Season 2">
      <img class="rs01imgback" src="@/assets/img/season-landscape4.jpg" alt="Season 4">
      <img class="rs01imgback" src="@/assets/img/season-landscape7.jpg" alt="Season 7">
    </div>

    <a class="effect-title" href="slider-effect-cssOne.html" target="_blank">50+ CSS One Effects</a>
    </div>
    <!-- CSS ONE EFFECT - end -->



    <!-- CENTER LAYOUT - LINE EFFECT - begin -->
    <div class="col6">
    <div class="slider-line-effect rs01 ruby-mark">
      <img class="rs01imgback" src="@/assets/img/season-landscape2.jpg" alt="Season 2">
      <img class="rs01imgback" src="@/assets/img/season-landscape4.jpg" alt="Season 4">
      <img class="rs01imgback" src="@/assets/img/season-landscape7.jpg" alt="Season 7">
    </div>

    <a class="effect-title" href="slider-layout-center.html" target="_blank">Center Layout - Line Effect</a>
    </div>
    <!-- CENTER LAYOUT - LINE EFFECT - end -->



    <!-- TABS LAYOUT - begin -->
    <div class="col6">
    <div class="slider-tabs rs01 rs01flat">
      <div>
        <div class="rs01pagitem">OVERVIEW</div>
        <div class="font-blokk">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis aspernatur repellendus, esse illum suscipit nihil, minima beatae quaerat labore nisi fugit, officiis dignissimos saepe ab facilis qui non quas!</p>
          <p>Nam facilis tempore maxime incidunt deserunt, ipsum pariatur, accusamus animi quidem velit tenetur eum nesciunt quos veniam architecto neque impedit! Sed accusamus commodi dignissimos dolorem distinctio, itaque dicta non maiores?</p>
        </div>
      </div>

      <div>
        <div class="rs01pagitem">LAYOUT</div>
        <!-- Dummy Content - begin -->
        <div class="row font-blokk">
          <div class="col4">
            <p class="bo-l-h"><i>Consectetur adipisicing elit. Vel, sequi, quis, minima, dolor quisquam numquam quod in repudiandae officia.</i></p>
          </div>
          <div class="col8">
            <p class="dropcap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, pariatur aliquam molestias aspernatur non. Facere, quibusdam, reiciendis, natus laudantium debitis suscipit consequatur voluptatibus mollitia temporibus quia ratione dignissimos magnam provident.</p>
            <p>Assumenda, repudiandae, iste magni labore culpa eum expedita eligendi odio molestiae temporibus id ab nihil ad sunt mollitia veritatis excepturi. Ullam, odit nesciunt doloribus natus non repudiandae error itaque vero?</p>
          </div>
        </div>
        <!-- Dummy Content - end -->
      </div>

      <div>
        <div class="rs01pagitem">SWIPE PREVENT</div>
        <form class="block">
          <input type="text" class="large" placeholder="Username">
          <input type="text" class="large" placeholder="Password">
          <input type="text" class="large" placeholder="Repeat Password">
          <input type="text" class="large" placeholder="Email">
          <textarea name="" cols="30" rows="5" placeholder="Your bio"></textarea>
          <label class="checkbox text-small muted pull-left" for="terms">
            <input id="terms" type="checkbox">I have read and I agree the Terms of Use
          </label>
          <input class="btn large pull-right no-ma" type="submit" value="Register">
        </form>
      </div>

      <div>
        <div class="rs01pagitem">IMAGE LAZYLOAD</div>
        <div class="row">
          <div class="col4 col-xs-4">
            <img class="rs01img card-img" src="@/assets/img/food-thumbnail1.jpg" alt="Food 1">
          </div>
          <div class="col4 col-xs-4">
            <img class="rs01img card-img" src="@/assets/img/food-thumbnail2.jpg" alt="Food 2">
          </div>
          <div class="col4 col-xs-4">
            <img class="rs01img card-img" src="@/assets/img/food-thumbnail3.jpg" alt="Food 3">
          </div>
          <div class="col4 col-xs-4">
            <img class="rs01img card-img" src="@/assets/img/food-thumbnail4.jpg" alt="Food 4">
          </div>
          <div class="col4 col-xs-4">
            <img class="rs01img card-img" src="@/assets/img/food-thumbnail6.jpg" alt="Food 6">
          </div>
          <div class="col4 col-xs-4">
            <img class="rs01img card-img" src="@/assets/img/food-thumbnail7.jpg" alt="Food 7">
          </div>
        </div>
      </div>

      <div>
        <div class="rs01pagitem">IFRAME</div>
        <div>
          <a class="rs01iframe" href="https://www.google.com/maps/embed/v1/place?key=AIzaSyCCdHNpkWq_yU8PbLAF_r6CnnGCfNWcfro&amp;q=Tour+Eiffel,Champ-de-Mars,5+Avenue+Anatole+France,75007+Paris&amp;zoom=17" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></a>
        </div>
      </div>
    </div>

    <a class="effect-title" href="page-templates-tabs.html" target="_blank">Tabs Layout</a>
    </div>
    <!-- TABS LAYOUT - end -->

  </div>
  </div>
</div>
</template>


<style scoped>
.effect-others {
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-width: 1px 0;
  text-align: center;
}

.effect-title {
  display: inline-block;
  margin: 20px auto 50px auto;
  padding: 10px 25px;
  border: 1px solid #999;
  border-radius: 20px;
}
.effect-title:hover {
  border-color: #c05;
}


/* SLIDER */
.effect-others .rs01 {
  text-align: left;
}
.effect-others .rs01pag.rs01bullet {
  position: absolute;
  bottom: 0;
}
</style>