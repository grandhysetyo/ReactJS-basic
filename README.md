## ES 6 Javascript 
### Variabel
Terdapat 3 Variable : \ 
var, let, const \
var dan let hampir sama \
const = konstanta

### Sifat Variabel ES6
<p align="left">
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

### Map, Filter dan Reduce
Map: \
cara lama:
```
var task_names = [];
 
tasks.forEach(function (task) {
 
    task_names.push(task.name);
     
});
```
menggunakan Map:
```
var task_names = tasks.map(function (task, index, array) {
    return task.name; 
});
```
ES6:
```
var task_names = tasks.map((task) => task.name );
```

Filter: \
cara lama:
```
var difficult_tasks = [];
 
tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});
```
menggunakan Filter:
```
var difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});
```
ES6:
```
var difficult_tasks = tasks.filter((task) => task.duration >= 120 );
```

Reduce: \
cara lama:
```
var numbers = [1, 2, 3, 4, 5],
    total = 0;
     
numbers.forEach(function (number) {
    total += number;
});
```
menggunakan reduce:

```
var numbers = [1, 2, 3, 4, 5],
    total = 0;
var total = numbers.reduce(function (previous, current) {
    return previous + current;
}, 0);
```
ES6:
```
var total_time = tasks.reduce((previous, current) => previous + current );
```


## React JS - Basic
### Props dan State
Perbedaan props dan state \
Props 
1. Read only
2. Tidak bisa dimodifikasi

State 
1. State bisa dimodifikasi, bisa async
2. Bisa dimodif dengan this.setState atau useEffect

Contoh useEffect:
```
    function Movie(props){
        const [movies, setMovie] = useState([])
        useEffect(()=>{
            async function fetchData(){
                const request = await axios.get(props.url)
                setMovie(request.data.results)
            }
            fetchData()
        }, [props.url])
        console.log(movies)
        return(
            <div className="App">
            </div>
        )
    }
```

Contoh this.setState:
```
    export default class Content extends Component {
        constructor(props){
            super(props)
            this.state = {
                makanan : "Bakso"
            }
        }
        render() {
            return (
                <div>
                    <h2>{this.state.makanan}</h2>
                    <button onClick={()=> this.setState({makanan: "Soto"})}>Change</button>
                </div>
            )
        }
    }
```
### Lifecycle React JS
<p align="left">
  <img src="https://miro.medium.com/max/4516/1*552z6hbX_b648DjpTLHZNg.png" width="350" title="React JS Lifecycle">  
</p>