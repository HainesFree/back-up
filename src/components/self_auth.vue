<template>
    <div class="container">
      <div class="bg">
        <div class="cell">
          <div class="cell-l">负责人</div>
          <div class="cell-r"><input type="text" placeholder="请输入负责人姓名" v-model.trim="name" @blur="regName"></div>
        </div>
        <div class="cell">
          <div class="cell-l">负责人电话</div>
          <div class="cell-r"><input type="text" placeholder="请输入负责人电话" v-model.trim="phonenum" @blur="regphoneNum"></div>
        </div>
        <div class="cell">
          <div class="cell-l">身份证号码</div>
          <div class="cell-r"><input type="text" placeholder="请输入身份证号" v-model.trim="idnum" @blur="regidNum"></div>
        </div>
        <div class="id-num">
          <div class="id-title">负责人身份证</div>
          <!--<div class="id-up"><img src="../assets/image/add-img.png" alt=""><p>（正面）</p></div>-->
          <!--<div class="id-up"><img src="../assets/image/add-img.png" alt=""><p>（反面）</p></div>-->
          <div class="id-up">
            <div class="weui-uploader__bd" @click="upload" id="uploader">
              <ul class="weui-uploader__files" id="uploaderCustomFile1"></ul>
              <div class="weui-uploader__input-box"> <input id="uploaderCustomInput1" class="weui-uploader__input" type="file" accept="image/*" multiple="">
              </div>
            </div>
            <p>（正面）</p>
          </div>
          <div class="id-up">
            <div class="weui-uploader__bd" @click="upload">
              <ul class="weui-uploader__files" id="uploaderCustomFiles"></ul>
              <div class="weui-uploader__input-box"><input id="uploaderCustomInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
              </div>
            </div>
            <p>（反面）</p>
          </div>
        </div>
        <!--相关资质证书-->
        <div class="certificate">
          <div class="certificate-title">相关资质证书</div>
          <!--<div class="certificate-img"><img src="../assets/image/add-bimg.png" alt=""></div>-->
          <div class="certificate-img">
            <div class="id-up">
              <div class="weui-uploader__bd" @click="upload">
                <ul class="weui-uploader__files" id="uploaderCustomFiles3"></ul>
                <div class="weui-uploader__input-box input-bg"><input id="uploaderCustomInput3" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-t"><span :class="{bg1:chose1,bg2:chose2}" @click="changeBg"></span>《钦家求助平台免责声明》</div>
        <div class="notice-con">注：我们将在3个工作日内告知您申请结果，届时请注意查看哦~</div>
      </div>
      <div class="btn-wap">
        <div class="btn">确认提交</div>
      </div>
    </div>
</template>

<script>
  import weui from  "../../static/js/weui.min.js"
  import  "../../static/css/weui.css"
    export default {
        name: "self_auth",
        data(){
          return{
            phonenum:"",
            idnum:"",
            name:"",
            chose1:true,
            chose2:false
          }
        },
        methods:{
          regphoneNum(){
            let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.phonenum)) {
              weui.toast('手机号格式不正确',2000);
              return false;
            } else {
              return true;
            }
          },
          regidNum(){
            let myreg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
            if (!myreg.test(this.idnum)) {
              weui.toast('身份证格式不正确',2000);
              return false;
            } else {
              return true;
            }
          },
          regName(){
            let myreg = /^[\u4e00-\u9fa5]{2,5}$/;
            if (!myreg.test(this.name)) {
              weui.toast('请输入2~5位中文字符',2000);
              return false;
            } else {
              return true;
            }
          },
          changeBg(){
            this.chose1=!this.chose1;
            this.chose2=!this.chose2
          },
          upload(){
            var uploadCount = 0;
            weui.uploader('#uploader', {
              url: 'http://localhost:8081',
              auto: true,
              type: 'file',
              fileVal: 'fileVal',
              compress: {
                width: 1600,
                height: 1600,
                quality: .8
              },
              onBeforeQueued: function(files) {
                // `this` 是轮询到的文件, `files` 是所有文件

                if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
                  weui.alert('请上传图片');
                  return false; // 阻止文件添加
                }
                if(this.size > 10 * 1024 * 1024){
                  weui.alert('请上传不超过10M的图片');
                  return false;
                }
                if (files.length > 5) { // 防止一下子选择过多文件
                  weui.alert('最多只能上传5张图片，请重新选择');
                  return false;
                }
                if (uploadCount + 1 > 5) {
                  weui.alert('最多只能上传5张图片');
                  return false;
                }

                ++uploadCount;

                // return true; // 阻止默认行为，不插入预览图的框架
              },
              onQueued: function(){
                console.log(this);

                // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
                // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64

                // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
                // this.stop(); // 中断上传

                // return true; // 阻止默认行为，不显示预览图的图像
              },
              onBeforeSend: function(data, headers){
                console.log(this, data, headers);
                // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
                // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

                // return false; // 阻止文件上传
              },
              onError: function(err){
                console.log(this, err);
                // return true; // 阻止默认行为，不使用默认的失败态
              }
            });
          }

        }
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
  padding: 0 0 0 15px;
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
  height: 232px;
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
.id-num .id-up{
  width: 62px;
  height: 100px;
  margin-top: 8px;
}
.certificate-img .id-up{
  padding-right: 15px;
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
  height: 100px;
}
.notice{
  padding: 10px 15px 0;
}
.notice-t{
  font-size:12px;
  line-height: 16px;
  color: #576B95;
}
.notice-t span{
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 2px;
  vertical-align: top;
  border-radius: 50%;
}
.bg1{
  background: url("../assets/image/correct.png");
  background-size:16px 16px;
}
.bg2{
  background: url("../assets/image/correct2.png");
  background-size:16px 16px;
}
.notice-con{
  margin-top: 40px;
  text-align: center  ;
  padding: 0 50px 0 50px;
  color: #F8494C;
}
.btn-wap{
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
.btn:active{
  background: #F55E5E;
}
.input-bg{
  width: 100%;
  height: 100px;
  background: url("../assets/image/add-bimg.png");
  background-size:100% 100px ;
}
.input-bg:before, .input-bg:after {
  width: 0;
  height: 0;
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
<style>
  .weui-icon_toast{
    margin-top: 42px;
  }
  .weui-icon-success-no-circle:before{
    display: none;
  }
  .weui-toast{
    width: 40%;
  }
  .weui-uploader__input-box{
    width: 62px;
    height: 62px;
    /*margin-top: 5px;*/
    border: 1px dashed #d9d9d9;
  }
  .weui-uploader__bd{
    overflow: visible;
  }
</style>
