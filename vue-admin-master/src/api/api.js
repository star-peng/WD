import axios from 'axios';

let base = 'http://59.110.29.195:8091/mfcxfk/';

var qs=require('qs');
var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

let bsse = ''
// 用于设置跨域请求代理


export const requestLogin = params => { return instance.post(`${base}login/userLogin`, qs.stringify(params)).then(res => res.data).catch(console.log(123))};

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${bsse}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const carUserList = params => { console.log(params); return instance.post(`${base}bikeStatistics/bikeList`, qs.stringify(params)).then(res => res.data); };

export const vehicleLog = params => { return instance.post(`${base}bikeStatistics/bikeLogList`, qs.stringify(params)).then(res => res.data); };

export const batteryReport = params => { return instance.post(`${base}batterySatistics/batteryList`, qs.stringify(params)).then(res => res.data); };

export const batteryLog = params => { return instance.post(`${base}batterySatistics/batteryLogList`, qs.stringify(params)).then(res => res.data); };

export const Role = params => { return instance.post(`${base}role/list`, qs.stringify(params)).then(res => res.data); };

export const Account = params => { return instance.post(`${base}account/list `, qs.stringify(params)).then(res => res.data); };



