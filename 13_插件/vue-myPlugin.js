/*
    自定义的Vue插件模块
*/
(function (window) {

    //定义一个插件对象
    const MyPlugin = {}
    //插件对象必须要有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 1. 给Vue添加工具/静态方法   添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log('Vue.myGlobalMethod()')
        }
      
        // 2. 定义全局指令    添加全局资源
        Vue.directive('my-directive', (el, binding) => {
            el.textContent = binding.value + "----atguigu"
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
          // 逻辑...
          console.log('vm.$myMethod()')
        }
      }
    //暴露插件
    window.MyPlugin = MyPlugin

})(window)