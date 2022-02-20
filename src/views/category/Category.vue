<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template #center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
      <scroll id="tab-content" :data="[categoryData]" ref="scroll">
        <div>
          <tab-content-category :subcategories="showSubcategory" />
          <tab-control
            :titles="['综合', '新品', '销量']"
            @tabClick="tabClick"
          />
          <tab-content-detail :category-detail="showCategoryDetail" />
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "../../components/common/scroll/Scroll.vue";
import NavBar from "../../components/common/navbar/NavBar.vue";
import TabMenu from "./ChildComps/TabMenu.vue";
import TabContentCategory from "./ChildComps/TabContentCategory.vue";
import TabControl from "../../components/content/TabControl/TabControl.vue";
import TabContentDetail from "./ChildComps/TabContentDetail.vue";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "../../network/category";
import { POP, NEW, SELL } from "../../common/const";
import { tabControlMixin, itemListenerMixin } from "../../common/mixin";
export default {
  name: "Category",
  components: {
    Scroll,
    NavBar,
    TabMenu,
    TabContentCategory,
    TabControl,
    TabContentDetail,
  },
  mixins: [tabControlMixin, itemListenerMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    };
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  created() {
    this._getCategory();
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        this.categories = res.data.category.list;
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail(POP);
        this._getCategoryDetail(SELL);
        this._getCategoryDetail(NEW);
      });
    },
    _getCategoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    selectItem(index) {
      this._getSubcategories(index);
    },
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
  display: flex;
}
#tab-content {
  height: 100%;
  flex: 1;
  overflow: hidden;
}
</style>