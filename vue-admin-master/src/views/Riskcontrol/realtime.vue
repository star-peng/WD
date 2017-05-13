<template>
<div>
<div>
<p>哈哈</p>
</div>

<div>
	<template>
  <el-table
    :data="tableData2"
    border
    style="width: 100%">
    <el-table-column
      prop="date2"
      label="车牌号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name2"
      label="运营状态"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address2"
      label="电池编号"
       width="150">
    </el-table-column>
        <el-table-column
      prop="dl2"
      label="电池电量"
      width="150">
    </el-table-column>
        <el-table-column
      prop="zx2"
      label="在线状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="wz2"
      label="车辆位置"
      width="430">
    </el-table-column>
        <el-table-column
      prop="dz2"
      label="电机状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dc2"
      label="电池状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="rk2"
      label="入库时间"
      width="150">
    </el-table-column>
  </el-table>
</template>

</div>

<div>
	<template>
  <el-table
    :data="tableData3"
    border
    style="width: 100%">
    <el-table-column
      prop="date3"
      label="电池ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name3"
      label="运营状态"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address3"
      label="电池编号"
       width="170">
    </el-table-column>
        <el-table-column
      prop="dl3"
      label="终端编号"
      width="180">
    </el-table-column>
        <el-table-column
      prop="zx3"
      label="在线状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="wz3"
      label="电池电量"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dc3"
      label="上次上报时间"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dl3"
      label="电池位置"
      width="480">
    </el-table-column>
    <el-table-column
      prop="rk3"
      label="入库人员"
      width="150">
    </el-table-column>
  </el-table>
</template>

</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
		tableData2: [{
		          date2: '00001',
		          name2: '待出租',
		          address2: 'Boo131',
		          dl2:'1',
		          zx2:'在线',
		          wz2:'北京市朝阳区',
		          dz2:'停止',
		          dc2:'未通电',
		          rk2:'2017-01-03'
		        }],
		tableData3: [{
		          date3: '00001',
		          name3: '待出租',
		          address3: 'Boo131',
		          dl3:'2',
		          zx3:'在线',
		          wz3:'北京市朝阳区',
		          dz3:'停止',
		          dc3:'未通电',
		          rk3:'20173'
		        }]
      }
    }
  }
</script>
<style lang="scss">

</style>
