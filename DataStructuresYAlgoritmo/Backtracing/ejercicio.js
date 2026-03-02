function backtrack(nums) {
  let result = [];

  function dfs(start, current) {
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);   // probar
      dfs(i + 1, current);     // explorar
      current.pop();           // backtrack (volver atrás)
    }
  }

  dfs(0, []);
  return result;
}

console.log(backtrack([1,2]));