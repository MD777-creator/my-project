<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <div class="privateImage-svg left">
          <img src="@/assets/img/profile/user.svg" alt="" />
        </div>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <img src="@/assets/img/profile/phone.svg" />
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <div class="arrow-svg right">
        <img src="@/assets/img/profile/turnRight.svg" alt="" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
#user-info {
  background-color: var(--color-tint);
  padding: 15px;
  margin-top: -5px;
}
#user-info .privateImage-svg img {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
  border: 3px solid #fff;
}
.left {
  float: left;
}
#user-info .arrow-svg img {
  width: 22px;
  height: 22px;
  margin-top: 18px;
}
#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}
#user-info .login-info .phone {
  position: relative;
  font-size: 13px;
  margin-top: 5px;
  margin-left: 15px;
  font-weight: 300;
}
#user-info .login-info .phone img {
  position: absolute;
  width: 20px;
  height: 20px;
  left: -20px;
  top: -4px;
}
</style>