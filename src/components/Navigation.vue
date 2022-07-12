<script>
import { RouterLink } from "vue-router";
</script>


<template>
<nav class="rm01">
  <ul class="rm01menu">
    <li><a>Slider</a>
      <ul class="rm01menu">
        <!-- <li><a href="page-templates-slider.html">List templates</a></li> -->
        <li>
          <RouterLink to="/slider-list-templates">List templates</RouterLink>
        </li>
        <li><a>Layout</a>
          <ul class="rm01menu">
            <li><a href="slider-layout-basic.html">Basic</a></li>
            <li><a href="slider-layout-classic1.html">Classic-1</a></li>
            <li><a href="slider-layout-classic2.html">Classic-2</a></li>
            <li><a href="slider-layout-center.html">Center</a></li>
            <li><a href="slider-layout-carousel.html">Carousel</a></li>
            <li><a href="slider-layout-outbox.html">Outbox</a></li>
            <li><a href="slider-layout-device.html">Device</a></li>
            <li><a href="slider-layout-coverscreen.html">Coverscreen</a></li>
            <li><a href="slider-layout-fullwidth.html">Fullwidth</a></li>
            <li><a href="slider-layout-fullwidthRange.html">Fullwidth Range</a></li>
            <li><a href="slider-layout-verticalThumb.html">Vertical Thumbnail</a></li>
            <li><a href="slider-layout-nested.html">Nested</a></li>
            <li><a href="slider-layout-multi.html">Multi</a></li>
            <li><a href="slider-layout-caption.html">Caption</a></li>
            <li><a href="slider-layout-heightAuto.html">Height Auto</a></li>
            <li><a href="slider-layout-heightFixed.html">Height Fixed</a></li>
          </ul>
        </li>
        <li><a>Effect</a>
          <ul class="rm01menu">
            <li><a href="slider-effect-line.html">Line</a></li>
            <li><a href="slider-effect-fade.html">Fade</a></li>
            <li><a href="slider-effect-math.html">Math</a></li>
            <li><a href="slider-effect-cssOne.html">CSS One</a></li>
            <li><a href="slider-effect-cssTwo.html">CSS Two</a></li>
            <li><a href="slider-effect-cssFour.html">CSS Four</a></li>
            <li><a href="slider-effect-coverflow3D.html">Coverflow3D</a></li>
            <li><a href="slider-effect-random.html">Effect Random</a></li>
            <li><a href="slider-effect-control.html">Effect Control</a></li>
          </ul>
        </li>
        <li><a>Slideshow</a>
          <ul class="rm01menu">
            <li><a href="slider-slideshow-timerArc.html">Arc Timer</a></li>
            <li><a href="slider-slideshow-timerLine.html">Line Timer</a></li>
            <li><a href="slider-slideshow-timerOnly.html">Timer Only</a></li>
            <li><a href="slider-slideshow-random.html">Slideshow Random</a></li>
          </ul>
        </li>
        <li><a>API</a>
          <ul class="rm01menu">
            <li><a href="slider-api-addremove.html">Add-Remove Tabs</a></li>
            <li><a href="slider-api-callback.html">Callback Event</a></li>
            <li><a href="slider-api-showByDevice.html">Show By Device</a></li>
            <li><a href="slider-api-showInRange.html">Show In Range</a></li>
            <li><a href="slider-api-deeplinking.html">Deep Linking</a></li>
            <li><a href="slider-api-deeplinkingMulti.html">Deep Linking Multi</a></li>
            <li><a href="slider-api-cookie.html">Cookie</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a>Tabs</a>
      <ul class="rm01menu">
        <li><a href="page-templates-tabs.html">List templates</a></li>
        <li><a>Layout</a>
          <ul class="rm01menu">
            <li><a href="tabs-layout-device.html">Device</a></li>
            <li><a href="tabs-layout-vertical.html">Vertical</a></li>
            <li><a href="tabs-layout-nested.html">Nested</a></li>
            <li><a href="tabs-layout-bullet.html">Bullet</a></li>
            <li><a href="tabs-layout-fullwidth.html">Fullwidth</a></li>
            <li><a href="tabs-layout-page.html">Page</a></li>
          </ul>
        </li>
        <li><a>Effect</a>
          <ul class="rm01menu">
            <li><a href="tabs-effect-line.html">Line</a></li>
            <li><a href="tabs-effect-fade.html">Fade</a></li>
            <li><a href="tabs-effect-cssOne.html">CSS One</a></li>
            <li><a href="tabs-effect-cssTwo.html">CSS Two</a></li>
            <li><a href="tabs-effect-cssFour.html">CSS Four</a></li>
            <li><a href="tabs-effect-none.html">None</a></li>
            <li><a href="tabs-effect-random.html">Effect Random</a></li>
            <li><a href="tabs-effect-control.html">Effect Control</a></li>
          </ul>
        </li>
        <li><a>Style</a>
          <ul class="rm01menu">
            <li><a href="tabs-style-flat.html">Flat</a></li>
            <li><a href="tabs-style-flatbox.html">Flatbox</a></li>
            <li><a href="tabs-style-outline.html">Outline</a></li>
            <li><a href="tabs-style-round.html">Round</a></li>
            <li><a href="tabs-style-underline.html">Underline</a></li>
            <li><a href="tabs-style-size.html">Size Of Style</a></li>
            <li><a href="tabs-style-highlight.html">Highlight Slide</a></li>
          </ul>
        </li>
        <li><a>Position</a>
          <ul class="rm01menu">
            <li><a href="tabs-pos-hor-beginBegin.html">Hor Begin-Begin</a></li>
            <li><a href="tabs-pos-hor-beginCenter.html">Hor Begin-Center</a></li>
            <li><a href="tabs-pos-hor-beginEnd.html">Hor Begin-End</a></li>
            <li><a href="tabs-pos-hor-beginJustify.html">Hor Begin-Justify</a></li>
            <li><a href="tabs-pos-hor-endBegin.html">Hor End-Begin</a></li>
            <li><a href="tabs-pos-hor-endCenter.html">Hor End-Center</a></li>
            <li><a href="tabs-pos-hor-endEnd.html">Hor End-End</a></li>
            <li><a href="tabs-pos-hor-endJustify.html">Hor End-Justify</a></li>
            <li><a class="bo-t" href="tabs-pos-ver-beginBegin.html">Ver Begin-Begin</a></li>
            <li><a href="tabs-pos-ver-beginCenter.html">Ver Begin-Center</a></li>
            <li><a href="tabs-pos-ver-beginEnd.html">Ver Begin-End</a></li>
            <li><a href="tabs-pos-ver-endBegin.html">Ver End-Begin</a></li>
            <li><a href="tabs-pos-ver-endCenter.html">Ver End-Center</a></li>
            <li><a href="tabs-pos-ver-endEnd.html">Ver End-End</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a>Tools</a>
      <ul class="rm01menu">
        <li><a href="page-create-css-effect.html">Create CSS effect</a></li>
        <li><a href="page-preview-css-effect.html">Preview CSS effect</a></li>
      </ul>
    </li>
    <li><a href="../documentation/index.html">Docs</a></li>
    <li>
      <a href="https://codecanyon.net/item/ruby-slider-live-touch-effect-slider/18240185?rel=haibach">
        <i class="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
          </svg>
        </i>
        <span>Download</span>
      </a>
    </li>
  </ul>
</nav>
</template>