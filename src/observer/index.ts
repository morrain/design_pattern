
/**
 * 定义观察者接口，用于更新自己
 */
interface Observer {
    update(version: number) :void
}
/**
 * 定义发布者接口，发布者一般有添加观察者、删除观察者和通知更新的行为
 */
interface Publisher {
    addObserver(o:Observer):void
    delObserver(o:Observer):void
    notify():void
}

/**
 * 苹果零售店：当新品发布时，通知顾客
 */
class AppleStore implements Publisher {
    public currentVersion:number = 4
    private observers: Observer[] = []
    /**
     * addObserver
     */
    public addObserver (o:Observer) {
      const isExist = this.observers.includes(o)
      if (isExist) return console.log('当前顾客已经在通知列表中，请不要重复添加')
      this.observers.push(o)
      console.log(`增加一个顾客，当前共有${this.observers.length}人顾客要通知！`)
    }

    /**
     * delObserver
     */
    public delObserver (o: Observer) {
      const i = this.observers.indexOf(o)
      if (i === -1) return console.log('需要删除的顾客不存在。')
      this.observers.splice(i, 1)
      console.log(`移除一个顾客，当前共有${this.observers.length}人顾客要通知！`)
    }

    public notify () {
      console.log('通知所有订阅到货通知的顾客')
      // 遍历所有 顾客，通知当前手机的版本
      for (const o of this.observers) {
        o.update(this.currentVersion)
      }
    }

    /**
     * 到货业务逻辑
     */
    public arrival (version:number) {
      console.log(`苹果手机到货了，第${version}代！`)
      this.currentVersion = version
      this.notify()
    }
}

class CustomerA implements Observer {
  /**
     * update
     */
  public update (version:number) {
    if (version >= 5) {
      console.log(`第${version}代苹果手机到货了，顾客A 赶紧去银行取钱`)
    }
  }
}

class CustomerB implements Observer {
  /**
       * update
       */
  public update (version:number) {
    if (version > 4) {
      console.log(`第${version}代苹果手机到货了，顾客B 开车去苹果专卖店购买！`)
    }
  }
}

const store = new AppleStore()

const a = new CustomerA()
store.addObserver(a)

const b = new CustomerB()
store.addObserver(b)

store.arrival(5)

store.delObserver(b)

store.arrival(6)
