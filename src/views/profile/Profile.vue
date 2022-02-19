<template>
  <div id="profile">
    <nav-bar>
      <template #center>
        <div>优衣商城</div>
      </template>
    </nav-bar>
    <user-info />
    <section class="account">
      <div class="account-item">
        <div class="number"><span class="balance">0.00</span>元</div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>个</div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>分</div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <main-list />
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import UserInfo from "./ChildComps/UserInfo.vue";
import MainList from "./ChildComps/MainList.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    MainList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}
.nav-bar {
  background: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
.account {
  display: flex;
}
.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}
.account-item:last-of-type {
  margin-right: 0;
}
.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}
.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.account-info {
  margin-top: 6px;
}
.order-list,
.service-list {
  margin-top: 12px;
}
</style>