//1-Crea una función que recibe dos argumentos (from, to) y devuelve un array con todos los números desde 'from' hasta 'to' incluídos. (La única que se puede realizar de manera un poquito más imperativa)

        const range = (a, b)=>{
            const result=[]
            for(let i=a; i<b+1;i++){
                result.push(i)
            }
            return result
        }
        
        arr=[1,2,3,4,5,6,7,8]
        
        console.log(fn(2,7))
   
   //2-Crea un función que recibe un array de números y devuelva la suma de todos ellos
        const fn = arr=> {
        
            let result= arr.reduce((sum, current)=> sum+current,0)
        return result
            }
        array1=[2,2,2]
        
        console.log(fn(array1))
//forma declarativa

        const sumaAllElements= (sum, current)=> sum+current

        const reduceArray = arr=> arr.reduce(sumaAllElements,0)


        const array1= [2,2,2,2]

        console.log(reduceArray(array1))
//esto no es declarativo al parecer
        let arr=[]
        const fn = arr=> arr.reduce((sum, current)=> sum+current,0)

//pon ejemplo para poder testear

   //3-Crea una función que reciba un número y devuelva la mitad

        const fn= (a)=> a/2

        console.log(fn(4))

//4-Crea una función que reciba dos números y divida el primero entre el segundo

        const fn= (a,b)=>a/b

        console.log(fn(6,2))

//5-Crea una función para devolver si un número dado es par

        const fn = a=> a%2 > 0 ? false : true


        console.log(fn(7))
//6-Crea una función para devolver si un número dado es impar

        const fn = a=> a%2 > 0 ? true : false


        console.log(fn(1))

//7-Crea una función que devuelve el primer elemento de un array

        let arr=[]
        const fn = (arr)=>arr.find(element=> arr[0])


        array1=[7,6,8]

        console.log(fn(array1))
        //otra forma de resolverlo
        const fn=(arr)=>arr.shift()

        array1=[3,4,5,6]

        console.log(fn(array1))
//8-Crea una función que devuelva todos los elementos de un array, excepto el primero, en forma de array
//primera manera de hacerlo , a ver si hay otra mejor
        let arrResult= arr => arr.shift()


        arrE= [2,3,4,5]

        arrResult(arrE)

        console.log(arrE)
//mejor manera de hacer el -8-
        const getAllMenusFirst=arr=>{
            arr.shift()
            return arr
            }
        
        arrE= [2,3,4,5]
        
        console.log(getAllMenusFirst(arrE))

//-9-Crea una función que reciba dos números y devuelva si el primero es mayor que el segundo


        const fn = a=> b => a>b //currificada

        const arr=[1,2,4]

        console.log(arr.map(fn(2)))

//10-Crea una función que devuelva la negación de un resultado (mejor currificada, pero si no, no pasa nada)


        const fn= a=>b=> a!==b

        const arr=[2,3,5]

        console.log(arr.map(fn(2)))

//11-Crea una función que devuelva true si los dos argumentos que recibe son verdaderos



        const isPair = a=> a%2 > 0 ? false : true

        const isImpair = a=> a%2 > 0 ? true : false


        const isTrueBoth = (fn1,fn2) =>fn1 || fn2

        console.log(isTrueBoth(isPair(2),isImpair(5)))


//12-Crea una función que reciba dos números y devuelva una tupla (una array de dos elementos)

        let arr=[]
        const giveTupla= (a,b)=>{
        arr.push(a)
        arr.push(b) 
        return arr
        
        }


        console.log(giveTupla(2,3))
//más sencillo
        const giveTupla = (a, b)=>{
            
               return [a, b]   
            }
            

//13-Crea una función que recibe dos listas y devuelve la lista más larga

        const arrLength = arr=> arr.length

        const longestList =(arr1,arr2)=>arrLength(arr1) > arrLength(arr2) ? arr1 : arr2



        array1 = [1,2,3,4]

        array2= [3,4,5,6,7,8]

        console.log(longestList(array1,array2))

  //14-Crea una función ternaria currificada, recibe primero una función y luego dos argumentos. Si la ejecución de la función con los dos argumentos pasa la condición, devuelve a, si no, b

        const fn= fn1=>(a,b)=>fn1(a,b) ? a : b


        const bigger = (a,b) => a>b 


        console.log(fn(bigger)(2,3)) //manera de testear pero que no se utliza

