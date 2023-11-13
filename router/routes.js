export default[
    {
        path:'/',
        name:'home',
        component:()=>import('/src/components/home.vue')
    },
    {
        path:'/compositeFunction',
        name:'compositeFunction',
        component:()=>import('/src/components/compositeFunction.vue')
    }
]
