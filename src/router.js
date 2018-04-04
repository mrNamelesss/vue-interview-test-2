import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue'
import AssetHealth from '@/views/Home/AssetHealth/AssetHealth.vue'
import TorqueProfile from '@/views/Home/AssetHealth/TorqueProfile/TorqueProfile.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'asset-health',
          name: 'asset-health',
          component: AssetHealth,
          children: [
            {
              path: 'torque-profile',
              name: 'torque-profile',
              component: TorqueProfile
            }
          ]
        },
      ]
    },
    {
      path: '*',
      redirect: '/asset-health/torque-profile'
    }
  ]
})
