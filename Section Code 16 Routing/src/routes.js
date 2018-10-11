
import Home from './components/Home.vue';
import Header from "./components/Header.vue";

const User = resolve=>{
    require.ensure(['./components/user/User.vue'],()=>{
        resolve(require('./components/user/User.vue'));
    },'user');//grouping dependenciies, can add to another const variable
}
const UserStart = resolve=>{
    require.ensure(['./components/user/User.vue'],()=>{
        resolve(require('./components/user/UserStart.vue'));
    });
}
const UserEdit = resolve=>{
    require.ensure(['./components/user/User.vue'],()=>{
        resolve(require('./components/user/UserEdit.vue'));
    });
}
const UserDetail = resolve=>{
    require.ensure(['./components/user/User.vue'],()=>{
        resolve(require('./components/user/UserDetail.vue'));
    });
}

export const routes = [
    // {path:'', component: Home},
    {path:'', name: 'home', components:{
        default: Home,
        'header-top' :Header
    }},
    // {path: '/user/:id', component: User}
    // {path: '/user', component: User, children: [
    //     {path: '',component: UserStart},
    //     {path: ':id',component: UserDetail},
    //     {path: ':id/edit',component: UserEdit, name: 'userEdit'}
    // ]}
    {path: '/user', components:{
            default: User,
            'header-bottom':Header
        }, children: [
        {path: '',component: UserStart},
        {path: ':id',component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        }},
        {path: ':id/edit',component: UserEdit, name: 'userEdit'}
    ]},
    { path: '/redirect-me', redirect:'/user'},
    { path: '*', redirect:'/' }
];