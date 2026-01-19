import {createApp} from 'vue'
// import './style.css'
import './root.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import NaiveUi from 'naive-ui'
import ElementPlus from 'element-plus'
const app = createApp(App)
// import DynamicForm from 'dynamic-form-vue3'
// import 'dynamic-form-vue3/dynamic-form-vue3.css'
// app.use(DynamicForm)
app.use(NaiveUi)
app.use(ElementPlus)
app.mount('#app')
