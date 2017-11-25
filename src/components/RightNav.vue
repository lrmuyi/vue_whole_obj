<template>
	<div class="col-md-12">
		<h1 class="page-header text-left">
		 		<strong>
		 			语录		
		 		</strong>
		 	</h1>
		<div class="row">
		 	<div id="myCarousel" class="carousel slide">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" 
            class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>   
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
        <div class="item active">
            <img  src="../assets/imgs/carousel-imgs/3.jpg" width="180" alt="First slide">
        </div>
        <div class="item">
            <img src="../assets/imgs/carousel-imgs/6.jpg" width="180" alt="Second slide">
        </div>
        <div class="item">
            <img src="../assets/imgs/carousel-imgs/5.jpg" alt="Third slide">
        </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a class="carousel-control left" @click="Carousel" href="#myCarousel" 
        data-slide="prev">&lsaquo;</a>
    <a class="carousel-control right" @click="Carousel" href="#myCarousel" 
        data-slide="next">&rsaquo;</a>
    <!-- 控制按钮 -->
    <div style="text-align:center;">
        <input type="button" class="btn start-slide" value="Start">
        <input type="button" class="btn pause-slide" value="Pause">
        <input type="button" class="btn prev-slide" value="Previous Slide">
        <input type="button" class="btn next-slide" value="Next Slide">
        <input type="button" class="btn slide-one" value="Slide 1">
        <input type="button" class="btn slide-two" value="Slide 2">            
        <input type="button" class="btn slide-three" value="Slide 3">
    </div>
</div> 

		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				message:'home'
			}
		},
		methods:{
			Carousel:function(){
			$(function(){
		        // 初始化轮播
		        $(".start-slide").click(function(){
		            $("#myCarousel").carousel('cycle');
		        });
		        // 停止轮播
		        $(".pause-slide").click(function(){
		            $("#myCarousel").carousel('pause');
		        });
		        // 循环轮播到上一个项目
		        $(".prev-slide").click(function(){
		            $("#myCarousel").carousel('prev');
		        });
		        // 循环轮播到下一个项目
		        $(".next-slide").click(function(){
		            $("#myCarousel").carousel('next');
		        });
		        // 循环轮播到某个特定的帧 
		        $(".slide-one").click(function(){
		            $("#myCarousel").carousel(0);
		        });
		        $(".slide-two").click(function(){
		            $("#myCarousel").carousel(1);
		        });
		        $(".slide-three").click(function(){
		            $("#myCarousel").carousel(2);
		        });
		    });	
			}
		}
	}
</script>