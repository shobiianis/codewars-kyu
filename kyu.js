
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

function paperwork(n, m) {
    if(n>0 && m>0){
      return (n*m)
    }
    else{
      return 0
    }
  }

//   https://www.codewars.com/kata/555a67db74814aa4ee0001b5

function testEven(n) {
    return( 
     n%2===0 ? true : false 
    )  
    }

//   https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function evenOrOdd (number){
    let integar=number;
    return(
    integar%2===0? "Even" : "Odd" )
    
  }

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
    findSmallestInt(args) {
   let smallest=args[0]
      
      args.forEach((item)=>{
        if(smallest>item){
          smallest=item
        }
           
      })
      return smallest
    }
  }

//  https://www.codewars.com/kata/570e8ec4127ad143660001fd
  function billboard(name, price = 30){
 
    let total=0;
    for(let i=0;i<name.length;i++){
      total=total+price
    }
   return total  
    
  } 

  //https://www.codewars.com/kata/57ab3c09bb994429df000a4a

  function twoHighest(arr) {
  if (arr.length===0)  return [] 
  
  if (arr.length===1){
  return arr
  }
  let largest=[]
  largest.unshift(largestFinder(arr))
  
  newarr=arr.filter((item)=>{
    // console.log(largest)
    return item<largest[0]
  })
  
  largest.unshift(largestFinder(newarr))

  return largest.reverse()
   
}

function largestFinder(arr){
    let largest=arr[0]
  for(let i=0;i<arr.length;i++){
    if(arr[i]>=largest)
    {
        largest=arr[i]
        
    }
    
     }
    
  // console.log(largest,typeof(largest))
  return largest
  
}

console.log(twoHighest([15, 20, 20, 17]))

// https://www.codewars.com/kata/55b42574ff091733d900002f
function friend(friends){

    newFriends=friends.filter((item)=>{
      return item.length===4
    }
      )
      
      return newFriends
      
    }
    
    console.log(friend(["Ryan", "Kieran", "Mark"]))


// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
    function findMultiples(integer, limit) {

        let list=[]
        for(let i=integer;i<=limit;i++){
            list.push(i)
            i=i+integer;
            i--
      
        }
        
        // return list.reverse()
        return list
    }


 // https://www.codewars.com/kata/5913152be0b295cf99000001 This question has been solved for test cases but on random test it failed !
    
const divisions = (n, divisor) => {
  
    count=0
    count=returnDivision(n,divisor)
    return count
      }
      
    const returnDivision=(n,divisor)=>{
      if(n>divisor){
        let val=Math.floor(n/divisor)
      count++
       
      if(val<divisor)
      {
        return count
      }
      else{
        
      return  returnDivision(val,divisor)
      
        
      }
    }
    else if (n==divisor){
      return 1
    }
    else{
      return 0
    }
      }
    
    console.log(divisions(6,6))
    console.log(divisions(100,2))
    console.log(divisions(2450,5))
    console.log(divisions(9999,3))
    console.log(divisions(2,3))
    console.log(divisions(5,5))
    console.log(divisions(21312231,4234))
    
// https://www.codewars.com/kata/54d1c59aba326343c80000e7

const solve = (x, y) => x/y

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str){
  strArr=str.split('')
   strArr.splice(0,1)
   strArr.splice(-1)
  return  strArr.join('')};
 
 
  // https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7
  
  function isOpposite(s1,s2){
    if(s1.length===s2.length && s1.length>0 && s2.length>0){
    for(let i=0;i<s1.length;i++){
     if( s1[i]===s2[i] ){
        return false
        break;
     }  
    }
    return true;
  }
  
  else{
    return false
  }
    
  }

  // https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
  function persistence(num) {
    count=0;
    return persistency(num)   
}
    
    function persistency(num){
      
    if(num.toString().length>1){
      
        numArr=num.toString().split('')
        val=numArr.reduce((accum,curr)=> accum*curr ) 
    
        count++
       if(val.toString().length !== 1 ){  
        return persistency(val) }
      else {
       return count    
      }
     
     
    }
    else {return 0}
    
    }

    // https://www.codewars.com/kata/5868812b15f0057e05000001
    function tailSwap(arr){
      resultArr=[]
      return tailSwaps(arr)  
      }
      function tailSwaps(arr) {
         let arr1=[]
        arr.forEach((item,i)=>{
          
          // console.log(item.split(':')[0])
              // console.log(item.split(':')[1])
              arr1.push(item.split(':')[0])
              arr1.push(item.split(':')[1])
        })
        resultArr.push(arr1[0]+":"+arr1[3])
        resultArr.push(arr1[2]+":"+arr1[1])
        return resultArr
      }


// https://www.codewars.com/kata/62c93765cef6f10030dfa92b

