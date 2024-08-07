import ciwColorPicker from './src/index.vue'
ciwColorPicker.name = 'ciw-Color-Picker'
ciwColorPicker.install = function(Vue: any) {
    // 注册组件
    Vue.component('ciw-Color-Picker', ciwColorPicker)
}
export default ciwColorPicker
