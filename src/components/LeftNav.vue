<template>
	<div>
		<logo></logo>
		<release></release>
		<menunav></menunav>
		<searchnav></searchnav>
	</div>
	
</template>
<script>
import logo from './slider/Logo'
import release from './slider/Release'
import menunav from './slider/MenuNav'
import searchnav from './slider/SearchNav'

	export default{
		data(){
			return{
				message:'left'
			}
		},
		components:{
			logo,release,menunav,
			searchnav
		}
	}
</script>
<style type="text/css">

</style>