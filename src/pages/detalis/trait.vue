<template>
  <div class="heard-h">
    <div class="sales-board">
      <div class="sales-board-intro">
        <h2>流量分析</h2>
        <p>是指在获得网站的访问的量的基本数据的情况下，对有关数据进行统计、分析，
          从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题
          并为进一步修正或重新制度网络营销策略提供数据。当然这样的定义是站在网络营销管理的角度考虑的
        </p>
      </div>
      <div class="sales-board-form">
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            购买数量：
          </div>
          <div class="sales-board-line-right">
            <!-- 将子组件传递过来的数据使用内联处理器的方法，获取dom -->
            <keep-alive><Counts @countss="getInfo('countss', $event)" :max="counts.max" :min="counts.min"></Counts></keep-alive>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            产品类型：
          </div>
          <div class="sales-board-line-right">
            <!-- 将子组件传递过来的数据使用内联处理器的方法，获取dom -->
            <Selectdown @select="getInfo('select', $event)" :SelectData="DownMen"></Selectdown>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            有效时间：
          </div>
          <div class="sales-board-line-right">
            <!-- 将子组件传递过来的数据使用内联处理器的方法，获取dom -->
            <radios @radioslist="getInfo('radioslist', $event)" :Radios="Radioss"></radios>
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
            价钱：
          </div>
          <div class="sales-board-line-right">
            {{ getprice }}元
          </div>
        </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">
          </div>
          <div class="sales-board-line-right">
            <a  @click="labout" class="buy-dialog-btn">立即购买</a>
           <!-- <router-link to="/shopping"  class="buy-dialog-btn" tag="a">加入购物车</router-link>-->
          </div>
        </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>本产品是一款特色产品，在众多产品中最具特色的也是最多用户选择购买的产品</p>
        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了那些页面等，从所周知学生浏览各个网站
            的流量是不可忽视的
            主要的统计指标包括：</li>
          <li>用户在网站的停留时间：</li>
          <li>用户来源网站（也叫“引导网站”）</li>
          <li>用户所用的搜索引擎及其关键字</li>
          <li>在不同时段的学生用户访问量情况等。</li>
        </ul>
        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑的分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>夘用户所在地理区域分布状况等</li>
        </ul>
      </div>
    </div>
    <MyDialog :isShow="isShowDialog" @on-close="CloseMyslef">
      <p slot="header">购买详情</p>
      <table slot="main" class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ getOrders.countss }}</td>
          <td>{{ sel1 }}</td>
          <td>{{ rad2 }}</td>
          <td>{{ getprice }}</td>
        </tr>
      </table>
      <h3 slot="footer" class="buy-dialog-title">请选择银行或支付宝</h3>
      <div  slot="footer">
        <bank  @on-change="onChangeBanks"/>
      </div>
      <div slot="footerbtn" class="dialog-btn" @click="confirmBuy">确认购买</div>
    </MyDialog>
    <!-- 检查支付状态的dialog -->
    <my-dialog1 :isShows = "isShowCheckDialogs" @on-close="CloseMyslef">
      <p slot="main">请检查您的支付状态！</p>
      <div class="buy-dialog-btndialog" @click="checkStatus" slot="main">
        支付成功
      </div>
      <div class="buy-dialog-btndialog" @click="checkStatus" slot="main">
        支付失败
      </div>
    </my-dialog1>
  </div>
</template>
<script>
import Counts from './dcomponents/counts'
import Selectdown from './dcomponents/Selectdown'
import Radios from './dcomponents/Rados'
import Headers from '../../components/headers'
import Dialog from '../../components/dialog'
import Dialog1 from '../../components/dialog1'
import Bank from './dcomponents/banks'
export default {
  name: 'trait',
  data() {
    return {
      sel1: '',
      rad2: '',
      isShowDialog: false,
      isShowCheckDialogs: false,
      price: 0,
      /* 默认值 */
      countss: 1,
      select: 1,
      radioslist: 1,
      counts: {
        max: 10,
        min: 1
      },
      DownMen: [
        {
          name: '初级版',
          value: 1
        },
        {
          name: '中级版',
          value: 2
        },
        {
          name: '高级版',
          value: 3
        }
      ],
      Radioss: [
        {
          title: '1个月',
          value: 1
        },
        {
          title: '3个月',
          value: 2
        },
        {
          title: '半年',
          value: 3
        },
        {
          title: '年费',
          value: 4
        }
      ]
    }
  },
  components: {
    Headers,
    Counts,
    Selectdown,
    Radios,
    MyDialog: Dialog,
    Bank,
    MyDialog1: Dialog1
  },
  methods: {
    checkStatus() {
      /* this.$http.post('/api/checkOrder', {
        orderId: this.orderId
      })
        .then((res) => {
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        }, (err) => {
          console.log(err)
          this.$emit('on-close-check-dialog')
        }) */
      if (this.BankId !== 1 && this.BankId !== undefined) {
        /* 购买后重置选择的数量 */
        this.$store.dispatch('updateOrder', ['countss', 1])
        alert('支付成功')
        this.isShowCheckDialogs = false
      } else {
        alert('支付失败')
        this.isShowCheckDialogs = false
      }
    },
    onChangeBanks(bankobject) {
      this.BankId = bankobject.id
    },
    getInfo(key, value) {
      /* console.log(key, value)
      console.log(this) */
      /*
      * this：当前组件
      * this[key]表示当前的所有的值到存放在key中
      * */
      this[key] = value
      let readData = {
        'countss': this.countss, // 10元
        'select': this.select, // 10元
        'radioslist': this.radioslist // 20元
      }
      /* console.log(readData) */
      this.price = readData.countss * 10 + readData.select * 10 + readData.radioslist * 20
    },
    labout() {
      /* 打开弹窗 */
      this.isShowDialog = true
      if ( this.radioslist === 1) {
        this.rad2 = '1个月'
      } else if ( this.radioslist === 2) {
        this.rad2 = '3个月'
      } else if ( this.radioslist === 3) {
        this.rad2 = '半年'
      } else if ( this.radioslist === 4) {
        this.rad2 = '年费'
      }
      if ( this.select === 1) {
        this.sel1 = '初级版'
      } else if ( this.select === 2) {
        this.sel1 = '中级版'
      } else if ( this.select === 3) {
        this.sel1 = '高级版'
      }
    },
    CloseMyslef() {
      /* 关闭弹窗 */
      this.isShowDialog = false
      this.isShowCheckDialogs = false
    },
    confirmBuy() {
      this.isShowCheckDialogs = true
      this.isShowDialog = false
    }
  },
  computed: {
    getprice() {
      /* 将当前操作数据形成的总价传递到store仓库中 */
      this.$store.dispatch('updatePrice', this.countss * 10 + this.select * 10 + this.radioslist * 20)
      /* 将store仓库计算的数据返回 */
      return this.$store.getters.getPrice
    },
    getOrders() {
      return this.$store.getters.getOrder
    }
  }
}
</script>
<style scoped>
  .dialog-btn {
    width: 60px;
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    margin: 10px 390px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .heard-h {
    width: 1240px;
    height: 100%;
    word-wrap:break-word;
    word-break:break-all;
  }
  .buy-dialog-title {
    font-size: 16px;
    font-weight: bold;/* 定义粗体字符 */
  }
  .buy-dialog-btn {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .buy-dialog-btndialog {
    margin: -5px 10px;
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
  }
  .buy-dialog-table td, .buy-dialog-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
  }
  .buy-dialog-table th {
    background: #4fc08d;
    color: white;
    border: 1px solid #4fc08d;
  }
</style>
