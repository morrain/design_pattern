/**
 * TypeScript 代理模式讲解和代码示例
 */

/*
*****

代理是一种结构型设计模式， 让你能提供真实服务对象的替代品给客户端使用。 代理接收客户端的请求并进行一些处理 （访问控制和缓存等）， 然后再将请求传递给服务对象。

为什么要控制对于某个对象的访问呢？ 举个例子： 有这样一个消耗大量系统资源的巨型对象， 你只是偶尔需要使用它， 并非总是需要。
你可以实现延迟初始化： 在实际有需要时再创建该对象。 对象的所有客户端都要执行延迟初始代码。 不幸的是， 这很可能会带来很多重复代码。
在理想情况下， 我们希望将代码直接放入对象的类中， 但这并非总是能实现： 比如类可能是第三方封闭库的一部分。

代理对象拥有和服务对象相同的接口， 这使得当其被传递给客户端时可与真实对象互换。

当你希望在无需修改客户代码的前提下于已有类的对象上增加额外行为时， 该模式是无可替代的。

通常情况下， 代理会对其服务对象的整个生命周期进行管理

*****
 */

/**
  * 定义请求的接口
  */
interface Http {
    /**
     * request
     */
     request() :void
}

class Server implements Http {
  /**
     * request
     */
  public request () {
    console.log('发送请求...')
  }
}

function client (http:Http) {
  http.request()
}

const server = new Server()
client(server)

/*******************************************/

/**
 * 实现的代理类就是在不改变之前类的基础上，做一些额外的事情，譬如 校验，缓存，上报记录等等
 */
class ProxyClass implements Http {
  /**
     * 检查是否登陆，登陆用户才允许发送请求
     */
  private checkLogin () {
    return Math.random() > 0.5
  }

  private report () {
    console.log('开始上报请求的时间...')
  }

  /**
     * 使用代理模式，可以在需要的时候才创建实际的对象
     */
  public request () {
    if (this.checkLogin()) {
      console.log('通过代理发送请求...')

      const server = new Server()
      this.report()
      server.request()
    } else {
      console.log('当前未登陆，不能发送请求，正在为您跳转到登陆页...')
    }
  }
}

const proxy = new ProxyClass()
client(proxy)
