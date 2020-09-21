/**
 * 桥接模式通常会于开发前期进行设计， 使你能够将程序的各个部分独立开来以便开发。
 * 另一方面， 适配器模式通常在已有程序中使用， 让相互不兼容的类能很好地合作。
 */

/**
 * 实现形状的抽象基类
 */
class Shape {
    protected color: Color
    constructor (color: Color) {
      this.color = color
    }

    /**
     * 生产一个带颜色的形状
     */
    public build ():string {
      const color = this.color.fill()
      return `Shape: build a ${color} Shape`
    }
}

class Circle extends Shape {
  /**
     * 生产一个带颜色的圆形
     */
  public build () :string {
    const color = this.color.fill()
    return `Circle: build a ${color} Circle`
  }
}

class Square extends Shape {
  /**
     * 生成一个带颜色的方形
     */
  public build ():string {
    const color = this.color.fill()
    return `Square: build a ${color} Square`
  }
}

/**
 * 定义颜色的接口
 */
interface Color {
    fill(): string
}

class Yellow implements Color {
/**
 * 填充黄色
 */
  public fill (): string {
    console.log('当前正在填充黄色')
    return 'yellow'
  }
}

class Blue {
/**
 * 填充蓝色
 */
  public fill () {
    console.log('当前正在填充蓝色')
    return 'blue'
  }
}
/**
 * 客户端代码
 */
function clientCode (shape: Shape) {
  // ..

  console.log(shape.build())

  // ..
}

/**
 * 生成一个黄色的圆形
 */
const yellow = new Yellow()
const circle = new Circle(yellow)
clientCode(circle)

console.log('')

/**
 * 生成一个蓝色的方形
 */
const blue = new Blue()
const square = new Square(blue)
clientCode(square)

/**
 * ------- 使用桥接模式后，你会发现在任何一个维度上增加一个类型，只需要增加这个类型就行，其它代码都不用改动 --------
 */
