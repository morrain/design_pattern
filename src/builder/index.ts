interface Builder{
    buildDoor():void // 建造门
    buildWall():void // 建造墙
    buildCeiling():void // 建造屋顶
    buildGarden():void // 建造花园
    buildPool():void // 建造游泳池
}

/**
 * 房屋建造类
 */
class HouseBuilder implements Builder {
    private house:House
    constructor () {
      this.house = new House()
    }

    /**
     * buildDoor
     */
    public buildDoor () {
      this.house.parts.push('Door')
    }

    /**
     * buildWall
     */
    public buildWall () {
      this.house.parts.push('Wall')
    }

    /**
     * buildCeiling
     */
    public buildCeiling () {
      this.house.parts.push('Ceiling ')
    }

    /**
     * buildGarden
     */
    public buildGarden () {
      this.house.parts.push('Gargen')
    }

    /**
     * buildPool
     */
    public buildPool () {
      this.house.parts.push('Pool')
    }

    private reset () {
      this.house = new House()
    }

    /**
     * getHouseh
     */
    public getHouse () {
      const house:House = this.house
      this.reset()
      return house
    }
}

class House {
    public parts:string[]=[]
    public listParts ():void{
      console.log(`House parts: ${this.parts.join(', ')}\n`)
    }
}

class Director {
    private builder:HouseBuilder
    constructor (builder:HouseBuilder) {
      this.builder = builder
    }

    /**
     * buildSampleHouse
     */
    public buildSampleHouse ():void {
      this.builder.buildWall()
      this.builder.buildDoor()
      this.builder.buildCeiling()
    }

    /**
     * name
     */
    public buildFullHouse () {
      this.builder.buildWall()
      this.builder.buildDoor()
      this.builder.buildCeiling()
      this.builder.buildGarden()
      this.builder.buildPool()
    }
}

/** ********* Clint Code ***********/

const builder = new HouseBuilder()
const director = new Director(builder)

console.log('simple basic house:')
director.buildSampleHouse()
builder.getHouse().listParts()

console.log('full featured house:')
director.buildFullHouse()
builder.getHouse().listParts()

// Remember, the Builder pattern can be used without a Director class.
console.log('Custom product:')
builder.buildDoor()
builder.buildPool()
builder.getHouse().listParts()
