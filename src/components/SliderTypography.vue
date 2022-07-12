<template>
<div class="container">
  <h1 class="typo">
    <span class="typo-1">SLIDER</span>
    <span class="typo-2">LIST</span>
    <span class="typo-3">TEMPLATES</span>
    <span class="typo-4">OVER 30+ SLIDER STARTER TEMPLATES</span>
  </h1>
</div>
</template>


<style scoped>
.typo {
  padding-top: 50px; padding-bottom: 50px;
  text-align: center;
  font-size: 14px;
}
.typo-1, .typo-2, .typo-3 {
  display: inline-block;
  padding-right: 20px;
  font-size: 5em;
}

@media only screen and (min-width: 768px) {
  .typo {
    width: 768px;
    padding-top: 100px; padding-bottom: 50px;
    margin: 0 auto;
    text-align: center;
  }
  .typo-1, .typo-2, .typo-3 {
    display: block;
    padding-right: 0;
  }
  .typo-1 {
    float: left;
    margin-bottom: 20px;
    color: #000;
    font-size: 11.5em;
    font-weight: 100;
    line-height: .8em;
  }
  .typo-2 {
    float: left;
    margin-bottom: 10px;
    color: #999;
    font-size: 7em;
    font-weight: 700;
    line-height: .85em;
    margin-bottom: 10px;
  }
  .typo-3 {
    float: left;
    margin-bottom: 20px;
    color: #666;
    font-size: 2.5em;
    font-weight: 300;
    line-height: 1em;
  }
  .typo-4 {
    clear: both;
    display: inline-block;
    padding-top: 15px;
    margin-bottom: 0;
    border-top: 1px solid #ddd;
    color: #666;
    font-size: 1.46em;
    font-weight: 300;
    line-height: 1em;
    letter-spacing: 11px;
  }
}
@media only screen and (max-width: 767px) {
  .typo {
    padding-top: 50px; padding-bottom: 50px;
    text-align: left;
  }
  .typo-1, .typo-2, .typo-3 {
    display: inline-block;
    padding-right: 20px;
    font-size: 4.6em;
    line-height: .9em;
  }
  .typo-1 {
    font-weight: 700;
  }
  .typo-4 {
    display: inline-block;
    padding-top: 10px;
    border-top: 1px solid #aaa;
    font-size: 1.4em;
    font-weight: 300;
  }
}
@media only screen and (max-width: 479px) {
  .typo-1, .typo-2, .typo-3 {
    font-size: 3.5em;
  }
}
</style>