export default[
    {
        path:'/',
        name:'home',
        component:()=>import('@/layout/index.vue'),
        redirect: '/home',
        children:[
            {
                path: '/home',
                name: 'home',
                component: () => import('@/components/home.vue'),
                meta: {
                    title: "首页",
                }
            },
            {
                path: '/combinedFunction',
                name: 'combinedFunction',
                component: () => import('@/components/combinedFunction/index.vue'),
                meta: {
                    title: "组合式函数",
                }
            },
            {
                path: '/transition',
                name: 'transition',
                component: () => import('@/components/transition/index.vue'),
                meta: {
                    title: "过渡动画",
                }
            },
            {
                path: '/keepAlive',
                name: 'keepAlive',
                component: () => import('@/components/keepAlive/index.vue'),
                meta: {
                    title: "组件缓存",
                }
            },
            {
                path: '/teleport',
                name: 'teleport',
                component: () => import('@/components/teleport/index.vue'),
                meta: {
                    title: "模板传送",
                }
            },
            {
                path: '/simpleRoute',
                name: 'simpleRoute',
                component: () => import('@/components/simpleRoute/index.vue'),
                meta: {
                    title: "简单路由",
                }
            },
            {
                path: '/typescript',
                name: 'typescript',
                component: () => import('@/components/typescript/index.vue'),
                meta: {
                    title: "typescript",
                }
            }
        ]
    },
]
