## TypeScript

### 字符串
+ 字符串模板
+ 自动拆分字符串（调用方法，以${}变量进行切割）

### 参数类型
+ 参数后面加冒号指定参数类型    
+ 类型推断：如果没有指定参数类型，会推断它的类型
+ any表示任意类型
+ void 声明方法不需要返回值；当然也可以指定它的返回值（string,number,boolean）
+ 自定义类型： 通过class或interface接口  

### 默认参数
+ 给方法的参数指定默认参数值,函数中默认指定了几个参数，调用的时候就要传入几个；但指定了默认值后可以不传，使用默认值；
> 带默认值的参数一定要声明在参数最后的位置
```ts

function test(a: string, b: string, c:string='zzz') {
    console.log(a)
    console.log(b)
    console.log(c)
}
test('xxx', 'yyy')
```

### 可选参数
> 可选参数必须声明在必选参数后面
```ts
function test(a: string, b?: string, c: string='zzz') {
    console.log(a)
    console.log(b)
    console.log(c)
}
test('xxx')
```

### Rest and Spread操作符
+ 用来什么任意数量的方法参数

### Generator函数
+ 控制代码流程
+ 关键字： yield
```js
function* doSome() {
    console.log('test1')
    yield
    console.log('test2')
} 
var fn  = doSome()
fn.next()
fn.next()
```

### 结构表达式
+ 对象
+ 数组

### 箭头函数
+ 声明匿名函数，消除传统匿名函数的this指针问题
+ forEach for...in for...of
    + forEach
        + 循环的值
        + 不允许打断
        + 不允许自定义添加 arr.addValue = 'test'
    + for...in
        + 循环的键名
    + for...of
        + 忽略后添加属性
        + 可被打断
        + 循环的值
        + 可用于对象、map、set、string

## class
+ 访问控制符：控制类的属性和方法是否能从外部访问
    + public 默认访问控制符：在类的内部、外部都可以被访问到
    + private 只有在类的内部被访问到
    + protected 受保护的：可以在类的内部和子类（继承）中访问到
+ 类的constructor函数
    + 只有在实例化的时候才会被调用，且只会被调用一次    
    + 在constructor中必须指定访问控制符
```ts
//此写法没有声明name属性，所以打印不出name的值
class Person {
    constructor(name: string) {

    }
    eat() {
        console.log(this.name)
    }
}
var p1 = new Person('yang')
//此写法会被Person类创建一个name属性，同时把生成实例传来的参数赋值到name属性上
class Person {
    constructor (public name: string) {

    }
    eat() {
        console.log(this.name)
    }
}
var p1 = new Person('yang')

```
+ 类的继承
    + 关键字： extends
    + 可以获得继承类的所有属性和方法
    + super: 调用父类的构造函数
        super.fn() 调用父类的其它方法，在子类的任何地方都可以调用

## 泛型
> 参数化的类型，一般用来限制集合的内容
```ts
class Person {
    constructor(public name: string) {
        super(name)
    }
    eat() {
        console.log(this.name)
    }
}
var peoples: Array<Person> = []
peoples[0] = new Person('li')
peoples[1] = new Person('wang')
peoples[2] = 2 //错误，因为指定了泛型，只能是Person类型
```

## 接口（interface）
> 建立某种代码约定，使开发者在在调用某个方法或创建类的时候，必须遵循接口所定义的代码约定
+ interface 
    +但你的接口用于调用一个方法的参数的类型声明
+ implements  一个类实现一个接口，必须实现接口里的所有方法、属性
```ts
interface Animal {
    eat()
}
class Sheep implements Animal {
    // 像这样，实现接口的eat方法
    eat(){
        console.log('eat')
    }
} 
```

## 模块（在stypescript中一个文件就是一个模块）
> 实现可复用的模块单元
+ 关键字： export import

## 注解
## 类型定义文件 （*.d.ts）
> 用来帮助开发者在TypeScript中使用已有的javascriptg工具包、三方js包，如：jQeury
+ 类型定义包查找下载 [http://definitelytyped.org/](http://definitelytyped.org/)
+ 工具： [https://github.com/typings/typings](https://github.com/typings/typings)