<template>
<div>
<div class="dt">
<p>sdasdw</p>
</div>

<div>
	<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="车牌号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="运营状态"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="电池编号"
       width="150">
    </el-table-column>
        <el-table-column
      prop="dl"
      label="电池电量"
      width="150">
    </el-table-column>
        <el-table-column
      prop="zx"
      label="在线状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="wz"
      label="车辆位置"
      width="430">
    </el-table-column>
        <el-table-column
      prop="dz"
      label="电机状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dc"
      label="电池状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="rk"
      label="入库时间"
      width="150">
    </el-table-column>
  </el-table>
</template>

</div>

<div>
	<template>
  <el-table
    :data="tableData1"
    border
    style="width: 100%">
    <el-table-column
      prop="date1"
      label="电池ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name1"
      label="运营状态"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address1"
      label="电池编号"
       width="170">
    </el-table-column>
        <el-table-column
      prop="dl1"
      label="终端编号"
      width="180">
    </el-table-column>
        <el-table-column
      prop="zx1"
      label="在线状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="wz1"
      label="电池电量"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dc1"
      label="上次上报时间"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dl1"
      label="电池位置"
      width="480">
    </el-table-column>
    <el-table-column
      prop="rk1"
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
		tableData: [{
		          date: '00001',
		          name: '待出租',
		          address: 'Boo131',
		          dl:'1',
		          zx:'在线',
		          wz:'北京市朝阳区',
		          dz:'停止',
		          dc:'未通电',
		          rk:'2017-01-03'
		        }],
		tableData1: [{
		          date1: '00001',
		          name1: '待出租',
		          address1: 'Boo131',
		          dl1:'1',
		          zx1:'在线',
		          wz1:'北京市朝阳区',
		          dz1:'停止',
		          dc1:'未通电',
		          rk1:'2017-01-03'
		        }]

      }
    }
  }
</script>
<style lang="scss">
#demoComponent{
	width:100%;
	height:600px;
}
</style>
