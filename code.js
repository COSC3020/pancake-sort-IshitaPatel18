// The replit autofill did help guide me on the structure of this code

// The flip function will flip the desired number of elements by slicing 
// that part of the array and reversing it. Then it will be concatenated with 
// the rest of the array.
function flip(arr, n) 
{
  let swap = arr.slice(0, n);
  let other = arr.slice(n, arr.length);
  swap.reverse();
  arr = swap.concat(other);
  return arr;
}

// The findMaxIndex will find the max index by going through the 
// unsorted part of the array and deciding what element is the largest, 
// and noting it's index. 
function findMaxIndex(arr, size) 
{
  let maxIndex = 0;
  for (let i = 0; i < size; i++) 
  {
    if (arr[i] > arr[maxIndex]) 
    {
      maxIndex = i;
    }
  }
  return maxIndex;
}

// The pancakeSort function will combine the functions above by iterating
// through the array and making sure the current largest element in the 
// unsorted section moves to the back for each section until the array is sorted.
function pancakeSort(arr) 
{
  for (let i = arr.length; i > 0; i--) 
  {
    let maxIndex = findMaxIndex(arr, i);
    if (maxIndex != i - 1) 
    {
      arr = flip(arr, maxIndex + 1);
      arr = flip(arr, i);
    }
  }
  return arr;
}
