<template>
  <div>
    <!--<MyDialog></MyDialog>-->
    <div>
      <Headers></Headers>
    </div>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product, index) in products" :key="index">
          <h3>{{ product.category }}</h3>
          <ul>
            <li v-for="(lists, index) in product.list" :key="index "><!--注意product.list的product是上面的v-for-->
              <a target="_blank" :href="lists.url">{{ lists.name }}</a>
              <span v-if="lists.hot" class="hot-tag">HOT</span><!--判断是否为hot-->
            </li>
          </ul>
          <div v-if="index%2 ==0" class="hr"></div><!--判断将奇数的给隐藏掉-->
        </div>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="(item, index) in news" :key="index">
            <a target="_blank" :href="item.url">{{ item.subject.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="swiper-c">
        <swiper :options="swiperOption">
          <swiper-slide>
            <a target="_blank" href="http://www.mlvi.cc">
            <img class="swiperimg" src="../assets/1jpg.jpg">
            </a>
          </swiper-slide>
          <swiper-slide>
            <a target="_blank" href="http://www.mlvi.cc">
            <img class="swiperimg" src="../assets/2.jpg">
            </a>
          </swiper-slide>
          <swiper-slide>
            <a target="_blank" href="http://www.mlvi.cc">
            <img class="swiperimg" src="../assets/3.jpg">
            </a>
          </swiper-slide>
          <swiper-slide>
            <a target="_blank" href="http://www.mlvi.cc">
            <img class="swiperimg" src="../assets/4.jpg">
            </a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!--承载四个容器-->
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item1, index) in bordlist" :key="index"  :class="['index-board-'+ item1.tag,{'line-last' : index%2 !==0}]">
          <div class="index-board-item-inner">
            <h2>{{ item1.title }}</h2>
            <p>{{ item1.desc }}</p>
            <div class="index-board-button">
              <router-link :to="{path:'/details/'+item1.tag}" class="button" exact>立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div>
      <Footers></Footers>
    </div>
  </div>
</template>
<script>
export default {
  name: 'layout',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      bordlist: [
        {
          title: '开源产品',
          desc: '开源产品是一款不涉及到专利源码开放的产品',
          tag: 'cat'
        },
        {
          title: '品牌产品',
          desc: '品牌产品是最具有优势的一款完美产品',
          tag: 'make'
        },
        {
          title: '特色产品',
          desc: '特色产品是品牌产品中的佼佼者',
          tag: 'trait'
        },
        {
          title: '学生特惠',
          desc: '学生产品是只开放于学生的一款产品，优惠学生',
          tag: 'student'
        }
      ],
      news: [],
      products: [
        {
          category: '手机应用',
          list: [
            {
              name: '金山毒霸',
              url: 'http://www.duba.net/',
              hot: false
            },
            {
              name: '360安全卫生',
              url: 'https://www.360.cn/',
              hot: true
            },
            {
              name: '腾讯管家',
              url: 'https://guanjia.qq.com/',
              hot: true
            }
          ]
        },
        {
          category: '娱乐软件',
          list: [
            {
              name: 'WeGame',
              url: 'https://wegame.com/',
              hot: true
            },
            {
              name: '迅雷影音',
              url: 'http://www.xunlei.com/'
            },
            {
              name: '酷狗音乐',
              url: 'http://www.kugou.com/',
              hot: true
            }
          ]
        }
      ]
    }
  },
  created() {
    let url = this.HOST + '/movie/us_box'
    console.log(url)
    this.$axios.post(url, {
      params: {
        subjects: 10,
        type: 'top'
      }
    })
      .then(res => {
        this.news = res.data.subjects
        console.log(res.data.subjects)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    height: 350px;
  }
  .index-left-block .hr {/* 黑线 */
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
    margin-top: 15px;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-trait .index-board-item-inner {
    background: url("../assets/trait.jpg");
  }
  .index-board-make .index-board-item-inner {
    background: url("../assets/make.jpg");
  }
  .index-board-cat .index-board-item-inner {
    background: url("../assets/cat.jpg");
    overflow: hidden;
  }
  .index-board-student .index-board-item-inner {
    background: url("../assets/st.jpg");
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 350px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display:inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .swiperimg {
    width: 900px;
    height:350px ;
  }
  .swiper-c {
    margin-top: 16px;
  }
  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>
