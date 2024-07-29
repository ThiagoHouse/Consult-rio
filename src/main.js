// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue' 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Importe os arquivos CSS Bootstrap e BootstrapVue (a ordem é importante) 
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'
import DefaultLayout from '~/layouts/Default.vue'

// Disponibilize o BootstrapVue em todo o seu projeto
Vue.use(BootstrapVue)
// Opcionalmente instale o plugin de componentes de ícones BootstrapVue 
Vue.use(IconsPlugin)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
