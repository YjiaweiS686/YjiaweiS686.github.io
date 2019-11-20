<template>
	<div>
		<div class="list">
			<div class="list_y_til">
				<p>
					<span>风景</span>
					<span>野外</span>
					<span>建筑</span>
				</p>
			</div>
			<div class="list_y_cont">
				<ul class="clearfix">
					<li v-for="i in 8">
						<img src="https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMTQ1NTY0OTU4ODE0NTU2NDk0MTNiZzUtNDAweDMwMC5qcGc_p_p100_p_3D.jpg" alt="">
					</li>
				</ul>
			</div>
		</div>	
	</div>
</template>

<script></script>

<style>
	.list{
		width: 1200px;
		padding-top: 20px;
		margin: 0 auto;
	}
	.list_y_til{
		padding-bottom:20px;
		text-align: center
	}
	.list_y_til span{
		display: inline-block;
		color:#333;font-size:12px;
	}
	.list_y_cont ul li{
		float: left;
		width: 286px;
		height: 214px;
		margin: 5px;
	}
	.list_y_cont ul li img{
		width: 100%;
		height: 100%;
	}
</style>