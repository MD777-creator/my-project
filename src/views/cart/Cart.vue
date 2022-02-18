<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template #center>
        <div>购物车({{ cartLength }})</div>
      </template>
    </nav-bar>
    <cart-list />
    <cart-buttom-bar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../../components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue";
import CartButtomBar from "./childComps/CartButtomBar.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartButtomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>