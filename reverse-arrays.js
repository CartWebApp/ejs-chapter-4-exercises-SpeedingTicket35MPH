function reverseArray(arr) {
  let reverse=[];
   for(let i = arr.length -1; i >=0; i--){
    reverse.push(arr[i]);
   }
   return reverse;

}

function reverseArrayInPlace(arr) {




}
let arrayValue = [1, 2, 3, 4, 5];
arrayValue = reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(reverseArray(['A','B','C']))

for(let i = arr.length /2; i >=0; i--)