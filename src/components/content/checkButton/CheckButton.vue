<template>
  <div class="check-button" :class="{ check: isChecked }" @click="btnClick">
    <img src="../../../assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    btnClick() {
      this.$emit("btnClick");
    },
  },
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check-button img {
  margin-top: 1px;
}
.check {
  border-color: red;
  background-color: red;
}
</style>