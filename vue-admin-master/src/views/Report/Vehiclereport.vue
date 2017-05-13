<template>
<div class="block">
运营状态：<el-select class='se' v-model="province" placeholder="请选择" filterable @change="provinceChange(province)"> 
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

    是否已装入电池：<el-select class='se' v-model="value5" placeholder="请选择">
    <el-option
      v-for="item in options5"
      :key="item.value5"
      :label="item.label5"
      :value="item.value5">
    </el-option>
  </el-select>

      <el-form :inline="true" :model="filters" class="tool">
        <el-form-item>
          <el-input v-model="filters.code" placeholder="姓名/手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="query">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">导出</el-button>
        </el-form-item>
      </el-form>

<!--   <span class="wrapper">
   模糊搜索：<el-input class='ints' placeholder="车牌号/电池编号"></el-input>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">导出</el-button>
  </span> -->


  <div class="bi">
  <el-table
    :data="userss"
    border
    style="width: 100%">
    <el-table-column
      prop="totalCount"
      label="共计">
    </el-table-column>
    <el-table-column
      prop="allOperationCount"
      label="运营车辆">
    </el-table-column>
    <el-table-column
      prop="inOperationCount"
      label="待出库">
    </el-table-column>
    <el-table-column
      prop="inReserveCount"
      label="已预订">
    </el-table-column>
    <el-table-column
      prop="inRepairCount"
      label="已出租">
    </el-table-column>
     <el-table-column
      prop="inRunningCount"
      label="维护中">
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
      prop="inStorageCount"
      label="库存中">
    </el-table-column>
    <el-table-column
      prop="waitOnlineCount"
      label="待上线">
    </el-table-column>
    <el-table-column
      prop="backRepairCount"
      label="返修中">
    </el-table-column>
    <el-table-column
      prop="isScrapCount"
      label="已报废">
    </el-table-column>
    <el-table-column
      prop="inDownlineCount"
      label="已下线">
    </el-table-column>
     <el-table-column
      prop="isLoseCount"
      label="已丢失">
    </el-table-column>
  </el-table>
  </div>
<el-select v-model="values" class='qx' placeholder="更多">
    <el-option
      v-for="item in optionss"
      :key="item.values"
      :label="item.labels"
      :value="item.values">
    </el-option>
  </el-select>

<div class="bis">
  <el-table
    :data="users"
    border
    style="width: 100%">
    <el-table-column
      prop="code"
      label="车牌号"
      width='110'>
    </el-table-column>
    <el-table-column
      prop="state"
      label="运营状态"
      width='98'>
    </el-table-column>
    <el-table-column
      prop="boxCode"
      label="车辆终端编号"
      width='130'>
    </el-table-column>
        <el-table-column
      prop="batteryNo"
      label="电池编号"
      width='110'>
    </el-table-column>
        <el-table-column
      prop="battCode"
      label="电池终端编号"
      width='130'>
    </el-table-column>
        <el-table-column
      prop="margin"
      label="电量"
      width='80'>
    </el-table-column>
        <el-table-column
      prop="localCity"
      label="车辆位置"
      width='300'>
    </el-table-column>
        <el-table-column
      prop="batteryState"
      label="电机状态"
      width='100'>
    </el-table-column>
        <el-table-column
      prop="initInStoreTime"
      label="车辆入库时间">
    </el-table-column>
        <el-table-column
      label="操作">
      <template scope="scope">
  
      </template>
    </el-table-column>
  </el-table>
  </div>


<div class="foot">
  <el-pagination
    layout="prev, pager, next"
    @current-change="handleCurrentChange" :page-size="20" :total="total">
  </el-pagination>
</div>

</div>

</template>

<script>
  import util from '../../common/js/util';
  //import NProgress from 'nprogress'
  import {carUserList, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

  export default {
    props: ['provinceValue','cityValue'],
    data() {
      return {
        filters: {
          code: ''
        },
        total:0,
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
          userss:[],
        users: [],

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
          value5: '0',
          label5: '全部'
        }, {
          value5: '1',
          label5: '是'
        }, {
          value5: '2',
          label5: '否'
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
        optionss: [{
          values: '选项1',
          labels: '车辆日志'
        }, {
          values: '选项2',
          labels: '维修模式'
        }, {
          values: '选项3',
          labels: '待租模式'
        }, {
          values: '选项4',
          labels: '鸣笛寻车'
        }, {
          values: '选项5',
          labels: '修改车辆状态'
        }, {
          values: '选项6',
          labels: '标记为失控'
        }],
        values: '',

        state2: 0,
        value1: '',
        value2:'',
        value3:'',
        value4:'',
        value5:''
      }
    },
   methods: {
query(){
            this.filter.code='';
            this.getUsers();
        },
        handleCurrentChange(val) {
        this.page = val;
        this.getUsers();
      },
      //获取用户列表
      getUsers() {
              let para = {
                userId: 1, 
                resourceId:0
              };
              //NProgress.start();

              // console.log(carUserList(para));

              carUserList(para).then((res) => {
                console.log(res);
                 this.userss.push(res);
                   this.total = res.page.pageNo;
                 this.users =res.page.result;
              },(reg)=>{
                // console.log(reg);
              });
            },
            provinceChange(val){
           console.log(val)
            let vm = this;
            switch(val){
                case 0:
                    vm.cityOptions = [{"value":"全部"}];
                break;
                case 1:
                    vm.cityOptions = [
                        {"value":"待出租"},
                        {"value":"已预定"},
                        {"value":"已出租"},
                        {"value":"维护中"}
                     ];
                break;
                case 2:
                    vm.cityOptions = [
                        {"value":"未入库"},
                        {"value":"库存中"},
                        {"value":"待上线"},
                        {"value":"返修中"},
                        {"value":"已报废"},
                        {"value":"已下线"},
                        {"value":"已暂时丢失"}
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

  .block{
    margin-top: 20px;
  }
 .se{
  width: 92px;
 }
 .ri{
  width: 80px
 }
 .ints{
  width: 130px
 }
 .ca{
  margin-left: 40px;
 }

  
.qx{
position:absolite;
top:100px;
left:1354px;
z-index:100;
}
.foot{
  margin-top: 40px;
  float: right;
}
.tool{
  float: right;
  margin-top:0px ;
  margin-right: 50px
}
</style>
