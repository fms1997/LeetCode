// Te dan un array nums ordenado (puede tener negativos). 
// Tenés que devolver otro array con los cuadrados de cada número, también ordenado.
nums = [-4, -1, 0, 3, 10]

16,100

function sortedSquares(nums) {
  const n = nums.length;
  const res = new Array(n);
  let l = 0, r = n - 1;

  for (let i = n - 1; i >= 0; i--) {
    const leftSq = nums[l] * nums[l];
    const rightSq = nums[r] * nums[r];

    if (leftSq > rightSq) {
      res[i] = leftSq;
      l++;
    } else {
      res[i] = rightSq;
      r--;
    }
  }
  return res;
}
