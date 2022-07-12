<script>
import SliderTypography from '@/components/SliderTypography.vue';

export default {
  components: {
    SliderTypography,
  },
  data() {
    return {
      slides: [
        {
          name: 'LAYOUT',
          items: [

          ]
        }
      ],
      slides: {
        'LAYOUT': {
          'Basic Layout': {
            link: '/slider-layout-basic',
            thumbnail: '@/assets/img/template-layout-basic.png',
          },
          'Classic-1 Layout': {
            link: 'slider-layout-classic1',
            thumbnail: '@/assets/img/template-layout-classic1.png',
          }
        }
      }
    }
  },
  mounted() {
    jQuery('.tabs-custom').rubyslider({
      optionsPlus: "tabs",
      fx: "line",
      speed: 600,
      pag: {
        align: "center"
      },
      isKeyboard: true,
      isDeeplinking: true,
      load: {
        isLazy: false
      }
    })
  }
}
</script>

<!-- <script setup>
import { onMounted } from 'vue'
import SliderTypography from '@/components/SliderTypography.vue'

onMounted(() => {
  jQuery('.tabs-custom').rubyslider({
    optionsPlus: "tabs",
    fx: "line",
    speed: 600,
    pag: {
      align: "center"
    },
    isKeyboard: true,
    isDeeplinking: true,
    load: {
      isLazy: false
    }
  })
})
</script> -->


