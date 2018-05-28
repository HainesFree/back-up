<template>
  <div class="container">
    <!--左右滑动--推荐用户-->
    <div class="slide-box">
      <div class="slide-item">
        <img src="../assets/image/cm.png" alt="">
        <p>陈粒陈粒陈粒陈粒hahahahah</p>
      </div>
      <div class="slide-item">
        <img src="../assets/image/head.png" alt="">
        <p>陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../assets/image/cat.png" alt="">
        <p>陈粒陈粒陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../assets/image/pada.png" alt="">
        <p>陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../assets/image/cm.png" alt="">
        <p>陈粒陈粒陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../assets/image/head.png" alt="">
        <p>陈粒陈粒陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../assets/image/cat.png" alt="">
        <p>陈粒陈粒</p>
      </div>
      <div class="slide-item">
        <img src="../assets/image/pada.png" alt="">
        <p>陈粒陈粒</p>
      </div>
    </div>
    <div class="bg">
      <div class="pub-dynamic">
        <div class="pub-l">大家的动态</div>
        <div class="pub-r">
          <span>最热</span> | <span>最新</span>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div class="clearfix mov">
      <div class="mov-container">
        <div class="mov-item">
          <div class="mov-img">
            <img src="../assets/image/sport.png" alt="">
            <img src="../assets/image/player.png" alt="" class="player">
          </div>
          <div class="mov-con">较小女生需要健身吗？又要如何健身、锻炼呢,较小女生需要健身吗？又要如何健身、锻炼呢较小女生需要健身吗？又要如何健身、锻炼呢</div>
          <div class="mov-data">
            <div class="mov-data-l"><img src="../assets/image/head.png" alt=""><span>kula</span></div>
            <div class="mov-data-r"><img src="../assets/image/heart.png" alt=""><span>1234</span></div>
          </div>
        </div>
      </div>
      <div class="mov-container">
        <div class="mov-item">
          <div class="mov-img">
            <img src="../assets/image/sport.png" alt="">
            <img src="../assets/image/player.png" alt="" class="player">
          </div>
          <div class="mov-con">较小女生需要健身吗</div>
          <div class="mov-data">
            <div class="mov-data-l"><img src="../assets/image/head.png" alt=""><span>kula</span></div>
            <div class="mov-data-r"><img src="../assets/image/heart.png" alt=""><span>1234</span></div>
          </div>
        </div>
      </div>
      <div class="mov-container">
        <div class="mov-item">
          <div class="mov-img">
            <img src="../assets/image/sport.png" alt="">
            <img src="../assets/image/player.png" alt="" class="player">
          </div>
          <div class="mov-con">sports is perfect</div>
          <div class="mov-data">
            <div class="mov-data-l"><img src="../assets/image/head.png" alt=""><span>kula</span></div>
            <div class="mov-data-r"><img src="../assets/image/heart.png" alt=""><span>1234</span></div>
          </div>
        </div>
      </div>
      <div class="mov-container">
        <div class="mov-item">
          <div class="mov-img">
            <img src="../assets/image/sport.png" alt="">
            <img src="../assets/image/player.png" alt="" class="player">
          </div>
          <div class="mov-con">较小女生需要健身吗？又要如何健身、锻炼呢,较小女生需要健身吗？又要如何健身、锻炼呢较小女生需要健身吗？又要如何健身、锻炼呢</div>
          <div class="mov-data">
            <div class="mov-data-l"><img src="../assets/image/head.png" alt=""><span>kula</span></div>
            <div class="mov-data-r"><img src="../assets/image/heart.png" alt=""><span>1234</span></div>
          </div>
        </div>
      </div>
      <div class="mov-container">
        <div class="mov-item">
          <div class="mov-img">
            <img src="../assets/image/sport.png" alt="">
            <img src="../assets/image/player.png" alt="" class="player">
          </div>
          <div class="mov-con">较小女生需要健身吗？又要如何健身、锻炼呢,较小女生需要健身吗？又要如何健身、锻炼呢较小女生需要健身吗？又要如何健身、锻炼呢</div>
          <div class="mov-data">
            <div class="mov-data-l"><img src="../assets/image/head.png" alt=""><span>kula</span></div>
            <div class="mov-data-r"><img src="../assets/image/heart.png" alt=""><span>1234</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "share"
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
  .pub-r span{
    font-size: 14px;
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
  .mov{
    width: 100%;
    /*max-width: 500px;*/
    margin: 0 auto;
    /*position: relative;*/
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
    width: 158px;
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
