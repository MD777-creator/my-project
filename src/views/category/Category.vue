<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template #center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import TabMenu from "./ChildComps/TabMenu.vue";
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
  },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    selectItem() {},
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>