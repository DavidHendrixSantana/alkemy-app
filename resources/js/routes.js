//initial component
const Dashboard = () => import('./components/Dashboard.vue')

//projects components
const Index = () => import('./components/projects/Index.js')
const Create = () => import('./components/projects/Create.js')
const Edit = () => import('./components/projects/Edit.js')


export const routes = [
    {
        name:'dashboard',
        path: '/',
        component :Home
    },
    {
        name:'index',
        path: '/projects',
        component :Index
    },
    {
        name:'create',
        path: '/create',
        component :Create
    },
    {
        name:'edit',
        path: '/edit/:id',
        component :Edit
    },
]