import axios from 'axios'
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/';
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config;
});

let vm;
export function getVM(vmm) {
  vm = vmm
}
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then((res) => {
      const { data, meta = {} } = res.data;
      if (res.status === 200) {
        if (meta.status === 200) {
          resolve(data);
        } else {
          vm.$message.error(meta.msg);
        }
      } else {
        vm.$message.error(meta.msg);
      }
    }).catch((e) => {
      console.log(this, e);
      vm.$message.error(e.message);
    })
  });
}
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then((res) => {
      const { data, meta = {} } = res.data;
      if (res.status === 200) {
        if (meta.status === 200) {
          resolve(data);
        } else {
          vm.$message.error(meta.msg);
        }
      } else {
        vm.$message.error(meta.msg);
      }
    }).catch((e) => {
      console.log(this, e);
      vm.$message.error(e.message);
    })
  });
}
