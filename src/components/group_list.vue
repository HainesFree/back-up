<template>
  <div class="container">
    <div class="bg">
      <!--头部导航-->
      <div class="nav-title">
        <div class="router-link-active">全部社群</div>
        <div class="nav-item ">公益</div>
        <div class="nav-item">其他</div>
      </div>
      <!--内容列表-->
      <div class="con-list">
        <div class="list-img"><img src="../assets/image/head.png" alt=""></div>
        <div class="list-detail">
          <div class="fund">
            <p>中国人口福利基金会</p>
            <span class="good">公益</span> <span class="area">浙江 杭州</span>
          </div>
          <!--动态切换-->
          <div class="attend" v-show="addAttend" @click="addControle">+关注</div>
          <div class="already-attend" v-show="!addAttend" @click="addControle">√已关注</div>
        </div>
        <div class="love-heart"><img src="../assets/image/heart.png" alt=""><span>902</span></div>
      </div>
      <!--内容列表-->
      <div class="con-list">
        <div class="list-img"><img src="../assets/image/head.png" alt=""></div>
        <div class="list-detail">
          <div class="fund">
            <p>中国人口福利基金会</p>
            <span class="good">公益</span> <span class="area">浙江 杭州</span>
          </div>
          <!--动态切换-->
          <div class="attend" v-show="addAttend" @click="addControle">+关注</div>
          <div class="already-attend" v-show="!addAttend" @click="addControle">√已关注</div>
        </div>
        <div class="love-heart"><img src="../assets/image/heart.png" alt=""><span>902</span></div>
      </div>
      <!--内容列表-->
      <div class="con-list">
        <div class="list-img"><img src="../assets/image/head.png" alt=""></div>
        <div class="list-detail">
          <div class="fund">
            <p>中国人口福利基金会</p>
            <span class="good">公益</span> <span class="area">浙江 杭州</span>
          </div>
          <!--动态切换-->
          <div class="attend" v-show="addAttend" @click="addControle">+关注</div>
          <div class="already-attend" v-show="!addAttend" @click="addControle">√已关注</div>
        </div>
        <div class="love-heart"><img src="../assets/image/heart.png" alt=""><span>902</span></div>
      </div>
      <!--内容列表-->
      <div class="con-list">
        <div class="list-img"><img src="../assets/image/head.png" alt=""></div>
        <div class="list-detail">
          <div class="fund">
            <p>中国人口福利基金会</p>
            <span class="good">公益</span> <span class="area">浙江 杭州</span>
          </div>
          <!--动态切换-->
          <div class="attend" v-show="addAttend" @click="addControle">+关注</div>
          <div class="already-attend" v-show="!addAttend" @click="addControle">√已关注</div>
        </div>
        <div class="love-heart"><img src="../assets/image/heart.png" alt=""><span>902</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "group_list",
    data() {
      return {
        addAttend: true
      }
    },
    methods: {
      addControle() {
        this.addAttend = !this.addAttend
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  /*为路由动态切换准备的样式*/
  .router-link-active {
    height: 44px;
    font: 16px/44px PingFang-SC;
    color: #333333;
    padding: 0 14px 0 14px;
    font-weight: 800;
    border-bottom: 1px solid #333333;

  }
  .container {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #F8F8F8;
  }
  .bg {
    background: #ffffff;
  }
  .nav-title {
    height: 44px;
    display: flex;
    position: relative;
    justify-content: flex-start;
  }
  .nav-title::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #EEEEEE;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .nav-title .nav-item {
    height: 44px;
    font: 16px/44px PingFang-SC;
    color: #333333;
    padding: 0 14px 0 14px;
  }
  .con-list {
    height: 86px;
    width: 100%;
    display: flex;
    position: relative;
    padding: 0 12px 0 12px;
  }
  .con-list::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #EEEEEE;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

  .con-list:last-child::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 0 solid #EEEEEE;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

  .love-heart {
    position: absolute;
    left: 12px;
    bottom: 14px;
    height: 16px;
    width: 55px;
    text-align: center;
    font-size: 0;
    padding-top: 1px;
    background: #FFF2F0;
    border-radius: 5px;
    border: 1px solid #FE7272;
  }

  .love-heart span {
    display: inline-block;
    font: 12px/12px PingFangSC;
    color: #666666;
  }

  .love-heart img {
    width: 12px;
    height: 12px;
    vertical-align: top;
  }

  .list-detail {
    width: 100%;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
  }

  .list-img {
    width: 55px;
    height: 55px;
    margin: 14px 14px 0 0;
  }

  .list-img img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }

  .fund p {
    font: 16px/32px PingFangSC;
    color: #333333;
    margin-bottom: 3px;
  }

  .fund .good {
    display: inline-block;
    height: 18px;
    padding: 0 6px 0 6px;
    font: 12px/18px PingFangSC;
    color: #F8C822;
    border: 1px solid #F8C822;
    border-radius: 5px;

  }

  .fund .area {
    display: inline-block;
    height: 18px;
    /*padding: 0 6px 0 6px;*/
    font: 12px/18px PingFangSC;
    color: #808080;
    margin-left: 6px;
  }

  .attend {
    height: 25px;
    margin-top: 15px;
    padding: 0 6px 0 6px;
    font: 13px/25px PingFangSC;
    color: #FF7272;
    border: 1px solid #FF7272;
    border-radius: 5px;
  }

  .already-attend {
    height: 25px;
    margin-top: 15px;
    padding: 0 6px 0 6px;
    font: 13px/25px PingFangSC;
    color: #999999;
    border: 1px solid #999999;
    border-radius: 5px;
  }
</style>
