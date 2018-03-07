/**
 * demo路由文件
 */
import pageDemo1 from '../pages/pageDemo1/pageDemo1.vue'
export default [
    {
        path: '/',
        name: 'pageDemo1',
        component: pageDemo1,
        // children: [
        //     {
        //         path: 'home',
        //         name: 'qbank_home',
        //         component: QBankHome,
        //         meta: {keepAlive: true},
        //     }
        // ]
    }

]