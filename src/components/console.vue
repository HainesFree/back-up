<template>
  <div class="container">
    <div class="bg">
      <div class="cell">
        <div class="cell-l">负责人</div>
        <div class="cell-r">李明</div>
      </div>
      <div class="cell">
        <div class="cell-l">负责人电话</div>
        <div class="cell-r">13672181117</div>
      </div>
      <!--身份证号码-->
      <div class="cell">
        <div class="cell-l">身份证号码</div>
        <div class="cell-r">45217119851223</div>
      </div>
      <div class="id-num">
        <div class="id-title">负责人身份证</div>
        <div class="id-up"><img src="../assets/image/add-img.png" alt=""><p>（正面）</p></div>
        <div class="id-up"><img src="../assets/image/add-img.png" alt=""><p>（反面）</p></div>
      </div>
      <!--相关资质证书-->
      <div class="certificate">
        <div class="certificate-title">相关资质证书</div>
        <div class="certificate-img"><img src="../assets/image/add-bimg.png" alt=""></div>
      </div>
    </div>
    <div class="btn-wap">
      <div class="btn">拒绝通过</div>
      <div class="btn">确认通过</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "self_auth"
  }
</script>

<style scoped>
  .container{
    position: absolute;
    width: 100%;
    background: #F8F8F8;
  }
  .bg{
    background: #FFFFFF;
    padding: 0 15px;
    margin-top: 10px;
  }
  .cell{
    position: relative;
    height: 43px;
    display: flex;
    justify-content: space-between;
  }
  .cell::after{
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #D6D6D6;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .cell-l{
    font-size: 15px;
    line-height: 43px;
    color: #333333;
  }
  .cell-r{
    line-height: 43px;
  }
  .cell-r input{
    padding-right: 15px;
    text-align: right;
    outline-style: none;
    border: none;
    color: #999999;
    font-size: 15px;
  }
  .id-num{
    height: 222px;
    position: relative;
  }
  .id-num::after{
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #D6D6D6;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .id-title{
    margin-top: 10px;
    font-size:15px;
    color: #333333;
  }
  .id-num .id-up img{
    width: 62px;
    height: 62px;
    margin-top: 8px;
  }
  .id-num .id-up p{
    width: 61px;
    text-align: center;
    color: #66666666;
  }
  .certificate{
    height: 154px;
    padding-right: 15px;
  }
  .certificate-title{
    font-size:15px;
    color: #333333;
    margin: 12px 0 10px 0;
  }
  .certificate-img img{
    width: 100%;
    height: 100px;
  }
  .notice-t span{
    display: inline-block;
    width: 16px;
    height: 16px;
    color: #999999;
    border-radius: 50%;
    border: 1px solid #999999;
  }
  .btn-wap{
    display: flex;
    padding: 0 15px;
    margin-bottom: 18px;
  }
  .btn{
    width: 100%;
    height: 48px;
    line-height:48px;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 22px;
    background: #FE7272;
    color: #FFFFFF;
    text-align: center;
  }
  .btn:first-child{
    background: #CCCCCC;
    margin-right: 5px;
  }
  .btn:first-child:active{
    background: gainsboro;
  }
  .btn:active{
    background: #F55E5E;
  }
</style>
