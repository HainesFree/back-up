<template>
  <div class="container">
    <!--未有关注的动态情况-->
    <div class="bg" v-if="!isCare">
      <div class="no-care-head">关注好友，随时了解TA的动态</div>
      <div class="no-care-con">
        <div class="no-care-title">推荐关注</div>
        <!--推荐的用户列表-->
        <div class="active-con ">
          <div class="no-care-container clearfix">
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/pada.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cm.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/heart.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>

            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/pada.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cm.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/heart.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/pada.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cm.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/heart.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
            <div class="no-care-item">
              <div class="item-head"><img src="../assets/image/cat.png" alt=""></div>
              <div class="item-name">萌得萌到</div>
              <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
              <div class="item-care">已关注</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--已有关注的动态情况-->
    <div v-if="isCare">
      <!--关注的动态-->
      <div class="bg">
      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>Rena</h2>
            <p>2-23</p>
          </div>
        </div>
        <div class="dynamic-content">
          <div class="con-font">即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。即使相隔光年，我们终能相遇。</div>
          <div class="photo">
            <div class="pho-container"></div>
            <!--<img src="../assets/image/pada.png" alt="">-->
            <!--<img src="../assets/image/pada.png" alt="">-->
            <!--<img src="../assets/image/pada.png" alt="">-->
          </div>
          <div class="con-footer">
            <div class="dy-share"><img src="../assets/image/resend.png" alt=""><span>0</span></div>
            <div class="dy-msg"><img src="../assets/image/msg.png" alt=""><span>34</span></div>
            <div class="dy-zan"><img src="../assets/image/heart2x.png" alt=""><span>34</span></div>
          </div>
        </div>
      </div>
    </div>
      <div class="bg">
      <div class="sq-dynamic">
        <div class="dynamic-head">
          <div class="dynamic-head-l"><img src="../assets/image/cm.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>Rena</h2>
            <p>2-23</p>
          </div>
        </div>
        <!--电影展示模块-->
        <div class="dynamic-content">
          <div class="con-font">即使相隔光年，我们终能相遇。</div>
          <div class="photo">
            <div class="mov">我是电影模块</div>
          </div>
          <div class="con-footer">
            <div class="dy-share"><img src="../assets/image/resend.png" alt=""><span>0</span></div>
            <div class="dy-msg"><img src="../assets/image/msg.png" alt=""><span>34</span></div>
            <div class="dy-zan"><img src="../assets/image/heart2x.png" alt=""><span>34</span></div>
          </div>
        </div>
      </div>
    </div>
      <!--推荐的用户--可关闭-->
      <div class="bg" v-if="isUser">
    <div class="active-user">
      <div class="active-head">
        <div class="active-head-l">这些用户最近很活跃哦~</div>
        <div class="active-head-r" @click="shut">关闭</div>
      </div>
      <!--左右滑动区域-->
      <div class="active-con">
        <div class="box-container">
          <div class="box-item">
            <div class="item-head"><img src="../assets/image/pada.png" alt=""></div>
            <div class="item-name">萌得萌到</div>
            <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
            <div class="item-care" v-show="addAttend" @click="addControle">已关注</div>
            <div class="item-no-care" v-show="!addAttend" @click="addControle">+关注</div>
          </div>
          <div class="box-item">
            <div class="item-head"><img src="../assets/image/cat.png" alt=""></div>
            <div class="item-name">萌得萌到</div>
            <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
            <div class="item-care">已关注</div>
          </div>
          <div class="box-item">
            <div class="item-head"><img src="../assets/image/cm.png" alt=""></div>
            <div class="item-name">萌得萌到</div>
            <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
            <div class="item-care">已关注</div>
          </div>
          <div class="box-item">
            <div class="item-head"><img src="../assets/image/heart.png" alt=""></div>
            <div class="item-name">萌得萌到</div>
            <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
            <div class="item-care">已关注</div>
          </div>
          <div class="box-item">
            <div class="item-head"><img src="../assets/image/pada.png" alt=""></div>
            <div class="item-name">萌得萌到</div>
            <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
            <div class="item-care">已关注</div>
          </div>
          <div class="box-item">
            <div class="item-head"><img src="../assets/image/cat.png" alt=""></div>
            <div class="item-name">萌得萌到</div>
            <div class="item-fans"><span class="fans-num">123粉丝</span><span>234喜欢</span></div>
            <div class="item-care">已关注</div>
          </div>
          <img src="../assets/image/rr.png" alt="" class="change">
        </div>
      </div>
    </div>
    </div>
      <!--关注的求助-->
      <div class="bg">
      <div class="care-help">
        <div class="care-head">
          <div class="care-head-l"><img src="../assets/image/heart2x.png" alt="">关注的求助</div>
          <div class="care-head-r"><img src="../assets/image/down@1x.png" alt=""></div>
        </div>
        <div class="sq-dynamic">
          <div class="dynamic-head">
            <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
            <div class="dynamic-head-r">
              <h2>Rena</h2>
              <p>2-23</p>
            </div>
          </div>
          <div class="dynamic-content">
            <div class="con-font">
              <div class="show-msg"><img src="../assets/image/foot2x.png" alt="">已走失<span>23</span>天</div>
              王阿姨 女 72岁
            </div>
            <div class="photo">
              <img src="../assets/image/pada.png" alt="">
              <img src="../assets/image/pada.png" alt="">
            </div>
            <div class="map"><img src="../assets/image/map.png" alt="">上海市闵行区春申城</div>
            <div class="con-footer">
              <div class="dy-share"><img src="../assets/image/resend.png" alt=""><span>0</span></div>
              <div class="dy-msg2"><img src="../assets/image/msg.png" alt=""><span>34</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="look">被你看光光啦~</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "care",
    data(){
      return{
        isUser:true,
        isCare:true,
        addAttend:true
      }
    },
    methods:{
      shut(){
        this.isUser=false
      },
      addControle() {
        this.addAttend = !this.addAttend
      }
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: #F8F8F8;
  }
  /*未关注部分*/
  .no-care-head{
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #999999;
  }
  .no-care-con{
    padding: 0 15px;
  }
  .no-care-title{
    height: 28px;
    line-height: 28px;
    font-size: 18px;
    color: #333333;
  }
  .no-care-container{
    box-sizing: border-box;
    width: 100%;
  }
  .no-care-item{
    margin-top: 15px;
    width: 32%;
    text-align: center;
    float: left;
    margin-right: 1.2%;
  }
 .no-care-item .item-head{
    height: 50px;
  }
 .no-care-item .item-head img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
 .no-care-item .item-name{
    margin-top: 5px;
    color:#999999;
    font-size: 12px;
  }
 .no-care-item .item-fans{
    font-size: 12px;
    line-height: 18px;
    color: #333333;
  }
 .no-care-item .item-fans .fans-num{
    margin-right: 6px;
  }
 .no-care-item  .item-care{
    width: 70px;
    height: 28px;
    margin-top: 6px;
    display: inline-block;
    text-align: center;
    border-radius: 14px;
    font-size: 15px;
    line-height: 28px;
    color: #FFFFFF;
    background: #FF7272;
  }
  .bg {
    background: #ffffff;
  }
  .sq-dynamic{
    padding: 12px 15px 0 15px;
    margin-bottom: 8px;
  }
  .dynamic-head {
    display: flex;
    justify-content: flex-start;
  }

  .dynamic-head-l {
    position: relative;
    width: 40px;
    height: 40px;
    padding-right: 15px;
  }

  .dynamic-head-l img {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .dynamic-head-r h2 {
    font-size: 16px;
    line-height: 23px;
    color: #333333;
  }
  .dynamic-head-r p {
    font-size: 12px;
    line-height: 17px;
    color: #999999;
  }
  .photo {
    width: 100%;
    text-align: center;
    overflow: hidden;
  }
  .con-font {
    padding:8px 0 8px 0;
    font-size: 15px;
    line-height: 21px;
    color: #444444;
  }
  .photo .pho-container {
    width: 32.15%;
    height: 114px;
    float: left;
    padding: 0 5px 5px 0;
  }
  .photo img:nth-child(3n+3) {
    padding-right: 0;
  }
  .con-footer {
    position: relative;
    height: 45px;
    margin: 5px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .dy-share {
    margin-left:18%;
  }
  .dy-zan {
    margin-right:36px;
  }
  .dy-share img {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right: 6px;
  }
  .dy-share span {
    display: inline-block;
    font-size: 14px;
    line-height: 45px;
    color: #999999;
  }
  .dy-msg img {
    width: 18px;
    height: 14px;
    vertical-align: middle;
    margin-right: 6px;
  }
  .dy-msg span {
    display: inline-block;
    font-size: 14px;
    line-height: 45px;
    color: #999999;
  }
  .dy-zan span{
    display: inline-block;
    font-size: 14px;
    line-height: 45px;
    color: #999999;
  }
  .dy-zan img {
    width: 15px;
    height: 14px;
    vertical-align: middle;
    margin-right: 6px;
  }
  /*电影*/
  .mov {
    width: 100%;
    height: 161px;
    background: gray;
    font-size: 26px;
    line-height: 161px;
  }
.active-user{
  padding: 12px 15px 0 15px;
  margin-bottom: 8px;
}
.active-head{
  display: flex;
  justify-content: space-between;
}
.active-head-l{
  font-size: 12px;
  line-height: 17px;
  color: #F5A623;
}
.active-head-r{
  font-size: 12px;
  line-height: 17px;
  color: #999999;
}
.active-con{
  box-sizing: border-box;
  width: 100%;
  position: relative;
}
.box-container{
  box-sizing: border-box;
  width: 100%;
  padding: 13px 0 15px 0;
  display: -webkit-box;
  overflow-x: auto;
  /*适应苹果*/
  -webkit-overflow-scrolling: touch;
}
.box-container::-webkit-scrollbar {
  display: none;
}
.box-item{
  width: 30%;
  text-align: center;
  margin-right: 10px;
}
.box-item .item-head{
  height: 50px;
}
.box-item .item-head img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.box-item .item-name{
  margin-top: 5px;
  color:#999999;
  font-size: 12px;
}
.box-item .item-fans{
  font-size: 12px;
  line-height: 18px;
  color: #333333;
}
.box-item .item-fans .fans-num{
  margin-right: 6px;
}
.box-item .item-care{
  width: 70px;
  height: 28px;
  margin-top: 6px;
  display: inline-block;
  text-align: center;
  border-radius: 14px;
  font-size: 15px;
  line-height: 28px;
  color: #FFFFFF;
  background: #FF7272;
}
  .box-item .item-no-care{
    width: 70px;
    height: 26px;
    margin-top: 6px;
    display: inline-block;
    text-align: center;
    border-radius: 14px;
    font-size: 15px;
    line-height: 26px;
    color: #FF7272;
    border: 1px solid #FF7272;
  }
.box-container .change{
  position: absolute;
  right: 0;
  top: 70px;
  width: 12px;
  height: 10px;
  opacity: 0.8;
}
.care-head{
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 33px;
  font-size: 14px;
  line-height: 33px;
  color: #999999;
  margin: 0 15px;
}
.care-head::after{
  content:"";
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: 1px solid #E7E7E7;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.care-head-l img{
  width: 14px;
  height: 13px;
  margin-right: 10px;
}
.care-head-r img{
  width: 11px;
  height: 7px;
  margin-top: 11px;
}
.con-font .show-msg{
  height: 21px;
  font-size: 14px;
  line-height: 21px;
  color: #72BAFE;
}
.con-font .show-msg img{
  width: 18px;
  height: 18px;
  vertical-align: top;
  margin-right: 6px;
}
.map{
  height: 22px;
  margin:10px 0 15px 0;
  font-size: 12px;
  line-height: 22px;
  color: #576B95;
}
.map img{
  width: 20px;
  height: 22px;
  margin-right: 3px;
  vertical-align: top;
}
.dy-msg2{
  margin-right: 18%;
}
.dy-msg2 img{
    width: 18px;
    height: 14px;
    vertical-align: middle;
    margin-right: 6px;
  }
.dy-msg2 span{
  display: inline-block;
  font-size: 14px;
  line-height: 45px;
  color: #999999;
}
.look{
  height: 52px;
  text-align: center;
  font-size: 12px;
  line-height: 52px;
  color: #CCCCCC;
}
</style>
