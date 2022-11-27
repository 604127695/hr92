<template>
  <div class="departments">
    <el-card>
      <div class="main">
        <div class="tree-top">
          <div class="name">传智教育</div>
          <div class="manager">负责人</div>
          <!-- el-dropdown
                     默认插槽：默认展示 内容
                     具名插槽（dropdown）
                       el-dropdown-menu
                          el-dropdown-item
           -->
          <div class="other">
            <el-dropdown>
              <span>
                <span>操作</span>
                <i class="el-icon-arrow-down" />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    @click.native="addEvent('')"
                  >添加子部门</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <el-tree style="margin-top: 15px" :data="list" default-expand-all>
          <template v-slot="{ data }">
            <div class="tree-top">
              <div class="name">{{ data.name }}</div>
              <div class="manager">{{ data.manager }}</div>
              <!-- el-dropdown
                     默认插槽：默认展示 内容
                     具名插槽（dropdown）
                       el-dropdown-menu
                          el-dropdown-item
           -->
              <div class="other">
                <el-dropdown>
                  <span>
                    <span>操作</span>
                    <i class="el-icon-arrow-down" />
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item
                        @click.native="addEvent(data.id)"
                      >添加子部门</el-dropdown-item>
                      <el-dropdown-item>编辑部门</el-dropdown-item>
                      <el-dropdown-item
                        @click.native="delEvent(data.id)"
                      >删除部门</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </template>
        </el-tree>
      </div>
    </el-card>
    <Add ref="add" :init-list="initList" :get-data="getData" />
  </div>
</template>
<script>
import { companyDepartment, companyDepartmentDelete } from '@/api/departments'
import Add from './components/add.vue'
export default {
  components: {
    Add
  },
  data() {
    return {
      list: [],
      initList: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 删除部门
    async delEvent(id) {
      try {
        await this.$confirm('你确定要删除该内容吗')
        await companyDepartmentDelete(id)
        this.$message.success('删除成功')
        this.getData()
      } catch (error) {
        console.log(error)
      }
    },
    async getData() {
      const res = await companyDepartment()
      this.initList = res.data.depts
      console.log(res)
      this.list = this.changeData(res.data.depts, '')
    },
    // 树形数据转换
    changeData(arr, pid) {
      return arr.filter((item) => {
        if (item.pid === pid) {
          item.children = this.changeData(arr, item.id)
          return true
        }
      })
    },
    // 点击操作
    addEvent(id) {
      this.$refs.add.isShow = true
      this.$refs.add.form.pid = id
    }
  }
}
</script>
<style lang="scss" scoped>
.departments {
  padding: 15px;
  .main {
    width: 80%;
    margin: 30px auto;
  }
  .tree-top {
    width: 100%;
    display: flex;
    align-items: center;
    .name {
      flex: 1;
    }
    .manager {
      width: 150px;
    }
  }
}
</style>
