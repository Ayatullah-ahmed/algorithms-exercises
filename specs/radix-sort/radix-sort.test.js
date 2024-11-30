/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
function getDigit(number, place, longestNumber) {
  let stringNumber = String(number); 
  let digitIndex = stringNumber.length - 1 - place; 
  if (digitIndex >= 0) {
      return Number(stringNumber[digitIndex]);
  } else {
      return 0;
  }
}

function getLongestNumber(nums){
  let stringNumbers = nums.map(num => String(num))
  let longestNUmber = stringNumbers[0].length
  for( let i = 0 ; i <stringNumbers.length ; i++ ){
      if(stringNumbers[i].length > longestNUmber)
      {
          longestNUmber = stringNumbers[i].length
      }
  }
  return longestNUmber
}

function radixSort(nums)
{
    let longestNUmber = getLongestNumber(nums)
    for( let i =0 ; i <longestNUmber ; i++){
        let buckets =Array.from({length : 10},() => [])
        while(nums.length){
            let num = nums.shift()
            buckets[getDigit(num,i,longestNUmber)].push(num)
        }
        for(let j = 0 ; j<buckets.length; j++){
            while(buckets[j].length)
            {
                nums.push(buckets[j].shift())

            }
        }
    }
    
    return nums
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
