import Jsonp from 'jsonp'
import axios from 'axios'
export default class Axios {
    static jsonp(opt){
       return new Promise((reslove,reject)=>{
            Jsonp(opt.url,{
                param:'callback',
            },function (err,response) {
                //to-do
            })
        })
    }
    static post(opt){
        return new Promise((reslove,reject)=>{
            axios({
                method:'post',
                url:opt.url,
            })
        })
    }
}
