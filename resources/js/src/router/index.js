// //initial component
// const Dashboard = () => import('./components/Dashboard.vue')

// //projects components
// const Index = () => import('./components/projects/Index.js')
// const Create = () => import('./components/projects/Create.js')
// const Edit = () => import('./components/projects/Edit.js')


// export const routes = [
//     {
//         name:'dashboard',
//         path: '/',
//         component :Home
//     },
//     {
//         name:'index',
//         path: '/projects',
//         component :Index
//     },
//     {
//         name:'create',
//         path: '/create',
//         component :Create
//     },
//     {
//         name:'edit',
//         path: '/edit/:id',
//         component :Edit
//     },
// ]

import {createRouter, createWebHistory} from "vue-router"
import store from '../store'
import AuthLayout from '../components/AuthLayout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import ProjectView from '../views/ProjectView.vue'



const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: {requiresAuth:true},
        children:[
            {path:'/dashboard', name:'Dashboard', component:Dashboard},
            {path:'/projects', name:'Projects', component:Projects},
            {path:'/projects/create',name: "ProjectCreate", component: ProjectView},
            {path:'/projects/:id',name: "ProjectView", component: ProjectView},
        ]
    },
    {
        path:'/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta:{isGuest:true},
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) =>{
    if(to.meta.requiresAuth && !store.state.user.token){
        next({name:'Login'})
    }else if(store.state.user.token && (to.meta.isGuest)){
        next({
            name:'Dashboard'
        })
    }else{
        next()
    }
})

export default router