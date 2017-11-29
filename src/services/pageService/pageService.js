import axios from 'axios'
import {authGet} from '../authHttp'


export const changePage = (url,pageNum) => axios.get(url,{params:{pageNum:pageNum,pageSize:5}})
export const authChangePage = (url,pageNum) => authGet(url,{params:{pageNum:pageNum,pageSize:5}})