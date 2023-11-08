<template>
  <div style="margin-top: 80px;">
    <div>
      学生：
      <el-select v-model="filterStudent" placeholder="选择学生">
        <el-option v-for="student in students" :key="student.id" :label="student.name" :value="student"></el-option>
      </el-select>
      时间段：
      <el-date-picker v-model="filterStartDate" type="date" placeholder="开始时间"></el-date-picker>
      至
      <el-date-picker v-model="filterEndDate" type="date" placeholder="结束时间"></el-date-picker>
      类别：
      <el-select v-model="filterCategory" placeholder="选择类别">
        <el-option v-for="category in categories" :key="category" :label="category" :value="category"></el-option>
      </el-select>
      <el-button type="primary" @click="filterRecords">查询</el-button>
    </div>
    <el-table :data="filteredRecords" style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="student.name" label="姓名"></el-table-column>
      <el-table-column prop="student.gender" label="性别"></el-table-column>
      <el-table-column prop="student.birthdate" label="出生日期"></el-table-column>
      <el-table-column prop="content" label="行为记录"></el-table-column>
      <el-table-column prop="date" label="生成时间"></el-table-column>
      <el-table-column prop="category" label="行为类别"></el-table-column>
      <el-table-column label="操作" width="300">
        <template #default="scope">
          <el-button size="mini" @click="viewRecord(scope.row)">查看</el-button>
          <el-button size="mini" @click="editRecord(scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="deleteRecord(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    records: Array,
    students: Array,
    categories: Array,
  },
  data() {
    return {
      filterStudent: '',
      filterStartDate: '',
      filterEndDate: '',
      filterCategory: '',
    };
  },
  computed: {
    filteredRecords() {
      let filtered = this.records;
      if (this.filterStudent) {
        filtered = filtered.filter(record => record.student === this.filterStudent);
      }
      if (this.filterStartDate && this.filterEndDate) {
        filtered = filtered.filter(record => {
          const date = new Date(record.date);
          const startDate = new Date(this.filterStartDate);
          const endDate = new Date(this.filterEndDate);
          return date >= startDate && date <= endDate;
        });
      }
      if (this.filterCategory) {
        filtered = filtered.filter(record => record.category === this.filterCategory);
      }
      return filtered;
    },
  },
  methods: {
    viewRecord(record) {
      // TODO: 实现查看记录的方法
    },
    editRecord(record) {
      // TODO: 实现修改记录的方法
    },
    deleteRecord(record) {
      // TODO: 实现删除记录的方法
    },
    filterRecords() {
      // TODO: 实现筛选记录的方法
    },
  },
};
</script>
