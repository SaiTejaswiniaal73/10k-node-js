// const obj=require("./mo)
// function sample(){
//     console.log("hello i am main module")
// }
// module.exports={sample:sample}

// function sample2(){
//     console.log("hello i amsample2 module")
// }
// module.exports={sample2:sample2}

// console.log("i am module 1")

function studeninfo() {
  console.log("hello student");
  return "hi";
}
var x = "tejasiwni";
module.exports = { fun1: studeninfo, x: x };
