<template>
  <div class="container">
    <behavior-input @save-record="saveRecord"></behavior-input>
    <behavior-list :records="records"></behavior-list>
  </div>
</template>

<script>
import { ref } from 'vue';
import BehaviorInput from './components/BehaviorInput.vue';
import BehaviorList from './components/BehaviorList.vue';

export default {
  components: {
    BehaviorInput,
    BehaviorList,
  },
  setup() {
    const records = ref([]);

    // 保存记录
    const saveRecord = (record) => {
      records.value.push(record);
      console.log('保存记录：', record);
    };

    return {
      records,
      saveRecord,
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
</style>
