<template>
	<div class="home container">
		<div id='content' class='row-fluid'>
  			<div class='span3 sidebar'>
				<router-view name='left'></router-view>
  			</div>
  			<div class='span9 main'>
    	 		<router-view name='right'></router-view>
  			</div>
	</div>	

		</div>
	</div>
</template>
<script>

	export default{
		data(){
			return{
				message:'index'
			}
		}
	}
</script>
<style type="text/css">
	
</style>