<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li @click="radioslist(index)" v-for="(item, index) in Radios" :key="index" :class="{'active':index == nowIndexs}">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'rados',
  data() {
    return {
      nowIndexs: 0
    }
  },
  props: {
    Radios: {
      type: Array,
      default: function () {
        return [
          {
            title: 'test',
            value: 1
          }
        ]
      }
    }
  },
  methods: {
    radioslist(index) {
      this.nowIndexs = index
      this.$emit('radioslist', this.Radios[index].value)
      this.$store.dispatch('updateOrder', ['radioslist', this.Radios[index].value])
    }
  }
}
</script>
<style scoped>
  .chooser-component {
    position: relative;/*绝对定位*/
    display: inline-block;/* 行内块元素 */
  }
  .chooser-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: white;
  }
</style>
