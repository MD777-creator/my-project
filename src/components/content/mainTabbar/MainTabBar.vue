<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <template #item-icon>
        <img src="@/assets/img/tabBar/home.svg" alt="" />
      </template>
      <template #item-icon-activate>
        <img src="@/assets/img/tabBar/home_active.svg" alt="" />
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deeppink">
      <template #item-icon>
        <img src="@/assets/img/tabBar/category.svg" alt="" />
      </template>
      <template #item-icon-activate>
        <img src="@/assets/img/tabBar/category_active.svg" alt="" />
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deeppink">
      <template #item-icon>
        <img src="@/assets/img/tabBar/shopcart.svg" alt="" />
      </template>
      <template #item-icon-activate>
        <img src="@/assets/img/tabBar/shopcart_active.svg" alt="" />
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
      <template #item-icon>
        <img src="@/assets/img/tabBar/profile.svg" alt="" />
      </template>
      <template #item-icon-activate>
        <img src="@/assets/img/tabBar/profile_active.svg" alt="" />
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabBar/TabBar.vue";
import TabBarItem from "@/components/common/tabBar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>