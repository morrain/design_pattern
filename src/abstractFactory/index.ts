
/**
     * 定义家具工厂的抽象类。家具工厂能够生产 椅子、沙发和餐桌
     */
abstract class FurnitureFactory {
        abstract createChair ():Chair
        abstract createSofa():Sofa
        abstract createTable():Table
}
/**
     * 定义一个现代工厂，生产现代风格的家具
     */
class ModernFactory extends FurnitureFactory {
  createChair ():ModernChair {
    return new ModernChair('椅子A')
  }

  createSofa ():ModernSofa {
    return new ModernSofa('沙发A')
  }

  createTable ():ModernTable {
    return new ModernTable('餐桌A')
  }
}
/**
     * 定义一个复古工厂，生产复古风格的家具
     */
class RetroFactory extends FurnitureFactory {
  createChair ():RetroChair {
    return new RetroChair('椅子B')
  }

  createSofa ():RetroSofa {
    return new RetroSofa('沙发B')
  }

  createTable ():RetroTable {
    return new RetroTable('餐桌B')
  }
}

/**
 * 定义家具的抽象接口，
 */
interface Show {
    showName():string
}
abstract class Furniture {
  name:string
  constructor (name:string) {
    this.name = name
  }
}

class Chair extends Furniture {
    legs:number = 4
}
class ModernChair extends Chair implements Show {
  showName ():string {
    return `这是一把叫${this.name}的现代风格的椅子！`
  }
}
class Sofa extends Furniture {
    legs:number = 6
}
class ModernSofa extends Sofa implements Show {
  showName ():string {
    return `这是一把叫${this.name}的现代风格的沙发！`
  }
}
class Table extends Furniture {
    legs:number = 4
}
class ModernTable extends Table implements Show {
  showName ():string {
    return `这是一套叫${this.name}的现代风格的餐桌！`
  }
}

class RetroChair extends Chair implements Show {
  showName ():string {
    return `这是一把叫${this.name}的复古风格的椅子！`
  }
}

class RetroSofa extends Sofa implements Show {
  showName ():string {
    return `这是一把叫${this.name}的复古风格的沙发！`
  }
}

class RetroTable extends Table implements Show {
  showName ():string {
    return `这是一套叫${this.name}的复古风格的餐桌！`
  }
}

function clientCode (factory:FurnitureFactory) {
  const chair:Chair = factory.createChair()
  const table:Table = factory.createTable()
  const sofa:Sofa = factory.createSofa()

  console.log(chair.showName())
  console.log(table.showName())
  console.log(sofa.showName())
}

clientCode(new ModernFactory())
clientCode(new RetroFactory())
