abstract class Item {
    private parent:Item|null = null
    /**
     * setParent
     */
    public setParent (item:Item|null):void {
      this.parent = item
    }

    /**
     * getParent
     */
    public getParent ():Item|null {
      return this.parent
    }

    /**
     * getPrice  获取当前节点的价格
     */
    public abstract getPrice():number
}

class Product extends Item {
  private price:number = Math.random() * 100
  public getPrice ():number {
    console.log(`Product price: ${this.price}`)
    return this.price
  }
}

class Box extends Item {
    private children:Item[] = []
    /**
     * getPrice
     */
    public getPrice ():number {
      let price = 0
      for (const child of this.children) {
        price += child.getPrice()
      }
      console.log(`Box price: ${price}`)
      return price
    }

    /**
     * add
     */
    public add (item:Item) {
      this.children.push(item)
      item.setParent(this)
    }

    /**
     * remove
     */
    public remove (item:Item) {
      this.children.splice(this.children.indexOf(item), 1)
      item.setParent(null)
    }
}

function clientCode (item:Item) {
  console.log(`Price: ${item.getPrice()}`)
}

const simple = new Product()
clientCode(simple)

const box = new Box()
const i1 = new Box()
const l1 = new Product()
const l2 = new Product()
i1.add(l1)
i1.add(l2)

const i2 = new Box()
const l3 = new Product()
const l4 = new Product()
i2.add(l3)
i2.add(l4)

const l5 = new Product()

box.add(i1)
box.add(i2)
box.add(l5)

clientCode(box)
