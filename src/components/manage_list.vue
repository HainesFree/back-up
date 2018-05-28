<template>
  <div class="container">

      <div class="content">
        <div class="content-item">
          <div class="item-l"><img src="../assets/image/img-group1.png" alt="">社群资料</div>
          <div class="item-r"><span>1</span><img src="../assets/image/right-slice.png" alt=""></div>
          <!--<div class="dot">3</div>-->
        </div>

        <div class="content-item">
          <div class="item-l"><img src="../assets/image/img-group2.png" alt="">活动管理</div>
          <div class="item-r"><span>3</span><img src="../assets/image/right-slice.png" alt=""></div>
          <!--<div class="dot">3</div>-->
        </div>
        <div class="content-item">
          <div class="item-l"><img src="../assets/image/img-group3.png" alt="">成员管理</div>
          <div class="item-r"><span>123</span><img src="../assets/image/right-slice.png" alt=""></div>
          <!--<div class="dot">36</div>-->
        </div>
        <div class="content-item">
          <div class="item-l"><img src="../assets/image/img-group4.png" alt="">粉丝管理</div>
          <div class="item-r"><span>123</span><img src="../assets/image/right-slice.png" alt=""></div>
          <div class="dot">3</div>
        </div>
        <div class="content-item">
          <div class="item-l"><img src="../assets/image/img-group5.png" alt="">相册管理</div>
          <div class="item-r"><span>123</span><img src="../assets/image/right-slice.png" alt=""></div>
          <!--<div class="dot">3</div>-->
        </div>
        <div class="content-item">
          <div class="item-l"><img src="../assets/image/img-group6.png" alt="">资质认证</div>
          <div class="item-r"><span>123</span><img src="../assets/image/right-slice.png" alt=""></div>
          <!--<div class="dot">3</div>-->
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f8f8f8;
  }
  .content{
    background: #ffffff;
    margin-top: 10px;
  }
  .content-item{
    position: relative;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 0 0 38px;
    margin: 0 12px 0 12px;

  }
  .content-item::after{
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #E0E0E0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .content-item .dot{
    position: absolute;
    left: 93px;
    top: 9px;
    width: 16px;
    height: 16px;
    font: 12px/16px PingFangSC-Regular;
    text-align: center;
    border-radius: 50%;
    color: #ffffff;
    background: #FE493F;
  }
  .item-l{
    font: 16px/55px PingFangSC-Regular ;
    color: #333333;
  }
  .item-l img{
    position: absolute;
    left: 0;
    top: 15px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
  .item-r{
    font: 16px/55px PingFangSC-Regular ;
    color: #666666;
  }
  .item-r img{
    width: 12px;
    height:12px;
  }
  .item-r span{
    color: #666666;
    margin-right: 8px;
  }
  .content-item:last-child::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: none;
  }
</style>
