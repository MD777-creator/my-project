<template>
  <div id="list-item">
    <div class="item">
      <slot name="icon-svg"></slot>
    </div>
    <div class="item icon-text">
      <slot name="icon-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#list-item {
  display: flex;
  padding: 5px 0;
  font-size: 16px;
  background-color: #fff;
}

#list-item .item {
  text-align: left;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
}
.item img {
  margin-top: 10px;
  width: 18px;
  height: 18px;
}
.icon-text {
  flex: 1;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
</style>