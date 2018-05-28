<template>
  <div class="container">
    <!--相册封面-->
    <div class="cover" v-for="item in photoData" @click="showDot(item)">
      <img :src="item.src" alt="">
      <div class="dot" v-show="item.flagDot">✓</div>
    </div>
    <!--底部相册选择-->
    <div class="photo-choose">
      <p>相册选择</p>
      <span>(尺寸必须为750*1334)</span>
    </div>
  </div>
</template>

<script>
  import img1 from "../assets/image/cover1.png"
  import img2 from "../assets/image/cover2.png"
  import img3 from "../assets/image/cover3.png"

  export default {
    name: "group_cover",
    data() {
      return {
        photoData: [
          {
            src: img1,
            flagDot: false
          }, {
            src: img2,
            flagDot: false
          }, {
            src: img3,
            flagDot: false
          }
        ]
      }
    },
    methods: {
      showDot(item) {
        item.flagDot = !item.flagDot
      }
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .cover {
    position: relative;
    /*width: 100%;*/
    height: 97px;
    margin-top: 14px;
  }

  .dot {
    position: absolute;
    right: 14px;
    bottom: 6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    background: #FE7272;
  }

  .cover img {
    width: 100%;
    height: 97px;
  }

  .photo-choose {
    position: absolute;
    bottom: 5px;
    width: 100%;
    height: 48px;
    margin: 0 auto;
    text-align: center;
  }

  .photo-choose p {
    margin-top: 8px;
    font: 16px PingFangSC;
    color: #F8494C;
  }

  .photo-choose span {
    font: 12px PingFangSC;
    color: #666666;
  }

</style>
