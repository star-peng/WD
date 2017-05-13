<template>
<div class="block">
运营状态：<el-select class='se' v-model="province" placeholder="请选择" filterable @change="provinceChange">
    <el-option
      v-for="item in provinceOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

车辆状态：<el-select class='se' v-model="city" placeholder="请选择" filterable>
    <el-option
      v-for="item in cityOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

在线状态：<el-select class='se' v-model="value2" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value2"
      :label="item.label2"
      :value="item.value2">
    </el-option>
  </el-select>

    <span class="demonstration">入库时间：</span>
    <el-date-picker class='ri'
      v-model="value3"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <span class="demonstration">至</span>
    <el-date-picker class='ri'
      v-model="value4"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  <span class="wrapper">

  模糊搜索：<el-input v-model="input" class='int' placeholder="姓名/手机号/发送人员"></el-input>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">导出</el-button>
  </span>


  <template>
  <div class="bi">
  <el-table
    :data="tableData"
    border>
    <el-table-column
      prop="totalCount"
      label="共计">
    </el-table-column>
    <el-table-column
      prop="allOperationCount"
      label="运营中">
    </el-table-column>
    <el-table-column
      prop="inUsingCount"
      label="使用中">
    </el-table-column>
    <el-table-column
      prop="isLoseCount"
      label="暂时丢失">
    </el-table-column>
     <el-table-column
      prop="nonOperationalCount"
      label="非运营">
    </el-table-column>
    <el-table-column
      prop="notInStorageCount"
      label="未入库">
    </el-table-column>
    <el-table-column
      prop="address"
      label="待充电">
    </el-table-column>
    <el-table-column
      prop="address"
      label="已充满">
    </el-table-column>
    <el-table-column
      prop="inCollarCount"
      label="领用中">
    </el-table-column>
    <el-table-column
      prop="inRecyclingCount"
      label="回收中">
    </el-table-column>
    <el-table-column
      prop="inRepairCount"
      label="维修中">
    </el-table-column>
    <el-table-column
      prop="isScrapCount"
      label="已报废">
    </el-table-column>
  </el-table>
  </div>
</template>
  <el-select v-model="values" class='qxx' placeholder="请选择">
    <el-option
      v-for="item in optionss"
      :key="item.values"
      :label="item.labels"
      :value="item.values">
    </el-option>
  </el-select>
<template>
<div class="bis">
  <el-table
    :data="tableData1"
    border>
    <el-table-column
      prop="code"
      label="电池编号">
    </el-table-column>
    <el-table-column
      prop="state"
      label="运营状态">
    </el-table-column>
    <el-table-column
      prop="battCode"
      label="电池终端编号">
    </el-table-column>
        <el-table-column
      prop="isOnline"
      label="在线状态">
    </el-table-column>
        <el-table-column
      prop="margin"
      label="电量">
    </el-table-column>
        <el-table-column
      prop="updateTime"
      label="上报时间">
    </el-table-column>
        <el-table-column
      prop="gpsName"
      label="电池位置">
    </el-table-column>
        <el-table-column
      prop="inStoreUserName"
      label="入库人员">
    </el-table-column>
        <el-table-column
      prop="ass"
      label="操作">
      <template scope="scope">
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<div class="foot">
  <el-pagination
    layout="prev, pager, next"
    :total="40">
  </el-pagination>
</div>

</div>



  
</template>

<script>
  import util from '../../common/js/util';
  //import NProgress from 'nprogress'
  import {batteryReport, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';
  export default {
    props: ['provinceValue','cityValue'],
    data() {
      return {
        province: this.provinceValue,
            city:this.cityValue,
            provinceOptions: [{
              value: 0,
              label: '全部'
             },{
              value: 1,
              label: '运营中'
             }, {
              value: 2,
              label: '非运营'
             }],
            cityOptions:[],
        options2: [{
          value2: '0',
          label2: '全部'
        }, {
          value2: '1',
          label2: '在线'
        }, {
          value2: '2',
          label2: '离线'
        }],
        options5: [{
          value5: '选项1',
          label5: '黄金'
        }, {
          value5: '选项2',
          label5: '双皮'
        }, {
          value5: '选项3',
          label5: '蚵仔'
        }],
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        tableData: [],
         tableData1: [],
        optionss: [{
          values: '选项1',
          labels: '电池日志'
        }],
        values: '',

        value0: '',
        value1: '',
        value2:'',
        value3:'',
        value4:'',
        value5:'',
         input: ''

      }
    },
   methods: {
        getUsers() {
              let para = {
                userId: 1,
                resourceId:0
              };
              //NProgress.start();

              // console.log(carUserList(para));

              batteryReport(para).then((res) => {
                console.log(res);
                 this.tableData.push(res);
                 this.tableData1 =res.page.result;
              },(reg)=>{
                // console.log(reg);
              });
            },
            provinceChange(val){
            let vm = this;
            switch(val){
                case 0:
                    vm.cityOptions = [{"value":"全部"}];
                break;
                case 1:
                    vm.cityOptions = [
                        {"value":"使用中"},
                        {"value":"已暂时丢失"}
                     ];
                break;
                case 2:
                    vm.cityOptions = [
                        {"value":"未入库"},
                        {"value":"库存中"},
                        {"value":"待发出"},
                        {"value":"领用中"},
                        {"value":"回收中"},
                        {"value":"维修中"},
                        {"value":"已报废"}
                     ];
                break;
            };
        }
    },
      mounted(){
        this.getUsers();
      }
  }
</script>
<style lang="scss">
.clearfix:after{
  display:block;
  content: '';
  clear:both; 
}
  .block{
    margin-top: 20px;
  }
 .se{
  width: 92px;
 }
 .ri{
  width: 80px
 }
 .int{
  width: 240px
 }
 .ca{
  margin-left: 40px;
 }
 .bi{
  margin-top: 20px;
 }
  .bis{
  margin-top: 20px;
 
 }
.qxx{
  width: 120px;
position:absolite;
top:100px;
left:1460px;
z-index:100;
}
.foot{
  margin-top: 40px;
  float: right;
}
</style>
