import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/Index'

import leftnav from '@/components/LeftNav'
import rightnav from '@/components/RightNav'

import aboutnav from '@/components/main/About'
import timenav from '@/components/main/Times'
import wordsnav from '@/components/main/Words'
import leavenav from '@/components/main/Leave'
import studynav from '@/components/main/Study'
import gamenav from '@/components/main/Game'



Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      components:{
	      	left:leftnav,
  	    	right:rightnav
      }
    },
    {
      path: '/home',
      name:'home',
      components:{
          left:leftnav,
          right:rightnav
      }
    },
    {
      path: '/about',
      name:'about',
      components:{
          left:leftnav,
          right:aboutnav
      }
    },
    {
      path: '/time',
      name:'time',
      components:{
          left:leftnav,
          right:timenav
      }
    },
    {
      path: '/word',
      name:'word',
      components:{
          left:leftnav,
          right:wordsnav
      }
    },
    {
      path: '/leave',
      name:'leave',
      components:{
          left:leftnav,
          right:leavenav
      }
    },
    {
      path: '/study',
      name:'study',
      components:{
          left:leftnav,
          right:studynav
      }
    },
    {
      path: '/game',
      name:'game',
      components:{
          left:leftnav,
          right:gamenav
      }
    }
  ]
})
