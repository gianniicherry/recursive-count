function recursiveCount(num = 0) {
  // type your code here
  if (num >= 10) {
    return;
  } 

  recursiveCount(num + 1)
  console.log(num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
