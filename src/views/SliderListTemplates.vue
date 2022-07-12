<script>
import SliderTypography from '@/components/SliderTypography.vue'

export default {
  components: {
    SliderTypography,
  },
  data() {
    return {
      slides: {
        'LAYOUT': {
          'Basic Layout': {
            link: '/slider-layout-basic',
            thumbnail: '/src/assets/img/template-layout-basic.png',
          },
          'Classic-1 Layout': {
            link: '/slider-layout-classic1',
            thumbnail: '/src/assets/img/template-layout-classic1.png',
          },
          'Classic-2 Layout': {
            link: '/slider-layout-classic2',
            thumbnail: '/src/assets/img/template-layout-classic2.png',
          },
          'Center Layout': {
            link: '/slider-layout-center',
            thumbnail: '/src/assets/img/template-layout-center.png',
          },
          'Carousel Layout': {
            link: 'slider-layout-carousel',
            thumbnail: '/src/assets/img/template-layout-carousel.png',
          },
          'Outbox Layout': {
            link: 'slider-layout-outbox',
            thumbnail: '/src/assets/img/template-layout-outbox.png',
          },
          'Device Layout': {
            link: 'slider-layout-device',
            thumbnail: '/src/assets/img/template-layout-device.png',
          },
          'Coverscreen Layout': {
            link: 'slider-layout-coverscreen',
            thumbnail: '/src/assets/img/template-layout-coverscreen.png',
          },
          'Fullwidth Layout': {
            link: 'slider-layout-fullwidth',
            thumbnail: '/src/assets/img/template-layout-fullwidth.png',
          },
          'Fullwidth-Range Layout': {
            link: 'slider-layout-fullwidthRange',
            thumbnail: '/src/assets/img/template-layout-fullwidthRange.png',
          },
          'Vertical Thumb Layout': {
            link: 'slider-layout-verticalThumb',
            thumbnail: '/src/assets/img/template-layout-vertical.png',
          },
          'Nested Layout': {
            link: 'slider-layout-nested',
            thumbnail: '/src/assets/img/template-layout-nested.png',
          },
          'Multi Layout': {
            link: 'slider-layout-multi',
            thumbnail: '/src/assets/img/template-layout-multi.png',
          },
          'Caption Layout': {
            link: 'slider-layout-caption',
            thumbnail: '/src/assets/img/template-layout-caption.png',
          },
          'Height-Auto Layout': {
            link: 'slider-layout-heightAuto',
            thumbnail: '/src/assets/img/template-layout-heightAuto.png',
          },
          'Height-Fixed Layout': {
            link: 'slider-layout-heightFixed',
            thumbnail: '/src/assets/img/template-layout-heightFixed.png',
          },
          'Slider in Box': {
            link: 'slider-layout-inbox',
            thumbnail: '/src/assets/img/template-layout-box.png',
          },
        },

        'EFFECT': {
          'Line Effect': {
            link: '/slider-effect-line',
            thumbnail: '/src/assets/img/template-fx-line.png',
          },
          'Fade Effect': {
            link: '/slider-effect-fade',
            thumbnail: '/src/assets/img/template-fx-fade.png',
          },
          'Math Effect': {
            link: '/slider-effect-math',
            thumbnail: '/src/assets/img/template-fx-math.png',
          },
          'CSS One Effect': {
            link: '/slider-effect-cssOne',
            thumbnail: '/src/assets/img/template-fx-cssOne.png',
          },
          'CSS Two Effect': {
            link: '/slider-effect-cssTwo',
            thumbnail: '/src/assets/img/template-fx-cssTwo.png',
          },
          'CSS Four Effect': {
            link: '/slider-effect-cssFour',
            thumbnail: '/src/assets/img/template-fx-cssFour.png',
          },
          'Coverflow3D Effect': {
            link: '/slider-effect-coverflow3D',
            thumbnail: '/src/assets/img/template-fx-coverflow3D.png',
          },
          'Effect Random': {
            link: '/slider-effect-random',
            thumbnail: '/src/assets/img/template-random.png',
          },
          'Effect Control': {
            link: '/slider-effect-control',
            thumbnail: '/src/assets/img/template-fx-control.png',
          },
        },

        'SLIDESHOW': {
          'Arc Timer': {
            link: '/slider-slideshow-timerArc',
            thumbnail: '/src/assets/img/template-timer-arc.png',
          },
          'Line Timer': {
            link: '/slider-slideshow-timerLine',
            thumbnail: '/src/assets/img/template-timer-line.png',
          },
          'Timer Only': {
            link: '/slider-slideshow-timerOnly',
            thumbnail: '/src/assets/img/template-timer-only.png',
          },
          'Slideshow Random': {
            link: '/slider-slideshow-random',
            thumbnail: '/src/assets/img/template-random.png',
          },
        },

        'API': {
          'Add-Remove Slider': {
            link: '/slider-api-addremove',
            thumbnail: '/src/assets/img/template-api-addremove.png',
          },
          'Callback Event': {
            link: '/slider-api-callback',
            thumbnail: '/src/assets/img/template-api-callback.png',
          },
          'Show By Device': {
            link: '/slider-api-showByDevice',
            thumbnail: '/src/assets/img/template-api-showByDevice.png',
          },
          'Show In Range': {
            link: '/slider-api-showInRange',
            thumbnail: '/src/assets/img/template-api-showInRange.png',
          },
          'Deep Linking': {
            link: '/slider-api-deeplinking',
            thumbnail: '/src/assets/img/template-api-deeplinking.png',
          },
          'Deep Linking Multi': {
            link: '/slider-api-deeplinkingMulti',
            thumbnail: '/src/assets/img/template-api-deeplinkingMulti.png',
          },
          'Cookie': {
            link: '/slider-api-cookie',
            thumbnail: '/src/assets/img/template-api-cookie.png',
          },
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

  <!-- LIST TEMPLATES -->
  <div class="wrapper">
    <div class="tabs-custom rs01">
      <div
        v-for="(items, name) in slides"
        :id="name.toLowerCase()"
        >

        <div class="rs01pagitem">{{ name }}</div>
        <div class="container">
          <div class="row-small row-mobile items show-full">
            
            <div
              v-for="(item, itemName) in items"
              class="col3 col-s-4 col-xxs-6"
              >
              <article>
                <figure class="thumbnail">
                  <a class="linkto" :href="item['link']">
                    <img :src="item['thumbnail']" :alt="itemName">
                  </a>
                </figure>
              </article>
            </div>
            <!-- /.item -->

          </div>
        </div>

      </div>
    </div>
  </div>
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