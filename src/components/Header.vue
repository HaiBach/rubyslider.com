<script setup>
import { RouterLink } from 'vue-router';
import Navigation from '@/components/Navigation.vue'
</script>


<template>
<header id="header" class="wrapper header">
  <div class="container">
    <!-- Logo -->
    <RouterLink class="logo" to="/" data-mScale="100">RubySlider</RouterLink>

    <!-- Navigation -->
    <Navigation />
  </div>
</header>
</template>