export default[
    {
        path:'/',
        name:'home',
        component:()=>import('/src/layout/index.vue'),
        redirect: '/home',
        children:[
            {
                path: '/home',
                name: 'home',
                component: () => import('/src/components/home.vue'),
                meta: {
                    title: "首页",
                }
            },
            {
                path: '/combinedFunction',
                name: 'combinedFunction',
                component: () => import('/src/components/combinedFunction/index.vue'),
                meta: {
                    title: "组合式函数",
                }
            }
        ]
    },
    // {
    //     path: '/combinedFunction',
    //     name: 'combinedFunction',
    //     component: () => import('/src/components/combinedFunction.vue'),
    //     meta: {
    //         title: "函数式编程",
    //     },
    //     children:[
    //         {
    //             path: '/combinedFunction',
    //             name: 'combinedFunction',
    //             component: () => import('/src/components/combinedFunction.vue'),
    //             meta: {
    //                 title: "函数式编程",
    //             }
    //         }
    //     ]
    // }

]
