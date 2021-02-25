

let fs = require('fs');
fs.writeFile("./demo1.txt",'niubi',(err)=>{
  if(err){
    console.log('错误',err)
  }else {
    console.log('成功')
  }
})