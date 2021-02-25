
let fs=require('fs');

fs.readFile(__dirname+'/1.mp4',function (err,data) {
  if(err){
    console.log('读取失败')
  }else {
    console.log(data);
  }
  fs.writeFile('../haojiahuo.mp4',data,function (err) {
  if (err){
    console.log('写入失败')
  }else {
    console.log('写入成功')
  }
  })

})