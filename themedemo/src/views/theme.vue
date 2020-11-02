<!--
 * @Description: file content
 * @Author: 
 * @Date: 2020-04-13 16:25:10
 * @LastEditors: wujing
 * @LastEditTime: 2020-05-08 20:09:41
 -->
<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="box-item">
        <span class="field-label">切换主题 : </span>
        <el-switch v-model="theme" />
      </div>
    </el-card>
    <div class="block">
      <span class="field-label">多套主题切换 : </span>
       <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
    <div class="block">
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
    </div>

    <div class="block">
      <el-button type="primary" icon="el-icon-edit" />
      <el-button type="primary" icon="el-icon-share" />
      <el-button type="primary" icon="el-icon-delete" />
      <el-button type="primary" icon="el-icon-search">
        Search
      </el-button>
      <el-button type="primary">
        Upload
        <i class="el-icon-upload el-icon-right" />
      </el-button>
    </div>

    <div class="block">
      <el-tag v-for="tag in tags" :key="tag.type" :type="tag.type" class="tag-item">
        {{ tag.name }}
      </el-tag>
    </div>

    <div class="block">
      <el-radio-group v-model="radio">
        <el-radio :label="3">
          Option A
        </el-radio>
        <el-radio :label="6">
          Option B
        </el-radio>
        <el-radio :label="9">
          Option C
        </el-radio>
      </el-radio-group>
    </div>

    <div class="block">
      <el-slider v-model="slideValue" />
    </div>
    <div class="block">
      <span class="demonstration">自定义变量</span>
        <el-color-picker v-model="color1" @change = "changeBg"></el-color-picker>
      </div>
    <div class="test">

    </div>
  </div>
</template>

<script>
import { toggleClass,changeClass } from '@/utils'
import '@/assets/black-theme/index.css' 
import '@/assets/blue-theme/index.css' 
import '@/assets/custom-theme/index.css' // the theme changed version element-ui css

export default {
  name: 'Theme',
  data() {
    return {
      color1:'#409EFF',
      options: [{
          value: 'custom-theme-blue',
          label: '主题1'
        }, {
          value: 'custom-theme-black',
          label: '主题2'
        }, {
          value: 'custom-theme',
          label: '主题3'
        }],
      value:'',
      theme: false,
      tags: [
        { name: 'Tag One', type: '' },
        { name: 'Tag Two', type: 'info' },
        { name: 'Tag Three', type: 'success' },
        { name: 'Tag Four', type: 'warning' },
        { name: 'Tag Five', type: 'danger' }
      ],
      slideValue: 50,
      radio: 3
    }
  },
  methods:{
    changeBg(val){
      document.body.style.setProperty('--bg', val);
    },
  },
  watch: {

    theme() {
      toggleClass(document.body, 'custom-theme')
    },
    value(val){
      console.log(val)
      changeClass(document.body, val)
    }
  }
}
</script>

<style lang = "scss" scoped>
.test{
  height: 60px;
  width: 500px;
  background: var(--bg);
}
.field-label{
  vertical-align: middle;
}
.box-card {
  width: 400px;
  max-width: 100%;
  margin: 20px auto;
}

.block {
  padding: 30px 24px;
}

.tag-item {
  margin-right: 15px;
}
</style>
