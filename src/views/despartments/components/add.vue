<template>
  <div>
    <el-dialog
      title="新增部门"
      :visible.sync="isShow"
      width="600px"
      @close="closeEvent"
    >
      <div>
        <el-form ref="form" label-width="100px" :rules="rules" :model="form">
          <el-form-item prop="name" label="部门名称">
            <el-input v-model.trim="form.name" placeholder="1-50个字符" />
          </el-form-item>
          <el-form-item prop="code" label="部门编码">
            <el-input v-model.trim="form.code" placeholder="1-50个字符" />
          </el-form-item>
          <el-form-item prop="manager" label="部门负责人">
            <el-select
              v-model="form.manager"
              placeholder="请选择负责人"
              @focus="focusEvent"
            >
              <el-option
                v-for="item in userList"
                :key="item.id"
                :label="item.username"
                :value="item.username"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="introduce" label="部门介绍">
            <el-input
              v-model="form.introduce"
              type="textarea"
              :rows="4"
              placeholder="1-50个字符"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="button">
          <el-button @click="isShow = false">取 消</el-button>
          <el-button type="primary" @click.native="submit">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { sysUserSimple, companyDepartmentPost } from '@/api/departments'
export default {
  props: {
    initList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isShow: false,
      userList: '',
      form: {
        name: '', //  string  非必须    部门名称
        code: '', //  string  非必须    部门编码，同级部门不可重复
        manager: '', //  string  非必须    负责人名称
        introduce: '', //  string  非必须    介绍
        pid: '' //  string  非必须    父级部门ID
      },
      rules: {
        name: [
          { required: true, message: '必填', trigger: 'change' },
          { min: 1, max: 50, message: '请输入1-50个字符', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              const arr = this.initList.filter(
                (item) => item.pid === this.form.pid
              )
              const bol = arr.every((item) => item.name !== value)
              bol
                ? callback()
                : callback(new Error('请不要输入重复部门名称' + value))
            },
            trigger: 'change'
          }
        ], //  string  非必须    部门名称
        code: [
          { required: true, message: '必填', trigger: 'change' },
          { min: 1, max: 50, message: '请输入1-50个字符', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              const bol = this.initList.every((item) => {
                return item.code !== value
              })
              bol ? callback() : callback(new Error('部门编码重复' + value))
            }
          }
        ], //  string  非必须    部门编码，同级部门不可重复
        manager: [{ required: true, message: '必填', trigger: 'change' }], //  string  非必须    负责人名称
        introduce: [
          { required: true, message: '必填', trigger: 'change' },
          { min: 1, max: 300, message: '请输入1-300个字符', trigger: 'change' }
        ] //  string  非必须    介绍
      }
    }
  },
  methods: {
    // 获取员工简单列表 下拉框点击
    async focusEvent() {
      if (this.userList.length === 0) {
        const res = await sysUserSimple()
        this.userList = res.data
        console.log('员工列表', res)
      }
    },
    async submit() {
      const res = await companyDepartmentPost(this.form)
      console.log(res)
      this.$message.success('新增部门成功')
      this.isShow = false
      this.$emit('getData')
    },
    closeEvent() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  text-align: center;
}
</style>
