<template>
  <div id="app">
    <router-view></router-view>
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
  </div> 
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fcfcfc;
  height: 100%;
  zoom: 1;
}
.home,.row-fluid{
    height: 100%;
    /*background-color: #EFEFEF;*/
    padding-top: 10px;
  }
  .sidebar{
    height: 98%;
    background-color:#464646;
    box-shadow: 1px 3px 5px #888;
    border-radius:5px;
  }
  .main{
    height: 100%;
    border-radius:5px;
    /*overflow-y: hidden;*/
    box-shadow: 1px 3px 5px #888;
    overflow-y: scroll;
    background-color: greenyellow;
  }

</style>
