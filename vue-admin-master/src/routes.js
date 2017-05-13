import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/Account/management.vue'
import user from './views/Account/user.vue'
import Page4 from './views/Report/Vehiclereport.vue'
import Page5 from './views/Report/Vehiclejournal.vue'
import Battery from './views/Report/Batteryreport.vue'
import Batterylg from './views/Report/Batterylog.vue'
import realtime from './views/Riskcontrol/realtime.vue'
import Historical from './views/Riskcontrol/Historical.vue'
import Monitoring from './views/Riskcontrol/Monitoring.vue'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '账号管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: '账号管理' },
            { path: '/user', component: user, name: '角色管理' },
        ]
    },
    {
        path: '/',  
        component: Home,
        name: '报表统计',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '车辆报表' },
            { path: '/page5', component: Page5, name: '车辆日志' },
            { path: '/Battery', component: Battery, name: '电池报表'},
            { path: '/Batterylg', component: Batterylg, name: '电池日志'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '风控管理',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path : '/Monitoring', component: Monitoring,name: '监控管理' },
            { path : '/Historical', component:Historical,name: '历史轨迹'},
            { path : '/realtime', component: realtime,name: '实时监控'}
 
            
        ]

    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;