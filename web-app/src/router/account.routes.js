import Layout from "@/views/account/Layout.vue"
import Login from "@/views/account/Login.vue"
import ForgotPassword from "@/views/account/ForgotPassword.vue";

export default {
    path: '/account',
    component: Layout,
    children: [
        { path: 'login', component: Login },
        { path: 'forgot-password', component: ForgotPassword }
    ]
};
