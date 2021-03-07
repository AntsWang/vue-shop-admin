import { get, post } from './axios'

const login = (params) => { return post('login', params) }

const getMenu = (params) => { return get('menus', params) }

const apis = {
  login,
  getMenu
}

export default apis;
