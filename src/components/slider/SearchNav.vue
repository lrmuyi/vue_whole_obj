<template>
	<div class="col-md-12 serachnav">
		<div class="row">
			<div class="col-md-10 col-md-push-1 ">
					<div class="input-group">
				      <input type="text" class="form-control" placeholder="搜索">
				      <span class="input-group-btn">
				      	<button class="btn btn-danger">
				      		<span class="glyphicon glyphicon-search"></span>
				      	</button>
				      </span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				message:''
			}
		}
	}
</script>
<style type="text/css" scoped>
	.serachnav{
		padding: 20px 0 20px 0;
		font-size: 14px;
		border-top: 1px solid #333;
		border-bottom: 1px solid #333;
	}
	.form-control{
		height: 20px;
	}
	.glyphicon .glyphicon-search{
		font-size: 12px;
	}
</style>