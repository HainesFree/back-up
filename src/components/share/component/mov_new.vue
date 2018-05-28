<template>
  <div class="clearfix mov">
    <div class="mov-container">
      <div class="mov-item">
        <div class="mov-img">
          <img src="../../../assets/image/cm.png" alt="">
          <img src="../../../assets/image/player.png" alt="" class="player">
        </div>
        <div class="mov-con">较小女生需要健身吗？又要如何健身、锻炼呢,较小女生需要健身吗？又要如何健身、锻炼呢较小女生需要健身吗？又要如何健身、锻炼呢</div>
        <div class="mov-data">
          <div class="mov-data-l"><img src="../../../assets/image/head.png" alt=""><span>kula</span></div>
          <div class="mov-data-r" :class="{bg1:chose1,bg2:chose2}" @click="changeBg"><span>1234</span> </div>
        </div>
      </div>
    </div>
    <div class="mov-container">
      <div class="mov-item">
        <div class="mov-img">
          <img src="../../../assets/image/cm.png" alt="">
          <img src="../../../assets/image/player.png" alt="" class="player">
        </div>
        <div class="mov-con">较小女生需要健身吗？又要如何健身、锻炼呢,较小女生需要健身吗？又要如何健身、锻炼呢较小女生需要健身吗？又要如何健身、锻炼呢</div>
        <div class="mov-data">
          <div class="mov-data-l"><img src="../../../assets/image/head.png" alt=""><span>kula</span></div>
          <div class="mov-data-r" :class="{bg1:chose1,bg2:chose2}" @click="changeBg"><span>1234</span> </div>
        </div>
      </div>
    </div>
    <div class="mov-container">
      <div class="mov-item">
        <div class="mov-img">
          <img src="../../../assets/image/cm.png" alt="">
          <img src="../../../assets/image/player.png" alt="" class="player">
        </div>
        <div class="mov-con">较小女生需要健身吗？又要如何健身、锻炼呢,较小女生需要健身吗？又要如何健身、锻炼呢较小女生需要健身吗？又要如何健身、锻炼呢</div>
        <div class="mov-data">
          <div class="mov-data-l"><img src="../../../assets/image/head.png" alt=""><span>kula</span></div>
          <div class="mov-data-r" :class="{bg1:chose1,bg2:chose2}" @click="changeBg"><span>1234</span> </div>
        </div>
      </div>
    </div>
    <div class="mov-container">
      <div class="mov-item">
        <div class="mov-img">
          <img src="../../../assets/image/cm.png" alt="">
          <img src="../../../assets/image/player.png" alt="" class="player">
        </div>
        <div class="mov-con">较小女生需要健身吗？又要如何健身、锻炼呢,较小女生需要健身吗？又要如何健身、锻炼呢较小女生需要健身吗？又要如何健身、锻炼呢</div>
        <div class="mov-data">
          <div class="mov-data-l"><img src="../../../assets/image/head.png" alt=""><span>kula</span></div>
          <div class="mov-data-r" :class="{bg1:chose1,bg2:chose2}" @click="changeBg"><span>1234</span> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mov_hot",
    data() {
      return {
        chose1: true,
        chose2: false
      }
    },
    methods: {
      changeBg() {
        this.chose1 = !this.chose1;
        this.chose2 = !this.chose2
      }

    }
  }
</script>

<style scoped>
  .bg1{
    background: url("../../../assets/image/kheart@3x.png") no-repeat 0 center;
    background-size:17px 17px;
  }
  .bg2{
    background: url("../../../assets/image/heart@2x.png") no-repeat 0 center;
    background-size:17px 17px;
  }
  .mov{
    width: 100%;
    margin: 0 auto;
  }
  .mov-container{
    float: left;
    width: 44%;
    margin:4% 0 0 4%;
  }
  .mov-item{
    width: 100%;
    height: 240px;
    background: #FFFFFF;
    border-radius: 5px;
  }
  .mov-img{
    position: relative;
    width: 100%;
    height: 144px;
    background-size:100% 144px ;
    border-radius: 5px;
  }
  .mov-img .player{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px;
    width: 40px;
    height: 40px;
  }
  .mov-img img{
    width: 100%;
    height: 144px;
    border-radius: 5px;
  }
  .mov-con{
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    padding: 0 6px;
    margin-top: 7px;
    font-size: 12px;
    color: #333333;
    overflow:hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
  .mov-data{
    display: flex;
    justify-content: space-between;
    /*align-items: center;*/
    height: 22px;
    padding: 0 6px;
    margin-top: 16px;
  }
  .mov-data-l,.mov-data-r{
    font-size: 0;
  }
  .mov-data-l span{
    font-size:12px;
    color: #333333;
    line-height: 22px;
  }
  .mov-data-l img{
    width: 22px;
    height: 22px;
    margin-right: 6px;
    border-radius: 50%;
    vertical-align: top;
  }
  .mov-data-r{
    height: 22px;
    padding-left: 21px;
  }
  .mov-data-r span{
    display: inline-block;
    height: 16px;
    font-size:12px;
    color: #333333;
    line-height: 22px;
  }
  .mov-data-r img{
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-top: 3px;
    margin-right: 4px;
  }
</style>
<style>
  body{
    background: #F8F8F8;
  }
</style>
