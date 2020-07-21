import Vue from 'vue'
import Router from 'vue-router'
import Home from"../components/Home"
import Login from "../components/Login";
import Register from "../components/Register";
import Course from "../components/Course";
import CourseDetail from "../components/CourseDetail";
import Cart from "../components/Cart";
import Order from "../components/Order";
import OrderSuccess from "../components/OrderSuccess";
Vue.use(Router);

export default new Router({

    mode:'history',

    routes: [
        {
            path: '/',
            name:"home",
            component: Home
        },
        {
            path: '/home',
            name:"home",
            component: Home
        },
        {
            path: '/home/login',
            name:"login",
            component: Login
        },
        {
            path: '/user/register',
            name:"register",
            component: Register
        },
        {
            path: '/course',
            name:"course",
            component: Course
        },
        {
            path: '/course/detail/:id',
            name:"coursedetail",
            component: CourseDetail
        },
        {
            path: '/cart',
            name:"cart",
            component: Cart
        },
        {
            path: '/order',
            name:"order",
            component: Order
        },
        {
            path: '/payments/result',
            name:"OrderSuccess",
            component: OrderSuccess
        },


    ]
})
