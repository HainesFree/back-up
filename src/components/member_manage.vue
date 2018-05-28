<template>
  <div class="container">
    <!--新成员-->
    <div class="new">新成员</div>
    <div class="bg">
      <!--是否加入-->
      <div class="agree-container">
        <div class="agree-l">
          <div class="head-img"><img src="../assets/image/cm.png" alt=""></div>
          <div class="member-name">
            <span>艾米丽</span><img src="../assets/image/girl.png" alt="">
            <p class="member-place">上海</p>
          </div>

        </div>
        <div class="agree-r">
          <div class="agree">同意加入</div>
          <div class="disagree">拒绝加入</div>
        </div>
      </div>
    </div>
    <!--已加入成员-->
    <div class="new">已入成员</div>
    <div class="bg">
      <!--已加入列表-->
      <div class="agree-container">
        <div class="agree-l">
          <div class="head-img"><img src="../assets/image/cm.png" alt=""></div>
          <div class="member-name">
            <span>艾米丽</span><img src="../assets/image/girl.png" alt="">
            <p class="member-place">上海</p>
          </div>
        </div>
        <div class="agree-r" @click="popUp">
          <img src="../assets/image/right-slice.png" alt="">
        </div>
      </div>
      <div class="agree-container">
        <div class="agree-l">
          <div class="head-img"><img src="../assets/image/cm.png" alt=""></div>
          <div class="member-name">
            <span>艾米丽</span><img src="../assets/image/girl.png" alt="">
            <p class="member-place">上海</p>
          </div>
        </div>
        <div class="agree-r" @click="popUp">
          <img src="../assets/image/right-slice.png" alt="">
        </div>
      </div>
      <div class="agree-container">
        <div class="agree-l">
          <div class="head-img"><img src="../assets/image/cm.png" alt=""></div>
          <div class="member-name">
            <span>艾米丽</span><img src="../assets/image/girl.png" alt="">
            <p class="member-place">上海</p>
          </div>
        </div>
        <div class="agree-r" @click="popUp">
          <img src="../assets/image/right-slice.png" alt="">
        </div>
      </div>
    </div>
    <!--弹窗-->
    <div v-if="showAlert">
      <toast v-bind="todo" ref="fan" v-on:sure="fn1" v-on:cancel="fn2"></toast>
    </div>
  </div>
</template>

<script>
  import Toast from "./component/toast"
  export default {
    name: "member_manage",
    data() {
      return {
        showAlert: false,
        todo: {
          title: '成员移除',
          message: '确定将此成员从社群里移除？'
        }
      }
    },
    components: {
      Toast
    },
    methods: {
      popUp() {
        this.showAlert = true
      },
      fn1() {
        this.showAlert = false
      },
      fn2() {
        this.showAlert = false
      }
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f8f8f8;
  }
  .bg {
    background: #ffffff;
  }
  .new {
    height: 34px;
    padding-left: 15px;
    font: 12px/34px PingFangSC;
    color: #808080;
  }
  .agree-container {
    position: relative;
    height: 66px;
    margin-left: 12px;
    display: flex;
    justify-content: space-between;
    padding: 8px 12px 0 0;
  }
  .agree-container::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #E7E7E7;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .agree-container:last-child::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 0 solid #E7E7E7;
  }
  .agree-l, .agree-r {
    display: flex;
  }
  .head-img {
    width: 41px;
    height: 41px;
    margin-right: 14px;
  }
  .head-img img {
    width: 41px;
    height: 41px;
    border-radius: 50%;
  }
  .agree-l .member-name img {
    width: 12px;
    height: 13px;
    vertical-align: middle;
  }
  .agree-l .member-name span {
    display: inline-block;
    margin: 10px 4px 0 0;
    font: 12px PingFangSC;
    color: #333333;
  }
  .agree-l .member-name p {
    margin-top: 3px;
    font: 12px PingFangSC;
    color: #808080;
  }
  .agree-r .agree {
    width: 77px;
    height: 31px;
    margin-top: 10px;
    margin-right: 13px;
    text-align: center;
    border-radius: 3px;
    background: #FF7272;
    color: #ffffff;
    font: 14px/31px PingFangSC;
  }
  .agree-r .disagree {
    width: 77px;
    height: 31px;
    margin-top: 10px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #CCCCCC;
    color: #666666;
    font: 14px/31px PingFangSC;
  }
  .agree-r img {
    width: 12px;
    height: 12px;
    margin-top: 18px;
    transform: rotate(90deg);
  }
</style>
