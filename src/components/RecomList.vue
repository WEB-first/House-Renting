<template>
<div infinite-scroll-distance="20" v-infinite-scroll="loadmore" infinite-scroll-disabled="busy" :infinite-scroll-immediate-check="true">
  <div class="relist"  v-for="(item,i) in houses" :key="i">
    <router-link to="/">
        <div class="list-top">
          <div class="left">
             <img src="../../public/image/house/1.jpg" alt="">
          </div>
          <div class="right">
            <p><span>{{item.h_xiaoqu_name}}</span><span>{{item.h_huxing}}</span><span>120㎡</span></p>
            <p><span>{{item.h_price}}元/月</span><span>{{item.h_position}}</span></p>
          </div>
        </div>
        <div class="list-bot">
          <p>{{item.h_zhoubian}}</p>
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
  <div class="loadbot">人家是有底线的......</div>
</div>
</template>
<style>
  .loadbot{
    line-height: 40px;
    text-align: center;
    color: #ccc;
    font-size: 12px;
    margin-top: -20px;
    background: #fff;
  }
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
    height: 180px;
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
  props:['navactive'],
  data(){
    return{
      houses:[],
      busy:false,
      page:1
    }
  },
  methods:{
    loadHouseList(cdhclass,page){
      //请求前弹窗开启
      this.$indicator.open();
      this.axios.get(`/details?cid=${cdhclass}&${page}`).then(res=>{
        // console.log(res)
        this.houses=res.data.results
        //请求完数据弹窗关闭
        this.$indicator.close();
      })
    },
    //无限滚动
    loadmore(){
      this.busy=true;
      this.page++;
      // console.log(`加载下一页，page:${this.page}`);
      let c=this.navactive;
      let p=this.page;
      this.axios.get(`/details?cid=${c}&page=${p}`).then(res=>{
          //  console.log(res.data.results) 
           this.houses=this.houses.concat(res.data.results);
           this.busy=false;     
      })
    }
  },
  mounted(){
     //房屋列表数据
     this.loadHouseList(1)  
  },
  watch:{
    navactive(cdhclass){
      this.houses=[];
      this.page=1;
      this.loadHouseList(cdhclass)  
    }
  }
}
</script>