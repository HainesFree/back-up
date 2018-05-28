<template>
  <transition name='fade'>
    <div class="alert">
      <div class="wrap">
        <div class="head">{{title}}</div>
        <div class="content">
          <slot>
            <p>{{message}}</p>
          </slot>
        </div>
        <div class="foot">
          <div class="btn">
            <div class="btn-base" @click="sure">确定</div>
            <div class="btn-warn" @click="cancel">取消</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'alert',
    data() {
      return {};
    },
    props: ['title', 'message'],
    methods: {
      cancel() {
        if (this.cancelBtn) {
          this.cancelBtn.apply(this.context);
        }
        this.close();
        this.$emit('cancel')
      },
      sure() {
        if (this.sureBtn) {
          this.sureBtn.apply(this.context);
        }
        this.close();
        this.$emit('sure')
      },
      show() {
        this.showAlert = true;
      },
      close() {
        this.showAlert = false;
      },
    },
  };
</script>
<style scoped>
  .alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #808080;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    transition: all .5s ease-in-out;
  }

  .wrap {
    position: absolute;
    z-index: 1002;
    width: 81.6%;
    height: 153px;
    background: rgba(255, 255, 255, 1);
    left: 50%;
    top: 140px;
    transform: translate(-50%, 0%);
    border-radius: 4px;
  }

  .head {
    text-align: center;
    font: 700 16px/56px PingFang-SC;
    color: #333333;
  }

  .content {
    text-align: center;
    font: 14px PingFang-SC;
    color: #333333;
  }

  .btn-base {
    height: 52px;
    flex: 1;
    text-align: center;
    border-right: 1px solid #C6C6C6;
  }

  .btn-warn {
    height: 52px;
    flex: 1;
    text-align: center;
    color: #F8494C;
  }

  .btn {
    width: 100%;
    margin-top: 25px;
    display: flex;
    border-top: 1px solid #C6C6C6;
    font: 700 16px/52px PingFang-SC;
    color: #333333;
  }
</style>
