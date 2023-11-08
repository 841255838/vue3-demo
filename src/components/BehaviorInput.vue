<template>
  <div>
    <el-button @click="startRecording" :disabled="recording">开始语音录入</el-button>
    <el-button @click="stopRecording" :disabled="!recording">停止语音录入</el-button>
    <el-button type="primary" @click="saveRecord">保存记录</el-button>
    <div v-if="recording">{{ recognitionText }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    students: Array,
    categories: Array,
  },
  emits: ['save-record'],
  setup(props, { emit }) {
    const recording = ref(false);
    // 此处的数据都是测试,在正式开发中需要对接后端接口生成
    const recognitionText = '测试记录' || ref('');
    const newRecord = ref({
      id: new Date().getTime(),
      student: {
        name: '小明',
        gender: '男',
        birthdate: new Date().toLocaleDateString()
      },
      category: '测试类别',
      date: new Date().toLocaleString(),
      content: recognitionText,
    });

    const startRecording = () => {
      recording.value = true;
      // 在正式开发过程中需要对接后端的语音转文字接口并且获取用户数据
    };

    const stopRecording = () => {
      recording.value = false;
      // 在正式开发过程中需要对接后端的接口并且获取用户数据
    };

    const saveRecord = () => {
      emit('save-record', newRecord.value);
    };

    return {
      recording,
      recognitionText,
      newRecord,
      startRecording,
      stopRecording,
      saveRecord,
    };
  },
};
</script>
