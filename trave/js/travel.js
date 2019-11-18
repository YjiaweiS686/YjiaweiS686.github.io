// 路由
var sy = {
    template: '#index'
}
var gy = {
    template: '#and'
}
var lx = {
    template: '#go'
}
var gl = {
    template: '#fa'
}
var eml = {
    template: '#eml'
}
var routes = [
    { path: '/', component: sy },
    { path: '/gy', component: gy },
    { path: '/lx', component: lx },
    { path: '/gl', component: gl },
    { path: '/eml', component: eml }
];
var router = new VueRouter({
    routes
})
Vue.component('ban', {
    template: '#ban',
});