import Home from '../page/Home/Home'
import Home2 from '../page/Home/Home2'

export default [
    {
        title:'首页',
        key:'/admin/home',
        icon:'form',
        component:Home
        // children:[{
        //         title:'首页3',
        //         key:'/admin/home',
        //         component:Home
        //     },
        //     {
        //         title:'首页2',
        //         key:'/admin/home2',
        //         component:Home2
        //     }
        // ]
    },
    {
        title:'首页2',
        key:'/admin/home2',
        icon:'check-circle',
        component:Home2

        // children:[{
        //     title:'首页5',
        //     key:'/admin/home5'
        // },
        //     {
        //         title:'首页6',
        //         key:'/admin/home6'
        //     }
        // ]
    }
 ]
