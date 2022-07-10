<script>
export default {
  data() {
    return {
      year: null
    }
  },
  created() {
    let date = new Date()
    this.year = date.getFullYear()
  },
}
</script>


<template>
<footer id="footer" class="wrapper footer">
  <div class="container">
    <div class="copyright">
      <p>&copy;{{ this.year }} Nguyễn Văn Thy. All Rights Reserved.</p>
    </div>
  </div>
</footer> 
</template>