<template>
  <SliderTypography />

  <!-- LIST TEMPLATES - begin
  ======================================================================== -->
  <div class="wrapper">
    <div class="tabs-custom rs01">

      <!-- LAYOUT TEMPLATES - begin
      .......................................................... -->
      <div id="layout">
        <div class="rs01pagitem">LAYOUT</div>
        <div class="container">
          <div class="row-small row-mobile items show-full">

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-basic.html">
                    <img src="@/assets/img/template-layout-basic.png" alt="Layout Basic">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-basic.html">
                  <p class="title text-small">Basic Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-classic1.html">
                    <img src="@/assets/img/template-layout-classic1.png" alt="Layout Classic 1">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-classic1.html">
                  <p class="title text-small">Classic-1 Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-classic2.html">
                    <img src="@/assets/img/template-layout-classic2.png" alt="Layout Classic 2">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-classic2.html">
                  <p class="title text-small">Classic-2 Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-center.html">
                    <img src="@/assets/img/template-layout-center.png" alt="Layout Center">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-center.html">
                  <p class="title text-small">Center Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-carousel.html">
                    <img src="@/assets/img/template-layout-carousel.png" alt="Layout Carousel">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-carousel.html">
                  <p class="title text-small">Carousel Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-outbox.html">
                    <img src="@/assets/img/template-layout-outbox.png" alt="Layout Outbox">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-outbox.html">
                  <p class="title text-small">Outbox Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-device.html">
                    <img src="@/assets/img/template-layout-device.png" alt="Layout Device">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-device.html">
                  <p class="title text-small">Device Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-coverscreen.html">
                    <img src="@/assets/img/template-layout-coverscreen.png" alt="Layout Coverscreen">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-coverscreen.html">
                  <p class="title text-small">Coverscreen Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-fullwidth.html">
                    <img src="@/assets/img/template-layout-fullwidth.png" alt="Layout Fullwidth">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-fullwidth.html">
                  <p class="title text-small">Fullwidth Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-fullwidthRange.html">
                    <img src="@/assets/img/template-layout-fullwidthRange.png" alt="Layout Fullwidth Range">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-fullwidthRange.html">
                  <p class="title text-small">Fullwidth-Range Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-verticalThumb.html">
                    <img src="@/assets/img/template-layout-vertical.png" alt="Layout Vertical Thumb">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-verticalThumb.html">
                  <p class="title text-small">Vertical Thumb Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-nested.html">
                    <img src="@/assets/img/template-layout-nested.png" alt="Layout Nested">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-nested.html">
                  <p class="title text-small">Nested Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-multi.html">
                    <img src="@/assets/img/template-layout-multi.png" alt="Layout Multi">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-multi.html">
                  <p class="title text-small">Multi Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-caption.html">
                    <img src="@/assets/img/template-layout-caption.png" alt="Layout Caption">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-caption.html">
                  <p class="title text-small">Caption Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-heightAuto.html">
                    <img src="@/assets/img/template-layout-heightAuto.png" alt="Layout Height Auto">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-heightAuto.html">
                  <p class="title text-small">Height-Auto Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-heightFixed.html">
                    <img src="@/assets/img/template-layout-heightFixed.png" alt="Layout Height Fixed">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-heightFixed.html">
                  <p class="title text-small">Height-Fixed Layout</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-layout-inbox.html">
                    <img src="@/assets/img/template-layout-box.png" alt="Slider in Box">
                  </a>
                </figure>
                <a class="meta" href="slider-layout-inbox.html">
                  <p class="title text-small">Slider in Box</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->
          </div>
        </div>
      </div>
      <!-- LAYOUT TEMPLATES - end
      .......................................................... -->

      
      <!-- EFFECT TEMPLATES - begin
      .......................................................... -->
      <div id="effect">
        <div class="rs01pagitem">EFFECT</div>
        <div class="container">
          <div class="row-small row-mobile items show-full">

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-line.html">
                    <img src="@/assets/img/template-fx-line.png" alt="Effect Line">
                  </a>
                </figure>
                  
                <a class="meta" href="slider-effect-line.html">
                  <p class="title text-small">Line Effect</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-fade.html">
                    <img src="@/assets/img/template-fx-fade.png" alt="Effect Fade">
                  </a>
                </figure>
                  
                <a class="meta" href="slider-effect-fade.html">
                  <p class="title text-small">Fade Effect</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-math.html">
                    <img src="@/assets/img/template-fx-math.png" alt="Effect Math">
                  </a>
                </figure>
                <a class="meta" href="slider-effect-math.html">
                  <p class="title text-small">Math Effect</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            
            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-cssOne.html">
                    <img src="@/assets/img/template-fx-cssOne.png" alt="Effect CSS One">
                  </a>
                </figure>
                <a class="meta" href="slider-effect-cssOne.html">
                  <p class="title text-small">CSS One Effect</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            
            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-cssTwo.html">
                    <img src="@/assets/img/template-fx-cssTwo.png" alt="Effect CSS Two">
                  </a>
                </figure>
                <a class="meta" href="slider-effect-cssTwo.html">
                  <p class="title text-small">CSS Two Effect</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-cssFour.html">
                    <img src="@/assets/img/template-fx-cssFour.png" alt="Effect CSS Four">
                  </a>
                </figure>
                <a class="meta" href="slider-effect-cssFour.html">
                  <p class="title text-small">CSS Four Effect</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-coverflow3D.html">
                    <img src="@/assets/img/template-fx-coverflow3D.png" alt="Effect Coverflow3D">
                  </a>
                </figure>
                <a class="meta" href="slider-effect-coverflow3D.html">
                  <p class="title text-small">Coverflow3D Effect</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-random.html">
                    <img src="@/assets/img/template-random.png" alt="Effect Random">
                  </a>
                </figure>
                <a class="meta" href="slider-effect-random.html">
                  <p class="title text-small">Effect Random</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-effect-control.html">
                    <img src="@/assets/img/template-fx-control.png" alt="Effect Control">
                  </a>
                </figure>
                <a class="meta" href="slider-effect-control.html">
                  <p class="title text-small">Effect Control</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->
          </div>
        </div>
      </div>
      <!-- EFFECT TEMPLATES - end
      .......................................................... -->

      
      <!-- SLIDESHOW TEMPLATES - begin
      .......................................................... -->
      <div id="slideshow">
        <div class="rs01pagitem">SLIDESHOW</div>
        <div class="container">
          <div class="row-small row-mobile show-full">
            
            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-slideshow-timerArc.html">
                    <img src="@/assets/img/template-timer-arc.png" alt="Timer Arc">
                  </a>
                </figure>
                <a class="meta" href="slider-slideshow-timerArc.html">
                  <p class="title text-small">Arc Timer</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->
            
            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-slideshow-timerLine.html">
                    <img src="@/assets/img/template-timer-line.png" alt="Timer Line">
                  </a>
                </figure>
                <a class="meta" href="slider-slideshow-timerLine.html">
                  <p class="title text-small">Line Timer</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->
            
            <!-- Item 4 - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-slideshow-timerOnly.html">
                    <img src="@/assets/img/template-timer-only.png" alt="Timer Only">
                  </a>
                </figure>
                <a class="meta" href="slider-slideshow-timerOnly.html">
                  <p class="title text-small">Timer Only</p>
                </a>
              </article>
            </div>
            <!-- Item 4 - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-slideshow-random.html">
                    <img src="@/assets/img/template-random.png" alt="Slideshow Random">
                  </a>
                </figure>
                <a class="meta" href="slider-slideshow-random.html">
                  <p class="title text-small">Slideshow Random</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->
          </div>
        </div>
      </div>
      <!-- SLIDESHOW TEMPLATES - end
      .......................................................... -->


      <!-- API TEMPLATES - begin
      .......................................................... -->
      <div id="api">
        <div class="rs01pagitem">API</div>
        <div class="container">
          <div class="row show-full">

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-api-addremove.html">
                    <img src="@/assets/img/template-api-addremove.png" alt="API AddRemove">
                  </a>
                </figure>
                <a class="meta" href="slider-api-addremove.html">
                  <p class="title text-small">Add-Remove Slider</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->
            
            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-api-callback.html">
                    <img src="@/assets/img/template-api-callback.png" alt="API Callback">
                  </a>
                </figure>
                <a class="meta" href="slider-api-callback.html">
                  <p class="title text-small">Callback Event</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-api-showByDevice.html">
                    <img src="@/assets/img/template-api-showByDevice.png" alt="API Show By Device">
                  </a>
                </figure>
                <a class="meta" href="slider-api-showByDevice.html">
                  <p class="title text-small">Show By Device</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-api-showInRange.html">
                    <img src="@/assets/img/template-api-showInRange.png" alt="API Show In Range">
                  </a>
                </figure>
                <a class="meta" href="slider-api-showInRange.html">
                  <p class="title text-small">Show In Range</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-api-deeplinking.html">
                    <img src="@/assets/img/template-api-deeplinking.png" alt="API Deeplinking">
                  </a>
                </figure>
                <a class="meta" href="slider-api-deeplinking.html">
                  <p class="title text-small">Deep Linking</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-api-deeplinkingMulti.html">
                    <img src="@/assets/img/template-api-deeplinkingMulti.png" alt="API Deeplinking Multi">
                  </a>
                </figure>
                <a class="meta" href="slider-api-deeplinkingMulti.html">
                  <p class="title text-small">Deep Linking Multi</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

            <!-- Item - begin -->
            <div class="col3 col-s-4 col-xxs-6">
              <article>
                <figure class="thumbnail">
                  <a class="linkto" href="slider-api-cookie.html">
                    <img src="@/assets/img/template-api-cookie.png" alt="API Cookie">
                  </a>
                </figure>
                <a class="meta" href="slider-api-cookie.html">
                  <p class="title text-small">Cookie</p>
                </a>
              </article>
            </div>
            <!-- Item - end -->

          </div>
        </div>
      </div>
      <!-- API TEMPLATES - end
      .......................................................... -->
    </div>
  </div>
  <!-- LIST TEMPLATES - end
  ======================================================================== -->
</template>


<style scoped>
.tabs-custom .rs01pagitem {
  padding: 10px 20px !important;
  margin-left: 10px; margin-right: 10px;
  background-color: #f9f9f9;
  border-radius: 20px;
  color: #999;
}
.tabs-custom .rs01pagitem:hover {
  background-color: #e5e5e5;
  color: #333;
}
.tabs-custom .rs01pagitem.rs01cur {
  background-color: #cc0055;
  border-color: #cc0055;
  color: #fff;
  }
</style>