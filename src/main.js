import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'normalize.css/normalize.css';

/**
 * 在vue中全局引入非功能性的scss样式文件很简单，只需要在main.js文件中引入对应文件就行
  但想要在vue中引入功能性（即定义的颜色规范、mixin样式函数等，如下）的scss的样式文件，单单在main.js中引用是无法生效的
  想要全局引入功能性的scss样式文件，就必须在vue.config.js中写下 loaderOptions.sass.additionalData
  注: sass-loader@10+
 */
// import '@/common/style/common.scss';
import '@/common/style/iconfont.scss';
// set 1rem = viewWidth / 10
// import 'amfe-flexible';

createApp(App)
.use(router)
.mount('#app');

