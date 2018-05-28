<template>
  <div class="container">
    <!--社群头像与社群简介-->
    <div class="bg">
      <div class="grp_name">
        <div class="grp-name-l">社群名称</div>
        <div class="grp-name-r">
          <input type="text" placeholder="请输入社群名称" class="name-inp">
          <span class="name-btn">检测</span>
        </div>
      </div>
      <div class="grp-head">
        <div class="grp-title">社群头像</div>
        <div class="grp-add"><img src="../assets/image/add-img.png" alt=""></div>
      </div>
      <div class="grp-introduce">
        <div class="intro-title">社群简介</div>
        <div class="intro-con">
          <textarea placeholder="请输入社群简介" class="intro-text"></textarea>
        </div>
        <span class="font-num">0/200</span>
      </div>

      <div class="grp_area"></div>
    </div>
    <!--社群区域-类别-封面-->
    <div class="bg">
      <div class="grp-item">
        <div class="item-l">社群区域</div>
        <div class="item-r">
          <span>请选择社群区域</span><img src="../assets/image/right.png" alt="">
        </div>
      </div>
      <div class="grp-item">
        <div class="item-l">社群类别</div>
        <div class="item-r">
          <span>请选择社群类别</span><img src="../assets/image/right.png" alt="">
        </div>
      </div>
      <div class="grp-item">
        <div class="item-l">社群封面</div>
        <div class="item-r">
          <span>请选择社群区域</span><img src="../assets/image/right.png" alt="">
        </div>
      </div>
    </div>
    <!--确认创建-->
    <div class="confirm-btn">确认创建</div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f8f8f8;
  }
  .bg {
    background: #FFFFFF;
    padding: 0 0 0 12px;
  }
  .grp_name {
    position: relative;
    height: 44px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .grp_name::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #D6D6D6;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .grp-name-l {
    font: 16px/44px PingFangSC-Regular;
    color: #333333;
  }
  .grp-name-r {
    height: 26px;
    margin: 11px 12px 0 0;
  }
  .grp-name-r input {
    width: 90px;
    font: 12px PingFangSC-Regular;
    border: none;
    outline-style: none;
    color: #999999;
  }
  .grp-name-r span {
    width: 52px;
    height: 26px;
    font: 12px/26px PingFangSC-Regular;
    text-align: center;
    display: inline-block;
    color: #ffffff;
    background: #FE7272;
    border-radius: 3px;
  }
  .grp-head {
    position: relative;
    height: 90px;
    display: flex;
    justify-content: space-between;
  }
  .grp-head::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #D6D6D6;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .grp-head .grp-title {
    font: 16px/90px PingFangSC-Regular;
    color: #333333;
  }
  .grp-head .grp-add {
    width: 63px;
    height: 63px;
    margin: 15px 12px 0 0;
  }
  .grp-head .grp-add img {
    width: 63px;
    height: 63px;
  }
  .grp-introduce {
    position: relative;
    /*width: 100%;*/
    height: 125px;
  }
  .grp-introduce::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #D6D6D6;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .intro-title {
    font: 16px/38px PingFangSC-Regular;
    color: #333333;
  }
  .intro-con .intro-text {
    width: 100%;
    padding-right: 12px;
    font: 12px PingFangSC-Regular;
    color: #AEAEAE;
    border: none;
    outline-style: none;
    resize: none;
  }
  .font-num {
    position: absolute;
    right: 12px;
    bottom: 7px;
    font: 12px PingFangSC-Regular;
    color: #999999;
  }
  .grp-item {
    position: relative;
    height: 42px;
    display: flex;
    justify-content: space-between;
  }
  .grp-item::after {
    content: " ";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #D6D6D6;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }
  .grp-item:last-child::after {
    border-bottom: 0 solid #D6D6D6;
  }
  .item-l {
    font: 16px/42px PingFangSC-Regular;
    color: #333333;
  }
  .item-r {
    position: relative;
    margin-right: 12px;
  }
  .item-r span {
    display: inline-block;
    height: 42px;
    margin-right: 14px;
    font: 12px/42px PingFangSC-Regular;
    color: #999999;
  }
  .item-r img {
    position: absolute;
    right: 0;
    top: 16px;
    width: 7px;
    height: 12px;
  }
  .confirm-btn {
    height: 50px;
    margin: 20px 12px 0 12px;
    border-radius: 5px;
    background: #FE7272;
    text-align: center;
    font: 16px/50px PingFangSC;
    color: #FFFFFF;
  }
  .confirm-btn:active{
    background: #FE8989;
  }
</style>
