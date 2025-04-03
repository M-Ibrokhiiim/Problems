// Sum of two number

function sumOfNumbers(a,b){
    return a+b
}

console.log(sumOfNumbers(2121,121));

// Find largest number

function findMaxNumber(a,b,c){
    return Math.max(a,b,c)
}


console.log(findMaxNumber(121,11,1));

function findMaxNumber2(...numbers){
    return Math.max(...numbers)
}


console.log(findMaxNumber2(121,12221,31213131,1211124,4,4,41,23,123,123,123111111111));


// Reverse of words

function reverseOfWord(word){
    return word.split("").reverse().join('')
}

console.log(reverseOfWord("Anvarbee",'Diyorbee'));




// Find max number from in Array


const arr1=[1,23,124,23423,5432,234,122,999]
const arr2=[1231,1231231231,1343333333312,1231231231412,123123112]

function findMaxArr(array){
    let a=array.sort((a,b)=>{
        return a-b
    })
    return a[a.length-1]
}
console.log(findMaxArr(arr2))

// Find letters which is same letters contained in the 2 diffirent words


let word1='MrIbrokhim'
let word2='mihkorbIrM'


function wordChecker(word1,word2){
    let array1=Array.from(word1).sort()
    let array2=Array.from(word2).sort()    
    
    if(array1.length !== array2.length) return false

    return array1.every((value,index)=>{
         return value===array2[index]
    })
}


console.log(wordChecker(word1,word2));


function wordChecker2(word1,word2){

    if(word1.length !== word2.length) return false

    return word1.split("").sort().join("") === word2.split("").sort().join("")

}


console.log(wordChecker2(word1,word2));




// Add two array into one if there is not exist first of element into second array

const arrayFirst=[1,2,3,4,5,5]
const arraySecond=[5,6,7,8,9,1]


function checkTwoArray(arr1,arr2){
    const newArray=arrayFirst.concat(arraySecond)
    console.log(newArray);

    return newArray
    
    
}

checkTwoArray(arrayFirst,arraySecond)

let string='wd3292342sdsd131231111111111111111111111112d23sadasdas12w123123123112'

function numbRecude(a){
    let array=Array.from(string)
    
    let changingTypesOfArrayElement=array.map(element=>{

        return   Number(element)
    })


    let numbers=changingTypesOfArrayElement.filter(element=>{
        return element>0
    })

    const overall=numbers.reduce((a,b)=>{
        return a+b
    })
    
    
    return overall
    
    
}

console.log(numbRecude(string))



let array=[0,1,2,3,4]

 function findMissedNumber(arr){
    let naturalNum=arr.length
    let nutNumSum=((naturalNum*(naturalNum+1))/2)

    let actualSum=arr.reduce((a,b)=>{
        return a+b
    })

    return  nutNumSum-actualSum
 }


 console.log(findMissedNumber(array));

let a='qwertyuiopasdfghjklzxcvbnm'
let b='1214234124123412'
 function randomNumber(){
    let password=''
    
    password+=a[Math.floor(Math.random()*a.length)]
    password+=b[Math.floor(Math.random()*b.length)]
    console.log(typeof a);
    
    return password
 }
 
 console.log(randomNumber());



let object={
    name:121
}

console.log(object);


let aType=false
console.log(aType);


let appealtoDiv=document.getElementById('a')

appealtoDiv.addEventListener('click',function(e){
    if(e.target.classList.contains('1212')) console.log(e.target.textContent);
    
})
// 


appealtoDiv.addEventListener('mousemove',(e)=>{
if(e.target.tagName==='BUTTON'){
    alert(e.target.textContent)
}
if(e.target.tagName==='A'){
    alert(e.target.textContent)
}
})

// Object.is()

console.log(Object.is(25,25));
console.log(Object.is("10",10));
console.log(Object.is(0,-0));
console.log(0===-0);





// findLargestNUmber()

const array121=[1,2,4,6,8,9,11,33,22,345,555,900,1000]
function largestNumber(array){
    let max=array[0]
    for(let i=1; i<array.length;i++){
        if(array[i]>max){
            max=array[i]
        }
    }

    return max
}

console.log(largestNumber(array121));
for (let i=2; i<1;i++){
console.log('Hello'+[i])
} 
 


let aaa=[]
const bbb=[]
for(let i=1;i<=20;i++){
console.log(i+12312);
}
console.log(aaa);
console.log(bbb);



function reducer(){
let a121=0

for(let i=0; i<=10;i++){
    a121+=i
}
console.log(a121);
}

reducer()

for(let i=300; i>298;i--){
    console.log(i);
}

let arrrrrrrrray=['Granade','Pomegranate','Potato','Tomato','Fri']

for(let i=0; i<arrrrrrrrray.length;i++){
    if(arrrrrrrrray[i]==='Fri'){
      console.log(arrrrrrrrray[i]+"==="+'Fri with' + "" + arrrrrrrrray.indexOf(arrrrrrrrray[i])+"Index");
    }else{
        console.log(arrrrrrrrray[i] +""+"is not same with Fri");  
    }
    
}



// From 10 to 1

for(let i=10;i>1;i--){
    console.log(i);
}

// Sum calculation of odd numbers
let nummmer=0
for(let i=1;i<20;i++){
    if(i%2===0){
        nummmer+=i
    }
}

console.log(nummmer);

// Write a function that finds the sum of numbers from 1 to N.

function findsTheSum(n){
    let sum=0
    for(let i=1; i<=n;i++){
       sum+=i
    }

    return sum
}

console.log(findsTheSum(123412));

// multiplication table of 7 using a for loop.

function multification(numTimes){
    let table=''
    for(let i=1;i<=10;i++){
        table+=`${numTimes} x ${i}=${numTimes*i}\n`
    }

    return table
}

console.log(multification(3));

// Try printing the multiplication table in reverse order (from 10 to 1). 🚀 Let me know when you're done!

function multificationTable(timeNum){
    let table=''

    for(let num=10;num>=1;num--){
      table+=`${timeNum}x ${num}=${timeNum*num}\n`
    }

    return table
}

console.log(multificationTable(9));


// Write a function that counts how many even numbers exist between 1 and N using a for loop.

function findEvenNums(N){
  let counter=0

  for(let i=1;i<=N;i++){
    if(i%2===0){
        counter++
    }
  }
   
  return counter
}

console.log(findEvenNums(121));

// Try writing a function to find the sum of all even numbers between 1 and N. Let me know when you're done! 💯
function sumOfEvenNum(N){
    let evenNumbers=[]
    let sum=0
    for(let i=1; i<=N; i++){
        if(i%2==0){
            sum+=i
            evenNumbers.push(i)
        }
    }

    let result=`There are even numbers:[${evenNumbers}]\n Sum of even numbers:${sum}`

    return result
}


console.log(sumOfEvenNum(120));
// Challenge: Find the largest number in an array using a for loop.
const array123121=[123,12412,12312,314212,4123111111111123,12312,31241,23124,1231,111]

function findLargestNUmbers(arr){
  let largestNumber=[]

  for(let i=0;i<arr.length;i++){
    largestNumber.push(arr[i])
  }

  return largestNumber.sort((a,b)=>{
    return a-b
  })[largestNumber.length-1] 
}

console.log(findLargestNUmbers(array123121));
