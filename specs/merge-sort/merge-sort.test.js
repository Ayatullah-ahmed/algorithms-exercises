/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  const middle = Math.floor(nums.length /2)
  const leftArr = nums.slice(0, middle);
  const rightArr = nums.slice(middle);
  if(nums.length < 2)
  {
    return nums;
  }
  return mergeStitch(mergeSort(leftArr) ,  mergeSort(rightArr))
  

};
const mergeStitch = (leftArr,rightArr) =>{
  let sortedArr=[];
  const length = leftArr.length + rightArr.length;
  let j = 0;
  let k =0;
  while( j <leftArr.length && k < rightArr.length ){
    if(leftArr[j] <= rightArr[k])
    {
      sortedArr.push(leftArr[j])
      j++;
    }
    else{
      sortedArr.push(rightArr[k])
      k++;
    }
  }

  return sortedArr.concat(leftArr.slice(j)).concat(rightArr.slice(k));
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
