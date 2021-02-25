let fs= require('fs')

/*
  fs.createReadStream(path,[,option],callback)
    option:
        --fd
        --mode
        --autoClose
        --emitClose
        --start :起始偏移量
        --end：结束偏移量
        --highWaterMark:每次读取数据的大小 默认值是是64kb 64*1024
 */
let rs=fs.createReadStream(__dirname+'/demo1.txt')
let ws=fs.createWriteStream('../demo2.txt')
rs.on('open',function(){
  console.log('可读流打开')
})
rs.on('close',function(){
  console.log('可读流关闭')
  ws.close();
})
ws.on('open',function(){
  console.log('可写流打开')
})
ws.on('close',function(){
  console.log('可写流关闭')
})


rs.on("data", function(data){
  //Buffer实例的length属性 是表示该Buffer实例占用内存空间的大小
  console.log(data.length)//65536 64KB
  ws.write(data);
  // ws.close()//只能写一次
})
// ws.close();//若再次关闭 无法写入
