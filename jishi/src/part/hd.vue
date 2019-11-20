<template>
    <div>
        <div class="hd gsp">
            <div class="hd_til ">
                <h3>起飞页自助建站平台</h3>
            </div>
            <div class="hd_text swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">与创业为伴,点亮创新,<span>是云建站的使命.</span></div>
                    <div class="swiper-slide">云建站自助平台,<span>成就梦想</span></div>
                    <div class="swiper-slide">与创业为伴,点亮创新,<span>是云建站的使命.</span></div>
                    <div class="swiper-slide">云建站自助平台,<span>成就梦想</span></div>
                </div>
            </div>
            <div class="hd_btm">
                <h4>自助建站平台</h4>
                <div class="hd_btm_img">
                    <img v-for="i in 6" src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDcvYjgxZjYwZjI5NWFlMzgzODExMzliNDU2ZTkwMGUyYTEtNDd4NDcucG5n.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,
        })
    }
}
</script>
<style scoped>
.hd {
    height: 700px;
    /*position: relative;
    z-index: 5;*/
    background-image: url('https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDMvNzIzNGQ1MjBkZjBiODhiMDIwYTc3ZmYwZjk1MGM3OGEuanBn.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: 0 0%;
}

.hd_til {
    padding-top: 240px;
    height: 80px;
    text-align: center;
    font-size: 60px;
    font-weight: 400;
    color: #ffffff;
}

.hd_text {
    width: 700px;
    height: 100px;
    border-style: solid;
    border-width: 2px;
    border-left: 2px;
    border-right: 2px;
    margin: 30px auto;
    border-color: #fff;
}

.hd_text .swiper-slide {
    text-align: center;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.hd_text .swiper-slide span {
    color: #e84c3d;
}

.hd_text .swiper-slide:hover {
    cursor: pointer;
}

.hd_btm {
    width: 300px;
    margin: 56px auto;
}

.hd_btm h4 {
    font-size: 26px;
    text-align: center;
    color: rgb(255, 255, 255);
    padding-bottom: 18px;
}

.hd_btm_img {
    height: 50px;
}

.hd_btm_img img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    float: left;
}
</style>