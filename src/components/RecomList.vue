<template>
  <div class="relist">
    <router-link to="/">
        <div class="list-top">
          <div class="left">
             <img src="../../public/image/house/1.jpg" alt="">
          </div>
          <div class="right">
            <p><span>高科花园一期</span><span>3室1厅</span><span>120㎡</span></p>
            <p><span>2300元/月</span><span>新城 东五路</span></p>
          </div>
        </div>
        <div class="list-bot">
          <p>新益大厦 五路口地铁站 万达广场 明乐园 中山门 金融街</p>
          <img src="../../public/image/house/1.jpg"/>
          <div>
            <img src="../../public/image/avatar/0.jpg" alt='客服头像'/>
            <span>然然</span>
            <span class="score">3.8分</span>
            <span>陕西一人一家公寓管理有限公司</span>
            <span class="s_img"><i class="iconfont icon-lujingbeifen3-copy"></i></span>
            <span class="s_img"><i class="iconfont icon-tubiao313-copy"></i></span>
          </div>
        </div>
    </router-link>
  </div>
</template>
<style>
  .relist .list-bot>div>.s_img i{
    color: #23CA92;
  }
  .relist .list-bot>div>.s_img{
    float: right;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: rgba(5, 255, 176, 0.15);;
    text-align: center;
    line-height: 24px;
    overflow: hidden;
    margin-left: 6px;
    margin-top: 2px;
  }
  .relist .list-bot>div>.score{
    margin:0 5px;
  }
  .relist .list-bot>div>img{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .relist .list-bot>div{
    background-color: #F8F8F8;
    padding:5px 10px;
    margin: 5px 0 10px;
    font-size: 12px!important;
    color: #000;
  }
  .relist .list-bot>img{
    width: 100%;
    height: 160px;
  }
  .relist .list-bot>p{
    color: #37383B;
    font-size: 14px;
    line-height: 34px;
  }
  .relist .list-top .right p:nth-child(2) span:nth-child(1){
    color: #FF4B37;
    font-weight: bold;
    font-size: 15px;
  }
  .relist .list-top .right p:nth-child(2){
    font-size:14px;
    color:#60636A;
  }
  .relist .list-top .right p:nth-child(1){
    font-size:15px;
    color: #000;
    margin-bottom: 10px;
  }
  .relist .list-top .right span{
    margin-right: 8px;
  }
  .relist .list-top .right{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .relist .list-top .left img{
    width: 100%;
    height: 100%;
  }
  .relist .list-top .left{
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 2px solid #22CA93;
    overflow: hidden;
  }
  .relist .list-top{
    display: flex;
  }
  .relist{
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
</style>
<script>
export default {
  name: 'RecomList',
}
</script>