<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @btnClick="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="price">合计:{{ totalPrice }}</div>
    <div class="caculate" @click="calcClick">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartButtomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return item.price * item.count + preValue;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll)
        this.cartList.forEach((item) => (item.checked = false));
      else this.cartList.forEach((item) => (item.checked = true));
    },
    calcClick() {
      if (!this.$store.state.cartList.find((item) => item.checked))
        this.$toast.show("请选择购买的商品", 2000);
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
  text-align: center;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.caculate {
  width: 90px;
  text-align: center;
  background-color: red;
  color: #fff;
}
</style>