function solution(start, finish,step=0) 
{ 
  
    while(start!=finish){
    if((start+3)>finish)
  {
      start=start+1;
      step++
  }else{
      start=start+3
      step++
}


}
return step
}


console.log(solution(1,5))

//https://www.codewars.com/kata/58845748bd5733f1b300001f

function rangeBitCount(a, b,resultArray=[]) {
  if(b!==1){
    
    for(let i=a;i<=b;i++){
      resultArray.push(binaryConvertion(i))
      } 
      return countOnes(resultArray)

  }else{
    return  1
  }  

}


const binaryConvertion=(num,binaryDigit=[])=>
    {
      if(num!==0){
        while(num!=1){

          num%2===0 ? binaryDigit.unshift(0) : binaryDigit.unshift(1)
          num=Math.floor(num/2)
          
      }
         binaryDigit.unshift(1)
         return binaryDigit.join('')
      }
     else{
      binaryDigit.unshift(0)
      return binaryDigit.join('')
     }
        
    }


const countOnes=(resultArray)=>{
let count=0;
resultArray.forEach((item)=>{
  for(let i=0;i<item.length;i++){
    if(item[i]==1){
      count++
    }
  }
})
return count

}
// https://www.codewars.com/kata/58640340b3a675d9a70000b9
var removeVowels = function(str){

  strArr=str.split('')
  
  newArr=strArr.filter((item)=>{
  return item!='a' &&  item!='e' &&  item!='i' &&  item!='o'&&  item!='u'  
  })
  return newArr.join('')
  
  }
  // https://www.codewars.com/kata/55968ab32cf633c3f8000008
  function initials(n){
    val=n;
    valArr=val.split(" ")
    initialsArr=valArr.map((item,i)=>{
      if(i<valArr.length-1){
        
        return item.slice(0,1).toUpperCase()
      }
      else{
        return item.slice(0,1).toUpperCase()+item.slice(1)
      }
    })
    
    return initialsArr.join('.')
    }
    

// https://www.codewars.com/kata/54ff3102c1bad923760001f3
    function getCount(str,count=0) {
  
      str.split('').forEach((item)=>{
        if(item=='a' || item=='e' || item=='i' || item=='o' || item=='u' ){
          count++
      }
      })
      return count
    }
    

// https://www.codewars.com/kata/52b757663a95b11b3d00062d
    function toWeirdCase(string,newArr=[],new2arr=[],strArr=[],newStr=[]){
 
      if (string.includes(" ")){
         strArr=string.split(' ')
      // console.log(strArr)
      strArr.map((item)=>{
      
      newArr.push(item.split('').map((alpha,i)=>  i%2===0 ?  alpha.toUpperCase() :  alpha.toLowerCase()))  
      
        
      })
      
      newArr.map((each)=>{
         new2arr.push(each.join(''))
      })
    
      return new2arr.join(' ')
      }
      else{
      strArr=string.split('')
      newStr=strArr.map((alpha,i)=>   i%2===0 ?  alpha.toUpperCase() :  alpha.toLowerCase() )
      
      return newStr.join('')
      }
    }


// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(arr)
{
  arr=arr.join('')
  first=arr.charCodeAt(0)
  for(let i=0;i<arr.length;i++){
    
  if(first===arr.charCodeAt(i)){
     first++
    
  }else{
    
        break;
  }
  
}
  
  return String.fromCharCode(first);
}



//https://www.codewars.com/kata/60cc93db4ab0ae0026761232/train/javascript failed on random test on server load errror (time complexity)
function arrange(s) {

  t=[]
  console.log(s)  
  return recArrange(s)
  
  }
  
  function recArrange(s){
    if(s.length===1){
        let add=s.pop()
       t.push(add)
    
  }else if(s.length>1){
    let add=s.shift()
    t.push(add)
    add=s.pop()
    t.push(add)
    s.reverse()
    recArrange(s)
  
  }else{
    return t
  }
  
    
    return t
  }
  
  // https://www.codewars.com/kata/5b1b27c8f60e99a467000041/train/javascript   failed on random test
  function anagramDifference(w1,w2,count=0){
    w1=w1.split('')
    w2=w2.split('')
     l1=w1.length;
     l2=w2.length;
     
     if(l1<l2)  
     { for(let i=0;i<l1;i++){
        for(let j=0;j<l2;j++){
            if(w1[i]===w2[j]){
                count++
                w2.pop(j)
                j--
                break;
            }
        }
     }
     }else
     {
        for(let i=0;i<l2;i++){
            for(let j=0;j<l1;j++){
                if(w2[i]===w1[j]){
                    count++
                    w1.pop(j)
                    j--
                    break;
                }
            }
         }

     }

     count=(l1-count)+(l2-count)
     return count
 }

