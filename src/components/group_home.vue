<template>
  <div class="container">
    <!--头部-->
    <div class="bg">
      <div class="download">
          <div class="download-l"><img src="../assets/image/qj-icon.jpg" alt=""></div>
          <div class="download-r">点击下载</div>
      </div>
      <div class="activity"><span class="photo">活动〡相册</span></div>
    </div>
    <!--加入-->
    <div class="bg-add">
      <div class="add-head">
          <div class="add-head-l">
            <img src="../assets/image/add-group.jpg" alt=""><span>阿尔兹海默症不可怕</span>
             <div class="small">官</div>
          </div>
          <div class="add-head-r">加入</div>
      </div>
      <div class="add-con">
        <span class="add-intro">组织介绍：阿尔兹海默症不可怕是由中国人口福利基金会组织的社群，该社群成立于2017成立于2……</span> <span class="add-show">[显示全部]</span></div>
    </div>
    <!--轮播图-->
    <div class="bg-swip">
      <div class="player">
        <swiper :options="swiperOption" class="angle">
          <swiper-slide ><img src="../assets/image/bg-swipper.jpg" alt=""></swiper-slide>
          <swiper-slide ><img src="../assets/image/bg-swipper.jpg" alt=""></swiper-slide>
          <swiper-slide ><img src="../assets/image/bg-swipper.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="change">
        <div class="change-item"><img src="../assets/image/img-slide1.jpg" alt=""><p>福利组织</p></div>
        <div class="change-item"><img src="../assets/image/img-slide2.jpg" alt=""><p>苏州分部</p></div>
        <div class="change-item"><img src="../assets/image/img-slide3.jpg" alt=""><p>上海部</p></div>
        <div class="change-item"><img src="../assets/image/img-slide4.jpg" alt=""><p>全国部</p></div>
        <div class="change-item"><img src="../assets/image/img-slide1.jpg" alt=""><p>社区里</p></div>
      </div>
      <div class="update"><img src="../assets/image/f5.png" alt=""> 换一换</div>
    </div>
    <!--<div class="bg-grp">-->
      <!--<div class="grp-dynamic-title">社群动态</div>-->
      <!--<div class="grp-dynamic">-->
        <!--<div class="dynamic-head">-->
          <!--<div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>-->
          <!--<div class="dynamic-head-r">-->
            <!--<h2>魔都探索队</h2>-->
            <!--<p>2018-2-23 13:30:00</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="dynamic-content">-->
          <!--<div class="con-font">即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。</div>-->
          <!--<div class="photo">-->
            <!--<div class="con-img"><img src="../assets/image/cm.png" alt=""></div>-->
            <!--<div class="con-img"><img src="../assets/image/cat.png" alt=""></div>-->
            <!--<div class="con-img"><img src="../assets/image/pada.png" alt=""></div>-->
            <!--<div class="con-img"><img src="../assets/image/cat.png" alt=""></div>-->
            <!--<div class="con-img"><img src="../assets/image/cat.png" alt=""></div>-->
            <!--<div class="con-img"><img src="../assets/image/cat.png" alt=""></div>-->
            <!--<div class="con-img"><img src="../assets/image/cat.png" alt=""></div>-->
            <!--<div class="con-img"><img src="../assets/image/cat.png" alt=""></div>-->
            <!--<div class="con-img"><img src="../assets/image/cat.png" alt=""></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="bg-gr">-->
      <!--<div class="grp-dynamic-title">社群动态</div>-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
      name: "group_home",
      data(){
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
.container{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
}
.bg{
  background: #ffffff;
}
.download{
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 12px 0 12px;
}
.download-l,.download-l img{
  height: 39px;
}
.download-r{
  width: 70px;
  height: 25px;
  background: #FF7272;
  text-align: center;
  font: 12px/25px PingFang-SC;
  color: #ffffff;
  border-radius: 3px;
}
.activity{
  position: relative;
  height: 115px;
  background: url("../assets/image/bg-yellow.jpg");
  background-size: 100% 100%;
}
.activity span{
  position: absolute;
  right: 13px;
  bottom: 8px;
  font: 14px PingFang-SC-Bold;
  color: #FFFFFF;
}
.bg-add{
  margin-top: 11px;
  background: #ffffff;
}
.add-head{
  position: relative;
  height: 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 12px;
}
.add-head::after{
  content: " ";
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid #DFDFDF;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.add-head-l{
  height: 40px;
}
.add-head-l .small{
  position: absolute;
  left: 40px;
  bottom: 13px;
  width: 16px;
  height: 16px;
  text-align: center;
  font: 12px PingFang-SC-Bold;
  color: #ffffff;
  border-radius: 50%;
  background: #0985CB;
}
.add-head-l img{
  width: 40px;
  height: 40px;
  vertical-align: top;
  border-radius: 50%;
}
.add-head-l span{
  margin-left: 12px;
  display: inline-block;
  font:700 16px/40px PingFang-SC-Bold;
  color: #333333;
}
.add-head-r{
  width: 58px;
  height: 26px;
  text-align: center;
  background: #FE7272;
  font: 12px/26px PingFang-SC-Bold;
  color: #ffffff;
  border-radius: 3px;
}
.add-con{
  height: 60px;
  padding: 15px 12px 0 12px;
}
.add-intro{
  font: 14px/18px PingFang-SC-Bold;
  color: #333333;
}
.add-show{
  font: 14px/18px PingFang-SC-Bold;
  color: #5D87B6;
}
.bg-swip{
  margin-top: 9px;
  background: #ffffff;
  padding: 12px 12px 0 12px;
}
.player {
  width: 100%;
  height: auto;
  padding-bottom: 12px;
  border-radius: 5px;
}
.angle{
  border-radius: 6px;
}
.player img {
  width: 100%;
  height: auto;
  border-radius: 6px;
}
.change{
  height: 62px;
  display: flex;
  justify-content: space-between;
}
.change-item{
  height: 62px;
  width: 48px;
  text-align: center;
}
.change-item img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.change-item p{
  text-align: center;
  color: #333333;
  font: 12px PingFang-SC-Bold;
}
.update{
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  padding-top: 15px;
  text-align: center;
  font: 12px PingFang-SC-Bold;
  color: #666666;
}
.update img{
  width: 12px;
  height: 12px;
}
.bg-grp{
  margin-top: 10px;
  background: #ffffff;
}
.grp-dynamic-title{
  position: relative;
  height: 46px;
  padding-left: 12px;
  color: #333333;
  font:700 16px/46px PingFang-SC-Bold;
}
.grp-dynamic-title::after{
  content: " ";
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid #DFDFDF;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.grp-dynamic{
  padding: 14px 12px 0 12px;
}
.dynamic-head{
  display: flex;
}
.dynamic-head-l{
  width: 41px;
  height: 41px;
  margin-right: 14px;
}
.dynamic-head-l img{
  width: 41px;
  height: 41px;
  border-radius: 50%;
}
.dynamic-head-r{
   height: 35px;
 }
.dynamic-head-r h2{
  color: #333333;
  font: 16px PingFang-SC-Bold;
}
.dynamic-head-r p{
  margin-top: 4px;
  color: #808080;
  font:12px PingFang-SC-Bold;
}
.dynamic-content{
  margin-top: 10px;
}
.con-font{
  color: #333333;
  font: 15px/20px PingFang-SC-Bold;
}
.photo{
  width: 100%;
  overflow: hidden;
  /*display: flex;*/
}
.con-img{
  width: 31%;
  float: left;
  padding: 0 5px 5px 0;
  height: 112px;
}

.con-img img {
  width: 100%;
  height: 112px;
}
.bg-gr{
  margin-top: 10px;
}
</style>
