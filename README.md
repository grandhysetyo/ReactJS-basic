## ES 6 Javascript 
### Variabel
Terdapat 3 Variable : \ 
var, let, const \
var dan let hampir sama \
const = konstanta

### Sifat Variabel ES6
<p align="center">
  <img src="https://miro.medium.com/max/1230/1*sUBeBuOB8pAuMPfw9BQmvA.png" width="350" title="Sifat Variabel">  
</p>
1. Redeclare \
Contoh: \
Bisa (output: 3000)
```
    var harga = 2000
    var harga = 3000
    console.log(harga)
```
Tidak bisa 
```
    let/const harga = 2000
    let/const harga = 3000
```

2. Hoisting \
Contoh : \
Bisa (output: 2000)
```
    x = 2000
    var x
    console.log(x)
```
Tidak Bisa (output: ReferenceError)
```
    x = 2000
    let/const x
    console.log(x)
```

3. Block Scope \
Contoh : \ 
Bisa (output: 5)
```
   var a = 2000
   if(true){
       var a = 5
   }
   console.log(a)
```
Tidak Bisa (output: 2000)
```
   let/const a = 2000
   if(true){
       let/const a = 5
   }
   console.log(a)
```

4. Global Props \
Jika lupa deklarasi variabel var, const, atau let akan dianggap var
```
    a = 2000
    if(true){
        a = 5
    }
   console.log(a) => 6
```
