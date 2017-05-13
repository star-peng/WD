<template>
<div>
<div class="dt">
<template>
  <el-amap vid="amapDemo">
    // 添加N个人
    <el-amap-marker v-for="marker in markers" :position="marker.position">
    </el-amap-marker>
</el-amap>
</template>

</div>

<div>
	<template>
  <el-table
    :data="tableData0"
    border
    style="width: 100%">
    <el-table-column
      prop="date0"
      label="车牌号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name0"
      label="运营状态"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address0"
      label="电池编号"
       width="150">
    </el-table-column>
        <el-table-column
      prop="dl0"
      label="电池电量"
      width="150">
    </el-table-column>
        <el-table-column
      prop="zx0"
      label="在线状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="wz0"
      label="车辆位置"
      width="430">
    </el-table-column>
        <el-table-column
      prop="dz0"
      label="电机状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dc0"
      label="电池状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="rk0"
      label="入库时间"
      width="150">
    </el-table-column>
  </el-table>
</template>

</div>

<div>
	<template>
  <el-table
    :data="tableDatas"
    border
    style="width: 100%">
    <el-table-column
      prop="dates"
      label="电池ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="names"
      label="运营状态"
      width="100">
    </el-table-column>
    <el-table-column
      prop="addresss"
      label="电池编号"
       width="170">
    </el-table-column>
        <el-table-column
      prop="dls"
      label="终端编号"
      width="180">
    </el-table-column>
        <el-table-column
      prop="zxs"
      label="在线状态"
      width="150">
    </el-table-column>
        <el-table-column
      prop="wzs"
      label="电池电量"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dcs"
      label="上次上报时间"
      width="150">
    </el-table-column>
        <el-table-column
      prop="dls"
      label="电池位置"
      width="480">
    </el-table-column>
    <el-table-column
      prop="rks"
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
        markers: [],
		tableData0: [{
		          date0: '00001',
		          name0: '待出租',
		          address0: 'Boo131',
		          dl0:'1',
		          zx0:'在线',
		          wz0:'北京市朝阳区',
		          dz0:'停止',
		          dc0:'未通电',
		          rk0:'2017-01-03'
		        }],
		tableDatas: [{
		          dates: '00001',
		          names: '待出租',
		          addresss: 'Boo131',
		          dls:'8',
		          zxs:'在线',
		          wzs:'北京市朝阳区',
		          dzs:'停止',
		          dcs:'未通电',
		          rks:'2017-01-03'
		        }]


      }
    },
  mounted() {
    // 姑且N为2
    // 这样地图上就添加了两个人
    this.markers = [
     {
      position: [121.5273285, 31.21515044]
     }, {
      position: [121.5273286, 31.21515045]
     }
    ];
  }
  }
</script>
<style lang="scss">
.dt{
	width:100%;
	height:600px;
	border:1px;
}
</style>