// https://www.codewars.com/kata/5a58ca28e626c55ae000018a
function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  r=circleRadius;
  n=numberOfSides;
 // console.log(Math.sin((2*Math.PI)/n))
 console.log((r*r*n))
 let ans= (n/2) * (r*r) * Math.sin((2*Math.PI)/n) 
 
 ans=ans.toFixed(3)
 return parseFloat(ans)
 
}


// https://www.codewars.com/kata/57ea70aa5500adfe8a000110
function foldArray(array, runs,resArr=[])
{
  
  if(runs===0){
    return array
  }
  else{
    
  arrayRev=array.slice().reverse()
  if(array.length%2===0)
  
  {for(let i=0;i<array.length/2;i++){
    resArr.push(array[i]+arrayRev[i])
  }}
  else
  { let till=Math.ceil(array.length/2)
    for(let i=0;i<till;i++){
     
      i+1===till ? resArr.push(array[i]) : resArr.push(array[i]+arrayRev[i])
      
      
    }}
  
  
  // console.log(resArr,runs)
  return foldArray(resArr,runs-1);
  }
  return resArr

}

// https://www.codewars.com/kata/5a58ca28e626c55ae000018a
function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  r=circleRadius;
  n=numberOfSides;
 // console.log(Math.sin((2*Math.PI)/n))
 console.log((r*r*n))
 let ans= (n/2) * (r*r) * Math.sin((2*Math.PI)/n) 
 
 ans=ans.toFixed(3)
 return parseFloat(ans)
 
}


// https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target,arr=[],newArr=[]) {
  for(let i=0;i<numbers.length;i++){
    for(j=0;j<numbers.length;j++){
      if(numbers[i]+numbers[j]===target && i!==j)
      {
        arr.push(i)
        arr.push(j)
       // console.log(arr)
        
      }
    }
    
  }
  
  newArr.push(arr[0])
  newArr.push(arr[1])
  return newArr
 }


//  https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number,sum=0)
{
  
if(number<0){
return  0
}
else{
  
  for(let i=0;i<number;i++){
    if(i%3===0 || i%5===0){
        
        sum=sum+i}
     }
return sum 
  }

  
}

// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
sum=0
function zeros (n) {
  if(n>=5){
    n=Math.floor(n/5)
    sum=sum+n
    zeros(n)
  }else{
    final=sum
    sum=0
    return final
  }
  
  return final   
}

// https://www.codewars.com/kata/525c65e51bf619685c000059
function cakes(recipe, available,numArr=[]) {
  
  recKey=Object.keys(recipe)
  availableKey=Object.keys(available)
if(recKey.length>availableKey.length){
  return 0
}else{
  
   for(key in recKey)
    {
      numArr.push(Math.floor(available[recKey[key]]/recipe[recKey[key]]))
      
    }

   return Math.min(...numArr)
}
 
}

// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001
function validISBN10(isbn) {
 
  resArr=[]
  isbnArr=isbn.split('')
  
  
  if(isbnArr.length!==10){
    return false
  }else{
      
      if(isbnArr[9]=='X'){
        isbnArr[9]=10;
      } 
  for(let i=0;i<10;i++){
   resArr.push(isbnArr[i]*(i+1))   
  }
   sum=resArr.reduce((acc,curr)=>{
     return acc+curr
   })
   if(sum%11===0){
     return true
   }else {
     return false
   }}}
 
 console.log(validISBN10("1112223339"))


 //https://www.codewars.com/kata/52597aa56021e91c93000cb0
 function moveZeros(arr) {
  count=0
  zeroArr=[]
    newArr=arr.filter((item)=>{
    if(typeof(item)=="boolean"){
      item=item.toString()
    }  
    if(item===null){
     return "null" 
    }
    if(item===0){
        zeroArr.push(0)       
      }else{
      return item   
        
      }
    })
  
      
    
    return newArr.concat(zeroArr)
  }

  // https://www.codewars.com/kata/54a91a4883a7de5d7800009c
  function incrementString (strng) 
{
number=0
const match = /[A-Z]/gi.exec(strng.split('').reverse().join(''));
if((match && match.index)==null)
{
   l=strng.length
  strng++
  return strng.toString().padStart(l,0)
}
else{
  
const till= strng.length-(match && match.index )
 

chunk=strng.slice(0,till)
number=strng.slice(till)

l=number.length
number++
number=number.toString().padStart(l,0)


}
  return chunk+number
  
  
}

// https://www.codewars.com/kata/526dbd6c8c0eb53254000110

function alphanumeric(str){
    
  if(str.length===0) return false 
  
  for(let i=0;i<str.length;i++){
    if(str[i]=="_" || str[i]==" " || str[i]=="" || str[i]==="!" || str[i]==="\n" || str[i]===")" || str[i]==="("   ){
      return false
      break;
    }
  }
    return true
  
  }
  