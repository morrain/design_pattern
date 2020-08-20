interface Clone {
    clone():void
}
class Country implements Clone {
  name:string // 国家的名字
  currency:string // 国家的货币描述   '人民币'，'美元'等
  constructor (name:string, currency:string) {
    this.name = name
    this.currency = currency
  }

  clone ():Country {
    const country:Country = Object.create(this)
    country.name = this.name
    country.currency = this.currency
    return country
  }
}

class Money implements Clone {
    country:Country
    faceValue:number
    constructor (faceValue:number, country:Country) {
      this.faceValue = faceValue
      this.country = country
    }

    clone ():Money {
      const money = Object.create(this)
      money.faceValue = this.faceValue
      money.country = this.country.clone()
      return money
    }
}

const c1:Country = new Country('中国', '人民币')
const m:Money = new Money(10, c1)
const m1:Money = m.clone()
m1.faceValue = 20
m1.country.name = '墨西哥'

if (m !== m1) {
  console.log('m 和 m1 不是同一个对象')
}
console.log(`m 的面值为 ${m.faceValue} m1 的面值为 ${m1.faceValue}`)
console.log(`m 的国家为 ${m.country.name} m1 的国家为 ${m1.country.name}`)
