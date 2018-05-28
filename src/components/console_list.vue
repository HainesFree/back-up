<template>
    <div class="sq-dynamic">
      <div class="dynamic-head">

        <div class="left">
          <div class="dynamic-head-l"><img src="../assets/image/head.png" alt=""></div>
          <div class="dynamic-head-r">
            <h2>蓝天志愿协会</h2>
            <p>2018-2-23</p>
          </div>
        </div>

        <div class="right">待审核</div>


      </div>
    </div>

</template>

<script>
    export default {
        name: "console_list"
    }
</script>

<style scoped>
  .sq-dynamic{
    padding: 12px 15px 0 15px;
    margin-bottom: 8px;
  }
  .dynamic-head {
    display: flex;
    justify-content:space-bettween;
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
</style>
