<template>
	<div class="col-md-12 menunav">
		<div class="col-md-12  menu">
			<ul class="list-group text-left">
			    <li class="list-group-item">
			    	<router-link to="/home">
			    		首页
						<!-- <span class="caret pull-right"></span> -->
						<span class="glyphicon glyphicon-chevron-right pull-right"></span>

					</router-link>

				</li>
				<li class="list-group-item">
			    	<router-link to="/about">
			    		关于
						<span class="glyphicon glyphicon-chevron-right pull-right"></span>
						<!-- <span class="caret pull-right"></span> -->
					</router-link>
				</li>
				<li class="list-group-item">
			    	<router-link to="/word">
			    		<a href="#">
			    		说说
						<span class="glyphicon glyphicon-chevron-right pull-right"></span>
						<!-- <span class="caret pull-right"></span> -->
					</a>
					</router-link>
				</li>
				<li class="list-group-item">
			    	<router-link to="/time">
			    	<a href="#">
			    		时光轴
						<span class="glyphicon glyphicon-chevron-right pull-right"></span>
						<!-- <span class="caret pull-right"></span> -->
					</a>
				</router-link>
				</li>
				<li class="list-group-item">
			    	<router-link to="/study">
			    	<a href="#">
			    		学习
						<span class="glyphicon glyphicon-chevron-right pull-right"></span>
						<!-- <span class="caret pull-right"></span> -->
					</a>
				</router-link>
				</li>
				<li class="list-group-item">
			    	<router-link to="/game">
			    	<a href="#">
			    		娱乐
						<span class="glyphicon glyphicon-chevron-right pull-right"></span>
						<!-- <span class="caret pull-right"></span> -->
					</a>
				</router-link>
				</li>
				<li class="list-group-item">
			    	<router-link to="/leave">
			    	<a href="#">
			    		在线留言
						<span class="glyphicon glyphicon-chevron-right pull-right"></span>
						<!-- <span class="caret pull-right"></span> -->
					</a>
				</router-link>
				</li>
				
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				message:'menunav'
			}
		}
	}
</script>
<style type="text/css">
	.menunav{
		padding-top: 15px;
	}
	.list-group-item{
		background-color: #373737;
		font-size: 18px;
		border: 0 none;
		margin-bottom: 3px;

	}

</style>