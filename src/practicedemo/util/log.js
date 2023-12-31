export function log(type){
    return function (target,name,descriptor){
        let oldValue = descriptor.value
        descriptor.value = function(){
            //日志统一上报
            console.log(`日志上报 ${type}`)
            //执行原有的方法
            return oldValue.apply(this,arguments)
        }

        return descriptor
    }

}