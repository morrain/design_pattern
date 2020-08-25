
/**
 * 定义能直接与业务客户端交互的接口
 */
interface Target {
     request ():string
}
/**
 * 模拟实现客户端的代码
 * @param target 能与客户交互的类
 */
function client (target:Target) {
  const result:string = target.request()
  console.log(result) // 打印出 target 对象中 request 请求返回的数据
}

/**
 * 定义实现了Target接口的类，所以它能直接与 Client 交互
 */
class ClientFriendly implements Target {
  request ():string {
    return 'ClientFriendly: The default target\'s behavior.'
  }
}

console.log('来看看 Client 直接与 ClientFriendly 的交互：')

client(new ClientFriendly())

console.log('')

/**
 * 定义不能与 Clint直接交互的类，它定义了一个 特殊的方法，返回的是倒序的字符串，客户端不能正确识别(打印出来也看不懂)
 * 于是需要为 ClientUnFriendly 设计一个适配器，对其返回的数据进行转化，转化成 Client 能识别的数据返回给 Client
 */
class ClientUnFriendly {
  specificRequest ():string {
    return '.eetpadA eht fo roivaheb laicepS'
  }
}

/**
 * 定义一个适配器，实现了 Target接口，所以能直接被 Client使用
 * 同时在构造该适配器，把 ClientUnFriendly 类的不能与 Client 直接交互的实例，变成成员变量
 */
class Adapter implements Target {
  private specificTarget: ClientUnFriendly
  constructor (specificTarget:ClientUnFriendly) {
    this.specificTarget = specificTarget
  }

  request ():string {
    const originR = this.specificTarget.specificRequest()
    const finalR = originR.split('').reverse().join('')
    return `Adapter: (TRANSLATED) ${finalR}`
  }
}

console.log('来看看 Client 通过 Adapter 间接与 UnClientFriendly 的交互：')

const specificTarget = new ClientUnFriendly()
const adapter = new Adapter(specificTarget)

client(adapter)

console.log('')
