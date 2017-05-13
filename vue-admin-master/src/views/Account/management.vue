<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" >
				<el-form-item>
					<el-input placeholder="姓名/手机号"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" >新增</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" >导出</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="users" highlight-current-row border  @selection-change="selsChange" style="width: 100%;">
			<el-table-column prop="id" label="编号" width="80">
			</el-table-column>
			<el-table-column prop="userName" label="姓名" width="90">
			</el-table-column>
			<el-table-column prop="mobile" label="电话号码" width="200" >
			</el-table-column>
			<el-table-column prop="id" label="角色" width="200" >
			</el-table-column>
			<el-table-column prop="id" label="创建时间" width="120">
			</el-table-column>
			<el-table-column prop="id" label="帐号" min-width="150">
			</el-table-column>
			<el-table-column label="操作" width="300">
				<template scope="scope">
				    <el-button :plain="true" type="info" size="small" @click="handleEdit(scope.$index, scope.row)">修改帐号</el-button>
				    <el-button :plain="true" type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除账号</el-button>
					<el-button type="danger" size="small" @click="handleEdit(scope.$index, scope.row)">设置角色</el-button>

				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

    <!--编辑界面-->
    <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
      <el-form  label-width="90px" >
          <el-radio-group v-model="radio2">
          <p><el-radio :label="1">线下运营总监</el-radio></p>
		   <p><el-radio :label="2">客服经理</el-radio></p>
		   <p><el-radio :label="3">用户经理</el-radio></p>
		   <p><el-radio :label="4">物联网</el-radio></p> 
		    <p><el-radio :label="5">产品部</el-radio></p> 
		    <p><el-radio :label="6">风控部监管中心</el-radio></p> 
		     <p><el-radio :label="7">线上运营总监</el-radio></p> 
		      <p><el-radio :label="8">车辆故障处理专员</el-radio></p> 

		  </el-radio-group>

        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit">提交</el-button>
      </div>
    </el-dialog>
		<!--新增界面-->
		
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { Account, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				 valuek: true,
                 radio2:'',
				filters: {
					name: ''
				},
				total:0,
				users: [],
				page: 1,
				sels:[],//列表选中列

				editFormVisible: false,//编辑界面是否显示
			}
		},
		methods: {
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
				Account(para).then((res) => {
					this.total = res.page.pageNo;
					this.users = res.page.result;;
					//NProgress.done();
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
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							
	
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
					
			
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
			selsChange: function (sels) {
				this.sels = sels;
			},

		},
		mounted() {
			this.getUsers();
		}
	}

</script>

<style lang="scss">
p{
	margin-top:10px;
	width:100%
}
</style>