<template>
  <div class="box">
    <div class="bg">
      <div class="help-num">已帮助 <span>353，343</span>位阿尔茨海默症患者</div>
      <div class="player">
        <!--轮播图-->
        <swiper :options="swiperOption">

          <swiper-slide><img src="../assets/image/bg.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/image/bg.png" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/image/bg.png" alt=""></swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="pub-grp">
        <div class="pub-left">公益社群</div>
        <div class="pub-right">查看更多</div>
      </div>
      <!--左右滑动--公益社群-->
      <div class="slide-box">
        <div class="slide-item">
          <div class="slide-title"><span>中国人口福利基金会</span></div>
          <div class="slide-people"><span>3456</span>人参与</div>
        </div>
        <div class="slide-item">
          <div class="slide-title"><span>上海分部—公益组织</span></div>
          <div class="slide-people"><span>7756</span>人参与</div>
        </div>
        <div class="slide-item">
          <div class="slide-title"><span>中国人口福利基金会</span></div>
          <div class="slide-people"><span>4566</span>人参与</div>
        </div>
      </div>

      <div class="pub-grp">
        <div class="pub-left">发现社群</div>
        <div class="pub-right">查看更多</div>
      </div>
      <!--左右滑动--发现社群-->
      <div class="slide-box">
        <div class="slide-item2">
          <h1 class="slide-title2">蓝海社群</h1>
          <h1 class="slide-people2">3456人参与</h1>
        </div>
        <div class="slide-item2">
          <div class="slide-title2"><span>梦芭莎社群</span></div>
          <div class="slide-people2"><span>7756</span>人参与</div>
        </div>
        <div class="slide-item2">
          <div class="slide-title2"><span>中国人口福利社群</span></div>
          <div class="slide-people2"><span>4566</span>人参与</div>
        </div>
      </div>

      <!--社群动态-->
      <div class="pub-grp2">
        <div class="pub-left">社群动态</div>
      </div>
    </div>
    <div class="bg-dynamic">
      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>魔都探索队</h2>
            <p>2018-2-23 13:30:00</p>
          </div>
        </div>
        <div class="dynamic-content">
          <div class="con-font">即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。</div>
          <div class="photo">
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
          </div>
          <div class="con-footer">归属于：中国人口福利基金会</div>
        </div>
      </div>
    </div>

    <div class="bg-dynamic">
      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>魔都探索队</h2>
            <p>2018-2-23 13:30:00</p>
          </div>
        </div>
        <div class="dynamic-content">
          <div class="con-font">即使相隔光年，我们终能相遇。</div>
          <div class="photo">
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
          </div>
          <div class="con-footer">归属于：中国人口福利基金会</div>
        </div>
      </div>
    </div>
    <div class="bg-dynamic">
      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>魔都探索队</h2>
            <p>2018-2-23 13:30:00</p>
          </div>
        </div>
        <div class="dynamic-content">
          <div class="con-font">即使相隔光年，我们终能相遇。</div>
          <div class="photo">
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
            <div class="con-img"><img src="../assets/image/pada.png" alt=""></div>
          </div>
          <div class="con-footer">归属于：中国人口福利基金会</div>
        </div>
      </div>
    </div>
    <!--结尾部分-->
    <div class="page-last">被你看光光啦~</div>
  </div>
</template>

<script>
  import "../assets/js/rem"
  export default {
    name: 'welfare',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: true
        }
      }
    }
  }
</script>
<style scoped>
  .box::-webkit-scrollbar {
    display: none
  }

  .box {
    overflow-y: hidden;
    background: #F8F8F8;
  }

  .bg {
    background: #fff;
    padding: 0 12px 0;
  }

  .help-num {
    padding-top: 7px;
    font: 12px PingFangSC;
    color: #999999;
    text-align: center;
    margin-bottom: 3px;
  }

  .help-num span {
    font: 16px PingFangSC;
    color: #FF7272;
  }

  .player {
    width: 100%;
    height: auto;
    padding-bottom: 25px;
    border-radius: 5px;
  }

  .player img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .pub-grp {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
  }

  .pub-grp2 {
    display: flex;
    justify-content: space-between;
  }

  .pub-left {
    width: 84px;
    height: 28px;
    font: 20px/28px PingFangSC;
    font-weight: 700;
    color: #333;
  }

  .pub-right {
    width: 51px;
    height: 28px;
    border: none;
    font: 12px/28px PingFangSC;
    color: #999999;
    padding-right: 12px;
  }

  .slide-box {
    height: 74px;
    display: -webkit-box;
    overflow-x: auto;
    /*适应苹果*/
    -webkit-overflow-scrolling: touch;
    padding-bottom: 25px;
    position: relative;
  }

  .slide-box::-webkit-scrollbar {
    display: none;
  }

  .slide-item {
    background: url("../assets/image/pub.png");
    background-size: 1.64rem 74px;
    width: 1.64rem;
    box-sizing: border-box;
    margin-right: 5px;
    padding: 13px 6px 0 6px;
    border-radius: 5px;

  }

  .slide-title {
    width: 1.53rem;
    height: 22px;
    font: 16px PingFangSC;
    font-weight: 700;
    color: #FF7272;
    padding: 0 0 9px 0;
  }

  .slide-people {
    width: .84rem;
    height: 15px;
    font: 14px PingFangSC;
    color: #666666;
  }

  .slide-people span {
    font: 16px PingFangSC;
    color: #6d6a6a;
    font-weight: 700;
  }

  .slide-item2 {
    width: 1.64rem;
    background: palevioletred;
    text-align: center;
    border-radius: 5px;
    margin-right: 5px;
    background: url("../assets/image/find.png");
    background-size: 1.64rem 74px;
  }

  .slide-item2 .slide-title2 {
    font: 15px PingFangSC;
    color: #fff;
    padding-top: 19px;
  }

  .slide-item2 .slide-people2 {
    color: #F8C822;
    font: 12px PingFangSC;
    padding-top: 3px;
  }

  .bg-dynamic {
    background: #fff;
    margin-bottom: 8px;
    padding: 0 12px 0;
  }

  .dynamic-head {
    display: flex;
    padding-bottom: 12px;
    background: #ffffff;
    padding-top: 16px;
  }

  .dynamic-head-l {
    position: relative;
    width: 40px;
    height: 40px;
    padding-right: 15px;
  }

  .dynamic-head-l img {
    position: absolute;
    width: 38px;
    height: 38px;
  }

  .dynamic-head-r h2 {
    font: 16px PingFangSC;
    color: #333333;
  }

  .dynamic-head-r p {
    font: 12px PingFangSC;
    color: #999999;
  }

  .photo {
    width: 100%;
    overflow: hidden;
  }

  .con-font {
    padding-bottom: 8px;
    font: 15px PingFangSC;
    color: #444444;
  }

  .con-img {
    float: left;
    padding: 0 5px 5px 0;
    height: 112px;
  }

  .con-img img {
    width: 1.12rem;
    height: 112px;
  }
  .con-footer {
    position: relative;
    height: 30px;
    font: 10px/30px PingFangSC;
    color: #576B95;
    text-align: right;
    margin: 10px 12px 0 0;
  }

  .con-footer::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-bottom: 1px solid #EEEEEE;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

  .page-last {
    height: 50px;
    font: 10px/50px PingFangSC;
    color: #CCCCCC;
    text-align: center;
  }
</style>
