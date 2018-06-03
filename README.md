## TypeScript

### 字符串
+ 字符串模板
+ 自动拆分字符串（调用方法，以${}变量进行切割）

### 参数类型
+ 参数后面加冒号指定参数类型    
+ 类型推断：如果没有指定参数类型，会推断它的类型
+ any表示任意类型
+ void 声明方法不需要返回值；当然也可以指定它的返回值（string,number,boolean）
+ 自定义类型： 通过class或inerface接口  

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

### Rest and Spred操作符