//15-Devuelve la media de una lista de todos los números del 1 al 50



        const length = 50
        const numbersList = Array.from({ length }).map((_, i) => i + 1)

        const sumaAllElements= (sum, current)=> sum+current

        const reduceArray = arr=> arr.reduce(sumaAllElements,0)

        const averageListNum =  arr=> arr.reduce(sumaAllElements,0)/length

        console.log(averageListNum(numbersList))

//-16-Devuelve aquellos números menores de 30 que sean pares en una lista del 1 al 100
  
            const length = 100
            const numbersList = Array.from({ length }).map((_, i) => i + 1)

            const isSmaler30 = a=> a<30 

            const isPair = a=> a%2 === 0 
            
            const isPairAndSmaler30 = element =>
                isPair(element)&&isSmaler30(element)

            const getNumSmaler30FromList=list=>list.filter(isPairAndSmaler30)

            console.log(getNumSmaler30FromList(numbersList))

    //otra manera sin isSmaler30
            const length = 100
            const numbersList = Array.from({ length }).map((_, i) => i + 1)

            const isPair = a=> a%2 === 0 

            const isSmaler = (a,b)=> a<b 

            const isPairAndSmaler30 = element =>isPair(element)&&isSmaler(element,30)
                

            const getNumSmaler30FromList=list=>list.filter(isPairAndSmaler30)

            console.log(getNumSmaler30FromList(numbersList))

  //17-Dadas dos listas, la primera del 1 al 50 y la segunda del 51 al 80, recibidas como argumentos, crea una función que devuelva un array compuesto de tuplas entre ambas listas => [[1, 51], [2, 52], [3, 53], ...]. En caso de no ser iguales, ignoraremos los elementos sobrantes.

        const range = (a, b)=>{
            const result=[]
            for(let i=a; i<b+1;i++){
                result.push(i)
            }
            return result
        }

        const giveTupla = (a, b)=>{
        return [a, b]       
        }

        const tuplaList = (list1, list2) => {
        return list2.map((number, index) => {
        return giveTupla(list1[index], list2[index])
        })
        }

        tuplaList(range(1, 50), range(51, 80))
        //hacer el ejercicio midiendo el largo de los list antes de lanzar la función, ya que list2 tiene que ser las más corta 
        //para que no tengamos sobrantes

        const range = (a, b)=>{
            const result=[]
            for(let i=a; i<b+1;i++){
                result.push(i)
            }
            return result
        }

        const giveTupla = (a, b)=>{
        return [a, b]       
        }


        const arrLength = arr=> arr.length
        const shortesList =(arr1,arr2)=>arrLength(arr1) < arrLength(arr2) ? arr1 : arr2

        const tuplaList = (list1, list2) => {
        return shortesList(list1, list2).map((number, index) => {
        return giveTupla(list1[index], list2[index])
        })
        }

        tuplaList(range(1, 50), range(51, 80))

//-18-Dada la respuesta del ejercicio anterior, devuelve solo el primer número de las tuplas en posición impar ,cuya suma del par sea mayor de 70

            const range = (a, b)=>{
                const result=[]
                for(let i=a; i<b+1;i++){
                    result.push(i)
                } return result
            }
            const isImpair = a=> a%2 !== 0 

            const giveTupla = (a, b)=>{
            if(isImpair(a) && a+b>70){
                    return [a, b]   
             }
            } 

            const arrLength = arr=> arr.length
            const shortesList =(arr1,arr2)=>arrLength(arr1) < arrLength(arr2) ? arr1 : arr2

            const tuplaList = (list1, list2) => {
            return shortesList(list1, list2).map((number, index) => {
            
            return giveTupla(list1[index], list2[index])
            
            })
            }
            const filtered =arr=> arr.filter(function(el){
            return el != null
            });  //esta función elimina lo que no es null o undefine, lo que no tiene un valor

            filtered( tuplaList(range(1, 50), range(51, 80) ) )









