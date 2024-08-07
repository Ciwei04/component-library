import ciwColorPicker from './src/index.vue'
ciwColorPicker.name = 'ciw-ColorPicker'
ciwColorPicker.install = function(Vue: any) {
    // 注册组件
    Vue.component('ciw-ColorPicker', ciwColorPicker)
}
export default ciwColorPicker
