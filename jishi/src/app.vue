<template>
    <div>
        <hd></hd>
        <til></til>
        <div class="cont gsp" ref="cont">
            <div class="cont_li clearfix">
                <div class="cont_list" v-for="i in 3">
                    <div class="list_img">
                        <img src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvZjgxMjkwZTg3YTEzM2ZkNWFiM2IzY2ExNjdhNTA3ZDgucG5n.png" alt="">
                    </div>
                    <div class="list_text">
                        <h5>页面要炫酷,颜值要高</h5>
                        <p>人靠衣装马靠鞍,一个炫酷的网站才配得上创业者的新潮创 意.微企点采用HTML5最新技术,拥有大气舒适的界面和众多 精美模板,用起飞页制作一个高逼格.高颜值的炫酷网站, 让您的创业项目脱颖而出,非同凡响.</p>
                    </div>
                </div>
            </div>
            <div class="cont_til">
                <h5>云建站自助平台</h5>
                <p>上手快.颜值高.跨多屏.自传播.全免费.</p>
            </div>
            <div class="cont_lunbo">
                <div class="cont_txt swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            在起飞页自助建站平台，您不需要任何编程基础，就能做出功能强大，效果出众的专业级网站，您所要做的仅是选择网站模板、输入图片文字，以及鼠标拖拉拽；真正的响应式建站，无论是在电脑的大屏幕，还是手机小屏幕上，网站都能友好地展示；您的访客还可以注册成为会员，并进行在线购物；当然，如果您需要多语言版本，起飞页也可以轻松为您实现。
                        </div>
                        <div class="swiper-slide">
                            每一个模版都经过设计、制作、测试、改进等多道工序，力求在达到赏心悦目的艺术视觉效果的同时，又容易定制改变。除此以外，多达180个精美的常用设计模式和30余个功能组件让您在自助建站时得心应手，事半功倍。
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <til></til>
        <div class="cont_pad">
            <img src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvNTE1Y2RhYTQxNDg0YWRiZDY4Mjg1NmU0OGNkZjFlYWYucG5n.png" alt="">
        </div>
        <div class="cont_type">
            <div class="type_bd">
                <div class="type_list" v-for="i in 8">
                    <div class="type_img">
                        <span>O</span>
                    </div>
                    <div class="type_til">
                        跨屏展示
                    </div>
                    <div class="type_text">
                        一个炫酷的网站才配得上创业者的新潮创意.起飞页采用HTML5最新技术,拥有大气舒适的界面和众多精美模板
                    </div>
                </div>
            </div>
        </div>
        <til></til>
        <lists></lists>
        <til></til>
        <map></map>
    </div>
</template>
<script>
import hd from './part/hd.vue';
import til from './part/til.vue';
import lists from './part/list.vue';
import map from './part/map.vue';
export default {
    data() {
        return {}
    },
    methods: {},
    components: {
        hd,
        til,
        lists,
        map
    },
    created() {
        var mySwiper = new Swiper('.cont_txt', {
            effect : 'fade',
            loop: true,
            direction: 'vertical',
            autoplay: true,
        });
    }
}
</script>
<style>
.clearfix::after,
.clearfix::before {
    content: " ";
    margin: " ";
    display: table;
    clear: both;
}
body::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #fdfdfd;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: none;
}

/*定义滚动条轨道 内阴影+圆角*/
body::-webkit-scrollbar-thumb {
    background-color: #379cf4;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

.gsp {
    position: relative;
    z-index: 5;
}

.cont_li {
    background: #fff;
    padding: 30px 140px;
}

.cont {
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-image: url('https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMWYyYjI0N2JjYTc5MjhkYzIyOTRiMjc0M2UyZDI1MWQuanBn.jpg');
    background-position: 0 0%;
}

.cont_list {
    width: 350px;
    float: left;
    margin-right: 62px;

}

.list_img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
}

.list_img img {
    width: 100%;
    height: 100%;
    display: block;
}

.list_text h5 {
    text-align: center;
    font-size: 16px;
    color: #696969;
    line-height: 1.5em;
}

.list_text p {
    font-size: 14px;
    color: #808080;
    line-height: 1.5em;
    margin-top: 15px;
}

.cont_til {
    height: 130px;
    padding: 30px 0;
    box-sizing: border-box;
    background: rgba(0, 0, 0, .4);
    text-align: center;
}

.cont_til h5 {
    font-size: 24px;
    color: rgb(255, 255, 255);
}

.cont_til p {
    font-size: 24px;
    color: rgb(232, 76, 61);
}

.cont_txt {
    height: 120px;
    width: 910px;
    margin: 100px auto;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
}

.cont_lunbo {
    width: 100%;
    height: 310px;
}

.cont_pad {
    margin: 40px 0;
}

.cont_pad img {
    display: block;
    margin: 0 auto;
    width: 760px;
    height: 646px;
}
.type_bd{
	width: 1280px;
	margin: 0 auto;
}
.cont_type {
    width: 100%;
    height: 634px;
    margin: 0 auto;
    padding-top: 200px;
    box-sizing: border-box;
    background-image: url('https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMGIwYWIwZWU0YWRjNDQ5Yjg2YzFhZjMyOWNkZDc1MDYuanBn.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: 0 0%;
    background-color: rgba(0, 0, 0, .4);
}

.type_list {
    width: 320px;
    margin-bottom: 20px;
    float: left;
}

.type_img {
    height: 72px;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    color: #eee;
}

.type_til {
    font-size: 16px;
    color: #D3D3D3;
    text-align: center;
    font-weight: bold;
    padding: 10px 0;
}

.type_text {
    color: rgb(169, 169, 169);
    font-size: 12px;
    text-align: center;
}
</style>