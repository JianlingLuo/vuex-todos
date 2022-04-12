<template>
  <div id="app">
    <a-input placeholder="请输入任务" v-model="newItem" class="my_ipt" />
    <a-button type="primary" @click="addNew">添加事项</a-button>

    <a-list bordered :dataSource="alisList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked='item.done' @change="onChange(item)">{{ item.info }}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="deleteOne(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div class="footer" slot="footer">
        <span>共{{alisList.length}}条剩余</span>
        <a-button-group>
          <a-button :type="curType == 'all' ? 'primary': 'default'" @click="changeCurType('all')">全部</a-button>
          <a-button :type="curType == 'undo' ? 'primary': 'default'" @click="changeCurType('undo')">未完成</a-button>
          <a-button :type="curType == 'done' ? 'primary': 'default'" @click="changeCurType('done')">已完成</a-button>
        </a-button-group>
        <a @click="cleanDone()">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>
<script>
import {mapGetters, mapMutations, mapState} from 'vuex'
export default {
  name: "app",
  data() {
    return {
      newItem: ''
      // list: [],
    };
  },
  computed: {
    ...mapState(['list', 'curType']),
    ...mapGetters(['alisList'])
  },
  created() {
    this.$store.dispatch('getList');
  },
  methods: {
    ...mapMutations(['changeCurType', 'cleanDone', 'deleteOne']),
    addNew() {
      let con = this.newItem.trim();
      if (con.length == 0) {
        this.$message.warn('请先输入内容');
        return;
      }
      this.$store.commit('addNew', con);
      this.newItem = ''
    },
    onChange(item) {
      this.$store.commit('updateItemStatus', item.id);
    }
  }
};
</script>
<style scoped>
#app {
  padding: 10px;
}
.my_ipt {
  width: 500px;
  margin-right: 10px;
}
.dt_list {
  width: 500px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
