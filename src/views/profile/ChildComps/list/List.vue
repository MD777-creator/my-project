<template>
  <div class="list">
    <div class="list1">
      <slot name="list1"></slot>
    </div>
    <div class="list2">
      <slot name="list2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style scoped>
.list1,
.list2 {
  margin-top: 10px;
}
</style>