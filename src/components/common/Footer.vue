<template>
    <div class="footer">
        <ul>
            <li v-for="(nav, key) in nav_list" :key="key">
                <span>{{nav.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                nav_list:[], // 轮播图的数据
            }
        },
        methods:{
            get_nav_footer(){
                this.$axios({
                    url: "http://127.0.0.1:8000/home/nav/0",
                    method: "get",
                }).then(res=>{
                    // 当前请求的返回值可以通过res接受到
                    console.log(res.data);
                    this.nav_list = res.data.results;
                }).catch(error=>{
                    console.log(error);
                })
            },
        },
        // 在当前页面渲染之前将数据获取并赋值给 data
        created() {
            // 获取轮播图数据
            this.get_nav_footer();
        }
    }
</script>

<style scoped>
    .footer {
        width: 100%;
        height: 128px;
        background: #25292e;
        color: #fff;
    }

    .footer ul {
        margin: 0 auto 16px;
        padding-top: 38px;
        width: 810px;
    }

    .footer ul li {
        float: left;
        width: 112px;
        margin: 0 10px;
        text-align: center;
        font-size: 14px;
    }

    .footer ul::after {
        content: "";
        display: block;
        clear: both;
    }

    .footer p {
        text-align: center;
        font-size: 12px;
    }
</style>
