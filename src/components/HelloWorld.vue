<template>
  <div class="demo">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin border5px {
    -moz-border-radius: 0.5rem;
    -webkit-border-radius: 0.5rem;
    border-radius: 0.5rem;
}
@mixin buttonType (
    $color: #fff, 
    $height: 1rem, 
    $background: skyblue
) {
    width: 50%;
    height: $height;
    line-height: $height;
    text-align: center;
    background: $background;
    color: $color;
    margin: 0.5rem auto;
}
$defaultColor: rgb(202, 202, 165) !default;
aside{
    background: blue;
    color: #fff;
}
.demo{
  .nav{
    width:50%;
    background: $defaultColor;
    margin: 0.5rem auto;
    text-align: center;
    line-height:1rem;
    height: 1rem;
    @include border5px;
  }
  .bg{
    width:746px;
    height:716px;
    background:url(~@/common/images/demo.png);
    background-size: 100% 100%;
  }
  .btn{
    @include buttonType();
    @include border5px;
  }
}
</style>
