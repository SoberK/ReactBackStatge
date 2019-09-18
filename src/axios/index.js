import Jsonp from 'jsonp'
export default class Axios {
    static jsonp(opt){
        new Promise((reslove,reject)=>{
            Jsonp(opt.url,{
                param:'callback',
            },function (err,response) {
                //to-do
            })
        })
    }
}
