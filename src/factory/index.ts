abstract class Factory {
  advertise ():void{
    const food:Food = this.create()
    console.log(`快来尝尝${this.name}生产的${food.getToast()}${food.name}吧！`)
  }

  abstract name:string
  abstract create ():Food
}

// 申明食物的接口，获取当前食物的味道
interface Food {
    name:string
    getToast():string
}
class IceCream implements Food {
  name:string = '冰淇淋'
  getToast ():string {
    return '甜的'
  }
}
// 番茄酱
class Tomato implements Food {
  name:string = '番茄酱'
  getToast ():string {
    return '酸的'
  }
}
// 生产冰淇淋的工厂
class IceCreamFactory extends Factory {
    name:string = '冰淇淋工厂'
    create ():IceCream {
      return new IceCream()
    }
}
// 生产番茄酱的工厂
class TomatoFactory extends Factory {
    name:string = '番茄酱工厂'
    create ():Tomato {
      return new Tomato()
    }
}

const t:TomatoFactory = new TomatoFactory()
t.advertise()
const i:IceCreamFactory = new IceCreamFactory()
i.advertise()
