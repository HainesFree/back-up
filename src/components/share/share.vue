<template>
  <div class="container">
    <!--左右滑动--推荐用户-->
    <div class="slide-box">
      <div class="slide-item">
        <img src="../../assets/image/cm.png" alt="">
        <p>陈粒陈粒陈粒陈粒hahahahah</p>
      </div>
      <div class="slide-item">
        <img src="../../assets/image/head.png" alt="">
        <p>陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../../assets/image/cat.png" alt="">
        <p>陈粒陈粒陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../../assets/image/pada.png" alt="">
        <p>陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../../assets/image/cm.png" alt="">
        <p>陈粒陈粒陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../../assets/image/head.png" alt="">
        <p>陈粒陈粒陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../../assets/image/cat.png" alt="">
        <p>陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../../assets/image/pada.png" alt="">
        <p>陈粒陈粒</p>
      </div>
    </div>
    <div class="bg">
        <div class="pub-dynamic">
          <div class="pub-l">大家的动态</div>
          <div class="pub-r">
            <span><router-link to="/hot">最热</router-link></span> | <span @click="dotShow"><router-link to="/new">最新</router-link></span>
          <div class="dot" v-if="dotActive"></div>
          </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Hot from "./component/mov_hot"
  import New from "./component/mov_new"
  export default {
    name: "share",
    data(){
      return{
        dotActive:true
      }
    },
    components:{
      Hot,New
    },
    methods:{
      dotShow(){
        this.dotActive=false
      }
    }
  }
</script>

<style scoped>
  .container{
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    background: #F8F8F8;
  }
  .slide-box {
    height: 100px;
    padding: 0 15px  0 15px;
    display: -webkit-box;
    overflow-x: auto;
    /*适应苹果*/
    -webkit-overflow-scrolling: touch;
  }
  .slide-box::-webkit-scrollbar {
    display: none;
  }
  .slide-item {
    width: 55px;
    height: 76px;
    margin: 12px 13px 0 0;
    text-align: center;
    box-sizing: border-box;
    font-size: 0;
  }
  .slide-item img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .slide-item p{
    margin-top: 8px;
    text-align: center;
    font-size:12px;
    color: #444444;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .bg{
    background: #FFFFFF;
  }
  .pub-dynamic{
    height: 60px;
    /*background: pink;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .pub-l{
    font-size:16px;
    color: #333333;
    font-weight: 600;
  }
  .pub-r{
    position: relative;
    width: 90px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border:1px solid #CCCCCC;
    border-radius: 18px;
    color: #999999;
  }
  .pub-r span a{
    text-decoration: none;
  }
  .dot{
    position: absolute;
    top: 7px;
    right: 8px;
    width: 6px;
    height: 6px;
    background: #F8494C;
    border-radius: 50%;
  }
  .router-link-active {
    color: #333333;
    font-weight: 600;
  }
</style>
<style>
  body{
    background: #F8F8F8;
  }
</style>
