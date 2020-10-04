import Vue from 'vue'
import VueI18n from 'vue-i18n'
import customZhCn from './lang/en-CN'
import customZhTw from './lang/zh-TW'
import customEnUs from './lang/en-US'
import zhCnLocale from 'view-design/src/locale/lang/zh-CN'
import enUsLocale from 'view-design/src/locale/lang/en-US'
import zhTwLocale from 'view-design/src/locale/lang/zh-TW'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = window.localStorage.lang || localLang || 'zh-CN'

// 设置语言为系统语言
Vue.config.lang = lang

// vue-i18n 6.x+写法
Vue.locale = () => {}
const messages = {
    'zh-CN': Object.assign(zhCnLocale, customZhCn),
    'zh-TW': Object.assign(zhTwLocale, customZhTw),
    'en-US': Object.assign(enUsLocale, customEnUs)
}
const i18n = new VueI18n({
    locale: localStorage.getItem("lang") || lang,
    messages
})
export default i18n