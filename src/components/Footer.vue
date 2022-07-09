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
    console.log(this.year)
  },
}
</script>


<template>
<footer id="footer" class="wrapper footer">
  <div class="container">
    <div class="copyright">
      <p>&copy;{{ this.year }} Nguyen Van Thy. All Rights Reserved.</p>
    </div>
  </div>
</footer> 
</template>