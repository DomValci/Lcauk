import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import SmartTable from 'vuejs-smart-table'

Vue.use(SmartTable)
Vue.use(Vuetify)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')