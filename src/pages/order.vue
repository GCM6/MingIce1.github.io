<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :SelectData="products" @select="productChange"></v-selection>
      </div>
      开始日期：
      <div class="order-list-option">

        <DatePicker @on-change="getStartDate"></DatePicker>
      </div>
      结束日期：
      <div class="order-list-option">

        <DatePicker @on-change="getEndDate"></DatePicker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <!-- 遍历表头 -->
        <tr>
          <th v-for="(items, index) in tableHeads" :key="index" @click="changeOrderType(items)" :class="{active:items.active}">{{ items.label }}
          </th>
        </tr>
        <!-- 遍历后端传过来的数据 -->
        <tr v-for="(item, index) in tableData" :key="index">
          <td v-for="(items, index) in tableHeads" :key="index">{{ item[items.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VSelection from './detalis/dcomponents/Selectdown'
import DatePicker from './detalis/dcomponents/DatePicker'
import VDatePicker from 'vue-date-picker'
import _ from 'lodash'
export default {
  name: 'order',
  components: {
    VSelection,
    DatePicker,
    VDatePicker
  },
  data () {
    return {
      query: '',
      productId: 1,
      startDate: '',
      endDate: '',
      products: [
        {
          name: '开源产品',
          value: 1
        },
        {
          name: '品牌产品',
          value: 2
        },
        {
          name: '特色产品',
          value: 3
        },
        {
          name: '学生特惠',
          value: 4
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      currentOrder: 'asc',
      tableData: []
    }
  },
  watch: {
    query () {
      console.log('change')
      this.getList()
    }
  },
  methods: {
    productChange (obj) {
      console.log(obj)
      this.productId = obj
      this.getList()
    },
    getStartDate (date) {
      /* 将子组件传过来的数据赋值到startDate */
      this.startDate = date
      console.log(date)
      this.getList()
    },
    getEndDate (date) {
      this.endDate = date
      this.getList()
    },
    getList () {
      /*  约定好的字段内容 */
      let reqParams = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      }
      /* 请求后端返回的数据然后遍历到Table */
      this.$axios.post('/api/getOrderList', reqParams)
        .then((res) => {
          this.tableData = res.data.list
        }, (err) => {
          console.log(err)
        })
    },
    changeOrderType (headItem) {
      this.tableHeads.map((item) => {
        item.active = false
        return item
      })
      headItem.active = true
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      } else if (this.currentOrder === 'desc') {
        this.currentOrder = 'asc'
      }
      this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style scoped>
  .order-wrap {
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
  }
  .order-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .order-query {
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    outline: none;
    text-indent: 10px;
  }
  .order-list-option {
    display: inline-block;
    padding-left: 15px;
  }
  .order-list-option:first-child {
    padding-left: 0;
  }
  .order-list-table {
    margin-top: 20px;
  }
  .order-list-table table {
    width: 100%;
    background: #fff;
  }
  .order-list-table td,
  .order-list-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0;
  }
  .order-list-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
    cursor: pointer;
  }
  .order-list-table th.active {
    background: #35495e;
  }
</style>
