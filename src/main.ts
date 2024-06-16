import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import router from './router'

const app = createApp(App);

app.use(Antd)
app.use(router)
app.mount('#app')
