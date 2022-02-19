<template>
  <list>
    <template #list1>
      <list-item>
        <template #icon-svg>
          <img src="@/assets/img/profile/message.svg" alt="" />
        </template>
        <template #icon-text>
          <div>我的消息</div>
        </template>
      </list-item>
      <list-item>
        <template #icon-svg>
          <img src="@/assets/img/profile/integral.svg" alt="" />
        </template>
        <template #icon-text>
          <div>积分商城</div>
        </template>
      </list-item>
      <list-item>
        <template #icon-svg>
          <img src="@/assets/img/profile/vip.svg" alt="" />
        </template>
        <template #icon-text>
          <div>会员卡</div>
        </template>
      </list-item>
    </template>
    <template #list2>
      <list-item>
        <template #icon-svg>
          <img src="@/assets/img/profile/cartshop.svg" alt="" />
        </template>
        <template #icon-text>
          <div>我的购物车</div>
        </template>
      </list-item>
      <list-item>
        <template #icon-svg>
          <img src="@/assets/img/profile/app.svg" alt="" />
        </template>
        <template #icon-text>
          <div>下载购物APP</div>
        </template>
      </list-item>
    </template>
  </list>
</template>

<script>
import List from "../ChildComps/list/List.vue";
import ListItem from "../ChildComps/list/ListItem.vue";
export default {
  name: "MainList",
  components: {
    List,
    ListItem,
  },
};
</script>

<style>
</style>