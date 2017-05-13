<template>
<div class="top">
模糊搜索：<el-input class='int' placeholder="姓名/手机号"></el-input>
 
  <span class="wrapper">
    <el-button   type="primary">查询</el-button>
    <el-button  type="primary">导出</el-button>
  </span>
<div class="mr">显示1到6总数6条</div>
  <template>
  <div class="bo">
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="序号"
      width="110">
    </el-table-column>
    <el-table-column
      prop="name"
      label="角色名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="400">
    </el-table-column>
        <el-table-column
      prop="desc"
      label="角色说明"
      width="522">
    </el-table-column>
        <el-table-column
      prop="name"
      label="操作"
      width="300">
      <template scope="scope">
				    <el-button size="small" @click="handleEdit(scope.$index, scope.row)" >修改帐号</el-button>
				    <el-button :plain="true" type="danger" size="small" @click="handleDel(scope.$index, scope.row)" >删除角色</el-button>
					<el-button type="danger" size="small" @click="dialogFormVisibles = true"  >设置权限</el-button>
					
				</template>
    </el-table-column>
  </el-table>
  </div>
</template>
<div>
  <el-select class='ff' v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <div class="ti">条</div>
  <el-pagination
    layout="prev, pager, next"
    @current-change="handleCurrentChange" :page-size="20" :total="total"  class="foot">
  </el-pagination>
</div>

    <!--编辑界面-->
    <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
      <el-form  label-width="90px" >
        <el-form-item label="角色名称" prop="name">
          <el-input  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色说明" prop="phone">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        </el-form-item>

        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit">提交</el-button>
      </div>
    </el-dialog>


<!-- 设置权限 -->
<el-dialog title="设置权限" :visible.sync="dialogFormVisibles">
  <el-form :model="form">

  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">监控管理</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
<p>
  
  <el-checkbox :indeterminate="isIndeterminates" v-model="checkAlls" @change="handleCheckAllChanges">报表统计</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCitiess" @change="handleCheckedCitiesChanges">
    <el-checkbox v-for="citys in citiess" :label="citys" :key="citys">{{citys}}</el-checkbox>
  </el-checkbox-group>

</p>
<p>
  
  <el-checkbox :indeterminate="isIndeterminated" v-model="checkAlld" @change="handleCheckAllChanged">账号管理</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCitiesd" @change="handleCheckedCitiesChanged">
    <el-checkbox v-for="cityd in citiesd" :label="cityd" :key="cityd">{{cityd}}</el-checkbox>
  </el-checkbox-group>

</p>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisibles = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisibles = false">确 定</el-button>
  </div>
</el-dialog>

</div>
</template>
<script type="text/javascript">

const cityOptions = ['实时监控','历史轨迹'];
const cityOptionss = ['车辆报表', '车辆日志','电池报表', '电池日志'];
const cityOptionsd = ['账号管理', '角色管理'];

 import util from '../../common/js/util';
  //import NProgress from 'nprogress'
  import {Role, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';
	 export default {
    data() {
      return {
        total:0,
         checkAll: true,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true,
        checkAlls: true,
        checkedCitiess: [],
        citiess: cityOptionss,
        isIndeterminates: true,
        checkAlld: true,
        checkedCitiesd: [],
        citiesd: cityOptionsd,
        isIndeterminated: true,

        editFormVisible: false,//编辑界面是否显示
      	 tableData: [],
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
        options: [{
          value: '选项1',
          label: '1'
        }, {
          value: '选项2',
          label: '2'
        }, {
          value: '选项3',
          label: '3'
        }, {
          value: '选项4',
          label: '4'
        }, {
          value: '选项5',
          label: '5'
        }],
        value: '',
        value1:'',
        value2:'',
        dialogFormVisible: false,
        dialogFormVisibles: false,
        form: {
          name: '',
          mimg: ''
        },
        textarea: ''
    }
  },methods: {
          handleCurrentChange(val) {
        this.page = val;
        this.getUsers();
      },
      handleEdit: function (index, row) {
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
      },
      //获取用户列表
      getUsers() {
              let para = {
                userId: 1,
                resourceId:0
              };
              //NProgress.start();

              // console.log(carUserList(para));

             Role(para).then((res) => {
                console.log(res)
                this.total = res.page.pageNo;
                 this.tableData =res.page.result;
              },(reg)=>{
                // console.log(reg);
              });
            }, 
                //删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          //NProgress.start();
          let para = { id: row.id };
          removeUser(para).then((res) => {
            //NProgress.done();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getUsers();
          });
        }).catch(() => {

        });
      },
      //编辑
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              //NProgress.start();
              let para = Object.assign({}, this.editForm);
              para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
              editUser(para).then((res) => {
                //NProgress.done();
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.$refs['editForm'].resetFields();
                this.editFormVisible = false;
                this.getUsers();
              });
            });
          }
        });
      },
     handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
      handleCheckAllChanges(event) {
        this.checkedCitiess = event.target.checked ? cityOptionss : [];
        this.isIndeterminates = false;
      },
      handleCheckedCitiesChanges(value) {
        let checkedCounts = value.length;
        this.checkAlls = checkedCounts === this.citiess.length;
        this.isIndeterminates = checkedCounts> 0 && checkedCounts < this.citiess.length;
    },
      handleCheckAllChanged(event) {
        this.checkedCitiesd = event.target.checked ? cityOptionsd : [];
        this.isIndeterminated = false;
      },
      handleCheckedCitiesChanged(value) {
        let checkedCountd = value.length;
        this.checkAlld = checkedCountd === this.citiesd.length;
        this.isIndeterminated = checkedCountd> 0 && checkedCountd < this.citiesd.length;
    },
  },
  mounted(){
    this.getUsers();
}

}
</script>
<style lang="scss">
.top{
	margin-top:20px;
}
.mr{
  margin-top: 60px;
  float: right;
}
.in{
	width:90px;
	float:left;
}
.ft{
	float:left;
	padding-left:10px;
	padding-top:8px;
}
.ff{
  float: left;
  margin-top: 40px;
  width: 90px;
}
.ti{
  padding-top:46px;
  margin-left: 20px;
  float: left;
}
.foot{
float:right;
}


</style>